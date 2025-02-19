import { groq } from 'next-sanity';
import { Suspense } from 'react';

import { cn } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/fetch';

import Filter from './Filter';
import css from './FilterList.module.css';

export default async function FilterList() {
  const categories = await sanityFetch<Sanity.BlogCategory[]>({
    query: groq`*[
			_type == 'blog.category' &&
			count(*[_type == 'blog.post' && references(^._id)]) > 0
		]|order(title)`,
  });

  if (!categories) return null;

  return (
    <fieldset>
      <legend className="sr-only">Filter by category</legend>

      <div className={cn(css.list, 'filtering group flex flex-wrap gap-1 max-sm:justify-center')}>
        <Suspense>
          <Filter label="All" />

          {categories?.map((category) => (
            // This works if your FilterPosts checks post.category?._id
            <Filter label={category.title} value={category._id} key={category._id} />
          ))}
        </Suspense>
      </div>
    </fieldset>
  );
}
