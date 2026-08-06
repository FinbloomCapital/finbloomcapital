import type { PortableTextBlock } from '@portabletext/types';
import type { SanityImageRef } from './image';

export interface Category {
  _id: string;
  title: string;
  slug: string;
  order?: number;
}

export interface Author {
  _id: string;
  name: string;
  slug?: string;
  image?: SanityImageRef;
  role?: string;
  bioHeadline?: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
}

/** Shape used by article cards — deliberately lighter than a full post. */
export interface PostCard {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  mainImage?: SanityImageRef;
  publishedAt: string;
  readTime?: number;
  featured?: boolean;
  category?: Pick<Category, 'title' | 'slug'>;
  author?: Pick<Author, 'name' | 'image' | 'role'>;
}

export interface Post extends PostCard {
  body?: PortableTextBlock[];
  author?: Author;
}

export interface Video {
  _id: string;
  title: string;
  description?: string;
  /** Absent until the video is actually published; the tile then has no play button. */
  url?: string;
  thumbnail?: SanityImageRef;
  duration?: string;
  featured?: boolean;
  order?: number;
}

export interface Resource {
  _id: string;
  title: string;
  description: string;
  icon?: SanityImageRef;
  fileUrl?: string;
  externalUrl?: string;
  ctaLabel?: string;
  order?: number;
}

export interface LearnPageSettings {
  heroTitle?: string;
  heroSubtitle?: string;
  latestEyebrow?: string;
  latestTitle?: string;
  videoEyebrow?: string;
  videoTitle?: string;
  resourcesTitle?: string;
  resourcesSubtitle?: string;
}

export interface LearnPageData {
  settings: LearnPageSettings | null;
  categories: Category[];
  featured: PostCard | null;
  posts: PostCard[];
  videos: Video[];
  resources: Resource[];
}

export interface ArticlePageData {
  post: Post | null;
  related: PostCard[];
}
