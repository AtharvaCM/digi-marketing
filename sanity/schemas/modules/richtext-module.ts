import { VscSymbolKeyword } from 'react-icons/vsc';
import { defineArrayMember, defineField, defineType } from 'sanity';

import { getBlockText } from '@/sanity/utils';

import imageBlock from '../fragments/image-block';

export default defineType({
  name: 'richtext-module',
  title: 'Richtext module',
  icon: VscSymbolKeyword,
  type: 'object',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'options', title: 'Options' },
  ],
  fields: [
    defineField({
      name: 'uid',
      title: 'Unique Identifier',
      type: 'uid',
      group: 'options',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [
        { type: 'block' },
        imageBlock,
        defineArrayMember({
          title: 'Code block',
          type: 'code',
          options: {
            withFilename: true,
          },
        }),
        { type: 'custom-html' },
      ],
      group: 'content',
    }),
    defineField({
      name: 'tableOfContents',
      type: 'boolean',
      initialValue: false,
      group: 'options',
    }),
    defineField({
      name: 'tocPosition',
      type: 'string',
      options: {
        list: ['left', 'right'],
        layout: 'radio',
      },
      hidden: ({ parent }) => !parent.tableOfContents,
      initialValue: 'right',
      group: 'options',
    }),
    defineField({
      name: 'stretch',
      type: 'boolean',
      initialValue: false,
      hidden: ({ parent }) => parent.tableOfContents,
      group: 'options',
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({ content }) => ({
      title: getBlockText(content),
      subtitle: 'Richtext module',
    }),
  },
});
