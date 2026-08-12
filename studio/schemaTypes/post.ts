import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Article',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'meta', title: 'Metadata' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      description: 'Becomes the article URL: /article-detail/<slug>. Avoid changing it once published.',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Shown on article cards and under the headline on the article page.',
      validation: (Rule) => Rule.required().max(320),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      group: 'content',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      group: 'content',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'meta',
      description: 'Articles are ordered newest first. Future dates stay hidden until that time.',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read time (minutes)',
      type: 'number',
      group: 'meta',
      description: 'Leave blank to estimate automatically from the body length.',
      validation: (Rule) => Rule.min(1).max(120),
    }),
    defineField({
      name: 'featured',
      title: 'Feature this article',
      type: 'boolean',
      group: 'meta',
      description:
        'The most recently published featured article fills the large card at the top of the Learn page and shows a "FEATURED GUIDE" tag.',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Newest first',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.title',
      author: 'author.name',
      media: 'mainImage',
      featured: 'featured',
    },
    prepare: ({ title, category, author, media, featured }) => ({
      title: featured ? `★ ${title}` : title,
      subtitle: [category, author].filter(Boolean).join(' · '),
      media,
    }),
  },
});
