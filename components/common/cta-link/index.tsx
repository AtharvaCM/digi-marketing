import { stegaClean } from '@sanity/client/stega';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { processUrl } from '@/sanity/lib/url';

export default function CTALink({ link, style, className, children, ...rest }: Sanity.CTA & React.HTMLAttributes<HTMLAnchorElement>) {
  // If children is passed in and is a React element, use it directly.
  // Otherwise, stegaClean the fallback text from the link object.
  const fallbackText = link?.label || link?.internal?.title || link?.external;
  let linkContent = children;

  // If children is undefined or null, or if it's a string, handle it:
  if (!linkContent) {
    linkContent = fallbackText;
  }
  if (typeof linkContent === 'string') {
    linkContent = stegaClean(linkContent);
  }

  // For aria-label, we want to pass a string:
  const ariaLabel = typeof fallbackText === 'string' ? stegaClean(fallbackText) : 'Link';

  const props = {
    className: cn(buttonVariants({ variant: style ?? 'link', size: 'link' }), className),
    children: linkContent,
    'aria-label': ariaLabel,
    ...rest,
  };

  if (link?.type === 'internal' && link.internal) {
    return (
      <Link
        href={processUrl(link.internal, {
          base: false,
          params: link.params,
        })}
        {...props}
      >
        {linkContent}
      </Link>
    );
  }

  if (link?.type === 'external' && link.external) {
    return (
      <a href={stegaClean(link.external)} {...props}>
        {linkContent}
      </a>
    );
  }

  // Fallback if link is missing
  return <>{linkContent}</>;
}
