'use client';

import { Box, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Lottie from 'lottie-react';
import Link from 'next/link';
import { FC } from 'react';

import ServiceCard from '@/components/common/service-card';
import { buttonVariants } from '@/components/ui/button';
import webDevelopmentHeroLottieAnimation from '@/public/assets/animations/web-dev-hero-lottie.json';
import webDevelopmentServices from '@/public/assets/web-development-services.json';

import styles from './web-dev-hero-section.module.scss';

interface IWebDevelopmentHeroSectionProps {}

const WebDevelopmentHeroSection: FC<IWebDevelopmentHeroSectionProps> = () => (
  <Section className={cx(styles['d-section'])}>
    <Box className={cx(styles['d-section__container'])}>
      {/* Col 1 */}
      <Box className={cx(styles['d-section__image-col'])}>
        <Box className={cx(styles['d-section__image-wrapper'])}>
          <Lottie animationData={webDevelopmentHeroLottieAnimation} />
        </Box>
      </Box>
      {/* Col 2 */}
      <Box className={cx(styles['d-section__content-col'])}>
        <Heading as="h1" mb={'5'} className={cx(styles['d-section__title'])}>
          Web Development
        </Heading>
        <Text as="p" size={'4'} weight={'regular'} mb={'5'} className={cx(styles['d-section__text-content'])}>
          Web development is the function of creating, uploading, and maintaining websites. The different aspects involved in web
          development are designing, programming, database management, and uploading on the internet. We do all kinds of websites like
          static and CMS-backed websites.
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
      <Heading as="h2" mb={'7'} className={cx(styles['d-section__services-title'])}>
        Web Development Features
      </Heading>
      <Box className={cx(styles['d-section__services'])}>
        <ServiceCard
          className={cx(styles['d-section__service'])}
          name={webDevelopmentServices[0].name}
          description={webDevelopmentServices[0].description}
          imgSrc={'/web-development/static-website-illustration.svg'}
          color="plum"
          variant="horizontal"
          layout="reverse"
        />
        <ServiceCard
          className={cx(styles['d-section__service'], 'ml-auto')}
          name={webDevelopmentServices[1].name}
          description={webDevelopmentServices[1].description}
          imgSrc={'/web-development/cms-illustration.svg'}
          color="orange"
          variant="horizontal"
        />
        <ServiceCard
          className={cx(styles['d-section__service'])}
          name={webDevelopmentServices[2].name}
          description={webDevelopmentServices[2].description}
          imgSrc={'/web-development/custom-solution-illustration.svg'}
          color="blue"
          variant="horizontal"
          layout="reverse"
        />
        <ServiceCard
          className={cx(styles['d-section__service'], 'ml-auto')}
          name={webDevelopmentServices[3].name}
          description={webDevelopmentServices[3].description}
          imgSrc={'/web-development/performace-seo-illustration.svg'}
          color="plum"
          variant="horizontal"
        />
        <ServiceCard
          className={cx(styles['d-section__service'])}
          name={webDevelopmentServices[4].name}
          description={webDevelopmentServices[4].description}
          imgSrc={'/web-development/3d-websites.svg'}
          color="orange"
          variant="horizontal"
          layout="reverse"
        />
      </Box>
    </Box>
  </Section>
);

export default WebDevelopmentHeroSection;
