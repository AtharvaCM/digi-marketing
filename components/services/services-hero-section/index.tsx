import { Box, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import { FC } from 'react';

import styles from './hero-section.module.scss';

interface IServicesHeroSectionProps {
  id: string;
}

const ServicesHeroSection: FC<IServicesHeroSectionProps> = ({ id }) => (
  <Section className={cx(styles['d-section'])} id={id}>
    <Box className={cx(styles['d-section__container'])}>
      <Heading as="h1" mb={'5'} className={cx(styles['d-section__title'])}>
        One Place For Best <Text>Online Marketing Services</Text>
      </Heading>
      <Text as="p" size={'6'} weight={'medium'} mb={'5'} className={cx(styles['d-section__sub-title'])}>
        We offer a complete bouquet of services that help take your business to the next level of growth.
      </Text>
      <Box className={cx(styles['d-section__cta-wrapper'])}>
        <button className={cx(styles['d-section__cta'])}>
          <Text weight={'bold'}>WORK WITH US</Text>
        </button>
      </Box>
    </Box>
  </Section>
);

export default ServicesHeroSection;
