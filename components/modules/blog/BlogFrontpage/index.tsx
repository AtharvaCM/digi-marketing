import { groq, stegaClean } from 'next-sanity';
import { Suspense } from 'react';

import { sanityFetch } from '@/sanity/lib/fetch';

import FilterList from '../BlogList/FilterList';
import PostPreview from '../PostPreview';
import PostPreviewLarge from '../PostPreviewLarge';
import Paginated from './Paginated';
import sortFeaturedPosts from './sortFeaturedPosts';

export default async function BlogFrontpage({
  mainPost,
  showFeaturedPostsFirst,
  itemsPerPage,
}: Readonly<
  Partial<{
    mainPost: 'recent' | 'featured';
    showFeaturedPostsFirst: boolean;
    itemsPerPage: number;
  }>
>) {
  const posts = await sanityFetch<Sanity.BlogPost[]>({
    query: groq`*[_type == 'blog.post']|order(publishDate desc){
			_type,
			_id,
			featured,
			metadata,
			categories[]->,
			authors[]->,
			publishDate,
		}`,
  });

  const [firstPost, ...otherPosts] = stegaClean(mainPost) === 'featured' ? sortFeaturedPosts(posts) : posts;

  return (
    <section className="section max-w-screen-2xl mx-auto space-y-12 px-8">
      <PostPreviewLarge post={firstPost} />

      <hr />

      <FilterList />

      <Suspense
        fallback={
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {Array.from({ length: itemsPerPage ?? 6 }).map((_, i) => (
              <li key={i}>
                <PostPreview skeleton />
              </li>
            ))}
          </ul>
        }
      >
        <Paginated posts={sortFeaturedPosts(otherPosts, showFeaturedPostsFirst)} itemsPerPage={itemsPerPage} />
      </Suspense>
    </section>
  );
}
