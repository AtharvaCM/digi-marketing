import { Box, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import { FC } from 'react';

import styles from './hero-section.module.scss';

interface IHeroSectionProps {}

const HeroSection: FC<IHeroSectionProps> = (_props) => (
  <Section className={cx(styles['d-section'])}>
    <Box className={cx(styles['d-section__container'])}>
      <Heading as="h1" className={cx(styles['d-section__title'])}>
        About Growth Stats
      </Heading>
      <div className={cx(styles['d-section__hr'])} />
      <Heading as="h2" size={'4'} className={cx(styles['d-section__sub-title'])}>
        Get to Know Growth Stats Better
      </Heading>
      <Text className={cx(styles['d-section__description'])}>
        At <Text weight={'medium'}>Growth Stats</Text> Our Services Scale To Your Needs, Reach Wherever You Work And Deliver What&apos;s
        Next And Best For Your Business.
      </Text>
    </Box>
  </Section>
);

export default HeroSection;