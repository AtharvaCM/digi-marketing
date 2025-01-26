'use client';

import { Box, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Lottie from 'lottie-react';
import Link from 'next/link';
import { FC } from 'react';

import ServiceCard from '@/components/common/service-card';
import { buttonVariants } from '@/components/ui/button';
import semPaidAdvertisingHeroAnimation from '@/public/assets/animations/sem-paid-advertising-hero-lottie.json';
import semServices from '@/public/assets/sem-services.json';

import styles from './sem-hero-section.module.scss';

interface ISEMHeroSectionProps {}

const SEMHeroSection: FC<ISEMHeroSectionProps> = () => (
  <Section className={cx(styles['d-section'])}>
    <Box className={cx(styles['d-section__container'])}>
      {/* Col 1 */}
      <Box className={cx(styles['d-section__image-col'])}>
        <Box className={cx(styles['d-section__image-wrapper'])}>
          <Lottie animationData={semPaidAdvertisingHeroAnimation} />
        </Box>
      </Box>
      {/* Col 2 */}
      <Box className={cx(styles['d-section__content-col'])}>
        <Heading as="h1" mb={'5'} className={cx(styles['d-section__title'])}>
          SEM / Paid Advertising
        </Heading>
        <Text as="p" size={'3'} weight={'regular'} mb={'5'} className={cx(styles['d-section__text-content'])}>
          Search Engine Marketing is crucial in today&apos;s competitive world. With intense competition and short attention spans, SEM
          enhances your brand&apos;s visibility and drives targeted traffic, providing a strategic advantage for business success.
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
      <Heading as="h2" mb={'7'} className={cx(styles['d-section__services-title'], 'animate-seo-title')} id="seo-features-title">
        SEM / Paid Advertising Features
      </Heading>
      <Box className={cx(styles['d-section__services'])} id="sem-features">
        <ServiceCard
          className={cx(styles['d-section__service'], 'animate-card')}
          name={semServices[0].name}
          description={semServices[0].description}
          imgSrc={'/sem/performance-marketing-illustration.svg'}
          color="plum"
          variant="horizontal"
          layout="reverse"
        />
        <ServiceCard
          className={cx(styles['d-section__service'], 'animate-card', 'ml-auto')}
          name={semServices[1].name}
          description={semServices[1].description}
          imgSrc={'/sem/pay-per-click-illustration.svg'}
          color="orange"
          variant="horizontal"
        />
        <ServiceCard
          className={cx(styles['d-section__service'], 'animate-card')}
          name={semServices[2].name}
          description={semServices[2].description}
          imgSrc={'/sem/google-ads-illustration.svg'}
          color="blue"
          variant="horizontal"
          layout="reverse"
        />
        <ServiceCard
          className={cx(styles['d-section__service'], 'animate-card', 'ml-auto')}
          name={semServices[3].name}
          description={semServices[3].description}
          imgSrc={'/sem/social-media-campaign-illustration.svg'}
          color="plum"
          variant="horizontal"
        />
      </Box>
    </Box>
  </Section>
);

export default SEMHeroSection;
