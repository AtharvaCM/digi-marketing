import { Metadata } from 'next';

import HomePageTemplate from '@/components/templates/home';
import { BASE_URL } from '@/utils/constants';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency | Website Design & SEO',
  description:
    'Growth Stats provides comprehensive digital marketing solutions including SEO, content development, social media campaigns, and 3D animation. We ensure business growth through our strategic mix of online mediums.',
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
    canonical: 'https://growthstats.io',
  },
  authors: [{ name: 'Growth Stats', url: `${BASE_URL}/` }],
  openGraph: {
    title: 'Digital Marketing Agency | Website Design & SEO',
    description:
      'Growth Stats provides comprehensive digital marketing solutions including SEO, content development, social media campaigns, and 3D animation. We ensure business growth through our strategic mix of online mediums.',
    siteName: 'Growth Stats',
    type: 'website',
    url: `${BASE_URL}/`,
    images: [
      {
        url: `${BASE_URL}/screenshots/homepage-og.png`,
        width: 1428,
        height: 728,
        alt: 'Growth Stats Digital Marketing Solutions',
      },
    ],
  },
};

export default async function Page() {
  return <HomePageTemplate />;
}
