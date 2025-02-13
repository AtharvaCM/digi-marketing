import { SearchIcon } from '@sanity/icons';
import { RiPagesFill } from 'react-icons/ri';
import { VscEdit } from 'react-icons/vsc';
import { defineArrayMember, defineField, defineType } from 'sanity';

import imageBlock from '../fragments/image-block';

export default defineType({
  name: 'blog.post',
  title: 'Blog post',
  icon: VscEdit,
  type: 'document',
  groups: [{ name: 'content', icon: RiPagesFill, default: true }, { name: 'options' }, { name: 'seo', title: 'SEO', icon: SearchIcon }],
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().error('A title is required.'),
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }),
      ],
      validation: (Rule) => Rule.required().error('A hero image is required.'),
    }),
    defineField({
      name: 'publishDate',
      type: 'date',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'person' }],
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog.category' }],
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'body',
      type: 'array',
      group: 'content',
      of: [
        { type: 'block' },
        imageBlock,
        defineArrayMember({
          type: 'youtube',
        }),
        defineArrayMember({
          title: 'Code block',
          type: 'code',
          options: {
            withFilename: true,
          },
        }),
        { type: 'custom-html' },
      ],
    }),
    defineField({
      name: 'hideTableOfContents',
      type: 'boolean',
      group: 'options',
      initialValue: false,
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      group: 'options',
      initialValue: false,
    }),
    defineField({
      name: 'relatedPosts',
      type: 'array',
      group: 'content',
      of: [{ type: 'reference', to: [{ type: 'blog.post' }] }],
    }),
    defineField({
      name: 'metadata',
      type: 'metadata',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      featured: 'featured',
      title: 'title',
      publishDate: 'publishDate',
      media: 'heroImage',
    },
    prepare: ({ title, publishDate, media, featured }) => ({
      title: [featured && '★', title].filter(Boolean).join(' '),
      subtitle: publishDate,
      media,
    }),
  },
  orderings: [
    {
      title: 'Date',
      name: 'date',
      by: [{ field: 'publishDate', direction: 'desc' }],
    },
    {
      title: 'Title',
      name: 'title',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
});
