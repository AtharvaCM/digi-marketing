/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTelegram, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { IoIosLink } from 'react-icons/io';

import { cn } from '@/lib/utils';
import { getSiteData } from '@/sanity/utils/get-site-data';

import CTALink from '../cta-link';

export default async function Social({ className }: React.HTMLProps<HTMLDivElement>) {
  const { social } = await getSiteData();

  if (!social?.items?.length) return null;

  return (
    <nav className={cn('group flex flex-wrap items-center', className)}>
      {social.items.map((item: any) => {
        if (item._type === 'link') {
          return (
            <CTALink className="px-2 py-1 hover:opacity-100! group-has-[a:hover]:opacity-50 hover:text-primary" link={item} key={item._key}>
              <Icon url={item.external} aria-label={item.label} />
            </CTALink>
          );
        }

        return null;
      })}
    </nav>
  );
}

const iconMap: { [key: string]: React.ComponentType<React.HTMLProps<SVGElement>> } = {
  'www.facebook.com': FaFacebookF,
  'github.com': FaGithub,
  'www.instagram.com': FaInstagram,
  'www.linkedin.com': FaLinkedinIn,
  'tiktok.com': FaTiktok,
  'twitter.com': FaXTwitter,
  'x.com': FaXTwitter,
  'youtube.com': FaYoutube,
  't.me': FaTelegram,
};

function Icon({ url, ...props }: { url?: string } & React.HTMLProps<SVGElement>) {
  if (!url) return null;

  let hostname: string;
  try {
    hostname = new URL(url).hostname;
  } catch (e) {
    return null; // Return null if the URL is invalid
  }

  const IconComponent = iconMap[hostname] || IoIosLink;

  return <IconComponent {...props} />;
}
