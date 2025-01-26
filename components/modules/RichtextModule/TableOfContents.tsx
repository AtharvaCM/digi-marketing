'use client';

import { useEffect } from 'react';

import { cn, slug } from '@/lib/utils';

import css from './TableOfContents.module.css';

type Heading = {
  readonly _key: string;
  text: string;
  style: string;
};

export default function TableOfContents({
  headings,
}: Readonly<{
  headings?: Heading[];
}>) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const headerHeight = document.querySelector('body > header')?.clientHeight ?? 0;

    headings?.forEach(({ text }) => {
      const target = document.getElementById(slug(text));
      if (!target) return;

      const observer = createObserver(slug(text), headerHeight);
      observer.observe(target);

      return () => observer.disconnect();
    });
  }, [headings]);

  return (
    <details className="accordion max-lg:bg-neutral-100 max-lg:p-3" open>
      <summary className="font-bold">Table of Contents</summary>
      <TableOfContentsList headings={headings} />
    </details>
  );
}

function createObserver(textSlug: string, headerHeight: number) {
  return new IntersectionObserver((entries) => handleIntersect(entries, textSlug), {
    rootMargin: `-${headerHeight}px 0px 0px 0px`,
  });
}

function handleIntersect(entries: IntersectionObserverEntry[], textSlug: string) {
  entries.forEach((entry) => {
    const tocItem = document.querySelector(`[data-toc-item="${textSlug}"]`);
    if (entry.isIntersecting) {
      tocItem?.classList.add(css.inView);
    } else {
      tocItem?.classList.remove(css.inView);
    }
  });
}

function TableOfContentsList({ headings }: Readonly<{ headings?: Heading[] }>) {
  return (
    <ol className="anim-fade-to-b mt-2 leading-tight">
      {headings?.map(({ text, style, _key }) => <TableOfContentsItem key={_key} text={text} style={style} />)}
    </ol>
  );
}

function TableOfContentsItem({ text, style }: Readonly<{ text: string; style: string }>) {
  return (
    <li className="border-l transition-all" data-toc-item={slug(text)}>
      <a
        className={cn(
          'block py-1 hover:underline',
          style == 'h2' && 'pl-4',
          style == 'h3' && 'pl-6',
          style == 'h4' && 'pl-8',
          style == 'h5' && 'pl-10',
          style == 'h6' && 'pl-12',
        )}
        href={`#${slug(text)}`}
      >
        {text}
      </a>
    </li>
  );
}
