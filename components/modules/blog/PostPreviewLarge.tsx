import Link from 'next/link';

import DateComp from '@/components/common/date-comp';
import Img from '@/components/common/Img';
import resolveUrl from '@/lib/resolveUrl';

import Author from './Author';
import Categories from './Categories';

export default function PostPreviewLarge({ post }: { post: Sanity.BlogPost }) {
  if (!post) return null;

  return (
    <Link className="group grid items-center gap-x-8 gap-y-4 md:grid-cols-2" href={resolveUrl(post, { base: false })}>
      <figure className="max-md:full-bleed bg-ink/5 relative aspect-video overflow-hidden md:self-start">
        <Img
          className="aspect-video w-full object-cover transition-all group-hover:scale-105 group-hover:brightness-110"
          image={post.metadata.image}
          width={800}
          alt={post.metadata.title}
          loading="eager"
        />

        {post.featured && <span className="action absolute top-0 right-4 rounded-t-none py-1 text-xs shadow-md">Featured</span>}
      </figure>

      <div className="mx-auto max-w-lg space-y-4">
        <h2 className="h2 md:h1 group-hover:underline">{post.metadata.title}</h2>

        <p className="line-clamp-4 max-md:text-sm">{post.metadata.description}</p>

        <div className="flex flex-wrap gap-x-4">
          <DateComp value={post.publishDate} />
          <Categories className="flex flex-wrap gap-x-2" categories={post.categories} />
        </div>

        {post.author && <Author className="flex flex-wrap items-center gap-4" author={post.author} />}
      </div>
    </Link>
  );
}
