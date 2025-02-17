import { PortableText } from 'next-sanity';
import { ImQuotesLeft } from 'react-icons/im';

import Img from '@/components/common/Img';

export default function TestimonialFeatured({
  testimonial,
}: Readonly<
  Partial<{
    testimonial: Sanity.Testimonial;
  }>
>) {
  if (!testimonial) return null;

  const { author } = testimonial;

  return (
    <section className="section">
      <div className="section flex max-w-screen-md items-center gap-x-12 gap-y-6 rounded bg-accent/5 max-sm:flex-col">
        <div className="space-y-2">
          <ImQuotesLeft className="inline-block shrink-0 text-4xl text-accent" />

          <div className="self-center text-balance text-xl">
            <PortableText value={testimonial.content} />
          </div>

          <dl className="text-left">
            <dt>{author?.name}</dt>

            {author?.title && <dd className="text-balance text-sm">{author?.title}</dd>}
          </dl>
        </div>

        <Img
          className="max-w-[200px] shrink-0 rounded"
          image={author?.image}
          imageWidth={400}
          alt={[author?.name, author?.title].filter(Boolean).join(', ') || 'Author'}
        />
      </div>
    </section>
  );
}
