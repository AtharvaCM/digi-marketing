import { VscExtensions } from 'react-icons/vsc';
import { defineArrayMember, defineField, defineType } from 'sanity';

import { count, getBlockText } from '@/sanity/utils';

import { alignItems, alignmentFieldset, textAlign } from '../../fragments/fields/alignment';
import creativeCtas from './ctas.creative';
import creativeIcon from './icon.creative';
import creativeImage from './image.creative';
import creativeRichtext from './richtext.creative';

export default defineType({
  name: 'creative-module',
  title: 'Creative module',
  icon: VscExtensions,
  type: 'object',
  groups: [{ name: 'content', default: true }, { name: 'options' }],
  fieldsets: [alignmentFieldset],
  fields: [
    defineField({
      name: 'options',
      type: 'module-options',
      group: 'options',
    }),
    defineField({
      name: 'intro',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    }),
    defineField({
      name: 'modules',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'module',
          type: 'object',
          fields: [
            defineField({
              name: 'subModules',
              type: 'array',
              of: [creativeCtas, creativeIcon, creativeImage, creativeRichtext, { type: 'custom-html' }],
            }),
            defineField({
              name: 'colSpan',
              title: 'Column span',
              type: 'number',
              validation: (Rule) => Rule.min(1).integer(),
            }),
          ],
          preview: {
            select: {
              subModules: 'subModules',
              colSpan: 'colSpan',
            },
            prepare: ({ subModules, colSpan }) => ({
              title:
                subModules
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  ?.map((subModule: any) => subModule?._type)
                  ?.filter(Boolean)
                  ?.join(' + ') || 'Empty',
              subtitle: colSpan > 1 ? `${colSpan}-column span` : undefined,
            }),
          },
        }),
      ],
      group: 'content',
    }),
    defineField({
      name: 'columns',
      type: 'number',
      description: 'Leave empty to use the number of modules as columns',
      validation: (Rule) => Rule.min(1).integer(),
      group: 'options',
    }),
    defineField({
      name: 'visualSeparation',
      type: 'boolean',
      initialValue: false,
      group: 'options',
    }),
    defineField({
      ...alignItems,
      fieldset: 'alignment',
      hidden: ({ parent }) => parent.bordered,
    }),
    defineField({
      ...textAlign,
      fieldset: 'alignment',
    }),
  ],
  preview: {
    select: {
      intro: 'intro',
      modules: 'modules',
    },
    prepare: ({ intro, modules }) => ({
      title: getBlockText(intro),
      subtitle: count(modules, 'module'),
    }),
  },
});
