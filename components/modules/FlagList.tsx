/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react';
import { stegaClean } from '@sanity/client/stega';

import { cn } from '@/lib/utils';

import Img from '../common/Img';

export default function FlagList({
  intro,
  items,
  iconSize = 40,
  iconPosition,
}: Readonly<
  Partial<{
    intro: any;
    items: {
      icon: Sanity.Image;
      content: any;
      _key: string;
    }[];
    iconSize: number;
    iconPosition: 'top' | 'left';
  }>
>) {
  return (
    <section className="section space-y-8">
      {intro && (
        <header className="richtext text-center">
          <PortableText value={intro} />
        </header>
      )}

      <div className="grid gap-x-12 gap-y-6 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {items?.map((item) => (
          <article className={cn('grid gap-4', stegaClean(iconPosition) === 'left' && 'grid-cols-[auto,1fr]')} key={item._key}>
            <figure>
              <Img image={item.icon} imageWidth={iconSize} style={{ maxHeight: iconSize }} />
            </figure>

            <div className="richtext">
              <PortableText value={item.content} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
