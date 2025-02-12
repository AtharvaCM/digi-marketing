import { notFound } from 'next/navigation';
import { groq } from 'next-sanity';

import Modules from '@/components/modules';
import { client } from '@/sanity/lib/client';
import { fetchSanity } from '@/sanity/lib/fetch';
import { modulesQuery } from '@/sanity/lib/queries';
import processMetadata from '@/utils/functions/process-metadata';

export default async function Page({ params }: Readonly<Props>) {
  const post = await getPost(params);

  if (!post) notFound();
  return <Modules modules={post?.modules} post={post} />;
}

export async function generateMetadata({ params }: Props) {
  const post = await getPost(params);
  if (!post) notFound();
  return processMetadata(post);
}

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(groq`*[_type == 'blog.post' && defined(metadata.slug.current)].metadata.slug.current`);

  return slugs.map((slug) => ({ slug }));
}

async function getPost(params: Props['params']) {
  const blogTemplateExists = await fetchSanity<boolean>({
    query: groq`count(*[_type == 'global-module' && path == 'blog/*']) > 0`,
  });

  if (!blogTemplateExists)
    throw Error(
      'Missing blog template: 👻 Oof, your blog posts are ghosting...\n\n' +
        'Solution: Add a new Global module document in your Sanity Studio with the path "blog/*".\n' +
        'Also add the Blog post content module to display blog post content.\n\n' +
        '💁‍♂️ https://sanitypress.dev/docs/errors#missing-blog-template',
    );

  return await fetchSanity<Sanity.BlogPost & { modules: Sanity.Module[] }>({
    query: groq`*[_type == 'blog.post' && metadata.slug.current == $slug][0]{
			...,
      body[]{
				...,
				_type == 'image' => { asset-> }
			},
			'readTime': length(string::split(pt::text(body), ' ')) / 200,
			'headings': body[style in ['h2', 'h3']]{
				style,
				'text': pt::text(@)
			},
			categories[]-> {
        title,
        slug
      },
      authors[]->,
			metadata {
				...,
				'ogimage': image.asset->url + '?w=1200'
			},
      'modules': (
			// global modules (before)
			*[_type == 'global-module' && path == '*'].before[]{ ${modulesQuery} }
			// path modules (before)
			+ *[_type == 'global-module' && path == 'blog/*'].before[]{ ${modulesQuery} }
			// path modules (after)
			+ *[_type == 'global-module' && path == 'blog/*'].after[]{ ${modulesQuery} }
			// global modules (after)
			+ *[_type == 'global-module' && path == '*'].after[]{ ${modulesQuery} }
			)
		}`,
    params,
    tags: ['blog.post'],
  });
}

type Props = {
  params: { slug?: string; lang: string };
};
