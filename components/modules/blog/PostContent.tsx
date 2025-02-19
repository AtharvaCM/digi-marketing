import DateComp from '@/components/common/date-comp';
import Img from '@/components/common/Img';
import SocialShare from '@/components/common/social-share';
import { cn } from '@/lib/utils';
import uid from '@/sanity/lib/uid';

import Content from '../RichtextModule/Content';
import TableOfContents from '../RichtextModule/TableOfContents';
import Author from './Author';
// import Categories from './Categories';
import css from './PostContent.module.css';
import ReadTime from './ReadTime';

export default function PostContent({ post, ...props }: Readonly<{ post?: Sanity.BlogPost } & Sanity.Module>) {
  if (!post) return null;

  const showTOC = !post.hideTableOfContents || !!post.headings?.length;
  const bgColor = post.backgroundColor;

  return (
    // <article id={uid(props)} className="mt-[var(--header-height)]">
    <article id={uid(props)}>
      <header className="mx-auto pt-16 md:pt-36 max-md:px-4 overflow-hidden relative" style={{ backgroundColor: bgColor }}>
        <div className="max-w-[710px] mx-auto space-y-2 mb-2">
          <h1 className="h2 font-bold text-center text-white mb-4">{post.metadata.title}</h1>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <DateComp value={post.publishDate} />
            <ReadTime value={post.readTime} />
            {/* <Categories className="flex flex-wrap gap-x-2" categories={post.categories} /> */}
          </div>

          <div className="flex justify-between mx-1">
            <Author className="flex flex-wrap items-center justify-start gap-4" author={post.author} />
            <SocialShare title={post.metadata.title} />
          </div>
        </div>
        {/* Image container */}
        <figure className={cn(css.headerImg, 'max-w-[710px] mx-auto relative rounded-xl')}>
          <picture>
            <Img image={post.heroImage} className="aspect-video object-cover rounded-xl relative" />
          </picture>
        </figure>
      </header>

      <div className={cn('max-w-screen-xl mx-auto section grid gap-8', showTOC && 'xl:grid-cols-[auto,1fr]')}>
        {showTOC && (
          <aside className="xl:sticky-below-header mx-auto w-full max-w-lg self-start [--offset:1rem] xl:w-[250px]">
            <TableOfContents headings={post.headings} />
          </aside>
        )}

        <Content value={post.body} className={cn(css.body, 'grid max-w-[710px] mx-auto xl:mx-0')}>
          <hr />
        </Content>
      </div>
    </article>
  );
}
