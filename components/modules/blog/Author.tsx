import { GoPerson } from 'react-icons/go';

import Img from '@/components/common/Img';

export default function Author({
  author,
  ...props
}: {
  author?: Sanity.Person;
  skeleton?: boolean;
} & React.ComponentProps<'div'>) {
  if (!author) return null;

  return (
    <div {...props}>
      <div className="flex items-center gap-[.5ch]">
        <div className="grid aspect-square w-[1.7em] shrink-0 place-content-center overflow-hidden rounded-full bg-neutral-50">
          {author?.image ? (
            <Img className="aspect-square" image={author.image} width={60} alt={author.name} />
          ) : (
            <GoPerson className="text-accent/20 text-xl" />
          )}
        </div>

        <div className="text-white">{author?.name}</div>
      </div>
    </div>
  );
}
