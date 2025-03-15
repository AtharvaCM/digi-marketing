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
      name: 'backgroundColor',
      type: 'color',
      title: 'Background Color',
      description: 'Choose a background color for the blog header.',
      options: {
        disableAlpha: true, // Set to true if you only want solid colors
      },
      group: 'options',
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
      name: 'author',
      type: 'reference',
      to: [{ type: 'person' }],
      group: 'content',
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'blog.category' }],
      title: 'Category',
      description: 'Select the main category for this post.',
      validation: (Rule) => Rule.required().error('A category is required.'),
      group: 'content',
    }),
    defineField({
      name: 'subcategory',
      type: 'reference',
      to: [{ type: 'blog.category' }],
      title: 'Subcategory',
      description: 'Select a subcategory from the chosen category.',
      options: {
        filter: ({ document }) => {
          if (!document?.category) {
            return {
              filter: 'false', // This prevents selection if no category is chosen
            };
          }
          return {
            filter: 'parentCategory._ref == $categoryId',
            // @ts-expect-error unknown err
            params: { categoryId: document.category._ref },
          };
        },
      },
      validation: (Rule) => Rule.required().error('A subcategory is required.'),
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
          type: 'code',
          options: {
            withFilename: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'hideTableOfContents',
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
      // @ts-expect-error no type for self doc
      initialValue: (document) => ({
        title: document?.title ?? 'Untitled Post',
        description: 'No description provided yet!',
        image: document?.heroImage,
      }),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishDate',
      media: 'heroImage',
    },
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
