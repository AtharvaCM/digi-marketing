import { PortableText, stegaClean } from 'next-sanity';
import { Suspense } from 'react';

import CTAList from '@/components/common/cta-list';
import Pretitle from '@/components/common/pretitle';
import moduleProps from '@/lib/moduleProps';

import SearchForm from './SearchForm';
import type { SearchScope } from './store';
export default function SearchModule({
  pretitle,
  intro,
  ctas,
  scope,
  path,
  ...props
}: Partial<{
  pretitle: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intro: any;
  ctas: Sanity.CTA[];
  scope: SearchScope;
  path: string;
}>) {
  return (
    <section className="section space-y-8" {...moduleProps(props)}>
      {(pretitle || intro) && (
        <header className="richtext text-center">
          <Pretitle>{pretitle}</Pretitle>
          <PortableText value={intro} />
        </header>
      )}

      <div className="mx-auto max-w-(--breakpoint-sm)">
        <Suspense fallback={<div className="skeleton-[calc(1lh+.5rem+2px)]" />}>
          <SearchForm scope={stegaClean(scope)} path={stegaClean(path)} />
        </Suspense>
      </div>

      <CTAList className="justify-center" ctas={ctas} />
    </section>
  );
}
