import { defineField, defineType } from 'sanity';

import { isUniqueOtherThanLanguage } from '@/sanity/utils/is-unique-other-than-language';

import StringInput from '../fragments/input/StringInput';

export default defineType({
  name: 'metadata',
  title: 'Metadata',
  description: 'For search engines',
  type: 'object',
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL path / permalink. Use "index" for the homepage.',
      options: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        source: (doc: any) => doc.title || doc.metadata.title,
        isUnique: isUniqueOtherThanLanguage,
      },
      validation: (Rule) => Rule.required().error('The slug is requried.'),
    }),
    defineField({
      name: 'title',
      type: 'string',
      description: 'The SEO Meta Title, ideally between 50 and 60 characters.',
      validation: (Rule) => Rule.max(60).warning('The SEO Meta Title should be between 50 and 60 characters.'),
      components: { input: StringInput },
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160).warning('The SEO Meta Description should be between 50 and 160 characters.'),
      components: { input: StringInput },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      description: 'Used for social sharing previews',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index',
      description: 'Prevent search engines from indexing this page',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});
