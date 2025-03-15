import { groq } from 'next-sanity';

import { cn } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/fetch';

import Filter from './Filter';
import css from './Filtering.module.css';

export default async function Filtering({ predefinedFilters }: Readonly<{ predefinedFilters?: Sanity.BlogCategory[] }>) {
  const categories = await sanityFetch<Sanity.BlogCategory[]>({
    query: groq`*[
			_type == 'blog.category' &&
			count(*[_type == 'blog.post' && references(^._id)]) > 0
		]|order(title)`,
    params: {},
    tags: ['categories'],
  });

  const filtered = categories?.filter(
    (category) => !predefinedFilters?.length || predefinedFilters.some((filter) => filter._id === category._id),
  );

  return (
    <fieldset>
      <legend className="sr-only">Filter by category</legend>

      <div className={cn(css.list, 'filtering group flex flex-wrap gap-1 max-sm:justify-center')}>
        <Filter label="All" />
        {filtered?.map((category) => <Filter label={category.title} value={category._id} key={category._id} />)}
      </div>
    </fieldset>
  );
}
