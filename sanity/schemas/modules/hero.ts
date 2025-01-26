import { TfiLayoutCtaCenter } from 'react-icons/tfi';
import { defineField, defineType } from 'sanity';

import { getBlockText } from '../../utils';
import { alignItems, alignmentFieldset, textAlign } from '../fragments/fields/alignment';

export default defineType({
  name: 'hero',
  title: 'Hero',
  icon: TfiLayoutCtaCenter,
  type: 'object',
  groups: [{ name: 'content', default: true }, { name: 'media' }, { name: 'options' }],
  fieldsets: [alignmentFieldset, { name: 'media', options: { columns: 2 } }],
  fields: [
    defineField({
      name: 'pretitle',
      type: 'string',
      description: 'A small text displayed above the main title.',
      group: 'content',
    }),
    defineField({
      name: 'content',
      type: 'array',
      description: 'The main content of the hero section, typically a block of text.',
      of: [{ type: 'block' }, { type: 'custom-html' }],
      group: 'content',
    }),
    defineField({
      name: 'ctas',
      title: 'Call-to-actions',
      description: 'List of call-to-action buttons.',
      type: 'array',
      of: [{ type: 'cta' }],
      group: 'content',
    }),
    defineField({
      name: 'bgType',
      title: 'Background Type',
      description: 'Select the type of background (image or video).',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
      },
      initialValue: 'image',
      group: 'media',
    }),
    defineField({
      name: 'bgImage',
      title: 'Background image',
      description: 'The background image for the hero section.',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          description: 'Alternative text for the background image.',
          type: 'string',
        }),
        defineField({
          name: 'loading',
          description: 'Loading strategy for the background image.',
          type: 'string',
          options: {
            layout: 'radio',
            list: ['lazy', 'eager'],
          },
          initialValue: 'lazy',
        }),
        defineField({
          name: 'overlay',
          title: 'Dark Overlay',
          description: 'Adds a dark overlay to the image to improve text readability.',
          type: 'boolean',
          initialValue: true,
        }),
      ],
      hidden: ({ parent }) => parent?.bgType !== 'image',
      group: 'media',
    }),
    defineField({
      name: 'bgImageMobile',
      title: 'Background image (mobile)',
      description: 'The background image for the hero section on mobile devices.',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'loading',
          type: 'string',
          options: {
            list: ['lazy', 'eager'],
            layout: 'radio',
          },
          initialValue: 'lazy',
        }),
      ],
      // validation: (Rule) => Rule.required(), // TODO: Make it required only when the bgType is image
      hidden: ({ parent }) => parent?.bgType !== 'image',
      group: 'media',
      fieldset: 'media',
    }),
    defineField({
      name: 'bgVideo',
      title: 'Background Video',
      description: 'The background video for the hero section.',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          description: 'Alternative text for the background video.',
          type: 'string',
        }),
        defineField({
          name: 'overlay',
          title: 'Dark Overlay',
          description: 'Adds a dark overlay to the video to improve text readability.',
          type: 'boolean',
          initialValue: true,
        }),
      ],
      hidden: ({ parent }) => parent?.bgType !== 'video',
      fieldset: 'media',
      group: 'media',
    }),
    defineField({
      name: 'bgVideoThumbnail',
      title: 'Background Video Thumbnail',
      description: 'A thumbnail image for the video to be displayed until the video loads.',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.bgType !== 'video',
      fieldset: 'media',
      group: 'media',
    }),
    defineField({
      ...textAlign,
      fieldset: 'alignment',
      description: 'Text alignment options.',
    }),
    defineField({
      ...alignItems,
      fieldset: 'alignment',
      description: 'Alignment options for the content.',
    }),
  ],
  preview: {
    select: {
      content: 'content',
      media: 'bgImage',
    },
    prepare: ({ content, media }) => ({
      title: getBlockText(content),
      subtitle: 'Hero',
      media,
    }),
  },
});
