import { NextPage } from 'next';

import Modules from '@/components/modules';
import processMetadata from '@/utils/functions/process-metadata';

import { getPage } from './actions';

export async function generateMetadata() {
  const page = await getPage();
  return processMetadata(page);
}

const Page: NextPage = async () => {
  const page = await getPage();

  return <Modules modules={page?.modules} />;
};

export default Page;
