import { Box, Button, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import { FC, useEffect } from 'react';

import webDevelopmentHeroLottieAnimation from '@/assets/animations/web-dev-hero-lottie.json';
import webDevelopmentServices from '@/assets/web-development-services.json';
import ServiceCard from '@/components/common/service-card';

import styles from './web-dev-hero-section.module.scss';

interface IWebDevelopmentHeroSectionProps {}

const WebDevelopmentHeroSection: FC<IWebDevelopmentHeroSectionProps> = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tlSEOFeaturesTitle = gsap.timeline({
      scrollTrigger: {
        trigger: '#web-dev-features-title',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });
    tlSEOFeaturesTitle.fromTo(
      '.animate-web-dev-title',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5, stagger: 0.3 }, // to state
    );

    const tlSEOFeatures = gsap.timeline({
      scrollTrigger: {
        trigger: '#web-design-features',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });
    tlSEOFeatures.fromTo(
      '.animate-web-design-feature',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5, stagger: 0.3 }, // to state
    );
  }, []);
  return (
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
          <Heading as="h2" mb={'5'} className={cx(styles['d-section__title'])}>
            Web Development
          </Heading>
          <Text as="p" size={'4'} weight={'regular'} mb={'5'} className={cx(styles['d-section__text-content'])}>
            Web development is the function of creating, uploading, and maintaining websites. The different aspects involved in web
            development are designing, programming, database management, and uploading on the internet. We do all kinds of websites like
            static and CMS-backed websites.
          </Text>
          <Box className={cx(styles['d-section__cta-wrapper'])}>
            <Button id="digital-marketing__seo__cta" size={'4'}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Services */}
      <Box className={cx(styles['d-section__services-container'])}>
        <Heading as="h3" mb={'7'} className={cx(styles['d-section__services-title'], 'animate-web-dev-title')} id="web-dev-features-title">
          Web Developement Features
        </Heading>
        <Box className={cx(styles['d-section__services'])} id="web-design-features">
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-web-design-feature')}
            name={webDevelopmentServices[0].name}
            description={webDevelopmentServices[0].description}
            imgSrc={'/web-development/static-website-illustration.svg'}
            color="plum"
            variant="horizontal"
            layout="reverse"
          />
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-web-design-feature', 'ml-auto')}
            name={webDevelopmentServices[1].name}
            description={webDevelopmentServices[1].description}
            imgSrc={'/web-development/cms-illustration.svg'}
            color="orange"
            variant="horizontal"
          />
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-web-design-feature')}
            name={webDevelopmentServices[2].name}
            description={webDevelopmentServices[2].description}
            imgSrc={'/web-development/custom-solution-illustration.svg'}
            color="blue"
            variant="horizontal"
            layout="reverse"
          />
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-web-design-feature', 'ml-auto')}
            name={webDevelopmentServices[3].name}
            description={webDevelopmentServices[3].description}
            imgSrc={'/web-development/performace-seo-illustration.svg'}
            color="plum"
            variant="horizontal"
          />
        </Box>
      </Box>
    </Section>
  );
};

export default WebDevelopmentHeroSection;