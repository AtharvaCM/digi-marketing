import { PortableText } from '@portabletext/react';
import Link from 'next/link';

import { getSiteData } from '@/sanity/utils/get-site-data';

import Img from '../common/Img';
import Social from '../common/social';
import Navigation from './Navigation';

export default async function Footer() {
  const { title, logo, copyright } = await getSiteData();

  // const logoImage = logo?.image?.light || logo?.image?.default;
  const logoImage = null;

  return (
    <footer className="bg-secondary-foreground text-center text-secondary">
      <div className="section border-b border-background/20">
        <div className="mx-auto max-w-(--breakpoint-xl) space-y-8">
          <div className="flex flex-wrap justify-between gap-x-12 gap-y-8">
            <div className="flex flex-col gap-3 self-start max-sm:mx-auto max-sm:items-center">
              <Link className="h3 md:h2 max-w-max" href="/">
                {logoImage ? <Img className="max-h-[2em] w-auto" image={logoImage} alt={logo?.name || title} /> : title}
              </Link>

              <Social />
            </div>

            <Navigation />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 p-4 text-sm">
        &copy; {new Date().getFullYear()} {copyright ? <PortableText value={copyright} /> : title}
      </div>
    </footer>
  );
}
