import { stegaClean } from '@sanity/client/stega';
import Image from 'next/image';
import { useNextSanityImage, UseNextSanityImageOptions } from 'next-sanity-image';
import { preload } from 'react-dom';

import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { DEFAULT_IMG } from '@/utils/constants';

const SIZES = [120, 160, 200, 240, 320, 400, 480, 520, 560, 600, 640, 800, 960, 1280, 1440, 1600, 1800, 2000];

export default function Img({
  image,
  imageWidth,
  imageSizes = SIZES,
  alt = '',
  options,
  ...props
}: {
  image: Sanity.Image | undefined;
  imageWidth?: number;
  imageSizes?: number[];
  options?: UseNextSanityImageOptions;
} & React.ImgHTMLAttributes<HTMLImageElement>) {
  const { src, width, height } = useNextSanityImage(
    client,
    image ?? DEFAULT_IMG,
    imageWidth ? { imageBuilder: (b) => b.width(imageWidth) } : options,
  );

  if (!image?.asset) return null;

  if (stegaClean(image.loading) === 'eager') {
    preload(src, { as: 'image' });
  }

  return (
    <Image
      src={src}
      srcSet={generateSrcset(image, { width: imageWidth, sizes: imageSizes }) ?? src}
      // @ts-expect-error width
      width={width}
      // @ts-expect-error height
      height={height}
      alt={stegaClean(image.alt) ?? alt}
      loading={stegaClean(image.loading) ?? 'lazy'}
      decoding="async"
      blurDataURL={urlFor(image).width(24).height(24).blur(10).url()}
      unoptimized
      {...props}
    />
  );
}

export function Source({
  image,
  imageWidth,
  imageSizes = SIZES,
  options,
  media = '(max-width: 768px)',
}: Readonly<{
  image: Sanity.Image | undefined;
  imageWidth?: number;
  imageSizes?: number[];
  options?: UseNextSanityImageOptions;
  media?: string;
}>) {
  const { src, width, height } = useNextSanityImage(
    client,
    image ?? '',
    imageWidth ? { imageBuilder: (b) => b.width(imageWidth) } : options,
  );

  if (!image) return null;

  if (stegaClean(image.loading) === 'eager') {
    preload(src, { as: 'image' });
  }

  return <source {...generateSrcset(image, { width: imageWidth, sizes: imageSizes })} width={width} height={height} media={media} />;
}

function generateSrcset(
  image: Sanity.Image,
  {
    width,
    sizes = SIZES,
  }: {
    width?: number;
    sizes: number[];
  },
) {
  const filtered = sizes.filter((size) => !width || size <= width);

  return {
    srcSet: filtered.map((size) => `${urlFor(image).width(size).auto('format').url()} ${size}w`).join(', ') || undefined,
    sizes: filtered.map((size, i) => `${i < filtered.length - 1 ? `(max-width: ${size + 1}px) ` : ''}${size}px`).join(', ') || undefined,
  };
}
