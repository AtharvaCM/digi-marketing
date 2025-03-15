'use client';
import { useEffect, useState } from 'react';

import Img from '@/components/common/Img';
import { cn } from '@/lib/utils';
import { client } from '@/sanity/lib/client';

import styles from './hero.module.scss';

type Props = {
  bgVideo?: Sanity.Video;
  bgVideoThumbnail?: Sanity.Image;
};

const HeroBgVideo = ({ bgVideo, bgVideoThumbnail }: Props) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (bgVideo?.asset?._ref) {
      const fetchVideoUrl = async () => {
        const videoAsset = await client.getDocument(bgVideo.asset._ref);
        if (videoAsset?.url) {
          setVideoUrl(videoAsset.url);
        }
      };

      fetchVideoUrl();
    }
  }, [bgVideo]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const hasVideo = !!videoUrl;

  return (
    <div className="h-[100svh]">
      {!videoLoaded && bgVideoThumbnail?.asset && (
        <picture className={cn(bgVideoThumbnail.overlay && styles['d-section__picture'])}>
          <Img className="size-full object-cover" image={bgVideoThumbnail} imageWidth={1800} draggable={false} loading="eager" />
        </picture>
      )}
      {hasVideo && (
        <div className={cn(bgVideo?.overlay && styles['d-section__video-wrapper'], 'w-full h-[100svh] relative')}>
          <video
            className={cn('absolute size-full object-cover')}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoaded}
            style={{ display: videoLoaded ? 'block' : 'none' }}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};

export default HeroBgVideo;
