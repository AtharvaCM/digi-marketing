import { Metadata } from 'next';

import ServicesPageTemplate from '@/components/templates/services';
import { BASE_URL } from '@/utils/constants';

export interface IServicesProps {}

export const metadata: Metadata = {
  title: 'Digital Marketing Services',
  description:
    'Explore the range of services offered by Growth Stats, including SEO, web design, social media marketing, email marketing automation, and more. Our expert team is dedicated to driving your business growth.',
  generator: 'Next.js',
  applicationName: 'Growth Stats',
  referrer: 'origin-when-cross-origin',
  keywords: ['Digital Marketing Services', 'SEO', 'Web Design', 'Social Media Marketing', 'Email Marketing Automation', 'Growth Stats'],
  authors: [{ name: 'Growth Stats', url: BASE_URL }],
  alternates: {
    canonical: 'https://growthstats.io/services',
  },
  openGraph: {
    title: 'Digital Marketing Services',
    description:
      'Explore the range of services offered by Growth Stats, including SEO, web design, social media marketing, email marketing automation, and more. Our expert team is dedicated to driving your business growth.',
    siteName: 'Growth Stats',
    type: 'website',
    url: `${BASE_URL}/services`,
    images: [
      {
        url: `${BASE_URL}/screenshots/homepage-og.png`, // TODO: replace with an actual image URL if available
        width: 800,
        height: 600,
        alt: 'Our Services by Growth Stats',
      },
    ],
  },
};

export default function DigitalMarketing(_props: IServicesProps) {
  return <ServicesPageTemplate />;
}
