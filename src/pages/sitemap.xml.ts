import type { APIRoute } from 'astro';
import { locales, pages, route } from '../data/profile';
export const GET: APIRoute = ({ site }) => new Response(
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${locales.flatMap(lang => pages.map(page => `<url><loc>${new URL(route(lang, page), site)}</loc></url>`)).join('')}</urlset>`,
  { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
);
