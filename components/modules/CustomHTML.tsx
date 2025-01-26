'use client';
import { stegaClean } from '@sanity/client/stega';
import { useEffect, useRef, useState } from 'react';

import uid from '@/sanity/lib/uid';

export default function CustomHTML({
  className,
  html,
  ...props
}: Readonly<
  Partial<
    Sanity.Module & {
      className: string;
      html: {
        code: string;
      };
    }
  >
>) {
  const ref = useRef<HTMLElement>(null);
  const [firstRender, setFirstRender] = useState(true);

  // if includes <script> tag, ensure script is re-run on each render
  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else if (html) {
      const parsed = document.createRange().createContextualFragment(stegaClean(html.code));

      ref.current?.appendChild(parsed);
    }
  }, [html?.code, firstRender, html]);

  if (!html?.code) return null;

  if (!html.code.includes('<script'))
    return <section id={uid(props)} className={stegaClean(className)} dangerouslySetInnerHTML={{ __html: stegaClean(html.code) }} />;

  return <section ref={ref} id={uid(props)} className={stegaClean(className)} />;
}
