/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react';
import { Text } from '@radix-ui/themes';
import { stegaClean } from '@sanity/client/stega';
import { groq } from 'next-sanity';

import Img from '@/components/common/Img';
import { cn } from '@/lib/utils';
import { fetchSanity } from '@/sanity/lib/fetch';

import css from './logo-list.module.scss';

export default async function LogoList({
  pretitle,
  intro,
  logos,
  logoType = 'default',
  autoScroll,
}: Readonly<
  Partial<{
    pretitle: string;
    intro: any;
    logos: Sanity.Logo[];
    logoType: 'default' | 'light' | 'dark';
    autoScroll?: boolean;
  }>
>) {
  const allLogos = logos ?? (await fetchSanity<Sanity.Logo[]>({ query: groq`*[_type == 'logo']` }));

  return (
    <section className="section space-y-8">
      {(pretitle || intro) && (
        <header className="richtext mx-auto max-w-(--breakpoint-sm) text-balance text-center text-foreground">
          <Text as="div" weight={'bold'} size={{ initial: '8' }}>
            {stegaClean(pretitle)}
          </Text>
          <PortableText value={intro} />
        </header>
      )}

      <figure
        className={cn(
          'mx-auto flex items-center gap-y-8 pb-4',
          autoScroll ? `${css.track} overflow-fade max-w-max overflow-hidden` : 'flex-wrap justify-center gap-x-4',
        )}
        style={
          {
            '--count': allLogos?.length,
          } as React.CSSProperties
        }
      >
        {allLogos.map((logo, key) => (
          <Img
            className=" w-[200px] shrink-0 object-contain max-sm:w-[150px]"
            style={{ '--index': key } as React.CSSProperties}
            image={logo.image?.[logoType]}
            imageWidth={400}
            key={logo._id}
            alt={logo.name}
          />
        ))}
      </figure>
    </section>
  );
}
