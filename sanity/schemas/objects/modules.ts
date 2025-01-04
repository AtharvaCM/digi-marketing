import { defineType } from 'sanity';

export default defineType({
  name: 'modules',
  description: 'Page content',
  type: 'array',
  of: [
    { type: 'accordion-list' },
    { type: 'blog-frontpage' },
    { type: 'blog-list' },
    { type: 'blog-post-content' },
    { type: 'breadcrumbs' },
    { type: 'callout' },
    { type: 'card-list' },
    { type: 'creative-module' },
    { type: 'custom-html' },
    { type: 'flag-list' },
    { type: 'hero' },
    { type: 'hero.saas' },
    { type: 'hero.split' },
    { type: 'logo-list' },
    { type: 'pricing-list' },
    { type: 'richtext-module' },
    { type: 'schedule-module' },
    { type: 'search-module' },
    { type: 'stat-list' },
    { type: 'step-list' },
    { type: 'tabbed-content' },
    { type: 'testimonial-list' },
    { type: 'testimonial.featured' },
  ],
  options: {
    insertMenu: {
      groups: [
        { name: 'hero', of: ['hero', 'hero.saas', 'hero.split'] },
        {
          name: 'lists',
          of: ['accordion-list', 'blog-list', 'card-list', 'flag-list', 'logo-list', 'stat-list', 'step-list', 'testimonial-list'],
        },
        { name: 'blog', of: ['blog-list', 'blog-post-content'] },
        {
          name: 'media',
          title: 'Media',
          of: ['callout', 'creative-module', 'flag-list'],
        },
        {
          name: 'testimonials',
          title: 'Testimonials',
          of: ['testimonial-list', 'testimonial.featured'],
        },
      ],
      views: [
        {
          name: 'grid',
          previewImageUrl: (schemaType) => `/studio/thumbnails/${schemaType}.webp`,
        },
        { name: 'list' },
      ],
    },
  },
});
