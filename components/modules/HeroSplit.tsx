/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react';

import { cn } from '@/lib/utils';

import CTAList from '../common/cta-list';
import Img from '../common/Img';
import Pretitle from '../common/pretitle';
import Reputation from '../common/reputation';

export default function HeroSplit({
  pretitle,
  content,
  ctas,
  reputation,
  image,
}: Readonly<
  Partial<{
    pretitle: string;
    content: any;
    ctas: Sanity.CTA[];
    reputation: Sanity.Reputation;
    image: Sanity.Image & {
      onRight?: boolean;
      onBottom?: boolean;
    };
  }>
>) {
  return (
    <section className="section grid items-center gap-8 md:grid-cols-2 md:gap-x-12">
      <figure className={cn('max-md:full-bleed', image?.onRight && 'md:order-1', image?.onBottom && 'max-md:order-last')}>
        {' '}
        <Img image={image} imageWidth={1200} />
      </figure>

      <div className="richtext mx-auto w-full max-w-lg [&_:is(h1,h2)]:text-balance">
        <Pretitle>{pretitle}</Pretitle>
        <PortableText value={content} />
        <Reputation className="!mt-4" reputation={reputation} />
        <CTAList ctas={ctas} className="!mt-4" />
      </div>
    </section>
  );
}
