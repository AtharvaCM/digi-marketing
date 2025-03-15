import type { ComponentProps } from 'react';

import CustomHTML from '../CustomHTML';

export type CustomHTMLSubmoduleType = Sanity.Module<'custom-html'> & ComponentProps<typeof CustomHTML>;

export default function CustomHTMLSubmodule({ module }: Readonly<{ module: CustomHTMLSubmoduleType }>) {
  return <CustomHTML html={module?.html} />;
}
