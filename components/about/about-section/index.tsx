import cx from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Box, Section, Text } from '@radix-ui/themes';

interface IAboutSectionProps {}

export const AboutSection: FC<IAboutSectionProps> = (_props) => (
  <Section>
    <Box className="flex flex-col-reverse gap-10 max-w-screen-l mx-auto px-4 md:px-8 lg:flex-row">
      <Box className="w-full text-center md:text-left">
        <Text size={'5'} as="div" mb={'4'}>
          <Text weight={'bold'}>Digital Marketing</Text> and <Text weight={'bold'}>3D Animation</Text> companies are popping up like wild
          mushrooms growing in the monsoon. However, when it comes to delivering results, only a handful of companies are capable enough.
          Although it looks simple, digital marketing is not everyone’s cup of tea. It is a web of intricately woven tools that keep
          prospective clients and existing ones engaged with your business to ensure a winning edge over your competitors.
        </Text>
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
          ,{' '}
          <Text weight={'bold'} color="blue">
            Develop Three-Dimensional Websites
          </Text>{' '}
          that grabs eyeballs, etc. Through a strategic mix of online mediums, we deliver you the expected results.
        </Text>
        <Text size={'5'} as="div" mb={'4'}>
          Our most <Text weight={'bold'}>Experienced</Text> and <Text weight={'bold'}>Skilled Professionals</Text> ensure that the online
          presence of your business through various tools and promotion of business on the internet will deliver consistent{' '}
          <Text weight={'medium'} color="blue">
            growth.
          </Text>
        </Text>
        <Text size={'5'} as="div">
          Since the year 2023, we have been serving the corporate sector by providing all{' '}
          <Text color="blue" weight={'medium'}>
            Online Marketing Solutions
          </Text>{' '}
          in one place. Everything that we do ensures business growth for our clients. Growth is in our name and growing businesses is the
          sole purpose of our existence.
        </Text>
      </Box>
      <Box className="w-full max-w-[375px] shrink-0 mx-auto">
        <AspectRatio ratio={0.71 / 1}>
          <Image
            alt="About Us Section Image"
            src={'/about/about-company.png'}
            width={330}
            height={220}
            className="w-auto rounded-2xl object-cover mx-auto"
          />
        </AspectRatio>
      </Box>
    </Box>
  </Section>
);

export default AboutSection;
