import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Describes the photo for screen readers.',
        }),
      ],
    }),
    defineField({
      name: 'role',
      title: 'Short role',
      type: 'string',
      description: 'Shown under the name on article pages, e.g. "Chief Risk Officer, Finbloom".',
    }),
    defineField({
      name: 'bioHeadline',
      title: 'Bio headline',
      type: 'string',
      description:
        'Longer job title shown on the author card at the bottom of an article, e.g. "Senior Financial Analyst & Chief Risk Officer at Finbloom Capital".',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
      description: 'One paragraph shown on the author card at the bottom of an article.',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      title: 'X / Twitter URL',
      type: 'url',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'image' },
  },
});
