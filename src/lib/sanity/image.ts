import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageObject } from '@sanity/image-url';
import { dataset, projectId } from './client';

const builder = imageUrlBuilder({ projectId, dataset });

export type SanityImageRef = SanityImageObject & {
  alt?: string;
  caption?: string;
};

/**
 * Build a CDN url for a Sanity image. Always chain a width so we are not
 * shipping 1.7MB originals to article cards:
 *
 *   urlFor(post.mainImage)?.width(720).height(450).url()
 */
export function urlFor(source: SanityImageRef | undefined | null) {
  if (!source?.asset) return null;
  return builder.image(source).auto('format').fit('crop');
}

/** Convenience wrapper for the common "fixed box, cropped to fill" case. */
export function imageUrl(
  source: SanityImageRef | undefined | null,
  width: number,
  height?: number,
): string | undefined {
  const b = urlFor(source);
  if (!b) return undefined;
  return (height ? b.width(width).height(height) : b.width(width)).url();
}
