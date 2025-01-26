import { SearchIcon } from '@sanity/icons';
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';
import { RiPagesFill } from 'react-icons/ri';
import { VscEdit, VscEyeClosed, VscHome, VscQuestion, VscSearch } from 'react-icons/vsc';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  orderings: [orderRankOrdering],
  groups: [
    {
      title: 'Main Content',
      name: 'mainContent',
      icon: RiPagesFill,
      default: true,
    },
    {
      title: 'SEO',
      name: 'seo',
      icon: SearchIcon,
    },
  ],
  fields: [
    orderRankField({ type: 'page' }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      type: 'string',
      group: 'mainContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'modules',
      type: 'modules',
      group: 'mainContent',
    }),
    defineField({
      name: 'metadata',
      type: 'metadata',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'metadata.slug.current',
      media: 'metadata.image',
      noindex: 'metadata.noIndex',
    },
    prepare: ({ title, slug, media, noindex }) => ({
      title,
      subtitle: slug && (slug === 'index' ? '/' : `/${slug}`),
      media:
        media ||
        (slug === 'index' && VscHome) ||
        (slug === '404' && VscQuestion) ||
        (slug === 'search' && VscSearch) ||
        (['blog', 'blog/*'].includes(slug) && VscEdit) ||
        (noindex && VscEyeClosed),
    }),
  },
});
