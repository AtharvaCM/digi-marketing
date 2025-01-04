export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-30';

export const dataset = assertValue(process.env.NEXT_PUBLIC_SANITY_DATASET, 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
);

export const readToken = process.env.SANITY_API_READ_TOKEN;

export const previewSecretDocumentId: `${string}.${string}` = 'preview.secret';

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

export const dev = process.env.NODE_ENV === 'development' || process.env.ENABLE_PREVIEW === 'true';

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ??
  (process.env.NEXT_PUBLIC_VERCEL_URL && new URL('/', `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`).toString());

export const vercelPreview = process.env.VERCEL_ENV === 'preview';
