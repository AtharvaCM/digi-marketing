export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

export const PROD_BASE_URL = 'https://growthstats.io';
