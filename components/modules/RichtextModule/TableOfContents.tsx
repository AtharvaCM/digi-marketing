'use client';

import { useEffect, useRef } from 'react';

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
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // If there's no browser environment or no headings, exit
    if (!isBrowser() || !headings?.length) return;

    const headerHeight = document.querySelector('body > header')?.clientHeight ?? 0;

    // Create a single observer
    const observer = createObserver(headerHeight);

    // Attach observer to each heading
    headings.forEach(({ text }) => {
      const target = document.getElementById(slug(text));
      if (!target) return;
      target.setAttribute('data-heading-text', text); // For easy lookups later
      observer.observe(target);
    });

    observerRef.current = observer;

    return () => {
      // Disconnect on unmount
      observerRef.current?.disconnect();
    };
  }, [headings]);

  return (
    <details className="accordion p-3 max-lg:bg-neutral-100 max-lg:p-3" open>
      <summary className="font-bold">Table of Contents</summary>
      <TableOfContentsList headings={headings} />
    </details>
  );
}

/* ----------------------------------------
   Helper Functions
---------------------------------------- */

function isBrowser() {
  return typeof document !== 'undefined';
}

function createObserver(headerHeight: number) {
  return new IntersectionObserver(handleIntersections, {
    rootMargin: `-${headerHeight}px 0px -50% 0px`,
    threshold: 0,
  });
}

function handleIntersections(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 1) Remove highlight from all headings
      document.querySelectorAll(`.${css.inView}`).forEach((el) => el.classList.remove(css.inView));

      // 2) Highlight the newly intersecting heading
      const headingText = entry.target.getAttribute('data-heading-text');
      if (headingText) {
        const tocItem = document.querySelector(`[data-toc-item="${slug(headingText)}"]`);
        tocItem?.classList.add(css.inView);
      }
    }
  });
}

/* ----------------------------------------
   Sub-Components
---------------------------------------- */
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
          style === 'h2' && 'pl-4',
          style === 'h3' && 'pl-6',
          style === 'h4' && 'pl-8',
          style === 'h5' && 'pl-10',
          style === 'h6' && 'pl-12',
        )}
        href={`#${slug(text)}`}
      >
        {text}
      </a>
    </li>
  );
}
