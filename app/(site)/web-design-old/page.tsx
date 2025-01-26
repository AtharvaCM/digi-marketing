import { Metadata } from 'next';

import WebDesignPageTemplate from '@/components/templates/web-design';
import { BASE_URL } from '@/utils/constants';

export const metadata: Metadata = {
  title: 'Web Design Services - Growth Stats | Create Stunning Websites',
  description:
    'Transform your online presence with Growth Stats professional web design services. Our creative team designs stunning and functional websites that engage your audience and drive business growth.',
  generator: 'Next.js',
  applicationName: 'Growth Stats',
  referrer: 'origin-when-cross-origin',
  keywords: ['Web Design Services', 'Website Design', 'Professional Web Design', 'Creative Websites', 'Business Growth', 'Growth Stats'],
  authors: [{ name: 'Growth Stats', url: BASE_URL }],
  alternates: {
    canonical: 'https://growthstats.io/web-design',
  },
  openGraph: {
    title: 'Web Design Services - Growth Stats | Create Stunning Websites',
    description:
      'Transform your online presence with Growth Stats professional web design services. Our creative team designs stunning and functional websites that engage your audience and drive business growth.',
    siteName: 'Growth Stats',
    type: 'website',
    url: `${BASE_URL}/web-design`,
    images: [
      {
        url: `${BASE_URL}/screenshots/homepage-og.png`, // TODO: replace with an actual image URL if available
        width: 800,
        height: 600,
        alt: 'Web Design Services by Growth Stats',
      },
    ],
  },
};

const WebDesign = () => <WebDesignPageTemplate />;

export default WebDesign;
