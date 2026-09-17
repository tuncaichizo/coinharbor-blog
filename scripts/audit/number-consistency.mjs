import { exchanges } from '../../src/data/exchanges.js';
import { copy } from '../../src/data/copy.js';
import { LANGS } from '../../src/config.js';
import { fail, ok, exitWithStatus } from './_util.mjs';

const NUMBER_RE = /\d+(?:[.,]\d+)?%/g;

function numbersIn(strings) {
  const set = new Set();
  for (const s of strings) {
    const matches = s.match(NUMBER_RE) || [];
    for (const m of matches) set.add(m.replace(',', '.'));
  }
  return set;
}

function setsEqual(a, b) {
  if (a.size !== b.size) return false;
  for (const v of a) if (!b.has(v)) return false;
  return true;
}

let checked = 0;

for (const exchange of exchanges) {
  const perLang = {};
  for (const lang of LANGS) {
    const c = copy[lang][exchange.slug];
    if (!c) {
      fail(`${exchange.slug}/${lang}: missing copy entry`);
      continue;
    }
    perLang[lang] = numbersIn([...c.intro, c.registerBody, c.accessBody, c.feesIntro]);
  }

  const base = perLang[LANGS[0]];
  for (const lang of LANGS.slice(1)) {
    if (!setsEqual(base, perLang[lang])) {
      fail(
        `${exchange.slug}: percentage numbers differ between ${LANGS[0]} [${[...base].join(', ')}] and ${lang} [${[...perLang[lang]].join(', ')}]`
      );
    }
  }
  checked++;
}

// Fee tables themselves are rendered from the single exchanges.js source for every
// language, so they can't drift by construction — nothing further to check there.

ok(`Number consistency checked across ${checked} exchanges × ${LANGS.length} languages.`);
exitWithStatus();
