import { MdBlock } from 'react-icons/md'; // Icon for the placeholder block
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'placeholder-block',
  title: 'Placeholder Block',
  icon: MdBlock,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Block Title',
      description: 'Provide a title to identify this placeholder block in the Studio.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Block Description',
      description: 'Optional description for the placeholder block. This is purely for reference in the Studio.',
      rows: 3,
    }),
    defineField({
      name: 'type',
      title: 'Placeholder Type',
      type: 'string',
      description: 'Specify the type of placeholder this block represents.',
      options: {
        list: [
          { title: 'Home About Section', value: 'home-about-section' },
          { title: 'Services Section', value: 'services-section' },
          { title: 'Benefits Section', value: 'benefits-section' },
          { title: 'Brand About Section', value: 'brand-about-section' },
          { title: 'Brand Vision Section', value: 'brand-vision-section' },
          { title: 'Brand Team Section', value: 'brand-team-section' },
          { title: 'Contact Section', value: 'contact-section' },
          { title: 'Contact Hero Section', value: 'contact-hero-section' },
          { title: 'Contact Form Section', value: 'contact-form-section' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
    },
    prepare: ({ title, subtitle }) => ({
      title: title || 'Placeholder Block',
      subtitle: subtitle ? `Type: ${subtitle}` : 'No type specified',
    }),
  },
});
