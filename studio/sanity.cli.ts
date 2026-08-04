import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'hroyuvjy',
    dataset: 'production',
  },
  /**
   * Sets the hostname used by `npm run deploy`, i.e. finbloom.sanity.studio.
   * Change this if that hostname is already taken.
   */
  studioHost: 'finbloom',
});
