/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react';
import { stegaClean } from '@sanity/client/stega';
import { groq } from 'next-sanity';

import { cn } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/fetch';

import Filtering from './Filtering';
import List from './List';

export default async function BlogList({
  intro,
  layout,
  limit = 100,
  displayFilters,
  predefinedFilters,
}: Readonly<
  Partial<{
    intro: any;
    layout: 'grid' | 'carousel';
    limit: number;
    displayFilters: boolean;
    predefinedFilters: Sanity.BlogCategory[];
  }>
>) {
  const posts = await sanityFetch<Sanity.BlogPost[]>({
    query: groq`*[_type == 'blog.post']|order(featured desc, publishDate desc)[0...$limit]{
			...,
			categories[]->
		}`,
    params: { limit },
    tags: ['posts'],
  });

  return (
    <section className="section space-y-8">
      {intro && (
        <header className="richtext">
          <PortableText value={intro} />
        </header>
      )}

      {displayFilters && <Filtering predefinedFilters={predefinedFilters} />}

      <List
        posts={posts}
        predefinedFilters={predefinedFilters}
        className={cn(
          'gap-x-6 gap-y-12',
          stegaClean(layout) === 'grid'
            ? 'grid md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'
            : 'carousel max-xl:full-bleed md:overflow-fade-r pb-4 [--size:320px] max-xl:px-4',
        )}
      />
    </section>
  );
}
