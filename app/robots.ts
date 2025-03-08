import { MetadataRoute } from 'next';

import { BASE_URL, PROD_BASE_URL } from '@/utils/constants';

export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' && PROD_BASE_URL !== BASE_URL;

  if (isPreview) {
    // If in a preview environment, disallow all
    // so that bots won't index the preview enviromnent pages.
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: '', // Omit the sitemap as well
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/',
    },
    sitemap: `${PROD_BASE_URL}/sitemap.xml`,
  };
}
