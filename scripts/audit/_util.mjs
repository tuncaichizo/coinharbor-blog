import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const DIST_DIR = fileURLToPath(new URL('../../dist/', import.meta.url));

export function walkHtmlFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      out.push(...walkHtmlFiles(full));
    } else if (entry.endsWith('.html')) {
      out.push(full);
    }
  }
  return out;
}

export function readHtml(path) {
  return readFileSync(path, 'utf-8');
}

export function extractTitle(html) {
  const m = html.match(/<title>([\s\S]*?)<\/title>/i);
  return m ? m[1].trim() : null;
}

export function extractMetaDescription(html) {
  const m = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  return m ? m[1].trim() : null;
}

export function extractCanonical(html) {
  const m = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
  return m ? m[1].trim() : null;
}

export function extractHreflangs(html) {
  const re = /<link\s+rel="alternate"\s+hreflang="([^"]*)"\s+href="([^"]*)"/gi;
  const out = [];
  let m;
  while ((m = re.exec(html))) {
    out.push({ hreflang: m[1], href: m[2] });
  }
  return out;
}

export function hasNoindex(html) {
  return /<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html);
}

let cachedFail = false;
export function fail(message) {
  cachedFail = true;
  console.error(`❌ ${message}`);
}

export function warn(message) {
  console.warn(`⚠️  ${message}`);
}

export function ok(message) {
  console.log(`✓ ${message}`);
}

export function exitWithStatus() {
  if (cachedFail) process.exit(1);
}
