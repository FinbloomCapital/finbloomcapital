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
  deployment: {
    // The registered Studio application. Pinning it here stops `sanity deploy`
    // prompting for an application id, and keeps redeploys pointed at the
    // existing Studio rather than creating a second one.
    appId: 'on4sfs3bes5qwei7h27qof9w',
  },
});
