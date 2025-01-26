import { Metadata } from 'next';

import SearchEngineOptimizationPageTemplate from '@/components/templates/search-engine-optimization';
import { BASE_URL } from '@/utils/constants';

export interface IServicesProps {}

export const metadata: Metadata = {
  title: 'Search Engine Optimization (SEO) - Growth Stats | Improve Your Online Visibility',
  description:
    'Enhance your online visibility with Growth Stats comprehensive SEO services. Our expert team utilizes cutting-edge techniques to boost your search engine rankings and drive organic traffic to your website.',
  generator: 'Next.js',
  applicationName: 'Growth Stats',
  referrer: 'origin-when-cross-origin',
  keywords: ['Search Engine Optimization', 'SEO', 'Online Visibility', 'Organic Traffic', 'SEO Services', 'Growth Stats'],
  authors: [{ name: 'Growth Stats', url: BASE_URL }],
  alternates: {
    canonical: 'https://growthstats.io/search-engine-optimization',
  },
  openGraph: {
    title: 'Search Engine Optimization (SEO) - Growth Stats | Improve Your Online Visibility',
    description:
      'Enhance your online visibility with Growth Stats comprehensive SEO services. Our expert team utilizes cutting-edge techniques to boost your search engine rankings and drive organic traffic to your website.',
    siteName: 'Growth Stats',
    type: 'website',
    url: `${BASE_URL}/search-engine-optimization`,
    images: [
      {
        url: `${BASE_URL}/screenshots/homepage-og.png`, // TODO: replace with an actual image URL if available
        width: 800,
        height: 600,
        alt: 'SEO Services by Growth Stats',
      },
    ],
  },
};

export default function SearchEngineOptimization(_props: IServicesProps) {
  return <SearchEngineOptimizationPageTemplate />;
}
