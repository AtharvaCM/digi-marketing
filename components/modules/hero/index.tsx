import { PortableText } from '@portabletext/react';
import { stegaClean } from '@sanity/client/stega';
import { TypedObject } from 'sanity';

import CTAList from '@/components/common/cta-list';
import Img, { Source } from '@/components/common/Img';
import Pretitle from '@/components/common/pretitle';
import { cn } from '@/lib/utils';

import styles from './hero.module.scss';
import HeroBgVideo from './HeroBgVideo';

interface HeroProps {
  pretitle?: string;
  content?: TypedObject[];
  ctas?: Sanity.CTA[];
  bgType?: 'image' | 'video';
  bgImage?: Sanity.Image;
  bgVideo?: Sanity.Video;
  bgVideoThumbnail?: Sanity.Image;
  bgImageMobile?: Sanity.Image;
  textAlign?: React.CSSProperties['textAlign'];
  alignItems?: React.CSSProperties['alignItems'];
}

export default async function Hero({
  pretitle,
  content,
  ctas,
  bgType = 'image',
  bgImage,
  bgVideo,
  bgVideoThumbnail,
  bgImageMobile,
  textAlign = 'center',
  alignItems,
}: Readonly<Partial<HeroProps>>) {
  const hasImage = !!bgImage?.asset;

  return (
    <section
      className={cn(
        (hasImage || bgType === 'video') && 'grid overflow-hidden bg-background text-background *:col-span-full *:row-span-full',
      )}
    >
      {bgType === 'image' && bgImage?.asset && (
        <picture className={cn(bgImage.overlay && styles['d-section__picture'])}>
          <Source image={bgImageMobile} imageWidth={1200} />
          <Img className="size-full object-cover" image={bgImage} imageWidth={1800} draggable={false} />
        </picture>
      )}

      {bgType === 'video' && <HeroBgVideo bgVideo={bgVideo} bgVideoThumbnail={bgVideoThumbnail} />}

      {content && (
        <div className="section flex w-full flex-col z-10">
          <div
            className={cn(
              'richtext relative isolate max-w-xl [&_:is(h1,h2)]:text-balance [&_*:is(h1)]:[text-shadow:0_0_7px_var(--blue-9)]',
              bgImage?.asset && 'text-shadow',
              {
                'mb-8': stegaClean(alignItems) === 'start',
                'my-auto': stegaClean(alignItems) === 'center',
                'mt-auto': stegaClean(alignItems) === 'end',
              },
              {
                'mr-auto': stegaClean(textAlign) === 'left',
                'mx-auto': stegaClean(textAlign) === 'center',
                'ml-auto': stegaClean(textAlign) === 'right',
              },
            )}
            style={{ textAlign: stegaClean(textAlign) }}
          >
            <Pretitle className={cn((hasImage || bgType === 'video') && 'text-background/70')}>{stegaClean(pretitle)}</Pretitle>

            <PortableText value={stegaClean(content)} />

            <CTAList
              ctas={ctas}
              className={cn('!mt-4', {
                'justify-start': stegaClean(textAlign) === 'left',
                'justify-center': stegaClean(textAlign) === 'center',
                'justify-end': stegaClean(textAlign) === 'right',
              })}
            />
          </div>
        </div>
      )}
    </section>
  );
}
