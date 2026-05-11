import { MetadataRoute } from 'next';

const locales = ['en', 'pl'];
const baseUrl = 'https://adrian-stanciu.vercel.app';
const pages = ['', 'biography', 'news-press', 'media', 'duo', 'contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  pages.forEach((page) => {
    locales.forEach((locale) => {
      const path = page === '' ? `/${locale}` : `/${locale}/${page}`;
      sitemapEntries.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}