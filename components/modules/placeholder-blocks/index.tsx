import { FC } from 'react';

import AboutSection from '@/components/about/about-section';
import TeamSection from '@/components/about/team-section';
import VisionSection from '@/components/about/vision-section';
import ContactSection from '@/components/common/contact-section';
import ServicesSection from '@/components/common/services-section';
import ContactFormSection from '@/components/contact/contact-form-section';
import ContactHeroSection from '@/components/contact/contact-hero-section';
import HomeAboutSection from '@/components/home/about-section';
import BenefitsSection from '@/components/home/benefits-section';

type Props = Readonly<
  Partial<{
    type: string;
  }>
>;

const PlaceholderBlocks: FC<Props> = ({ type }) => {
  switch (type) {
    case 'home-about-section':
      return <HomeAboutSection />;
    case 'services-section':
      return <ServicesSection />;
    case 'benefits-section':
      return <BenefitsSection />;
    case 'brand-about-section':
      return <AboutSection />;
    case 'brand-vision-section':
      return <VisionSection />;
    case 'brand-team-section':
      return <TeamSection />;
    case 'contact-section':
      return <ContactSection />;
    case 'contact-hero-section':
      return <ContactHeroSection />;
    case 'contact-form-section':
      return <ContactFormSection />;
    default:
      return null;
  }
};

export default PlaceholderBlocks;
