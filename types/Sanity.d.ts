/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SanityImageObject } from '@sanity/image-url/lib/types/types';
import type { SanityDocument } from 'next-sanity';

declare global {
  namespace Sanity {
    // documents

    type Site = SanityDocument<{
      title: string;
      logo?: Logo;
      announcements?: Announcement[];
      ctas?: CTA[];
      copyright?: any;
      headerMenu?: Navigation;
      footerMenu?: Navigation;
      social?: Navigation;
      ogimage?: string;
    }>;

    type Navigation = SanityDocument<{
      title: string;
      items?: (Link | LinkList)[];
    }>;

    type Announcement = SanityDocument<{
      content: any;
      cta?: Link;
      start?: string;
      end?: string;
    }>;

    // pages

    type PageBase = SanityDocument<{
      title?: string;
      metadata: Metadata;
    }>;

    type Page = PageBase & {
      readonly _type: 'page';
      modules?: Module[];
      language?: string;
    };

    type BlogPost = PageBase & {
      readonly _type: 'blog.post';
      body: any;
      readTime: number;
      headings?: { style: string; text: string; _key: string }[];
      categories: BlogCategory[];
      author: Person;
      featured: boolean;
      hideTableOfContents: boolean;
      publishDate: string;
      heroImage: Sanity.Image;
    };

    interface BlogCategory extends SanityDocument {
      title: string;
      slug: { current: string };
    }

    // miscellaneous

    type Logo = SanityDocument<{
      readonly _key: string;
      name: string;
      image?: Partial<{
        default: Image;
        light: Image;
        dark: Image;
      }>;
    }>;

    interface Person extends SanityDocument {
      name: string;
      image?: Image;
    }

    type Pricing = SanityDocument<{
      title: string;
      highlight?: string;
      price: {
        base: number;
        strikethrough?: number;
        suffix?: string;
      };
      ctas?: CTA[];
      content?: any;
    }>;

    interface Reputation extends SanityDocument {
      title?: string;
      subtitle?: string;
      repo?: string;
      showForks?: boolean;
      limit?: number;
      avatars?: Image[];
    }

    type Testimonial = SanityDocument<{
      readonly _key: string;
      content: any;
      author?: {
        name: string;
        title?: string;
        image?: Image;
      };
    }>;

    // objects

    type CTA = {
      link?: Link;
      style?: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | undefined;
      _key?: string;
    };

    type Image = SanityImageObject &
      Partial<{
        alt: string;
        loading: 'lazy' | 'eager';
        overlay: boolean;
      }>;

    type Video = {
      asset: {
        _ref: string;
      };
      alt: string;
      overlay: boolean;
    };

    type Link = {
      readonly _type: 'link';
      readonly _key: string;
      label: string;
      type: 'internal' | 'external';
      internal?: Page | BlogPost;
      external?: string;
      params?: string;
    };

    type LinkList = {
      readonly _type: 'link.list';
      link: Link;
      className?: string;
      links?: Link[];
    };

    type Metadata = {
      slug: { current: string }; // Slug for the page (e.g., URL path)
      title: string; // SEO meta title
      description: string; // SEO meta description
      image?: Image; // Main image for the page (social sharing or fallback)
      ogimage?: string; // OpenGraph image URL
      noIndex: boolean; // Flag to prevent search engine indexing
      keywords?: string[]; // Array of keywords for SEO
      canonical?: string; // Canonical URL for the page
      referrer?: string; // Referrer policy (default: 'origin-when-cross-origin')
      authors?: {
        name: string;
        url?: string; // Optional author URL
      }[]; // Array of authors for the page
      openGraph?: {
        title?: string; // OpenGraph title (defaults to `title` if not provided)
        description?: string; // OpenGraph description (defaults to `description`)
        type?:
          | 'website'
          | 'article'
          | 'book'
          | 'profile'
          | 'music.song'
          | 'music.album'
          | 'music.playlist'
          | 'music.radio_station'
          | 'video.movie'
          | 'video.episode'
          | 'video.tv_show'
          | 'video.other'
          | undefined; // OpenGraph type (e.g., 'website', 'article')
        siteName?: string; // OpenGraph site name
        images?: {
          image?: Image; // Image object for OpenGraph
          width?: number; // Image width
          height?: number; // Image height
          alt?: string; // Alt text for the image
        }[]; // Array of OpenGraph images
      };
    };

    type Module<T = string> = {
      _type: T;
      _key: string;
      uid?: string;
    };
  }
}

export {};
