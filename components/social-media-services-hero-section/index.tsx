'use client';

import { Box, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Lottie from 'lottie-react';
import Link from 'next/link';
import { FC } from 'react';

import socialMediaServicesHeroAnimation from '@/public/assets/animations/social-media-services-hero-lottie.json';
import socialMediaServices from '@/public/assets/social-media-services.json';

import ServiceCard from '../common/service-card';
import { buttonVariants } from '../ui/button';
import styles from './social-media-services-hero-section.module.scss';

interface ISocialMediaServicesHeroSectionProps {}

const SocialMediaServicesHeroSection: FC<ISocialMediaServicesHeroSectionProps> = () => (
  <Section className={cx(styles['d-section'])}>
    <Box className={cx(styles['d-section__container'])}>
      {/* Col 1 */}
      <Box className={cx(styles['d-section__image-col'])}>
        <Box className={cx(styles['d-section__image-wrapper'])}>
          <Lottie animationData={socialMediaServicesHeroAnimation} />
        </Box>
      </Box>
      {/* Col 2 */}
      <Box className={cx(styles['d-section__content-col'])}>
        <Heading as="h1" mb={'5'} className={cx(styles['d-section__title'])}>
          Social Media Services
        </Heading>
        <Text as="p" size={'3'} weight={'regular'} mb={'5'} className={cx(styles['d-section__text-content'])}>
          At <Text weight={'bold'}>Growth Stats</Text>, we deliver Social Media Services to elevate your brand&apos;s presence and
          connections. Our expert team optimizes interactions on Facebook, Instagram, YouTube, LinkedIn, and more for growth and loyalty.
        </Text>
        <Box className={cx(styles['d-section__cta-wrapper'])}>
          <Link href={'/contact'} className={cx(buttonVariants({ size: 'lg' }))}>
            Contact Us
          </Link>{' '}
        </Box>
      </Box>
    </Box>

    {/* Services */}
    <Box className={cx(styles['d-section__services-container'])}>
      <Heading as="h2" mb={'7'} className={cx(styles['d-section__services-title'])}>
        Social Media Service Features
      </Heading>
      <Box className={cx(styles['d-section__services'])}>
        <ServiceCard
          className={cx(styles['d-section__service'], 'animate-seo-feature')}
          name={socialMediaServices[0].name}
          description={socialMediaServices[0].description}
          imgSrc={'/social-media-services/social-media-brand-management-illustration.svg'}
          color="plum"
          variant="horizontal"
          layout="reverse"
        />
        <ServiceCard
          className={cx(styles['d-section__service'], 'animate-seo-feature', 'ml-auto')}
          name={socialMediaServices[1].name}
          description={socialMediaServices[1].description}
          imgSrc={'/social-media-services/social-media-account-management-illustration.svg'}
          color="orange"
          variant="horizontal"
        />
        <ServiceCard
          className={cx(styles['d-section__service'], 'animate-seo-feature')}
          name={socialMediaServices[2].name}
          description={socialMediaServices[2].description}
          imgSrc={'/social-media-services/online-reputation-management-illustration.svg'}
          color="blue"
          variant="horizontal"
          layout="reverse"
        />
        <ServiceCard
          className={cx(styles['d-section__service'], 'animate-seo-feature', 'ml-auto')}
          name={socialMediaServices[3].name}
          description={socialMediaServices[3].description}
          imgSrc={'/social-media-services/community-management-illustration.svg'}
          color="plum"
          variant="horizontal"
          layout="reverse"
        />
        <ServiceCard
          className={cx(styles['d-section__service'], 'animate-seo-feature')}
          name={socialMediaServices[4].name}
          description={socialMediaServices[4].description}
          imgSrc={'/social-media-services/social-media-marketing-illustration.svg'}
          color="orange"
          variant="horizontal"
        />
        <ServiceCard
          className={cx(styles['d-section__service'], 'animate-seo-feature', 'ml-auto')}
          name={socialMediaServices[5].name}
          description={socialMediaServices[5].description}
          imgSrc={'/social-media-services/social-media-optimization-illustration.svg'}
          color="blue"
          variant="horizontal"
          layout="reverse"
        />
      </Box>
    </Box>
  </Section>
);

export default SocialMediaServicesHeroSection;
