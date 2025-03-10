import { Metadata } from 'next';

import ContactPageTemplate from '@/components/templates/contact';
import { BASE_URL } from '@/utils/constants';

export interface IContactProps {}

export const metadata: Metadata = {
  title: 'Contact Us - Growth Stats | Get In Touch',
  description:
    'Reach out to Growth Stats for any inquiries or to get started with our digital marketing services. We are here to help you grow your business through expert online marketing solutions.',
  generator: 'Next.js',
  applicationName: 'Growth Stats',
  referrer: 'origin-when-cross-origin',
  keywords: ['Contact Growth Stats', 'Digital Marketing Inquiries', 'Get In Touch', 'Online Marketing Solutions', 'Business Growth'],
  alternates: {
    canonical: 'https://growthstats.io/contact',
  },
  authors: [{ name: 'Growth Stats', url: BASE_URL }],
  openGraph: {
    title: 'Contact Us - Growth Stats | Get In Touch',
    description:
      'Reach out to Growth Stats for any inquiries or to get started with our digital marketing services. We are here to help you grow your business through expert online marketing solutions.',
    siteName: 'Growth Stats',
    type: 'website',
    url: `${BASE_URL}/contact`,
    images: [
      {
        url: `${BASE_URL}/screenshots/homepage-og.png`, // TODO: replace with an actual image URL if available
        width: 800,
        height: 600,
        alt: 'Contact Growth Stats',
      },
    ],
  },
};

export default function Contact(_props: IContactProps) {
  return <ContactPageTemplate />;
}
