import { stegaClean } from '@sanity/client/stega';

import { cn } from '@/lib/utils';

export default function Pretitle({ className, children }: Readonly<React.HTMLProps<HTMLParagraphElement>>) {
  if (!children) return null;

  return <p className={cn('technical', className)}>{stegaClean(children)}</p>;
}
