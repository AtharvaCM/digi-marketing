import DateComp from '@/components/common/date-comp';
import { cn } from '@/lib/utils';
import uid from '@/sanity/lib/uid';

import Content from '../RichtextModule/Content';
import TableOfContents from '../RichtextModule/TableOfContents';
import Author from './Author';
import Categories from './Categories';
import css from './PostContent.module.css';
import ReadTime from './ReadTime';

export default function PostContent({ post, ...props }: Readonly<{ post?: Sanity.BlogPost } & Sanity.Module>) {
  if (!post) return null;

  const showTOC = !post.hideTableOfContents || !!post.headings?.length;

  return (
    <article id={uid(props)} className="max-w-screen-xl mx-auto">
      <header className="mx-auto py-8 max-md:px-4 space-y-6 mt-[var(--header-height)]">
        <h1 className="h1">{post.metadata.title}</h1>
        <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-2">
          <Author className="flex flex-wrap items-center justify-start gap-4" author={post.author} />
          <DateComp value={post.publishDate} />
          <ReadTime value={post.readTime} />
          <Categories className="flex flex-wrap gap-x-2" categories={post.categories} />
        </div>
      </header>

      <div className={cn('section pt-0 grid gap-8', showTOC && 'lg:grid-cols-[1fr,auto]')}>
        {showTOC && (
          <aside className="lg:sticky-below-header mx-auto w-full max-w-lg self-start [--offset:1rem] lg:order-1 lg:w-[250px]">
            <TableOfContents headings={post.headings} />
          </aside>
        )}

        <Content value={post.body} heroImage={post.heroImage} className={cn(css.body, 'grid max-w-[800px]')}>
          <hr />
        </Content>
      </div>
    </article>
  );
}
