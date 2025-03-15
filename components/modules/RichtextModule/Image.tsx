import { stegaClean } from '@sanity/client/stega';
import { UseNextSanityImageOptions } from 'next-sanity-image';

import Img from '@/components/common/Img';
import { cn } from '@/lib/utils';

export default function Image({
  className,
  options,
  value,
}: Readonly<{
  value?: Sanity.Image & {
    caption?: string;
    source?: string;
    float?: 'left' | 'right';
  };
  className?: string;
  options?: UseNextSanityImageOptions;
}>) {
  if (!value) return null;
  return (
    <figure
      className={cn('max-lg:full-bleed !mb-4 !mt-8 space-y-2 text-center md:![grid-column:bleed]', className)}
      style={{ float: stegaClean(value.float) }}
    >
      <Img className="mx-auto max-h-svh w-auto bg-neutral-100 text-[0px]" image={value} imageWidth={1500} options={options} />

      {value.caption && (
        <figcaption className="text-balance px-4 text-sm italic text-neutral-500">
          {value.caption}

          {value.source && (
            <>
              {' ('}
              <a href={value.source} className="image-source link">
                Source
              </a>
              {')'}
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}
