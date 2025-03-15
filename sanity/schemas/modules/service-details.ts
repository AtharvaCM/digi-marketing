import { IoIosImage } from 'react-icons/io';
import { LuServer } from 'react-icons/lu';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'service-details',
  title: 'Service Details',
  icon: LuServer,
  type: 'object',
  description:
    'Detailed information about a specific service, including its title, description, call-to-actions, hero animation, and features.',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Service Title',
      description: 'The name of the service being detailed.',
      validation: (Rule) => Rule.required().error('A title is required for the service.'),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Service Description',
      description: 'A short summary or description of the service.',
      rows: 3,
      validation: (Rule) => Rule.required().error('A description is required for the service.'),
    }),
    defineField({
      name: 'ctas',
      title: 'Call-to-action',
      type: 'cta',
      description: 'CTA button or link that prompt user interaction.',
    }),
    defineField({
      name: 'heroAnimationSrc',
      title: 'Hero Animation (Lottie JSON) Src',
      type: 'url',
      description: 'Lottie JSON file src to display as the hero animation.',
      validation: (Rule) => Rule.uri({ allowRelative: true }).required().error('A valid Lottie JSON file URL is required.'),
    }),

    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      description: 'A list of key features for the service.',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Feature Name',
              description: 'The name of the feature.',
              validation: (Rule) => Rule.required().error('A name is required for each feature.'),
            },
            {
              name: 'description',
              type: 'text',
              title: 'Feature Description',
              description: 'A brief description of the feature.',
              rows: 3,
            },
            {
              name: 'img',
              type: 'image',
              title: 'Feature Image',
              description: 'An image representing the feature. Use the Sanity DAM for asset management.',
              icon: IoIosImage,
              options: { hotspot: true },
              fields: [
                defineField({
                  name: 'caption',
                  type: 'text',
                  title: 'Image Caption',
                  description: 'A caption for the image.',
                  rows: 2,
                }),
                defineField({
                  name: 'alt',
                  type: 'string',
                  title: 'Alt Text',
                  description: 'Alternative text for the image for accessibility and SEO.',
                }),
                defineField({
                  name: 'source',
                  type: 'url',
                  title: 'Image Source',
                  description: 'The original source or credit for the image.',
                }),
                defineField({
                  name: 'loading',
                  type: 'string',
                  title: 'Loading Behavior',
                  description: 'Determines when the image should load.',
                  options: {
                    list: [
                      { title: 'Lazy', value: 'lazy' },
                      { title: 'Eager', value: 'eager' },
                    ],
                  },
                  initialValue: 'lazy',
                }),
              ],
            },
            {
              name: 'color',
              type: 'string',
              title: 'Color',
              description: 'The color theme associated with the feature.',
              options: {
                list: ['plum', 'orange', 'blue', 'green', 'yellow'],
              },
            },
            {
              name: 'layout',
              type: 'string',
              title: 'Layout',
              description: 'Defines the layout style for the feature.',
              options: {
                list: ['normal', 'reverse'],
              },
              initialValue: 'normal',
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'description',
              media: 'img',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title,
                subtitle: subtitle,
                media,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'heroAnimation',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'No title provided',
        subtitle: subtitle || 'No description available',
        media: media || IoIosImage,
      };
    },
  },
});
