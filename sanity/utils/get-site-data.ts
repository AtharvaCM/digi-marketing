import { client } from '@/sanity/lib/client';

import { GET_SITE } from '../lib/queries';

export async function getSiteData() {
  const site = await client.fetch(GET_SITE);

  if (!site)
    throw Error(
      'Missing Site settings: 🫠 Your website might be having an identity crisis...\n\n' +
        'Solution: Publish the Site document in your Sanity Studio.\n\n' +
        '💁‍♂️ https://sanitypress.dev/docs/errors#missing-site-settings',
    );

  return site;
}
