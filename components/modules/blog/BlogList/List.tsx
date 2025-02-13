'use client';

import PostPreview from '../PostPreview';
import { useBlogFilters } from '../store';

export default function List({
  posts,
  ...props
}: {
  posts: Sanity.BlogPost[];
} & React.ComponentProps<'ul'>) {
  const filtered = FilterPosts(posts);

  if (!filtered.length) {
    return <div>No posts found...</div>;
  }

  return (
    <ul {...props}>
      {filtered?.map((post) => (
        <li className="anim-fade" key={post._id}>
          <PostPreview post={post} />
        </li>
      ))}
    </ul>
  );
}

export function FilterPosts(posts: Sanity.BlogPost[]) {
  const { category, author } = useBlogFilters();

  return posts.filter((post) => {
    if (category !== 'All' && author) return post.author && post.categories?.some(({ slug }) => slug?.current === category);

    if (category !== 'All') return post.categories?.some(({ slug }) => slug?.current === category);

    if (author) return post.author;

    return true;
  });
}
