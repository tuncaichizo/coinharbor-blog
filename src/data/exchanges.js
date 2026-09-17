/**
 * @typedef {{ label: string, maker: string, taker: string }} FeeRow
 * @typedef {{ label: string, url: string }} SourceLink
 * @typedef {{
 *   slug: string,
 *   name: string,
 *   officialUrl: string,
 *   signupUrl: string,
 *   legalEntity?: string,
 *   jurisdiction?: string,
 *   feeRows: FeeRow[],
 *   feeNotes: string[],
 *   withdrawalFee: string,
 *   restrictedCountries?: string[],
 *   restrictedNote?: string,
 *   kyc: string,
 *   checkedDate: string,
 *   confidence: 'verified' | 'stale-source',
 *   sources: SourceLink[],
 *   affiliate: { hasCode: boolean, code?: string, url?: string },
 * }} Exchange
 */

/** @type {Exchange[]} */
export const exchanges = [
  {
    slug: 'gems-trade',
    name: 'Gems Trade',
    officialUrl: 'https://gems.trade',
    signupUrl: 'https://gems.trade',
    legalEntity: 'Gems Exchange Ltd.',
    jurisdiction: 'Anjouan, Union of Comoros (registration No. 16226)',
    feeRows: [
      { label: 'Standard user', maker: '0.40%', taker: '0.60%' },
      { label: 'Premium user', maker: '0.300%', taker: '0.450%' },
      { label: 'VIP 6 (Standard, $500M+/30d)', maker: '0.00%', taker: '0.15%' },
      { label: 'VIP 6 (Premium, $500M+/30d)', maker: '0.00%', taker: '0.113%' },
    ],
    feeNotes: [
      'Convert (instant swap) fee is 0%.',
      'Six VIP tiers (VIP 1–6) scale fees down based on trailing 30-day volume; Premium users get a 25% discount over Standard at every tier.',
    ],
    withdrawalFee: '$5 flat withdrawal fee (per Gems Trade’s published fee page)',
    kyc: 'Mandatory identity verification before any transaction: both sides of a government ID plus a selfie holding it. A politically-exposed-person (PEP) declaration may also be required.',
    restrictedNote:
      'Gems Trade’s terms are written for non-EEA customers — EEA residents are not served under this offering. No separate public country blocklist was found on gems.trade beyond standard sanctions-list exclusions (UN / US OFAC / EU).',
    checkedDate: '2026-09-18',
    confidence: 'verified',
    sources: [
      { label: 'gems.trade/tradingfees', url: 'https://gems.trade/tradingfees' },
      { label: 'gems.trade/term-condition', url: 'https://gems.trade/term-condition' },
    ],
    affiliate: { hasCode: false },
  },
  {
    slug: 'phemex',
    name: 'Phemex',
    officialUrl: 'https://phemex.com',
    signupUrl: 'https://phemex.com',
    feeRows: [{ label: 'Contract (perpetual) trading', maker: '0.01%', taker: '0.06%' }],
    feeNotes: [
      'Phemex’s own help article covers contract (perpetual futures) fees only. Its full, current fee schedule — including spot — is published at phemex.com/fees-conditions, which could not be re-verified for this data pull (see note below).',
    ],
    withdrawalFee: 'Varies per coin — published on Phemex’s own Fees & Conditions page.',
    kyc: 'Phemex applies withdrawal limits based on verification level; exact tiers are published on Phemex’s own site.',
    checkedDate: '2026-09-18',
    confidence: 'stale-source',
    sources: [
      {
        label: 'phemex.zendesk.com — How are Trading Fees Calculated?',
        url: 'https://phemex.zendesk.com/hc/en-us/articles/27668905305625-How-are-Trading-Fees-Calculated',
      },
      { label: 'phemex.com/fees-conditions (official, unverified this pull)', url: 'https://phemex.com/fees-conditions' },
    ],
    affiliate: { hasCode: false },
  },
  {
    slug: 'tapbit',
    name: 'Tapbit',
    officialUrl: 'https://www.tapbit.com',
    signupUrl: 'https://www.tapbit.com',
    legalEntity:
      'Registered as a Money Services Business (MSB) with FinCEN; applying for money-transmitter licenses in multiple US states.',
    feeRows: [
      { label: 'Spot — BTC/USDT, ETH/USDT', maker: '0%', taker: '0%' },
      { label: 'Spot — other pairs', maker: '0.1%', taker: '0.1%' },
      { label: 'Derivatives', maker: '0.02%', taker: '0.06%' },
    ],
    feeNotes: ['Deposits are free. Withdrawal fees vary per coin and per network.'],
    withdrawalFee: 'Example: USDT via the TRC20 (TRON) network costs 1 USDT, with a 5.2 USDT minimum withdrawal.',
    restrictedCountries: [
      'Albania', 'Algeria', 'Austria', 'Azerbaijan', 'Bangladesh', 'Bosnia and Herzegovina',
      'Chad', 'China', 'Cuba', 'Côte d’Ivoire', 'Croatia', 'Czech Republic',
      'DPRK (North Korea)', 'Ecuador', 'Egypt', 'France', 'Greece', 'Hungary', 'India',
      'Iran', 'Iraq', 'Morocco', 'Myanmar', 'Nepal', 'Nigeria', 'Norway', 'Oman',
      'Pakistan', 'Romania', 'Slovakia', 'Svalbard and Jan Mayen', 'Thailand', 'Tunisia',
      'Uganda', 'United States', 'Uruguay', 'Western Sahara', 'Yemen',
    ],
    restrictedNote:
      'List current as of Tapbit’s own "Location Restrictions" article, last updated roughly 2 months before this check. Tapbit says it may update this list without notice.',
    kyc: 'Standard identity verification is required to trade; exact tiers are published in Tapbit’s own help center.',
    checkedDate: '2026-09-18',
    confidence: 'verified',
    sources: [
      { label: 'Fees (Spot & Derivatives) — Tapbit Exchange', url: 'https://tapbitcex.zendesk.com/hc/en-us/articles/12198533844879' },
      { label: 'Tapbit Deposit & Withdrawal Fee', url: 'https://tapbitcex.zendesk.com/hc/en-us/articles/12198533849999-Tapbit-Deposit-Withdrawal-Fee' },
      { label: 'Location Restrictions — Tapbit Exchange', url: 'https://tapbitcex.zendesk.com/hc/en-us/articles/12197830391439-Location-Restrictions' },
      { label: 'Jurisdiction, regulations, licensing and practices — Tapbit Exchange', url: 'https://tapbitcex.zendesk.com/hc/en-us/articles/12197851945359-Jurisdiction-regulations-licensing-and-practices' },
    ],
    affiliate: { hasCode: false },
  },
];

export function getExchange(slug) {
  return exchanges.find((e) => e.slug === slug);
}
