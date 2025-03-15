import { Box, Heading, Section } from '@radix-ui/themes';
import cx from 'classnames';
import { FC } from 'react';
import Marquee from 'react-fast-marquee';

import styles from './contach-hero-section.module.scss';

interface IContactHeroSectionProps {
  id: string;
}

const ContactHeroSection: FC<IContactHeroSectionProps> = ({ id }) => (
  <Section className={cx(styles['d-section'])} id={id}>
    <Box className={cx(styles['d-section__container'])}>
      <Heading as="h1" mb={'7'} ml={{ initial: '6', md: '9' }} className={cx(styles['d-section__heading'])}>
        Contact
      </Heading>
      <Box className={cx(styles['d-section__text-slider'])}>
        <Marquee>
          <Heading as="h3" className={cx(styles['d-section__slider-text'])}>
            &nbsp;-&nbsp;GET&nbsp;IN&nbsp;TOUCH&nbsp;WITH&nbsp;OUR&nbsp;TEAM&nbsp;-&nbsp;GET&nbsp;IN&nbsp;TOUCH&nbsp;WITH&nbsp;OUR&nbsp;TEAM&nbsp;-&nbsp;GET&nbsp;IN&nbsp;TOUCH&nbsp;WITH&nbsp;OUR&nbsp;TEAM
          </Heading>
        </Marquee>
      </Box>
    </Box>
  </Section>
);

export default ContactHeroSection;
