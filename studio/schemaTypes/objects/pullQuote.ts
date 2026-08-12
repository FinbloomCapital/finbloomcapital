import { defineField, defineType } from 'sanity';

/**
 * The large italic quote block used to break up long article bodies.
 */
export default defineType({
  name: 'pullQuote',
  title: 'Pull quote',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      description: 'Quotation marks are added automatically.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'attribution',
      title: 'Attribution',
      type: 'string',
      description: 'e.g. "Oluwaseun Adebayo, Chief Risk Officer at Finbloom". Shown in uppercase.',
    }),
  ],
  preview: {
    select: { title: 'quote', subtitle: 'attribution' },
    prepare: ({ title, subtitle }) => ({
      title: title ? `"${title}"` : 'Pull quote',
      subtitle,
    }),
  },
});
