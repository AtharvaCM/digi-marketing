'use client';

import { Box, DropdownMenu, Flex, Text } from '@radix-ui/themes';
import { useWindowScroll } from '@uidotdev/usehooks';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { ChevronDownIcon } from '../icons/icon-components';
import styles from './header.module.scss';

export interface IHeaderProps {}

export default function Header(_props: IHeaderProps) {
  const pathname = usePathname();
  const [{ y }] = useWindowScroll();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const enableBgTransparent = y !== null && y < 100 && !isMenuOpen;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
  ];

  const servicesLinks = [
    {
      title: 'Search Engine Optimization',
      href: '/search-engine-optimization',
    },
    {
      title: 'Email Marketing & Automation',
      href: '/email-marketing-automation',
    },
    {
      title: 'SEM / Paid Advertising',
      href: '/sem-paid-advertising',
    },
    {
      title: 'Social Media Services',
      href: '/social-media-services',
    },
    {
      title: 'Web Design',
      href: '/web-design',
    },
    {
      title: 'Web Development',
      href: '/web-development',
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const shouldApplyWhiteColor = (pathname: string) => {
    const paths = ['/', '/contact'];
    return paths.includes(pathname);
  };

  return (
    <header
      role="banner"
      className={cx(styles['d-container'], {
        [styles['d-container--enable-bg-transparent']]: enableBgTransparent,
        [styles['d-container--enable-fixed-pos']]: true,
        [styles['d-container--color-white']]: enableBgTransparent && shouldApplyWhiteColor(pathname),
        [styles['d-container__home-page']]: enableBgTransparent && pathname === '/',
        'about-page': pathname === '/about',
      })}
    >
      <nav role="navigation" className={cx(styles['d-container__nav'])}>
        <div className={styles['d-container__brand']}>
          <Link href="/" className={styles['d-container__brand-link']}>
            <Image alt="Growth Stats Logo" src={'/logo.png'} width={48} height={48} />
            <Text className={cx(styles['d-container__brand-name'])}>Growth Stats</Text>
          </Link>
        </div>
        <div className={styles['d-container__nav-links']}>
          {navLinks.map((link) =>
            link.name === 'Services' ? (
              <DropdownMenu.Root key={link.name}>
                <DropdownMenu.Trigger>
                  <button
                    className={cx(styles['d-container__nav-link'], {
                      [styles['d-container__nav-link--active']]: pathname?.startsWith('/services'),
                    })}
                  >
                    <Flex align={'center'} gap={'1'}>
                      <Text size={'5'} weight={'bold'}>
                        Services
                      </Text>
                      <ChevronDownIcon size={20} />
                    </Flex>
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content align="center">
                  <Flex direction={'column'} p={'4'} gap={'2'} className={cx(styles['d-container__dropdown-services'])}>
                    {servicesLinks.map((service) => (
                      <Link key={service.href} className={cx(styles['d-container__dropdown-service-link'])} href={service.href}>
                        <Text as="p" weight={'bold'}>
                          {service.title}
                        </Text>
                      </Link>
                    ))}
                  </Flex>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            ) : (
              <Link
                href={link.href}
                key={link.name}
                className={`${styles['d-container__nav-link']} ${pathname === link.href ? styles['d-container__nav-link--active'] : ''}`}
              >
                <Text size={'5'} weight={'bold'}>
                  {link.name}
                </Text>
              </Link>
            ),
          )}
        </div>
        <div className={styles['d-container__contact-link-wrapper']}>
          <Link href={'/contact'} className={cx(styles['d-container__contact-link'])}>
            <Text size={'5'} weight={'bold'}>
              Let&apos;s talk
            </Text>
          </Link>
        </div>

        <div className={cx(styles['d-container__menu-button-container'])}>
          <button
            onClick={toggleMenu}
            type="button"
            className={cx(styles['d-container__menu-button'])}
            aria-label="Toggle Menu Button"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      {/* Mobile */}
      <div className={cx(styles['d-container__mobile-menu'], { [styles['d-container__mobile-menu--open']]: isMenuOpen })} id="mobile-menu">
        <div className={cx(styles['d-container__mobile-menu-content'])}>
          <Box mb={'5'} my={'3'}>
            <Link href="/" className={styles['d-container__brand-link']}>
              <Image alt="Growth Stats Logo" src={'/logo.png'} width={48} height={48} />
              <Text size={'6'} weight={'bold'}>
                Growth Stats
              </Text>
            </Link>
          </Box>
          {navLinks?.map((link) =>
            link.name === 'Services' ? (
              <div key={`${link.name}-mobile-container`}>
                <Flex align={'center'} gap={'1'} justify={'between'}>
                  <Link href={link.href} className={styles['d-container__mobile-menu-link']}>
                    <Text as="p" weight={'medium'}>
                      Services
                    </Text>
                  </Link>
                  <button
                    className={cx(styles['d-container__mobile-menu-toggle'], {
                      [styles['d-container__mobile-menu-toggle--open']]: isServicesDropdownOpen,
                    })}
                    onClick={() => setIsServicesDropdownOpen((prev) => !prev)}
                  >
                    <ChevronDownIcon size={20} className={cx(styles['d-container__mobile-toggle-icon'])} />
                  </button>
                </Flex>
                <Box className={cx(styles['d-container__services-mobile-container'])}>
                  <Box
                    className={cx(styles['d-container__services-mobile'], {
                      [styles['d-container__services-mobile--open']]: isServicesDropdownOpen,
                    })}
                  >
                    <Flex direction={'column'} p={'2'} gap={'2'} className={cx(styles['d-container__dropdown-services'])}>
                      {servicesLinks.map((service) => (
                        <Link
                          key={`${service.title}-mobile`}
                          className={cx(styles['d-container__dropdown-service-link'])}
                          href={service.href}
                        >
                          <Text as="p" weight={'medium'}>
                            {service.title}
                          </Text>
                        </Link>
                      ))}
                    </Flex>
                  </Box>
                </Box>
                <hr />
              </div>
            ) : (
              <div key={`${link.name}-mobile-container`}>
                <Link href={link.href} key={`${link.name}-mobile`} className={styles['d-container__mobile-menu-link']}>
                  <Text as="p" weight={'medium'}>
                    {link.name}
                  </Text>
                </Link>
                <hr />
              </div>
            ),
          )}
          <div className={styles['d-container__mobile-contact-link-wrapper']}>
            <Link href={'/contact'} className={cx(styles['d-container__contact-link'])}>
              <Text size={'4'} weight={'medium'}>
                Let&apos;s talk
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}