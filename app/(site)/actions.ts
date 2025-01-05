import { groq } from 'next-sanity';

import { sanityFetch } from '@/sanity/lib/fetch';
import { modulesQuery } from '@/sanity/lib/queries';

export async function getPage() {
  const page = await sanityFetch<Sanity.Page>({
    query: groq`*[_type == 'page' && metadata.slug.current == 'index'][0]{
      ...,
      modules[]{ ${modulesQuery} },
      metadata {
        title,
        description,
        keywords,
        applicationName,
        referrer,
        canonical,
        authors[] {
          name,
          "url": authorUrl
        },
        openGraph {
          title,
          description,
          type,
          "url": canonical,
          siteName,
          images[] {
            "url": image.asset->url + '?w=1200',
            width,
            height,
            alt
          }
        }
      }
    }`,
    params: {},
    tags: ['homepage'],
  });

  if (!page) throw new Error('Missing "page" document with metadata.slug "index" in Sanity Studio');

  return page;
}
