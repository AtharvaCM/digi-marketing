'use client';
import { Box, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Lottie from 'lottie-react';
import { stegaClean } from 'next-sanity';
import { useEffect, useState } from 'react';

import CTALink from '@/components/common/cta-link';
import ServiceCard from '@/components/common/service-card';
import { buttonVariants } from '@/components/ui/button';

import styles from './service-details.module.scss';

interface IServiceDetailsModuleProps {
  ctas: Sanity.CTA;
  description: string;
  heroAnimationSrc: string;
  title: string;
  features: {
    color: 'blue' | 'orange' | 'plum';
    description: string;
    layout: 'reverse' | 'normal';
    name: string;
    img: Sanity.Image;
    _key: string;
  }[];
}

export default function ServiceDetailsModule({
  title,
  description,
  ctas,
  features,
  heroAnimationSrc,
}: Readonly<Partial<IServiceDetailsModuleProps>>) {
  const [animationData, setAnimationData] = useState(null);
  const cleanHeroAnimationSrc = stegaClean(heroAnimationSrc);

  useEffect(() => {
    const loadAnimation = async () => {
      if (!cleanHeroAnimationSrc) return null;
      try {
        const response = await fetch(cleanHeroAnimationSrc);
        if (!response.ok) {
          throw new Error(`Failed to fetch animation: ${response.statusText}`);
        }
        const json = await response.json();
        setAnimationData(json);
      } catch (error) {
        console.error('Failed to load animation:', error);
      }
    };

    loadAnimation();
  }, [cleanHeroAnimationSrc]);

  return (
    <Section className={cx(styles['d-section'])}>
      <Box className={cx(styles['d-section__container'])}>
        {/* Col 1 */}
        <Box className={cx(styles['d-section__image-col'])}>
          <Box className={cx(styles['d-section__image-wrapper'])}>{animationData && <Lottie animationData={animationData} />}</Box>
        </Box>
        {/* Col 2 */}
        <Box className={cx(styles['d-section__content-col'])}>
          <Heading as="h1" mb={'5'} className={cx(styles['d-section__title'])}>
            {title}
          </Heading>
          <Text as="p" size={'3'} weight={'regular'} mb={'5'} className={cx(styles['d-section__text-content'])}>
            {description}
          </Text>
          <Box className={cx(styles['d-section__cta-wrapper'])}>
            <CTALink link={ctas?.link} className={cx(buttonVariants({ size: 'lg' }))} />
          </Box>
        </Box>
      </Box>

      {/* Services */}
      <Box className={cx(styles['d-section__services-container'])}>
        {features && features.length > 0 && (
          <Heading as="h2" mb={'7'} className={cx(styles['d-section__services-title'])}>
            {title} Features
          </Heading>
        )}
        <Box className={cx(styles['d-section__services'])}>
          {features?.map((feature, index) => (
            <ServiceCard
              className={cx(
                styles['d-section__service'],
                index % 2 !== 0 && 'ml-auto', // Add 'ml-auto' for every second child
              )}
              name={feature.name}
              description={feature.description}
              img={feature.img}
              color={feature.color}
              variant="horizontal"
              layout={feature.layout}
              key={feature._key}
            />
          ))}
        </Box>
      </Box>
    </Section>
  );
}
