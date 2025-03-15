'use client';

import { Box, Section, Strong, Text } from '@radix-ui/themes';
import cx from 'classnames';

import BannerText from '@/components/common/banner-text';
import { useScrollTriggerAnimation } from '@/utils/hooks/use-scroll-trigger-animation';

import styles from './about-section.module.scss';

export interface IAboutSectionProps {
  id: string;
}

export default function AboutSection({ id }: IAboutSectionProps) {
  const { scrollTriggerRef } = useScrollTriggerAnimation({
    target: '.about-section__about-text',
  });

  return (
    <Section size={'3'} className={cx(styles['d-section'])} id={id}>
      <div className={cx(styles['d-section__container'])}>
        <Box mb={'8'} className="text-center">
          <BannerText
            ref={scrollTriggerRef}
            wrapperClassName="about-section__heading"
            text="growth stats"
            textClassName="text-4xl md:text-6xl"
          />
        </Box>
        <Text as="div" size={{ initial: '3', md: '5' }} className={cx(styles['d-section__text-content'], 'about-section__about-text')}>
          <Text as="p" mb={'1'}>
            Our <Strong>Digital Marketing</Strong> expertise delivers what Businesses want ……
            <Text as="span" color="blue" weight={'bold'}>
              Growth
            </Text>
          </Text>
          <Text as="p" mb={'1'}>
            We minutely monitor the <Strong>Online Promotion Impact</Strong> and deliver results
          </Text>
          <Text as="p" mb={'1'}>
            <Strong>Creative Visual Inputs</Strong> that will make your business website stand out
          </Text>
          <Text as="p" mb={'1'}>
            Creating <Strong>Engaging Content</Strong> that keeps clients coming back to you repeatedly
          </Text>
        </Text>
      </div>
    </Section>
  );
}
