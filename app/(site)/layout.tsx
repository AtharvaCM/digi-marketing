import '@/app/globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Theme } from '@radix-ui/themes';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import cx from 'classnames';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { LenisScroller } from '@/components/common/lennis-scroller';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import VisualEditingControls from '@/components/VisualEditingControls';
import orgSchemaJsonLd from '@/public/assets/org-schema.json';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="light">
      <body className={cx('bg-white', inter.variable)}>
        <NextTopLoader />
        <NuqsAdapter>
          <Theme accentColor="blue" grayColor="slate" appearance="light">
            <Header />
            <main role="main" className="mx-auto">
              {children}
            </main>
            <Footer />
            <Toaster />
            <LenisScroller />
            <VisualEditingControls />
          </Theme>
        </NuqsAdapter>

        <Analytics />
        <SpeedInsights />
        {/* Org Schema JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchemaJsonLd) }} />
        {/* GA4 */}
        <GoogleAnalytics gaId="G-EJSN3DYVRB" />
      </body>
    </html>
  );
}
