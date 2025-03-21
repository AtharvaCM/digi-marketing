import { escapeHTML, toHTML } from '@portabletext/to-html';
import { Feed } from 'feed';
import { groq } from 'next-sanity';

import { BASE_URL } from '@/sanity/env';
import { sanityFetch } from '@/sanity/lib/fetch';
import { urlFor } from '@/sanity/lib/image';
import { processUrl } from '@/sanity/lib/url';

export async function GET() {
  const { blog, posts, copyright } = await sanityFetch<{
    blog: Sanity.Page;
    posts: Array<Sanity.BlogPost & { image?: string }>;
    copyright: string;
  }>({
    query: groq`{
			'blog': *[_type == 'page' && metadata.slug.current == 'blog'][0]{
				_type,
				title,
				metadata,
				'image': metadata.image.asset->url
			},
			'posts': *[_type == 'blog.post']{
				_type,
				body,
				publishDate,
				metadata
			},
			'copyright': pt::text(*[_type == 'site'][0].copyright)
		}`,
    tags: ['blog-rss'],
  });

  if (!blog || !posts) {
    return new Response('Missing either a blog page or blog posts in Sanity Studio', { status: 500 });
  }

  const url = processUrl(blog);

  const feed = new Feed({
    title: blog?.title ?? blog.metadata.title,
    description: blog.metadata.description,
    link: url,
    id: url,
    copyright,
    favicon: BASE_URL + 'favicon.ico',
    language: 'en',
    generator: 'https://github.com/nuotsu/sanitypress',
  });

  posts.forEach((post) =>
    feed.addItem({
      title: post.metadata?.title ? escapeHTML(post.metadata.title) : escapeHTML(post.title ?? 'Untitled'),
      description: post.metadata.description,
      id: processUrl(post),
      link: processUrl(post),
      date: new Date(post.publishDate),
      content: toHTML(post.body, {
        components: {
          types: {
            image: ({ value }) => {
              const img = `<img src="${urlFor(value).url()}" alt="${value.alt}" />`;
              const figcaption = value.caption && `<figcaption>${value.caption}</figcaption>`;
              const source = value.source && `<a href="${value.source}">(Source)</a>`;

              return `<figure>${[img, figcaption, source].filter(Boolean).join(' ')}</figure>`;
            },
            code: ({ value }) => `<pre><code>${escapeHTML(value.code)}</code></pre>`,
          },
        },
      }),
      image: post.image,
    }),
  );

  return new Response(feed.atom1(), {
    headers: {
      'Content-Type': 'application/atom+xml',
    },
  });
}
