import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSanityQuery } from '../../lib/sanity/useSanityQuery';
import { ARTICLE_QUERY } from '../../lib/sanity/queries';
import type { Post, PostCard } from '../../lib/sanity/types';
import { imageUrl } from '../../lib/sanity/image';
import { estimateReadTime, extractHeadings, formatLongDate } from '../../lib/sanity/utils';
import ArticleBody from '../../lib/sanity/PortableText';
import ArticleCard from '../shared/ArticleCard';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from '../shared/Icons';

const applicationUrl = 'https://finbloom-capital-ltd.lsq.app/';

type ArticleResult = {
  post: (Post & { relatedByCategory?: PostCard[]; relatedRecent?: PostCard[] }) | null;
};

/** Keeps the browser tab and link previews in step with the article. */
function useDocumentMeta(title: string | undefined, description: string | undefined) {
  useEffect(() => {
    if (!title) return;
    const previousTitle = document.title;
    document.title = `${title} | Finbloom Capital`;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const createdMeta = !meta;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    const previousDescription = meta.content;
    if (description) meta.content = description;

    return () => {
      document.title = previousTitle;
      if (createdMeta) meta?.remove();
      else if (meta) meta.content = previousDescription;
    };
  }, [title, description]);
}

/** Highlights the heading currently in view in the sidebar index. */
function useActiveHeading(ids: string[]) {
  const [activeId, setActiveId] = useState<string | undefined>(ids[0]);
  const idsKey = ids.join('|');

  useEffect(() => {
    const targets = idsKey
      .split('|')
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [idsKey]);

  return activeId;
}

function CenteredState({
  title,
  body,
  showBackLink,
}: {
  title: string;
  body: string;
  showBackLink?: boolean;
}) {
  return (
    <div className="bg-[#faf9f6] content-stretch flex flex-col gap-[16px] items-center justify-center px-[20px] py-[160px] size-full text-center">
      <p className="font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold text-[#062530] text-[26px]">
        {title}
      </p>
      <p className="font-['Inter:Regular'] font-normal max-w-[520px] not-italic text-[#55606b] text-[16px]">
        {body}
      </p>
      {showBackLink ? (
        <Link
          to="/learn-landing-page"
          className="bg-[#034f5b] content-stretch flex items-center justify-center mt-[8px] px-[28px] py-[14px] rounded-[100px] text-white transition hover:bg-[#046675]"
        >
          <span className="font-['Inter:Semi_Bold'] font-semibold not-italic text-[14.5px]">
            Back to Learn
          </span>
        </Link>
      ) : null}
    </div>
  );
}

export default function ArticleDetailPage() {
  // The route is /article-detail/:id, where :id is the article's Sanity slug.
  const { id: slug } = useParams<{ id: string }>();
  const { data, loading, error } = useSanityQuery<ArticleResult>(ARTICLE_QUERY, { slug: slug ?? '' });
  const post = data?.post ?? null;

  useDocumentMeta(post?.title, post?.excerpt);

  // Same-category articles first, topped up with recent ones so the row is full.
  const related = useMemo(() => {
    if (!post) return [];
    const seen = new Set<string>();
    const out: PostCard[] = [];
    for (const candidate of [...(post.relatedByCategory ?? []), ...(post.relatedRecent ?? [])]) {
      if (out.length === 3) break;
      if (seen.has(candidate._id)) continue;
      seen.add(candidate._id);
      out.push(candidate);
    }
    return out;
  }, [post]);

  const headings = useMemo(() => extractHeadings(post?.body), [post?.body]);
  const activeHeading = useActiveHeading(headings.map((h) => h.id));

  const shareUrl = typeof window === 'undefined' ? '' : window.location.href;
  const shareLinks = useMemo(() => {
    const u = encodeURIComponent(shareUrl);
    const t = encodeURIComponent(post?.title ?? '');
    return [
      { label: 'Share on X', href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`, Icon: TwitterIcon },
      { label: 'Share on Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${u}`, Icon: FacebookIcon },
      {
        label: 'Share on LinkedIn',
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
        Icon: LinkedinIcon,
      },
    ];
  }, [shareUrl, post?.title]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (loading) {
    return <CenteredState title="Loading article…" body="Fetching the latest version of this guide." />;
  }

  if (error) {
    return (
      <CenteredState
        title="We couldn’t load this article"
        body="Something went wrong reaching our content service. Please refresh the page or try again shortly."
        showBackLink
      />
    );
  }

  if (!post) {
    return (
      <CenteredState
        title="Article not found"
        body="This article may have been moved or unpublished. Browse our latest guides instead."
        showBackLink
      />
    );
  }

  const readTime = post.readTime ?? estimateReadTime(post.body);
  const heroImage = imageUrl(post.mainImage, 1600, 900);
  const authorAvatar = imageUrl(post.author?.image, 96, 96);
  const authorAvatarLarge = imageUrl(post.author?.image, 240, 240);

  return (
    <div
      className="bg-[#faf9f6] content-stretch flex flex-col items-start relative size-full"
      data-name="article-detail-page"
    >
      {/* Breadcrumbs + share */}
      <div className="content-stretch flex flex-col gap-[12px] items-start md:flex-row md:items-center md:justify-between md:px-[120px] pb-[12px] pt-[24px] px-[20px] relative shrink-0 w-full">
        <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] not-italic relative shrink-0 text-[13px]">
          <Link
            to="/learn-landing-page"
            className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#8b939c] transition hover:text-[#046675]"
          >
            Learn
          </Link>
          <span className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#8b939c]">/</span>
          <span className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#046675]">
            {post.category?.title ?? 'Article'}
          </span>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13px] whitespace-nowrap">
            SHARE THIS ARTICLE
          </p>
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
            {shareLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                aria-label={label}
                className="border border-[#e7e5e1] border-solid content-stretch flex items-center justify-center p-[6px] relative rounded-[100px] shrink-0 size-[32px] text-[#55606b] transition hover:border-[#046675] hover:text-[#046675] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#046675]"
                href={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Article hero */}
      <div className="content-stretch flex flex-col gap-[24px] items-start md:px-[120px] pb-[48px] pt-[32px] px-[20px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-wrap gap-[8px] items-center relative shrink-0">
          <div className="bg-[#e5eff1] content-stretch flex items-start px-[14px] py-[6px] relative rounded-[100px] shrink-0">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#046675] text-[12px] tracking-[1px] uppercase whitespace-nowrap">
              {post.category?.title ?? 'Article'}
            </p>
          </div>
          {post.featured ? (
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#eb5b18] text-[12px] tracking-[1px] whitespace-nowrap">
              FEATURED GUIDE
            </p>
          ) : null}
        </div>

        <h1 className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[1.15] relative shrink-0 text-[#062530] text-[32px] md:text-[48px] w-full">
          {post.title}
        </h1>

        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#55606b] text-[17px] md:text-[20px] w-full">
          {post.excerpt}
        </p>

        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 sm:flex-row sm:items-center sm:justify-between w-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <div className="bg-[#e5eff1] overflow-hidden relative rounded-full shrink-0 size-[48px]">
              {authorAvatar ? (
                <img
                  alt={post.author?.image?.alt ?? ''}
                  className="absolute inset-0 object-cover size-full"
                  src={authorAvatar}
                />
              ) : null}
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#062530] text-[15px]">
                {post.author?.name}
              </p>
              {post.author?.role ? (
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#8b939c] text-[13px]">
                  {post.author.role}
                </p>
              ) : null}
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 text-[#8b939c]">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] whitespace-nowrap">
              Published: {formatLongDate(post.publishedAt)}
            </p>
            <span aria-hidden="true" className="bg-[#8b939c] relative rounded-full shrink-0 size-[4px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] whitespace-nowrap">
              {readTime} min read
            </p>
          </div>
        </div>

        {heroImage ? (
          <div className="bg-[#e5eff1] h-[220px] md:h-[540px] overflow-hidden relative rounded-[24px] shrink-0 w-full">
            <img
              alt={post.mainImage?.alt ?? ''}
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={heroImage}
            />
          </div>
        ) : null}
      </div>

      {/* Body + sidebar */}
      <div className="content-stretch flex flex-col gap-[40px] items-start lg:flex-row lg:gap-[80px] md:px-[120px] pb-[80px] px-[20px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start min-w-0 relative shrink-0 w-full lg:w-[800px]">
          <ArticleBody value={post.body} />
        </div>

        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full lg:sticky lg:top-[110px] lg:w-[320px]">
          {headings.length > 0 ? (
            <nav
              aria-label="In this guide"
              className="[word-break:break-word] bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-col gap-[16px] items-start leading-[normal] p-[24px] relative rounded-[16px] shrink-0 w-full"
            >
              <p className="font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold relative shrink-0 text-[#062530] text-[18px]">
                In This Guide
              </p>
              <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-[14px] w-full">
                {headings.map((h) => (
                  <a
                    key={h.id}
                    href={`#${h.id}`}
                    className={`relative shrink-0 transition hover:text-[#046675] ${
                      h.level === 3 ? 'pl-[12px]' : ''
                    } ${
                      activeHeading === h.id
                        ? "font-['Inter:Semi_Bold'] font-semibold text-[#046675]"
                        : "font-['Inter:Regular'] font-normal text-[#55606b]"
                    }`}
                  >
                    {h.text}
                  </a>
                ))}
              </div>
            </nav>
          ) : null}

          <div className="bg-[#e5eff1] content-stretch flex flex-col gap-[20px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[#062530] text-[20px]">
              Need Cash Flow Support?
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#55606b] text-[14px] w-full">
              Get up to ₦10M in fast, collateral-free invoice financing or SME growth capital with Finbloom.
            </p>
            <a
              className="bg-white content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[100px] shrink-0 transition w-full hover:bg-[#034f5b] hover:text-white"
              href={applicationUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-current whitespace-nowrap">
                Apply for financing
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Author bio */}
      {post.author?.bio ? (
        <div className="content-stretch flex flex-col items-start md:px-[120px] pb-[80px] px-[20px] relative shrink-0 w-full">
          <div className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-col gap-[24px] items-start md:flex-row md:gap-[32px] md:items-center p-[24px] md:p-[40px] relative rounded-[24px] shrink-0 w-full">
            <div className="bg-[#e5eff1] overflow-hidden relative rounded-full shrink-0 size-[96px] md:size-[120px]">
              {authorAvatarLarge ? (
                <img
                  alt={post.author.image?.alt ?? ''}
                  className="absolute inset-0 object-cover size-full"
                  src={authorAvatarLarge}
                />
              ) : null}
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
              <div className="content-stretch flex flex-wrap gap-[12px] items-center relative shrink-0">
                <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[#062530] text-[22px]">
                  {post.author.name}
                </p>
                <div className="bg-[#f8c535] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#faf9f6] text-[10px] whitespace-nowrap">
                    AUTHOR
                  </p>
                </div>
              </div>
              {post.author.bioHeadline ? (
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[14px]">
                  {post.author.bioHeadline}
                </p>
              ) : null}
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.6] not-italic relative shrink-0 text-[#55606b] text-[15px] w-full">
                {post.author.bio}
              </p>
              {post.author.linkedin || post.author.twitter ? (
                <div className="content-stretch flex flex-wrap gap-[16px] items-center relative shrink-0">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#046675] text-[13px] uppercase whitespace-nowrap">
                    Connect with {post.author.name.split(' ')[0]}:
                  </p>
                  <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                    {post.author.linkedin ? (
                      <a
                        aria-label={`${post.author.name} on LinkedIn`}
                        className="relative shrink-0 text-[#55606b] transition hover:text-[#046675]"
                        href={post.author.linkedin}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <LinkedinIcon className="size-[18px]" />
                      </a>
                    ) : null}
                    {post.author.twitter ? (
                      <a
                        aria-label={`${post.author.name} on X`}
                        className="relative shrink-0 text-[#55606b] transition hover:text-[#046675]"
                        href={post.author.twitter}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <TwitterIcon className="size-[18px]" />
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {/* Related articles */}
      {related.length > 0 ? (
        <div className="bg-white border-[#e7e5e1] border-b border-solid border-t content-stretch flex flex-col gap-[40px] items-start md:px-[120px] px-[20px] py-[80px] relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] relative shrink-0 w-full">
            <p className="font-['Inter:Bold'] font-bold not-italic relative shrink-0 text-[#046675] text-[14px] tracking-[1px]">
              CONTINUE READING
            </p>
            <p className="font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold relative shrink-0 text-[#062530] text-[26px] md:text-[32px]">
              More practical guides for SME success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-3 relative shrink-0 sm:grid-cols-2 w-full">
            {related.map((r) => (
              <ArticleCard key={r._id} post={r} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
