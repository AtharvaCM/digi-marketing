/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react';
import { stegaClean } from '@sanity/client/stega';

export default function StatList({
  intro,
  stats,
  textAlign = 'center',
}: Readonly<
  Partial<{
    intro: any;
    stats: {
      readonly _key: string;
      value: string;
      subValue?: string;
      text: string;
    }[];
    textAlign: React.CSSProperties['textAlign'];
  }>
>) {
  return (
    <section className="section space-y-8" style={{ textAlign: stegaClean(textAlign) }}>
      {intro && (
        <header className="richtext text-center">
          <PortableText value={intro} />
        </header>
      )}

      <dl className="mx-auto flex items-start justify-center gap-x-12 gap-y-6 max-md:max-w-max max-md:flex-col">
        {stats?.map((stat) => (
          <div className="w-full max-w-[250px] space-y-2" key={stat._key}>
            <dt className="font-bold">
              <span className="text-gradient text-6xl">{stat.value}</span>
              {stat.subValue && <small className="text-xl text-gray-500">{stat.subValue}</small>}
            </dt>
            <dd className="text-balance font-bold">{stat.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
