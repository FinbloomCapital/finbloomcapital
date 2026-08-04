import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'hroyuvjy';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'finbloom',
  title: 'Finbloom Capital',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton: there is only ever one Learn page, so it is opened
            // directly rather than through a document list.
            S.listItem()
              .title('Learn Page Settings')
              .id('learnPage')
              .child(
                S.document()
                  .schemaType('learnPage')
                  .documentId('learnPage')
                  .title('Learn Page Settings'),
              ),
            S.divider(),
            S.documentTypeListItem('post').title('Articles'),
            S.documentTypeListItem('category').title('Categories'),
            S.documentTypeListItem('author').title('Authors'),
            S.divider(),
            S.documentTypeListItem('video').title('Videos'),
            S.documentTypeListItem('resource').title('Resources'),
          ]),
    }),
    visionTool({ defaultApiVersion: '2024-10-01' }),
  ],
  schema: {
    types: schemaTypes,
    // Keep the singleton out of the global "create new" menu.
    templates: (templates) => templates.filter((t) => t.schemaType !== 'learnPage'),
  },
  document: {
    newDocumentOptions: (prev) => prev.filter((item) => item.templateId !== 'learnPage'),
  },
});
