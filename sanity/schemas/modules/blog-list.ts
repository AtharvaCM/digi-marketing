import { VscEdit } from 'react-icons/vsc';
import { defineField, defineType } from 'sanity';

import { getBlockText } from '@/sanity/utils';

export default defineType({
  name: 'blog-list',
  title: 'Blog list',
  icon: VscEdit,
  type: 'object',
  groups: [{ name: 'content', default: true }, { name: 'filtering' }, { name: 'options' }],
  fields: [
    defineField({
      name: 'intro',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    }),
    defineField({
      name: 'layout',
      type: 'string',
      options: {
        list: ['grid', 'carousel'],
        layout: 'radio',
      },
      initialValue: 'carousel',
      group: 'options',
    }),
    defineField({
      name: 'showFeaturedPostsFirst',
      type: 'boolean',
      initialValue: true,
      group: 'filtering',
    }),
    defineField({
      name: 'displayFilters',
      title: 'Display category filter buttons',
      description: 'Allows for on-page filtering of posts by category',
      type: 'boolean',
      initialValue: false,
      group: 'filtering',
      hidden: ({ parent }) => !!parent.filteredCategory,
    }),
    defineField({
      name: 'limit',
      title: 'Number of posts to show',
      description: 'Leave empty to show all posts',
      type: 'number',
      validation: (Rule) => Rule.min(1).integer(),
      group: 'filtering',
    }),
    defineField({
      name: 'filteredCategory',
      title: 'Filter posts by a category',
      description: 'Leave empty to show all posts',
      type: 'reference',
      to: [{ type: 'blog.category' }],
      group: 'filtering',
    }),
  ],
  preview: {
    select: {
      intro: 'intro',
    },
    prepare: ({ intro }) => ({
      title: getBlockText(intro),
      subtitle: 'Blog list',
    }),
  },
});
