import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Only shown for the featured video.',
    }),
    defineField({
      name: 'url',
      title: 'Video URL',
      type: 'url',
      description:
        'A YouTube or Vimeo link, which plays inline on the page. Leave empty until the video is published — the tile then shows without a play button.',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Displayed next to the clock icon, e.g. "04:35".',
    }),
    defineField({
      name: 'featured',
      title: 'Feature this video',
      type: 'boolean',
      description:
        'The featured video fills the large player. Everything else appears in the list beside it.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Sort order',
      type: 'number',
      description: 'Lower numbers appear first in the side list.',
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: 'Sort order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'duration', media: 'thumbnail', featured: 'featured' },
    prepare: ({ title, subtitle, media, featured }) => ({
      title: featured ? `★ ${title}` : title,
      subtitle,
      media,
    }),
  },
});
