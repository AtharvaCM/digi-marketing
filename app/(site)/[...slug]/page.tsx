import { notFound } from 'next/navigation';
import { groq } from 'next-sanity';

import Modules from '@/components/modules';
import { client } from '@/sanity/lib/client';
import { fetchSanity } from '@/sanity/lib/fetch';
import { MODULES_QUERY } from '@/sanity/lib/queries';
import processMetadata from '@/utils/functions/process-metadata';

export default async function Page({ params }: Readonly<Props>) {
  const page = await getPage(await params);
  if (!page) notFound();
  return <Modules modules={page?.modules} page={page} />;
}

export async function generateMetadata({ params }: Props) {
  const page = await getPage(await params);
  if (!page) notFound();
  return processMetadata(page);
}

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(
    groq`*[
			_type == 'page' &&
			defined(metadata.slug.current) &&
			!(metadata.slug.current in ['index'])
		].metadata.slug.current`,
  );

  return slugs.map((slug) => ({ slug: slug.split('/') }));
}

async function getPage(params: { slug?: string[] }) {
  const slug = params.slug?.join('/');

  return await fetchSanity<Sanity.Page>({
    query: groq`*[
			_type == 'page' &&
			metadata.slug.current == $slug &&
			!(metadata.slug.current in ['index'])
		][0]{
			...,
			'modules': (
				// global modules (before)
				*[_type == 'global-module' && path == '*'].before[]{ ${MODULES_QUERY} }
				// path modules (before)
				+ *[_type == 'global-module' && path != '*' && ($slug + '/*' != path && $slug match path) && !($slug in excludePaths)].before[]{ ${MODULES_QUERY} }
				// page modules
				+ modules[]{ ${MODULES_QUERY} }
				// path modules (after)
				+ *[_type == 'global-module' && path != '*' && ($slug + '/*' != path && $slug match path) && !($slug in excludePaths)].after[]{ ${MODULES_QUERY} }
				// global modules (after)
				+ *[_type == 'global-module' && path == '*'].after[]{ ${MODULES_QUERY} }
			),
			metadata {
				...,
				'ogimage': image.asset->url + '?w=1200'
			}
		}`,

    params: { slug },
    tags: ['pages'],
  });
}

type Props = {
  params: Promise<{ slug?: string[] }>;
};
