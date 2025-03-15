import { FC } from 'react';

import AboutSection from '@/components/about/about-section';
import BrandHeroSection from '@/components/about/hero-section';
import TeamSection from '@/components/about/team-section';
import VisionSection from '@/components/about/vision-section';
import ContactSection from '@/components/common/contact-section';
import ServicesSection from '@/components/common/services-section';
import ContactFormSection from '@/components/contact/contact-form-section';
import ContactHeroSection from '@/components/contact/contact-hero-section';
import HomeAboutSection from '@/components/home/about-section';
import BenefitsSection from '@/components/home/benefits-section';
import ServicesHeroSection from '@/components/services/services-hero-section';

type Props = Readonly<
  Partial<{
    type: string;
    slug: string;
  }>
>;

const PlaceholderBlocks: FC<Props> = ({ type, slug }) => {
  // Generate unique ID: page-slug + placeholder-block name
  const id = `${slug}-${type}`.replace(/\s+/g, '-').toLowerCase(); // Convert to kebab-case

  switch (type) {
    case 'home-about-section':
      return <HomeAboutSection id={id} />;
    case 'services-section':
      return <ServicesSection id={id} />;
    case 'services-hero-section':
      return <ServicesHeroSection id={id} />;
    case 'benefits-section':
      return <BenefitsSection id={id} />;
    case 'brand-hero-section':
      return <BrandHeroSection id={id} />;
    case 'brand-about-section':
      return <AboutSection id={id} />;
    case 'brand-vision-section':
      return <VisionSection id={id} />;
    case 'brand-team-section':
      return <TeamSection id={id} />;
    case 'contact-section':
      return <ContactSection id={id} />;
    case 'contact-hero-section':
      return <ContactHeroSection id={id} />;
    case 'contact-form-section':
      return <ContactFormSection id={id} />;
    default:
      return null;
  }
};

export default PlaceholderBlocks;
