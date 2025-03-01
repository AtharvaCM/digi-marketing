import { BlogPosting, WithContext } from 'schema-dts';

import { BASE_URL } from '../constants';

export function generateBlogJsonLd(post: Sanity.BlogPost): WithContext<BlogPosting> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.metadata.slug.current}`,
    },
    headline: post.metadata.title,
    description: post.metadata.description ?? '',
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      '@type': 'Person',
      name: post.author?.name ?? 'Unknown',
      image: post.author?.image?.asset?._ref ?? undefined,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Growth Stats',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
    },
    image: post.heroImage?.asset?._ref ?? undefined,
    url: `${BASE_URL}/blog/${post.metadata.slug.current}`,
    isPartOf: {
      '@type': 'Blog',
      name: 'Growth Stats Blog',
      url: `${BASE_URL}/blog`,
    },
  };
}
