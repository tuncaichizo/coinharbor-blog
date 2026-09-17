import type { APIRoute } from 'astro';
import { SITE_URL, SITE_NAME, LANGS, langPrefix } from '../config';
import { exchanges } from '../data/exchanges';

export const GET: APIRoute = () => {
  const lines: string[] = [];
  lines.push(`# ${SITE_NAME}`);
  lines.push('');
  lines.push(
    'Independent, sourced guides to second-tier crypto exchanges (outside the top 6): what each exchange is, its real fees, which countries it serves, and what happens when you sign up. Every fee is cited to the exchange’s own page with the date it was checked.'
  );
  lines.push('');
  lines.push('## Languages');
  lines.push(LANGS.join(', '));
  lines.push('');
  lines.push('## Pages');
  for (const lang of LANGS) {
    for (const exchange of exchanges) {
      lines.push(`- ${SITE_URL}${langPrefix(lang)}/${exchange.slug}/ (${exchange.name}, ${lang})`);
      lines.push(`- ${SITE_URL}${langPrefix(lang)}/${exchange.slug}/fees/ (${exchange.name} fees, ${lang})`);
    }
  }
  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
