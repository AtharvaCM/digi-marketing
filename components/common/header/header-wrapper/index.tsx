'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function HeaderWrapper({ className, children }: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // set --header-height
  useEffect(() => {
    if (typeof window === 'undefined') return;

    function setHeight() {
      if (!ref.current) return;
      document.documentElement.style.setProperty('--header-height', `${ref.current.offsetHeight ?? 0}px`);
    }
    setHeight();
    window.addEventListener('resize', setHeight);

    return () => window.removeEventListener('resize', setHeight);
  }, []);

  // close mobile menu after navigation
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const toggle = document.querySelector('#header-open') as HTMLInputElement;
    if (toggle) toggle.checked = false;
  }, [pathname]);

  return (
    <header ref={ref} className={className}>
      {children}
    </header>
  );
}
