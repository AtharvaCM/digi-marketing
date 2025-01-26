import { Metadata } from 'next';

import AboutPageTemplate from '@/components/templates/about';
import { BASE_URL } from '@/utils/constants';

export interface IAboutProps {}

export const metadata: Metadata = {
  title: 'About Us - Growth Stats | Complete Digital Marketing Solutions',
  description:
    'Discover Growth Stats, your go-to for complete digital marketing solutions including SEO, content development, social media campaigns, and 3D animation. Serving the corporate sector since 2023, we ensure consistent business growth through our expert services.',
  generator: 'Next.js',
  applicationName: 'Growth Stats',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Digital Marketing',
    'SEO',
    'Content Development',
    'Social Media Campaigns',
    '3D Animation',
    'Business Growth',
    'Corporate Solutions',
    'Online Marketing',
  ],
  alternates: {
    canonical: 'https://growthstats.io/about',
  },
  authors: [{ name: 'Growth Stats', url: BASE_URL }],
  openGraph: {
    title: 'About Us - Growth Stats | Complete Digital Marketing Solutions',
    description:
      'Discover Growth Stats, your go-to for complete digital marketing solutions including SEO, content development, social media campaigns, and 3D animation. Serving the corporate sector since 2023, we ensure consistent business growth through our expert services.',
    siteName: 'Growth Stats',
    type: 'website',
    url: `${BASE_URL}/about`,
    images: [
      {
        url: `${BASE_URL}/screenshots/homepage-og.png`, // TODO: replace with an actual image URL if available
        width: 800,
        height: 600,
        alt: 'Growth Stats Digital Marketing Solutions',
      },
    ],
  },
};

export default function About(_props: IAboutProps) {
  return <AboutPageTemplate />;
}
