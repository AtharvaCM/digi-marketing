export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

export const PROD_BASE_URL = 'https://growthstats.io';

export const DEFAULT_IMG = {
  _type: 'image',
  asset: {
    _ref: 'image-bbb1f24586be0c107167578ef46c23631d38f81d-1500x1000-webp',
    _type: 'reference',
  },
};
