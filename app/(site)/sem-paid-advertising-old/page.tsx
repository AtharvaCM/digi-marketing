import { Metadata } from 'next';

import SEMPaidAdvertisingPageTemplate from '@/components/templates/sem-paid-advertising';
import { BASE_URL } from '@/utils/constants';

export const metadata: Metadata = {
  title: 'SEM & Paid Advertising - Growth Stats | Drive Targeted Traffic',
  description:
    'Boost your online presence and drive targeted traffic with Growth Stats SEM and paid advertising services. Our expert team creates and manages effective ad campaigns to maximize your ROI.',
  generator: 'Next.js',
  applicationName: 'Growth Stats',
  referrer: 'origin-when-cross-origin',
  keywords: ['SEM', 'Paid Advertising', 'Online Advertising', 'Targeted Traffic', 'Ad Campaigns', 'ROI', 'Growth Stats'],
  authors: [{ name: 'Growth Stats', url: BASE_URL }],
  alternates: {
    canonical: 'https://growthstats.io/sem-paid-advertising',
  },
  openGraph: {
    title: 'SEM & Paid Advertising - Growth Stats | Drive Targeted Traffic',
    description:
      'Boost your online presence and drive targeted traffic with Growth Stats SEM and paid advertising services. Our expert team creates and manages effective ad campaigns to maximize your ROI.',
    siteName: 'Growth Stats',
    type: 'website',
    url: `${BASE_URL}/sem-paid-advertising`,
    images: [
      {
        url: `${BASE_URL}/screenshots/homepage-og.png`, // TODO: replace with an actual image URL if available
        width: 800,
        height: 600,
        alt: 'SEM and Paid Advertising by Growth Stats',
      },
    ],
  },
};

const SEMPaidAdvertising = () => (
  <div>
    <SEMPaidAdvertisingPageTemplate />
  </div>
);

export default SEMPaidAdvertising;
