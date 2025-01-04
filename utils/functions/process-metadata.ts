import type { Metadata } from 'next';

import { BASE_URL, vercelPreview } from '@/sanity/env';
import { processUrl } from '@/sanity/lib/url';
import { getSiteData } from '@/sanity/utils/get-site-data';

export default async function processMetadata(page: Sanity.Page | Sanity.BlogPost): Promise<Metadata> {
  const site = await getSiteData();

  const url = processUrl(page);
  const { title, description, ogimage, noIndex } = page.metadata;

  return {
    metadataBase: new URL(BASE_URL!),
    title,
    description,
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      images: ogimage ?? site.ogimage,
    },
    robots: {
      index: noIndex || vercelPreview ? false : undefined,
    },
    alternates: {
      canonical: url,
      types: {
        'application/rss+xml': '/blog/rss.xml',
      },
    },
  };
}
