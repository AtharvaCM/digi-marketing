'use client';

import { useWindowScroll } from '@uidotdev/usehooks';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import styles from '../header.module.scss';

export default function HeaderWrapper({ className, children }: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [{ y }] = useWindowScroll();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const enableBgTransparent = !isMenuOpen && y !== null && y < 100;

  const shouldApplyWhiteColor = (pathname: string) => {
    const paths = ['/', '/contact'];
    return paths.includes(pathname);
  };

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
    setIsMenuOpen(false);
  }, [pathname]);

  // track mobile menu toggle state
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const toggle = document.querySelector('#header-open') as HTMLInputElement;
    if (toggle) {
      const handleToggle = () => setIsMenuOpen(toggle.checked);
      toggle.addEventListener('change', handleToggle);

      return () => toggle.removeEventListener('change', handleToggle);
    }
  }, []);

  return (
    <header
      ref={ref}
      className={cn(className, {
        [styles['header-wrapper--enable-bg-transparent']]: enableBgTransparent,
        [styles['header-wrapper--color-white']]: enableBgTransparent && shouldApplyWhiteColor(pathname),
        [styles['header-wrapper__home-page']]: enableBgTransparent && pathname === '/',
        'about-page': pathname === '/about',
      })}
    >
      {children}
    </header>
  );
}
