'use client';
import './preloader.css';

import { Heading } from '@radix-ui/themes';
import { gsap } from 'gsap';
import Lottie from 'lottie-react';
import * as React from 'react';

import lottieLoaderLight from '@/public/assets/lottie-loader-light.json';
import { useImagesLoaded } from '@/utils/hooks/use-images-loaded';
import { useVideosLoaded } from '@/utils/hooks/use-videos-loaded';

export interface IPreloaderProps {}

export default function Preloader(_props: IPreloaderProps) {
  const [isMediaLoaded, setIsMediaLoaded] = React.useState(false);

  const areImagesLoaded = useImagesLoaded('img');
  const areVideosLoaded = useVideosLoaded('video');

  const containerRef = React.useRef(null);
  const prlRef = React.useRef(null);
  const prlHideRef = React.useRef(null);
  const lightCyanSliderRef = React.useRef(null);
  const persianGreenSliderRef = React.useRef(null);
  const whiteSliderRef = React.useRef(null);

  React.useEffect(() => {
    const entranceAnimation = () => {
      const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

      tl.to('.lightCyan-slider', {
        x: '-10%',
        duration: 1,
      });

      tl.to(
        '.persianGreen-slider',
        {
          x: '-20%',
          duration: 1.5,
        },
        '-=1',
      );

      tl.to(
        '.white-slider',
        {
          x: '-30%',
          duration: 1.5,
        },
        '-=1',
      );

      tl.to('.hide', {
        x: '-20%',
        duration: 2,
        opacity: 1,
      });

      tl.to('.preloader', {
        x: '200%',
        duration: 1.5,
      });
    };

    if (isMediaLoaded) entranceAnimation();
  }, [isMediaLoaded]);

  React.useEffect(() => {
    if (areImagesLoaded && areVideosLoaded) {
      setIsMediaLoaded(true);
    }
  }, [areImagesLoaded, areVideosLoaded]);

  if (isMediaLoaded) {
    return (
      <div ref={containerRef} className="preloader">
        <div ref={prlRef} className="prl-logo">
          <Heading as="h1" size={'9'} ref={prlHideRef} className="hide">
            Growth Stats
            <span color="black">&trade;</span>
          </Heading>
        </div>
        <div ref={lightCyanSliderRef} className="lightCyan-slider"></div>
        <div ref={persianGreenSliderRef} className="persianGreen-slider"></div>
        <div ref={whiteSliderRef} className="white-slider"></div>
      </div>
    );
  }

  return (
    <div className="loader">
      <Lottie animationData={lottieLoaderLight} />
    </div>
  );
}
