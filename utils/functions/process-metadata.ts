import type { Metadata } from 'next';

import { BASE_URL, vercelPreview } from '@/sanity/env';
import { processUrl } from '@/sanity/lib/url';
import { getSiteData } from '@/sanity/utils/get-site-data';

export default async function processMetadata(page: Sanity.Page | Sanity.BlogPost): Promise<Metadata> {
  const site = await getSiteData();

  // Extract metadata fields with defaults/fallbacks
  const { title, description, keywords = [], canonical, authors = [], openGraph: pageOg = {}, noIndex, ogimage } = page.metadata;

  const url = processUrl(page);
  const referrer = (page.metadata.referrer as Metadata['referrer']) ?? 'origin-when-cross-origin';

  return {
    metadataBase: new URL(BASE_URL!),
    title,
    description,
    keywords,
    referrer,
    alternates: {
      canonical: canonical ?? url,
      types: {
        'application/rss+xml': '/blog/rss.xml',
      },
    },
    robots: {
      index: noIndex || vercelPreview ? false : undefined,
    },
    authors: authors?.map((author) => ({
      name: author.name,
      url: author.url ?? undefined,
    })),
    openGraph: {
      type: pageOg?.type ?? 'website',
      url: canonical ?? url,
      title: pageOg?.title ?? title,
      description: pageOg?.description ?? description,
      siteName: pageOg?.siteName ?? site.title ?? 'Growth Stats',
      images: ogimage ?? site.ogimage,
    },
  };
}
