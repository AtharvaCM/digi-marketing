'use client';
import { Box, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Lottie from 'lottie-react';
import Link from 'next/link';
import { FC } from 'react';

import { buttonVariants } from '@/components/ui/button';
import emailMarketingHeroAnimation from '@/public/assets/animations/email-marketing-hero-lottie.json';

import styles from './email-marketing-hero-section.module.scss';

interface IEmailMarketingHeroSectionProps {}

const EmailMarketingHeroSection: FC<IEmailMarketingHeroSectionProps> = () => (
  <Section className={cx(styles['d-section'])}>
    <Box className={cx(styles['d-section__container'])}>
      {/* Col 1 */}
      <Box className={cx(styles['d-section__image-col'])}>
        <Box className={cx(styles['d-section__image-wrapper'])}>
          <Lottie animationData={emailMarketingHeroAnimation} />
        </Box>
      </Box>
      {/* Col 2 */}
      <Box className={cx(styles['d-section__content-col'])}>
        <Heading as="h1" mb={'5'} className={cx(styles['d-section__title'])}>
          Email Marketing and Automation
        </Heading>
        <Text as="p" size={'3'} weight={'regular'} mb={'5'} className={cx(styles['d-section__text-content'])}>
          We have all experienced Email marketing wherein depending on our surfing the internet or interests shown online, we receive
          marketing emails and advertisements in our mailboxes and mobile devices. Growth Stats employs potent automation software to send
          emails to the right clients. This ensures a continuous flow of business.
        </Text>
        <Box className={cx(styles['d-section__cta-wrapper'])}>
          <Link href={'/contact'} className={cx(buttonVariants({ size: 'lg' }))}>
            Contact Us
          </Link>
        </Box>
      </Box>
    </Box>
  </Section>
);

export default EmailMarketingHeroSection;
