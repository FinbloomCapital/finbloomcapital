import { Link } from 'react-router-dom';
import { imageUrl } from '../../lib/sanity/image';
import type { PostCard } from '../../lib/sanity/types';
import { formatShortDate } from '../../lib/sanity/utils';

/**
 * The article card used by both the Learn grid and the "Continue reading" row
 * at the bottom of an article, so the two never drift apart.
 */
export default function ArticleCard({ post }: { post: PostCard }) {
  const thumb = imageUrl(post.mainImage, 720, 450);

  return (
    <Link
      to={`/article-detail/${post.slug}`}
      className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-col items-start min-w-0 overflow-clip relative rounded-[16px] transition w-full hover:border-[#046675] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#046675] focus-visible:ring-offset-2"
    >
      <div className="aspect-[16/10] bg-[#e5eff1] relative shrink-0 w-full">
        {thumb ? (
          <img
            alt={post.mainImage?.alt ?? ''}
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            loading="lazy"
            src={thumb}
          />
        ) : null}
      </div>
      <div className="content-stretch flex flex-col gap-[10px] md:gap-[12px] items-start p-[14px] relative shrink-0 sm:p-[18px] md:p-[24px] w-full">
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#eb5b18] text-[11px] md:text-[12px] text-left tracking-[0.12px] uppercase w-full">
          {post.category?.title ?? 'Article'}
        </p>
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[1.3] overflow-hidden relative shrink-0 text-[#062530] text-[14px] sm:text-[16px] md:text-[18px] text-ellipsis w-full">
          {post.title}
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#55606b] text-[12px] sm:text-[13px] md:text-[14px] text-ellipsis w-full">
          {post.excerpt}
        </p>
        <div className="border-[#e7e5e1] border-solid border-t h-0 relative shrink-0 w-full" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 sm:flex-row sm:items-center sm:justify-between text-[11px] sm:text-[12px] md:text-[13px] w-full">
          <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#55606b]">
            {post.author?.name ?? ''}
          </p>
          <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#8b939c]">
            {formatShortDate(post.publishedAt)}
          </p>
        </div>
      </div>
    </Link>
  );
}
