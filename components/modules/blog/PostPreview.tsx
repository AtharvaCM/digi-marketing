import Link from 'next/link';

import DateComp from '@/components/common/date-comp';
import Img from '@/components/common/Img';
import { processUrl } from '@/sanity/lib/url';

import Categories from './Categories';

export default function PostPreview({ post }: Readonly<{ post: Sanity.BlogPost }>) {
  return (
    <Link className="group block space-y-2" href={processUrl(post, { base: false })}>
      <figure className="relative aspect-video overflow-hidden bg-gray-500">
        <Img
          className="aspect-video w-full object-cover transition-[filter,transform] group-hover:scale-105 group-hover:brightness-110"
          image={post.metadata.image}
          imageWidth={800}
          alt={post.metadata.title}
        />

        {post.featured && <span className="action absolute right-4 top-0 rounded-t-none py-1 text-xs shadow-md">Featured</span>}
      </figure>

      <div className="h3 group-hover:underline">{post.metadata.title}</div>

      <div className="flex flex-wrap gap-x-4">
        <DateComp value={post.publishDate} />
        <Categories className="flex flex-wrap gap-x-2" categories={post.categories} />
      </div>
    </Link>
  );
}
