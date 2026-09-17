import { existsSync } from 'node:fs';
import { DIST_DIR, walkHtmlFiles, readHtml, extractTitle, extractMetaDescription, fail, ok, exitWithStatus } from './_util.mjs';

const TITLE_MAX = 60;
const DESC_MAX = 155;

if (!existsSync(DIST_DIR)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

const files = walkHtmlFiles(DIST_DIR).filter((f) => !f.endsWith('404.html'));
let checked = 0;

for (const file of files) {
  const html = readHtml(file);
  const title = extractTitle(html);
  const desc = extractMetaDescription(html);
  const rel = file.replace(DIST_DIR, '');

  if (title === null) {
    fail(`${rel}: missing <title>`);
  } else if (title.length > TITLE_MAX) {
    fail(`${rel}: title is ${title.length} chars (max ${TITLE_MAX}): "${title}"`);
  }

  if (desc === null) {
    fail(`${rel}: missing meta description`);
  } else if (desc.length > DESC_MAX) {
    fail(`${rel}: description is ${desc.length} chars (max ${DESC_MAX}): "${desc}"`);
  }

  checked++;
}

ok(`SERP length checked on ${checked} rendered pages (title ≤ ${TITLE_MAX}, description ≤ ${DESC_MAX}).`);
exitWithStatus();
