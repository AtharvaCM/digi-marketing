'use client';
import { Box, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Lottie from 'lottie-react';
import Link from 'next/link';
import { FC } from 'react';

import ServiceCard from '@/components/common/service-card';
import { buttonVariants } from '@/components/ui/button';
import seoServiceHeroAnimation from '@/public/assets/animations/seo-hero-lottie.json.json';
import seoServices from '@/public/assets/seo-services.json';

import styles from './seo-section.module.scss';

interface ISEOHeroSectionProps {}

const SEOHeroSection: FC<ISEOHeroSectionProps> = () => (
  <Section className={cx(styles['d-section'])}>
    <Box className={cx(styles['d-section__container'])}>
      {/* Col 1 */}
      <Box className={cx(styles['d-section__image-col'])}>
        <Box className={cx(styles['d-section__image-wrapper'])}>
          <Lottie animationData={seoServiceHeroAnimation} />
        </Box>
      </Box>
      {/* Col 2 */}
      <Box className={cx(styles['d-section__content-col'])}>
        <Heading as="h1" mb={'5'} className={cx(styles['d-section__title'])}>
          SEO (Search Engine Optimization)
        </Heading>
        <Text as="p" size={'3'} weight={'regular'} mb={'5'} className={cx(styles['d-section__text-content'])}>
          We provide comprehensive SEO services to boost your website’s search engine ranking. Our experts enhance site performance through
          quality content, strategic keyword use, meta descriptions, links, and image optimization.
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
        SEO (Search Engine Optimization) Features
      </Heading>
      <Box className={cx(styles['d-section__services'])}>
        <ServiceCard
          className={cx(styles['d-section__service'])}
          name={seoServices[0].name}
          description={seoServices[0].description}
          imgSrc={'/seo/local-seo-illustration.svg'}
          color="plum"
          variant="horizontal"
          layout="reverse"
        />
        <ServiceCard
          className={cx(styles['d-section__service'], 'ml-auto')}
          name={seoServices[1].name}
          description={seoServices[1].description}
          imgSrc={'/seo/technical-seo-illustration.svg'}
          color="orange"
          variant="horizontal"
        />
        <ServiceCard
          className={cx(styles['d-section__service'])}
          name={seoServices[2].name}
          description={seoServices[2].description}
          imgSrc={'/seo/content-marketing-illustration.svg'}
          color="blue"
          variant="horizontal"
          layout="reverse"
        />
        <ServiceCard
          className={cx(styles['d-section__service'], 'ml-auto')}
          name={seoServices[3].name}
          description={seoServices[3].description}
          imgSrc={'/seo/on-page-optimization-illustration.svg'}
          color="plum"
          variant="horizontal"
        />
      </Box>
    </Box>
  </Section>
);

export default SEOHeroSection;
