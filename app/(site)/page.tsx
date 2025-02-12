import { NextPage } from 'next';
import { groq } from 'next-sanity';

import Modules from '@/components/modules';
import { fetchSanity } from '@/sanity/lib/fetch';
import { METADATA_QUERY, MODULES_QUERY } from '@/sanity/lib/queries';
import processMetadata from '@/utils/functions/process-metadata';

export async function generateMetadata() {
  const page = await getPage();
  return processMetadata(page);
}

const Page: NextPage = async () => {
  const page = await getPage();

  return <Modules modules={page?.modules} />;
};

export default Page;

async function getPage() {
  const page = await fetchSanity<Sanity.Page>({
    query: groq`*[_type == 'page' && metadata.slug.current == 'index'][0]{
      ...,
      'modules': (
				// global modules (before)
				*[_type == 'global-module' && path == '*'].before[]{ ${MODULES_QUERY} }
				// page modules
				+ modules[]{ ${MODULES_QUERY} }
				// global modules (after)
				+ *[_type == 'global-module' && path == '*'].after[]{ ${MODULES_QUERY} }
			),
      ${METADATA_QUERY}
    }`,
    params: {},
    tags: ['homepage'],
  });

  if (!page) throw new Error('Missing "page" document with metadata.slug "index" in Sanity Studio');

  return page;
}
