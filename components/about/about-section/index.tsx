import { Box, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { AspectRatio } from '@/components/ui/aspect-ratio';

import styles from './about-section.module.scss';

interface IAboutSectionProps {
  id: string;
}

export const AboutSection: FC<IAboutSectionProps> = ({ id }) => (
  <Section>
    <Box className={cx(styles['d-section__container'])} id={id}>
      <Box className={cx(styles['d-section__content'])}>
        <Text size={'5'} as="div" mb={'4'}>
          <Text weight={'bold'}>Digital Marketing</Text> is not just about ads and social posts It&apos;s a strategic system that fuels
          growth and sets you apart from the crowd. In an ever-multiplying world of digital marketing agencies, it is results that are the
          true differentiator. Digital marketing is not a game of guesswork, it&apos;s a well-thought-out web of tools, creativity, and
          strategy designed to drive success. Partner with experts who deliver, not promises.
        </Text>
        {/*  */}
        <Text size={'5'} as="div" mb={'4'}>
          We design your company website, do{' '}
          <Text weight={'bold'} color="blue">
            Search Engine Optimization
          </Text>{' '}
          of the website, do{' '}
          <Text weight={'bold'} color="blue">
            Creative Content Development
          </Text>
          , and{' '}
          <Text weight={'bold'} color="blue">
            Social Media Campaigns
          </Text>
          ,{' '}
          <Text weight={'bold'} color="blue">
            Write & Post Blogs
          </Text>
          , create{' '}
          <Text weight={'bold'} color="blue">
            Engaging Websites
          </Text>{' '}
          that grabs eyeballs, etc. Through a strategic mix of online mediums, we deliver you the expected results.
        </Text>
        {/*  */}
        <Text size={'5'} as="div" mb={'4'}>
          Our most <Text weight={'bold'}>Experienced</Text> and <Text weight={'bold'}>Skilled Professionals</Text> ensure that the online
          presence of your business through various tools and promotion of business on the internet will deliver consistent{' '}
          <Text weight={'medium'} color="blue">
            growth.
          </Text>
        </Text>
        <Text size={'5'} as="div">
          We have been serving the corporate sector by providing all{' '}
          <Text color="blue" weight={'medium'}>
            Online Marketing Solutions
          </Text>{' '}
          in one place. Everything that we do ensures business growth for our clients. Growth is in our name and growing businesses is the
          sole purpose of our existence.
        </Text>
      </Box>
      <Box className={cx(styles['d-section__image-wrapper'])}>
        <AspectRatio ratio={0.71 / 1}>
          <Image
            alt="About Us Section Image"
            src={'/about/about-company.png'}
            width={330}
            height={220}
            className={cx(styles['d-section__img'])}
          />
        </AspectRatio>
      </Box>
    </Box>
  </Section>
);

export default AboutSection;
