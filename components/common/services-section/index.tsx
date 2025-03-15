'use client';

import { Box, Grid, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import rawCuratedServices from '@/public/assets/curated-services.json';
import { useScrollTriggerAnimation } from '@/utils/hooks/use-scroll-trigger-animation';

import styles from './services-section.module.scss';

export interface IServicesSectionProps {
  sectionClassName?: string;
  id: string;
}

type TCuratedService = {
  id: number;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  src: string;
};

export default function ServicesSection({ sectionClassName, id }: Readonly<IServicesSectionProps>) {
  // Ensure the icon names are correct in the JSON
  const curatedServices: TCuratedService[] = rawCuratedServices as TCuratedService[];

  const { scrollTriggerRef: headingScrollTrigger } = useScrollTriggerAnimation();

  const { scrollTriggerRef: subHeadingScrollTrigger } = useScrollTriggerAnimation();

  const { scrollTriggerRef: cardContainerScrollTrigger } = useScrollTriggerAnimation({
    target: '.services-section__card',
    toVars: { opacity: 1, y: 0, duration: 0.5, delay: 0.3 },
  });

  return (
    <Section className={cx(styles['d-section'], sectionClassName)} id={id}>
      <Box className={cx(styles['d-section__container'])}>
        <Heading as="h2" mb={'6'} className={cx(styles['d-section__heading'])} ref={headingScrollTrigger}>
          One Place For{' '}
          <Text as="span" color="blue">
            Best Marketing Services{' '}
          </Text>
          Online
        </Heading>
        <Box className={cx(styles['d-section__sub-heading'])} mb={'8'} ref={subHeadingScrollTrigger}>
          <Text as="p" align={'center'} size={'5'}>
            We offer a complete bouquet of services that help take your business to the next level of growth.
          </Text>
        </Box>
        {/* Services Grid */}
        <Grid
          columns={{ initial: '1', sm: '2', lg: '3' }}
          gap={'6'}
          width={'auto'}
          className={cx(styles['d-section__cards-container'])}
          ref={cardContainerScrollTrigger}
        >
          {curatedServices.map((service: TCuratedService) => (
            <Link href={service.linkHref} key={service.id}>
              <Box className={cx(styles['d-section__card-wrapper'], 'services-section__card')}>
                <Box className={cx(styles['d-section__card'])}>
                  <Box mb={'5'} className={cx(styles['d-section__card__inset'])}>
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={service.src}
                        alt={service.title}
                        width={360}
                        height={203}
                        className={cx(styles['d-section__card__img'])}
                      />
                    </AspectRatio>
                  </Box>
                  <Text as="div" size="5" weight="bold" align={'center'} mb={'5'} color="blue">
                    {service.title}
                  </Text>
                  <Text as="div" color="gray" size="4" align={'center'}>
                    {service.description}
                  </Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Grid>
      </Box>
    </Section>
  );
}
