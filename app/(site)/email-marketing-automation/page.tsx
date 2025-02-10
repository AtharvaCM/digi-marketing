import { Metadata } from 'next';

import EmailMarketingAutomationPageTemplate from '@/components/templates/email-marketing-automation';
import { BASE_URL } from '@/utils/constants';

export interface IEmailMarketingAutomationProps {}

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Email Marketing & Automation',
  description:
    'Maximize your customer engagement with Growth Stats email marketing automation services. Our tailored strategies and advanced tools ensure effective communication and higher conversion rates for your business.',
  generator: 'Next.js',
  applicationName: 'Growth Stats',
  referrer: 'origin-when-cross-origin',
  keywords: ['Email Marketing', 'Marketing Automation', 'Customer Engagement', 'Email Campaigns', 'Conversion Rates', 'Growth Stats'],
  alternates: {
    canonical: 'https://growthstats.io/email-marketing-automation',
  },
  authors: [{ name: 'Growth Stats', url: BASE_URL }],
  openGraph: {
    title: 'Digital Marketing Services | Email Marketing & Automation',
    description:
      'Maximize your customer engagement with Growth Stats email marketing automation services. Our tailored strategies and advanced tools ensure effective communication and higher conversion rates for your business.',
    siteName: 'Growth Stats',
    type: 'website',
    url: `${BASE_URL}/email-marketing-automation`,
    images: [
      {
        url: `${BASE_URL}/screenshots/homepage-og.png`, // TODO: replace with an actual image URL if available
        width: 800,
        height: 600,
        alt: 'Email Marketing Automation by Growth Stats',
      },
    ],
  },
};

export default function EmailMarketingAutomation(_props: IEmailMarketingAutomationProps) {
  return <EmailMarketingAutomationPageTemplate />;
}
