import { Metadata } from 'next';

import SocialMediaServicesPageTemplate from '@/components/templates/social-media-services';
import { BASE_URL } from '@/utils/constants';

export const metadata: Metadata = {
  title: 'Social Media Services - Growth Stats | Enhance Your Social Presence',
  description:
    'Elevate your social media presence with Growth Stats comprehensive social media services. Our expert team crafts engaging content and manages your social profiles to build your brand and drive engagement.',
  keywords: ['Social Media Services', 'Social Media Management', 'Social Media Marketing', 'Brand Building', 'Engagement', 'Growth Stats'],
  authors: [{ name: 'Growth Stats', url: BASE_URL }],
  openGraph: {
    title: 'Social Media Services - Growth Stats | Enhance Your Social Presence',
    description:
      'Elevate your social media presence with Growth Stats comprehensive social media services. Our expert team crafts engaging content and manages your social profiles to build your brand and drive engagement.',
    siteName: 'Growth Stats',
    type: 'website',
    url: `${BASE_URL}/social-media-services`,
    images: [
      {
        url: 'https://www.yourwebsite.com/images/social-media-services.jpg', // TODO: replace with an actual image URL if available
        width: 800,
        height: 600,
        alt: 'Social Media Services by Growth Stats',
      },
    ],
  },
};

const SocialMediaServices = () => (
  <div>
    <SocialMediaServicesPageTemplate />
  </div>
);

export default SocialMediaServices;
