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
    // 1) Filter by category and author
    if (category !== 'All' && author) {
      return (
        post.author &&
        // Check if the main or sub category _id matches
        (post.category?._id === category || post.subcategory?._id === category)
      );
    }

    // 2) Filter by category or subcategory only
    if (category !== 'All') {
      return post.category?._id === category || post.subcategory?._id === category;
    }

    // 3) Filter by author only
    if (author) {
      return post.author;
      // You could do something more specific like post.author?._id === author
    }

    // 4) No filters -> return all
    return true;
  });
}
