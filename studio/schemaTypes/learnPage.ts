import { defineField, defineType } from 'sanity';

/**
 * Singleton holding the editable headings on the Learn page. The site falls back
 * to sensible defaults for anything left blank, so this document is optional.
 */
export default defineType({
  name: 'learnPage',
  title: 'Learn Page Settings',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'sections', title: 'Section headings' },
  ],
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero title',
      type: 'string',
      group: 'hero',
      initialValue: 'Practical guides & insights to help your business flourish',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero subtitle',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue:
        'Expert financial literacy, growth strategies, and invoice management insights curated specifically for Nigerian SMEs and ambitious entrepreneurs.',
    }),
    defineField({
      name: 'latestEyebrow',
      title: 'Latest articles — eyebrow',
      type: 'string',
      group: 'sections',
      initialValue: 'LATEST INSIGHTS',
    }),
    defineField({
      name: 'latestTitle',
      title: 'Latest articles — heading',
      type: 'string',
      group: 'sections',
      initialValue: 'Fresh updates from our financial experts',
    }),
    defineField({
      name: 'videoEyebrow',
      title: 'Videos — eyebrow',
      type: 'string',
      group: 'sections',
      initialValue: 'WATCH & LEARN',
    }),
    defineField({
      name: 'videoTitle',
      title: 'Videos — heading',
      type: 'string',
      group: 'sections',
      initialValue: 'Visual guides & expert interviews',
    }),
    defineField({
      name: 'resourcesTitle',
      title: 'Resources — heading',
      type: 'string',
      group: 'sections',
      initialValue: 'Guides & templates for daily operations',
    }),
    defineField({
      name: 'resourcesSubtitle',
      title: 'Resources — subheading',
      type: 'text',
      rows: 2,
      group: 'sections',
      initialValue:
        'Get actionable templates, financial workbooks, and planning flowcharts designed to simplify cash management.',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Learn Page Settings' }),
  },
});
