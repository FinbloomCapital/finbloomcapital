import { createClient } from '@sanity/client';

/**
 * Project id and dataset are public information — they are visible in every
 * request the browser makes — so they ship with sensible defaults and only need
 * an env override if you point the site at a different dataset (e.g. staging).
 *
 * No API token is used here on purpose. The site reads published content from a
 * public dataset; a token in the browser bundle would be readable by anyone.
 */
export const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'hroyuvjy';
export const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
export const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-10-01';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  // Serve from the edge cache. Published edits appear within about a minute.
  useCdn: true,
  perspective: 'published',
});
