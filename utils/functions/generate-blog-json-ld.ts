import { BlogPosting, WithContext } from 'schema-dts';

import { urlFor } from '@/sanity/lib/image';

import { BASE_URL } from '../constants';

export function generateBlogJsonLd(post: Sanity.BlogPost): WithContext<BlogPosting> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.metadata.slug.current}`,
    },
    headline: post.metadata.title ?? '',
    description: post.metadata.description ?? '',
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      '@type': 'Person',
      name: post.author?.name ?? 'Unknown',
      image: post.author?.image ? urlFor(post.author.image).url() : undefined,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Growth Stats',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
    },
    image: urlFor(post.heroImage).url() ?? undefined,
    url: `${BASE_URL}/blog/${post.metadata.slug.current}`,
    isPartOf: {
      '@type': 'Blog',
      name: 'Growth Stats Blog',
      url: `${BASE_URL}/blog`,
    },
  };
}
