import { VscTag } from 'react-icons/vsc';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blog.category',
  title: 'Blog Category',
  type: 'document',
  icon: VscTag,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'parentCategory',
      type: 'reference',
      to: [{ type: 'blog.category' }], // Allows self-referencing
      title: 'Parent Category',
      description: 'Select a parent category to make this a subcategory',
    }),
  ],
});
