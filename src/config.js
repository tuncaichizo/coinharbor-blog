export const SITE_URL = 'https://coinharbor.blog';
export const SITE_NAME = 'CoinHarbor';

/** @typedef {'en' | 'id' | 'tl'} Lang */

export const DEFAULT_LANG = 'en';
/** @type {Lang[]} */
export const LANGS = ['en', 'id', 'tl'];

/** @type {Record<Lang, string>} */
export const LANG_LABELS = {
  en: 'English',
  id: 'Bahasa Indonesia',
  tl: 'Tagalog',
};

// Path prefix for a given language. Default language (en) has no prefix
// and is also the x-default hreflang target.
export function langPrefix(lang) {
  return lang === DEFAULT_LANG ? '' : `/${lang}`;
}

export function pathFor(lang, path) {
  const prefix = langPrefix(lang);
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${prefix}${cleanPath}`;
}

export function absoluteUrl(path) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}
