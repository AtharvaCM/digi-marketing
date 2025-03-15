import { Box, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import { FC } from 'react';

import styles from './hero-section.module.scss';

interface IHeroSectionProps {
  id: string;
}

const HeroSection: FC<IHeroSectionProps> = ({ id }) => (
  <Section className={cx(styles['d-section'])} id={id}>
    <Box className={cx(styles['d-section__container'])}>
      <Heading as="h1" className={cx(styles['d-section__title'])}>
        About Growth Stats
      </Heading>
      <div className={cx(styles['d-section__hr'])} />
      <Heading as="h2" size={'4'} className={cx(styles['d-section__sub-title'])}>
        Get to Know Growth Stats Better
      </Heading>
      <Text className={cx(styles['d-section__description'])}>
        At <Text weight={'medium'}>Growth Stats</Text>, our services scale to your needs, reach wherever you work, and deliver the best
        solutions for your business.
      </Text>
    </Box>
  </Section>
);

export default HeroSection;
