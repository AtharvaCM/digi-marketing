import { Badge } from '@/components/ui/badge';

export default function Category({ value, label }: Readonly<{ value?: Sanity.BlogCategory; label?: string }>) {
  return (
    <>
      <Badge variant="outline">#{label ?? value?.title}</Badge>
    </>
  );
}
