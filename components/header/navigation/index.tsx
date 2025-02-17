/* eslint-disable @typescript-eslint/no-explicit-any */
import CTALink from '@/components/common/cta-link';
import { cn } from '@/lib/utils';
import { getSiteData } from '@/sanity/utils/get-site-data';

import styles from '../header.module.scss';
import LinkList from '../link-list';

export default async function Menu() {
  const { headerMenu } = await getSiteData();

  return (
    <nav className={cn(styles['d-container__nav'], 'max-md:anim-fade-to-r max-md:header-closed:hidden')}>
      {headerMenu?.items?.map((item: any) => {
        switch (item._type) {
          case 'link':
            return <CTALink className={cn('hover:link', styles['d-container__nav-link'])} link={item} key={item._key} />;

          case 'link.list':
            return <LinkList {...item} className={cn(styles['d-container__nav-link-list'])} key={item._key} />;

          default:
            return null;
        }
      })}
    </nav>
  );
}
