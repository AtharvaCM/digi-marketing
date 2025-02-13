/* eslint-disable @typescript-eslint/no-explicit-any */
import { stegaClean } from '@sanity/client/stega';

import { cn } from '@/lib/utils';

import Content from './Content';
import TableOfContents from './TableOfContents';

export default function RichtextModule({
  content,
  tableOfContents,
  tocPosition = 'right',
  headings,
}: Readonly<
  Partial<{
    content: any;
    tableOfContents: boolean;
    tocPosition: 'left' | 'right';
    headings: {
      readonly _key: string;
      style: string;
      text: string;
    }[];
  }>
>) {
  const tocRight = tableOfContents && stegaClean(tocPosition) === 'right';

  return (
    <section className={cn('section grid gap-8', tocRight ? 'lg:grid-cols-[1fr_auto]' : 'lg:grid-cols-[auto_1fr]')}>
      {tableOfContents && (
        <aside
          className={cn(
            'lg:sticky-below-header mx-auto w-full max-w-lg self-start [--offset:1rem] lg:w-[250px]',
            tocRight && 'lg:order-last',
          )}
        >
          <TableOfContents headings={headings} />
        </aside>
      )}

      <Content value={content} className="max-w-(--breakpoint-lg)" />
    </section>
  );
}
