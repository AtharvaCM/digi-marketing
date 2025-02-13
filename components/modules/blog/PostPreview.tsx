import Link from 'next/link';

import DateComp from '@/components/common/date-comp';
import Img from '@/components/common/Img';
import resolveUrl from '@/lib/resolveUrl';

import Author from './Author';
import Categories from './Categories';

export default function PostPreview({ post, skeleton }: { post?: Sanity.BlogPost; skeleton?: boolean }) {
  if (!post && !skeleton) return null;

  const Root = skeleton ? 'div' : Link;

  return (
    <Root className="group flex h-full flex-col space-y-2" href={resolveUrl(post, { base: false })}>
      <figure className="bg-ink/3 relative aspect-video overflow-hidden">
        <Img
          className="aspect-video w-full object-cover transition-all group-hover:scale-105 group-hover:brightness-110"
          image={post?.metadata.image}
          width={700}
          alt={post?.metadata.title}
        />

        {post?.featured && <span className="action absolute top-0 right-4 rounded-t-none py-1 text-xs shadow-md">Featured</span>}
      </figure>

      <div className="h4 empty:skeleton-2 group-hover:underline">{post?.metadata.title}</div>

      <div className="grow">
        <p className="line-clamp-3 text-sm empty:h-[3lh]">{post?.metadata.description}</p>
      </div>

      {(post?.author || skeleton) && (
        <Author className="flex flex-wrap items-center gap-4 text-sm" author={post?.author} skeleton={skeleton} />
      )}

      <hr />

      <div className="empty:skeleton flex flex-wrap gap-x-4 text-sm">
        <DateComp value={post?.publishDate ?? ''} />
        <Categories className="flex flex-wrap gap-x-2" categories={post?.categories} />
      </div>
    </Root>
  );
}
