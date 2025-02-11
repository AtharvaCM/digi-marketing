import { Metadata } from 'next';

import WebDevelopmentPageTemplate from '@/components/templates/web-development';
import { BASE_URL } from '@/utils/constants';

export const metadata: Metadata = {
  title: 'Web Design Agency | Web Design & Web Development Services',
  description:
    'Elevate your online presence with Growth Stats web development services. Our expert developers create robust, scalable, and high-performance websites tailored to meet your business needs.',
  generator: 'Next.js',
  applicationName: 'Growth Stats',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Web Development Services',
    'Website Development',
    'Professional Web Development',
    'Scalable Websites',
    'Business Growth',
    'Growth Stats',
  ],
  authors: [{ name: 'Growth Stats', url: BASE_URL }],
  alternates: {
    canonical: 'https://growthstats.io/web-development',
  },
  openGraph: {
    title: 'Web Design Agency | Web Design & Web Development Services',
    description:
      'Elevate your online presence with Growth Stats web development services. Our expert developers create robust, scalable, and high-performance websites tailored to meet your business needs.',
    siteName: 'Growth Stats',
    type: 'website',
    url: `${BASE_URL}/web-development`,
    images: [
      {
        url: `${BASE_URL}/screenshots/homepage-og.png`, // TODO: replace with an actual image URL if available
        width: 800,
        height: 600,
        alt: 'Web Development Services by Growth Stats',
      },
    ],
  },
};

const WebDevelopment = () => <WebDevelopmentPageTemplate />;

export default WebDevelopment;
