/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react';
import { stegaClean } from '@sanity/client/stega';

import { cn } from '@/lib/utils';

import CustomHTML from '../CustomHTML';
import AnchoredHeading from './AnchoredHeading';
import Code from './Code';
import CustomImage from './Image';
import { YouTubeEmbed } from './YouTubeEmbed';

// Block components
const HeadingComponent = (as: 'h2' | 'h3' | 'h4' | 'h5' | 'h6') => {
  const Component = (node: any) => <AnchoredHeading as={as} {...node} />;
  Component.displayName = `HeadingComponent(${as})`;
  return Component;
};

const BlockquoteComponent = ({ children }: { children?: React.ReactNode }) => (
  <blockquote className="rounded-xl px-4 py-6 bg-[--blue-3] h4 text-center">
    <p>{children}</p>
  </blockquote>
);

const components = {
  block: {
    h2: HeadingComponent('h2'),
    h3: HeadingComponent('h3'),
    h4: HeadingComponent('h4'),
    h5: HeadingComponent('h5'),
    h6: HeadingComponent('h6'),
    blockquote: BlockquoteComponent,
  },
  types: {
    image: CustomImage,
    code: Code,
    'custom-html': ({ value }: { value: any }) => <CustomHTML {...value} />,
    youtube: YouTubeEmbed,
  },
};

export default function Content({ value, className, children }: { value: any } & React.ComponentProps<'div'>) {
  return (
    <div className={cn('richtext w-full space-y-[1em] [&>:first-child]:!mt-0', className)}>
      <PortableText value={stegaClean(value)} components={components} />
      {children}
    </div>
  );
}
