import type { PortableTextBlock } from '@portabletext/types';

/**
 * Plain text of a single portable text block. Children can be spans or
 * arbitrary inline objects, so anything without a string `text` is skipped.
 */
export function blockToPlainText(block: PortableTextBlock): string {
  if (block._type !== 'block' || !Array.isArray(block.children)) return '';
  return block.children
    .map((child) => ('text' in child && typeof child.text === 'string' ? child.text : ''))
    .join('');
}

export function toPlainText(blocks: PortableTextBlock[] | undefined): string {
  if (!blocks?.length) return '';
  return blocks.map(blockToPlainText).filter(Boolean).join('\n\n');
}

/**
 * Stable anchor id for a heading. The renderer and the "In This Guide" sidebar
 * both call this, so the links and the targets always agree.
 */
export function headingId(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .slice(0, 60) || 'section'
  );
}

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

/** Pulls h2/h3 headings out of a body for the sidebar table of contents. */
export function extractHeadings(blocks: PortableTextBlock[] | undefined): Heading[] {
  if (!blocks?.length) return [];
  return blocks
    .filter((b) => b._type === 'block' && (b.style === 'h2' || b.style === 'h3'))
    .map((b) => {
      const text = blockToPlainText(b);
      return { id: headingId(text), text, level: b.style === 'h3' ? (3 as const) : (2 as const) };
    })
    .filter((h) => h.text.length > 0);
}

/** ~200 words per minute, rounded up, never zero. */
export function estimateReadTime(blocks: PortableTextBlock[] | undefined): number {
  const words = toPlainText(blocks).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

/** "Feb 28, 2026" — used on article cards. */
export function formatShortDate(iso: string | undefined): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
}

/** "March 7, 2026" — used in the article header. */
export function formatLongDate(iso: string | undefined): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

/**
 * Converts a YouTube or Vimeo watch url into an embeddable one so the video can
 * play inline. Returns null for anything else, and the caller falls back to
 * opening the link in a new tab.
 */
export function toEmbedUrl(url: string | undefined): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') {
      const id = u.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null;
    }
    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const id = u.searchParams.get('v') || u.pathname.split('/').filter(Boolean).pop();
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null;
    }
    if (host === 'vimeo.com' || host === 'player.vimeo.com') {
      const id = u.pathname.split('/').filter(Boolean).pop();
      return id && /^\d+$/.test(id) ? `https://player.vimeo.com/video/${id}?autoplay=1` : null;
    }
  } catch {
    return null;
  }
  return null;
}
