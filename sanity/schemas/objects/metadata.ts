import { defineField, defineType } from 'sanity';

import { DescriptionInputComponent, TitleInputComponent } from '@/sanity/ui/CharacterCount';
import { isUniqueOtherThanLanguage } from '@/sanity/utils/is-unique-other-than-language';

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
      validation: (Rule) => Rule.required().error('The slug is required.'),
    }),
    defineField({
      name: 'title',
      type: 'string',
      description: 'The SEO Meta Title, ideally between 50 and 60 characters.',
      validation: (Rule) => Rule.max(60).warning('The SEO Meta Title should be between 50 and 60 characters.'),
      components: {
        input: TitleInputComponent,
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      description: 'The SEO Meta Description, ideally between 50 and 160 characters.',
      validation: (Rule) => Rule.max(160).warning('The SEO Meta Description should be between 50 and 160 characters.'),
      components: { input: DescriptionInputComponent },
    }),
    defineField({
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      of: [{ type: 'string' }],
      description: 'Keywords for SEO, separated as individual entries.',
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
    defineField({
      name: 'canonical',
      type: 'url',
      title: 'Canonical URL',
      description: 'The canonical URL for this page.',
    }),
    defineField({
      name: 'referrer',
      type: 'string',
      title: 'Referrer Policy',
      description: 'Controls the referrer information included with requests.',
      initialValue: 'origin-when-cross-origin',
      options: {
        list: [
          { title: 'origin-when-cross-origin', value: 'origin-when-cross-origin' },
          { title: 'no-referrer', value: 'no-referrer' },
          { title: 'no-referrer-when-downgrade', value: 'no-referrer-when-downgrade' },
          { title: 'origin', value: 'origin' },
          { title: 'strict-origin', value: 'strict-origin' },
          { title: 'strict-origin-when-cross-origin', value: 'strict-origin-when-cross-origin' },
          { title: 'same-origin', value: 'same-origin' },
          { title: 'unsafe-url', value: 'unsafe-url' },
        ],
      },
    }),
    defineField({
      name: 'authors',
      type: 'array',
      title: 'Authors',
      of: [
        defineField({
          name: 'author',
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'authorUrl', type: 'url', title: 'URL' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'openGraph',
      title: 'Open Graph',
      description: 'Open Graph metadata for social sharing.',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'OG Title' },
        { name: 'description', type: 'string', title: 'OG Description' },
        { name: 'type', type: 'string', title: 'OG Type', initialValue: 'website' },
        { name: 'siteName', type: 'string', title: 'OG Site Name' },
        { name: 'canonical', type: 'url', title: 'OG URL' },
        defineField({
          name: 'images',
          type: 'array',
          title: 'OG Images',
          of: [
            defineField({
              name: 'OgImage',
              type: 'object',
              fields: [
                { name: 'image', type: 'image', title: 'Image' },
                { name: 'width', type: 'number', title: 'Width' },
                { name: 'height', type: 'number', title: 'Height' },
                { name: 'alt', type: 'string', title: 'Alt Text' },
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
