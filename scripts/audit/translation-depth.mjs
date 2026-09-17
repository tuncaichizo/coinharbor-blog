import { copy } from '../../src/data/copy.js';
import { ui } from '../../src/i18n/ui.js';
import { DEFAULT_LANG, LANGS } from '../../src/config.js';
import { fail, ok, exitWithStatus } from './_util.mjs';

// Minimum length ratio vs. the source language, per target language.
// Dense scripts legitimately say the same thing in far fewer characters,
// so they get a lower bar. Latin-alphabet languages default to 0.6.
const DENSITY_COEFFICIENT = {
  zh: 0.36,
  ko: 0.53,
  ar: 0.84,
};
const DEFAULT_MIN_RATIO = 0.6;

function minRatioFor(lang) {
  return DENSITY_COEFFICIENT[lang] ?? DEFAULT_MIN_RATIO;
}

let checked = 0;

function checkField(label, sourceText, targetText, lang) {
  if (!targetText) {
    fail(`${label} (${lang}): missing translation`);
    return;
  }
  const ratio = targetText.length / sourceText.length;
  const minRatio = minRatioFor(lang);
  if (ratio < minRatio) {
    fail(
      `${label} (${lang}): ${targetText.length} chars vs. ${sourceText.length} in ${DEFAULT_LANG} (ratio ${ratio.toFixed(2)} < min ${minRatio})`
    );
  }
  checked++;
}

const targetLangs = LANGS.filter((l) => l !== DEFAULT_LANG);

// Exchange guide/fees copy.
for (const slug of Object.keys(copy[DEFAULT_LANG])) {
  const source = copy[DEFAULT_LANG][slug];
  for (const lang of targetLangs) {
    const target = copy[lang][slug];
    for (const field of ['guideTitle', 'guideDescription', 'h1', 'registerHeading', 'registerBody', 'accessHeading', 'accessBody', 'feesTitle', 'feesDescription', 'feesH1', 'feesIntro', 'ctaLabel', 'notAffiliateNote']) {
      checkField(`copy.${slug}.${field}`, source[field], target?.[field], lang);
    }
    checkField(`copy.${slug}.intro[0]`, source.intro[0], target?.intro?.[0], lang);
  }
}

// Shared UI strings.
const uiSource = ui[DEFAULT_LANG];
for (const lang of targetLangs) {
  const target = ui[lang];
  for (const field of Object.keys(uiSource)) {
    checkField(`ui.${field}`, uiSource[field], target[field], lang);
  }
}

ok(`Translation depth checked on ${checked} field/language pairs.`);
exitWithStatus();
