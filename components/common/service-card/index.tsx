import { Box, Heading, Text } from '@radix-ui/themes';
import cx from 'classnames';
import kebabCase from 'lodash/kebabCase';
import Image from 'next/image';
import { FC } from 'react';

import { useScrollTriggerAnimation } from '@/utils/hooks/use-scroll-trigger-animation';

import styles from './service-card.module.scss';

interface IServiceCardProps {
  imgSrc: string;
  name: string;
  description: string;
  className?: string;
  variant?: 'vertical' | 'horizontal' | 'horizontal-reverse';
  layout?: 'normal' | 'reverse';
  color?: 'blue' | 'orange' | 'plum';
}

const ServiceCard: FC<IServiceCardProps> = (props) => {
  const { imgSrc, name, description, className, variant = 'vertical', layout = 'normal', color = 'blue' } = props;
  const cardWrapperId = kebabCase(name);

  const { scrollTriggerRef } = useScrollTriggerAnimation({
    target: `#${cardWrapperId}`,
    toVars: { opacity: 1, y: 0, duration: 0.5, delay: 0.3 },
  });
  return (
    <Box
      ref={scrollTriggerRef}
      id={cardWrapperId}
      className={cx(
        styles['d-container'],
        {
          // Colors
          [styles['d-container--bg-blue']]: color === 'blue',
          [styles['d-container--bg-orange']]: color === 'orange',
          [styles['d-container--bg-plum']]: color === 'plum',
          // Variants
          [styles['d-container--vertical']]: variant === 'vertical',
          [styles['d-container--horizontal']]: variant === 'horizontal',
          // Layout
          [styles['d-container--layout-reverse']]: layout === 'reverse',
        },
        className,
      )}
    >
      <Box className={cx(styles['d-container__image-col'])}>
        <Box className={cx(styles['d-container__image-wrapper'])}>
          <Image alt={name} src={imgSrc} width={60} height={60} className={cx(styles['d-container__image'])} />
        </Box>
      </Box>
      <Box className={cx(styles['d-container__content-wrapper'])}>
        <Heading as="h3" className={cx(styles['d-container__name'])}>
          {name}
        </Heading>
        <Box className={cx(styles['d-container__separator'])} />
        <Text as="p" className={cx(styles['d-container__description'])}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default ServiceCard;
