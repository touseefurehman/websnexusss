import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/admin',
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
    ],
    sitemap: [
      'https://www.websnexus.com/sitemap.xml',
      'https://www.websnexus.com/en/sitemap.xml',
      'https://www.websnexus.com/es/sitemap.xml',
      'https://www.websnexus.com/fr/sitemap.xml',
      'https://www.websnexus.com/de/sitemap.xml',
    ],
  };
}
