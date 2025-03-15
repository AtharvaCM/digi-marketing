import createImageUrlBuilder from '@sanity/image-url';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: Sanity.Image) => imageBuilder?.image(source).auto('format').fit('max').url();

export function urlFor(image: Sanity.Image) {
  return imageBuilder.image(image);
}
