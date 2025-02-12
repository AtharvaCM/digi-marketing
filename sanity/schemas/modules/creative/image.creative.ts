import { IoIosImage } from 'react-icons/io';
import { defineArrayMember, defineField } from 'sanity';

export default defineArrayMember({
  name: 'image',
  icon: IoIosImage,
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
    }),
    defineField({
      name: 'aspectRatio',
      type: 'string',
    }),
  ],
});
