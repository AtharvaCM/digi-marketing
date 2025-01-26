'use client';

import { Box, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Lottie from 'lottie-react';
import Link from 'next/link';
import { FC } from 'react';

import ServiceCard from '@/components/common/service-card';
import { buttonVariants } from '@/components/ui/button';
import webDesignHeroLottieAnimation from '@/public/assets/animations/web-design-hero-lottie.json';
import webDesignServices from '@/public/assets/web-design-services.json';

import styles from './web-design-hero-section.module.scss';

interface IWebDesignHeroSectionProps {}

const WebDesignHeroSection: FC<IWebDesignHeroSectionProps> = () => (
  <Section className={cx(styles['d-section'])}>
    <Box className={cx(styles['d-section__container'])}>
      {/* Col 1 */}
      <Box className={cx(styles['d-section__image-col'])}>
        <Box className={cx(styles['d-section__image-wrapper'])}>
          <Lottie animationData={webDesignHeroLottieAnimation} />
        </Box>
      </Box>
      {/* Col 2 */}
      <Box className={cx(styles['d-section__content-col'])}>
        <Heading as="h1" mb={'5'} className={cx(styles['d-section__title'])}>
          Web Design
        </Heading>
        <Text as="p" size={'3'} weight={'regular'} mb={'5'} className={cx(styles['d-section__text-content'])}>
          Web design is crucial for any business. We plan, conceptualize, and implement to create a website that offers an excellent user
          experience and is functional. Our designs feature easy navigation, impressive visuals, and 3D animations.
        </Text>
        <Box className={cx(styles['d-section__cta-wrapper'])}>
          <Link href={'/contact'} className={cx(buttonVariants({ size: 'lg' }))}>
            Contact Us
          </Link>
        </Box>
      </Box>
    </Box>

    {/* Services */}
    <Box className={cx(styles['d-section__services-container'])}>
      <Heading
        as="h2"
        mb={'7'}
        className={cx(styles['d-section__services-title'], 'animate-web-design-title')}
        id="web-design-features-title"
      >
        Web Design Features
      </Heading>
      <Box className={cx(styles['d-section__services'])} id="web-design-features">
        <ServiceCard
          className={cx(styles['d-section__service'], 'animate-web-design-feature')}
          name={webDesignServices[0].name}
          description={webDesignServices[0].description}
          imgSrc={'/web-design/ui-illustration.svg'}
          color="plum"
          variant="horizontal"
          layout="reverse"
        />
        <ServiceCard
          className={cx(styles['d-section__service'], 'animate-web-design-feature', 'ml-auto')}
          name={webDesignServices[1].name}
          description={webDesignServices[1].description}
          imgSrc={'/web-design/ux-illustration.svg'}
          color="orange"
          variant="horizontal"
        />
        <ServiceCard
          className={cx(styles['d-section__service'], 'animate-web-design-feature')}
          name={webDesignServices[2].name}
          description={webDesignServices[2].description}
          imgSrc={'/web-design/brand-identity-illustration.svg'}
          color="blue"
          variant="horizontal"
          layout="reverse"
        />
      </Box>
    </Box>
  </Section>
);

export default WebDesignHeroSection;
