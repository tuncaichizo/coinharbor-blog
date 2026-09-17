// Best-effort check that the fee numbers we publish still appear on the
// exchange's own source page. Network access varies by environment (some
// exchange domains block scripted requests), so this script warns rather
// than fails the build — read the output, don't just check its exit code.
import { exchanges } from '../../src/data/exchanges.js';
import { warn, ok } from './_util.mjs';

const TIMEOUT_MS = 10_000;

async function fetchText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CoinHarborAudit/1.0)' },
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

let uncheckable = 0;
let mismatches = 0;

const isFeeSource = (source) =>
  (/fee/i.test(source.label) || /fee/i.test(source.url)) && !/withdraw/i.test(source.label);

for (const exchange of exchanges) {
  const feeSources = exchange.sources.filter(isFeeSource);
  const otherSources = exchange.sources.filter((s) => !isFeeSource(s));

  for (const source of otherSources) {
    // Not a fee page — just confirm it's still reachable, don't check numbers against it.
    const text = await fetchText(source.url);
    if (text === null) {
      warn(`${exchange.slug}: could not fetch ${source.url} from this environment — verify manually before publishing.`);
      uncheckable++;
    }
  }

  if (feeSources.length === 0) {
    warn(`${exchange.slug}: no source is labeled as a fee page — fee numbers can't be spot-checked automatically.`);
    continue;
  }

  for (const source of feeSources) {
    const text = await fetchText(source.url);
    if (text === null) {
      warn(`${exchange.slug}: could not fetch ${source.url} from this environment — verify manually before publishing.`);
      uncheckable++;
      continue;
    }
    for (const row of exchange.feeRows) {
      if (!text.includes(row.maker) || !text.includes(row.taker)) {
        warn(`${exchange.slug}: "${row.label}" (${row.maker}/${row.taker}) not found verbatim in ${source.url} — re-check, the rate may have changed.`);
        mismatches++;
      }
    }
  }
}

ok(`Live-number check done. ${uncheckable} source(s) unreachable from here, ${mismatches} possible number mismatch(es). See warnings above.`);
