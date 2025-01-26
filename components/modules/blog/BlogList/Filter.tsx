'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { cn } from '@/lib/utils';

import Category from '../Category';
import { categoryStore } from '../store';
import css from './Filtering.module.css';

export default function Filter({ label, value = 'All' }: Readonly<{ label: string; value?: string }>) {
  const { selected, setSelected, reset } = categoryStore();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(reset, [usePathname()]);

  return (
    <button
      className={cn(css.filter, '!py-1', selected === value ? 'action *:text-white/50' : 'ghost border border-transparent')}
      onClick={() => setSelected(value)}
    >
      <Category label={label} />
    </button>
  );
}
