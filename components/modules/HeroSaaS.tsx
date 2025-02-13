/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react';

import { cn } from '@/lib/utils';

import CTAList from '../common/cta-list';
import Img from '../common/Img';
import Pretitle from '../common/pretitle';
import Reputation from '../common/reputation';

export default function HeroSaaS({
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
      faded?: boolean;
    };
  }>
>) {
  return (
    <section className="section space-y-8 text-center">
      <div className="richtext mx-auto max-w-2xl text-balance">
        <Pretitle>{pretitle}</Pretitle>
        <PortableText value={content} />
        <Reputation className="mt-4! justify-center" reputation={reputation} />
        <CTAList ctas={ctas} className="mt-8! justify-center" />
      </div>

      <Img
        image={image}
        className={cn(
          'anim-fade-to-t [animation-duration:1s]',
          image?.faded && '[mask-image:linear-gradient(to_bottom,#000_50%,transparent)]',
        )}
        draggable={false}
      />
    </section>
  );
}
