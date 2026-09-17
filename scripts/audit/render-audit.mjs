import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { SITE_URL } from '../../src/config.js';
import {
  DIST_DIR,
  walkHtmlFiles,
  readHtml,
  extractCanonical,
  extractHreflangs,
  hasNoindex,
  fail,
  warn,
  ok,
  exitWithStatus,
} from './_util.mjs';

if (!existsSync(DIST_DIR)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

function urlToPageUrl(file) {
  const rel = file.replace(DIST_DIR, '').replace(/\\/g, '/');
  const path = rel.replace(/index\.html$/, '').replace(/\.html$/, '/');
  return `${SITE_URL}/${path}`.replace(/\/{2,}$/, '/').replace(/([^:])\/\/+/, '$1/');
}

const files = walkHtmlFiles(DIST_DIR);
let checked = 0;

for (const file of files) {
  const html = readHtml(file);
  const rel = file.replace(DIST_DIR, '');
  const is404 = rel.endsWith('404.html');
  const pageUrl = urlToPageUrl(file);

  if (is404) {
    if (!hasNoindex(html)) fail(`${rel}: 404 page is missing <meta name="robots" content="noindex">`);
    continue;
  }

  if (hasNoindex(html)) {
    fail(`${rel}: unexpected noindex on a real content page`);
  }

  const canonical = extractCanonical(html);
  if (!canonical) {
    fail(`${rel}: missing canonical link`);
  } else if (canonical.replace(/\/$/, '') !== pageUrl.replace(/\/$/, '')) {
    fail(`${rel}: canonical (${canonical}) does not self-reference (expected ${pageUrl})`);
  }

  const hreflangs = extractHreflangs(html);
  const expected = new Set(['en', 'id', 'tl', 'x-default']);
  const present = new Set(hreflangs.map((h) => h.hreflang));
  for (const e of expected) {
    if (!present.has(e)) fail(`${rel}: missing hreflang="${e}"`);
  }

  checked++;
}

// Cross-check against the generated sitemap.
const sitemapPath = join(DIST_DIR, 'sitemap-0.xml');
if (existsSync(sitemapPath)) {
  const sitemapXml = readFileSync(sitemapPath, 'utf-8');
  const sitemapUrls = new Set([...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  const renderedUrls = new Set(files.filter((f) => !f.endsWith('404.html')).map(urlToPageUrl));

  for (const u of renderedUrls) {
    if (!sitemapUrls.has(u)) fail(`sitemap: ${u} was rendered but is missing from sitemap-0.xml`);
  }
  for (const u of sitemapUrls) {
    if (!renderedUrls.has(u)) fail(`sitemap: ${u} is listed but has no rendered page`);
  }
} else {
  warn('sitemap-0.xml not found — skipping sitemap cross-check.');
}

ok(`Render audit checked ${checked} content pages (canonical, hreflang, noindex, sitemap match).`);
exitWithStatus();
