/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from 'next-sanity';

import CTAList from '../common/cta-list';

export default function Callout({
  content,
  ctas,
}: Readonly<
  Partial<{
    content: any;
    ctas: Sanity.CTA[];
  }>
>) {
  return (
    <section className="section">
      <div className="section bg-accent/5 grid max-w-screen-lg items-center gap-12 gap-y-6 rounded md:grid-cols-[2fr,1fr]">
        <div className="richtext">
          <PortableText value={content} />
        </div>

        <CTAList ctas={ctas} />
      </div>
    </section>
  );
}
