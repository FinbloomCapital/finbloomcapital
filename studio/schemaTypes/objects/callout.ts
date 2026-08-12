import { defineField, defineType } from 'sanity';

/**
 * The teal "LAGOS SME TIP" box used inside article bodies.
 */
export default defineType({
  name: 'callout',
  title: 'Callout box',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Small uppercase heading, e.g. "LAGOS SME TIP".',
      initialValue: 'LAGOS SME TIP',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'text' },
    prepare: ({ title, subtitle }) => ({
      title: title || 'Callout',
      subtitle,
    }),
  },
});
