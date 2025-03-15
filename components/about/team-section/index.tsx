'use client';

import { AspectRatio, Box, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { useScrollTriggerAnimation } from '@/utils/hooks/use-scroll-trigger-animation';

import styles from './team-section.module.scss';

interface ITeamSectionProps {
  id: string;
}

const TeamSection: FC<ITeamSectionProps> = ({ id }) => {
  const { scrollTriggerRef: teamTitleScrollTrigger } = useScrollTriggerAnimation({
    target: '.animate-team',
  });

  return (
    <Section className={cx(styles['d-section'])} id={id}>
      {/* TEAM */}
      <Box className={cx(styles['d-section__team-container'])}>
        <Box className={cx(styles['d-section__team-content'])}>
          <Heading as="h3" size={'9'} ref={teamTitleScrollTrigger} className={cx(styles['d-section__team-title'], 'animate-team')}>
            TEAM
          </Heading>
          <Text as="p" size={'6'} className={cx(styles['d-section__team-text'], 'animate-team')}>
            At the core of creating success for our clients is a <Text weight={'bold'}>Creative</Text>, <Text weight={'bold'}>Dynamic</Text>
            , and <Text weight={'bold'}>Skilled</Text> team that enthusiastically delivers on commitments every single time
          </Text>
        </Box>
        <AspectRatio ratio={16 / 5}>
          <Image
            src={'/about/team-bg.webp'}
            alt="team freestanding letters"
            className={cx(styles['d-section__team-image'])}
            width={585}
            height={390}
          />
        </AspectRatio>
      </Box>
    </Section>
  );
};

export default TeamSection;
