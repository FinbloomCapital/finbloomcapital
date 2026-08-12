import blockContent from './blockContent';
import author from './author';
import category from './category';
import post from './post';
import video from './video';
import resource from './resource';
import learnPage from './learnPage';
import callout from './objects/callout';
import pullQuote from './objects/pullQuote';

export const schemaTypes = [
  // documents
  post,
  author,
  category,
  video,
  resource,
  learnPage,
  // objects
  blockContent,
  callout,
  pullQuote,
];
