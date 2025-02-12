/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react';
import { stegaClean } from '@sanity/client/stega';
import { groq } from 'next-sanity';
import { Suspense } from 'react';

import Pretitle from '@/components/common/pretitle';
import { cn } from '@/lib/utils';
import { fetchSanity } from '@/sanity/lib/fetch';

import PostPreview from '../PostPreview';
import FilterList from './FilterList';
import List from './List';

export default async function BlogList({
  pretitle,
  intro,
  layout,
  limit,
  showFeaturedPostsFirst,
  displayFilters,
  filteredCategory,
}: Readonly<
  Partial<{
    pretitle: string;
    intro: any;
    layout: 'grid' | 'carousel';
    limit: number;
    showFeaturedPostsFirst: boolean;
    displayFilters: boolean;
    filteredCategory: Sanity.BlogCategory;
  }>
>) {
  const posts = await fetchSanity<Sanity.BlogPost[]>({
    query: groq`
      *[
				_type == 'blog.post'
				${filteredCategory ? `&& $filteredCategory in categories[]->._id` : ''}
			]|order(
				${showFeaturedPostsFirst ? 'featured desc, ' : ''}
				publishDate desc
			)
			${limit ? `[0...${limit}]` : ''}
			{
				...,
				categories[]->,
				authors[]->
			}
		`,
    params: {
      filteredCategory: filteredCategory?._id ?? '',
      limit: limit ?? 0,
    },
    tags: ['posts'],
  });

  const listClassName = cn(
    'items-stretch gap-x-8 gap-y-12',
    stegaClean(layout) === 'grid'
      ? 'grid md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'
      : 'carousel max-xl:full-bleed md:overflow-fade-r pb-4 [--size:320px] max-xl:px-4',
  );

  return (
    <section className="section space-y-8">
      {intro && (
        <header className="richtext">
          <Pretitle>{pretitle}</Pretitle>
          <PortableText value={intro} />
        </header>
      )}

      {displayFilters && !filteredCategory && <FilterList />}

      <Suspense
        fallback={
          <ul className={listClassName}>
            {Array.from({ length: limit ?? 6 }).map((_, i) => (
              <li key={i}>
                <PostPreview skeleton />
              </li>
            ))}
          </ul>
        }
      >
        <List posts={posts} className={listClassName} />
      </Suspense>
    </section>
  );
}
