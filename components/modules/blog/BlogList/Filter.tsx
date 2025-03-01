'use client';

import { Button } from '@/components/ui/button';
import { usePageState } from '@/lib/usePagination';
import { cn } from '@/lib/utils';

import Category from '../Category';
import { useBlogFilters } from '../store';
import css from './FilterList.module.css';

export default function Filter({ label, value = 'All' }: Readonly<{ label: string; value?: string }>) {
  const { category, setCategory } = useBlogFilters();
  const { setPage } = usePageState();

  return (
    <Button
      className={cn(css.filter, 'py-1!')}
      variant={category === value ? 'secondary' : 'link'}
      onClick={() => {
        setCategory(value);
        setPage(1);
      }}
    >
      <Category label={label} />
    </Button>
  );
}
