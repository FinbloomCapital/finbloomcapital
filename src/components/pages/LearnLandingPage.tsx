import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSanityQuery } from '../../lib/sanity/useSanityQuery';
import { LEARN_PAGE_QUERY } from '../../lib/sanity/queries';
import type { LearnPageData, Video } from '../../lib/sanity/types';
import { imageUrl } from '../../lib/sanity/image';
import { formatLongDate, toEmbedUrl } from '../../lib/sanity/utils';
import ArticleCard from '../shared/ArticleCard';
import { ClockIcon, DownloadIcon, PlayIcon } from '../shared/Icons';

/** Used until the Learn Page Settings document in Sanity fills these in. */
const FALLBACK = {
  heroTitle: 'Practical guides & insights to help your business flourish',
  heroSubtitle:
    'Expert financial literacy, growth strategies, and invoice management insights curated specifically for Nigerian SMEs and ambitious entrepreneurs.',
  latestEyebrow: 'LATEST INSIGHTS',
  latestTitle: 'Fresh updates from our financial experts',
  videoEyebrow: 'WATCH & LEARN',
  videoTitle: 'Visual guides & expert interviews',
  resourcesTitle: 'Guides & templates for daily operations',
  resourcesSubtitle:
    'Get actionable templates, financial workbooks, and planning flowcharts designed to simplify cash management.',
};

const ALL = '__all__';

function Skeleton({ className }: { className: string }) {
  return <div aria-hidden="true" className={`animate-pulse bg-[#e7e5e1] rounded-[16px] ${className}`} />;
}

function SectionMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#e7e5e1] border-dashed content-stretch flex items-center justify-center px-[24px] py-[48px] rounded-[16px] w-full">
      <p className="font-['Inter:Regular'] font-normal not-italic text-[#8b939c] text-[15px] text-center">
        {children}
      </p>
    </div>
  );
}

/** The large player plus the clickable list of other videos beside it. */
function VideoSection({ videos, eyebrow, title }: { videos: Video[]; eyebrow: string; title: string }) {
  const featured = useMemo(() => videos.find((v) => v.featured) ?? videos[0], [videos]);
  const [activeId, setActiveId] = useState<string | undefined>(featured?._id);
  const [playing, setPlaying] = useState(false);

  // If the content changes underneath us, fall back to the featured video.
  useEffect(() => {
    setActiveId((current) => (videos.some((v) => v._id === current) ? current : featured?._id));
  }, [videos, featured?._id]);

  const active = videos.find((v) => v._id === activeId) ?? featured;
  const others = videos.filter((v) => v._id !== active?._id);
  const embedUrl = toEmbedUrl(active?.url);
  const poster = imageUrl(active?.thumbnail, 1376, 774);

  if (!active) return null;

  return (
    <div
      className="content-stretch flex flex-col gap-[40px] items-start md:px-[120px] px-[20px] py-[80px] relative shrink-0 w-full"
      data-name="Video Section"
    >
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] relative shrink-0 w-full">
        <p className="font-['Inter:Bold'] font-bold not-italic relative shrink-0 text-[#046675] text-[14px] tracking-[1px]">
          {eyebrow}
        </p>
        <p className="font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold relative shrink-0 text-[#062530] text-[26px] md:text-[32px]">
          {title}
        </p>
      </div>

      <div className="content-stretch flex flex-col items-start md:flex-row md:gap-[48px] md:items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start min-w-px relative w-full md:flex-[1_0_0]">
          <div className="aspect-[16/9] content-stretch flex items-center justify-center overflow-hidden relative rounded-[16px] shrink-0 w-full">
            {playing && embedUrl ? (
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 size-full"
                src={embedUrl}
                title={active.title}
              />
            ) : (
              <>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  {poster ? (
                    <img
                      alt=""
                      className="absolute max-w-none object-cover size-full"
                      src={poster}
                    />
                  ) : (
                    <div className="absolute bg-[#034f5b] size-full" />
                  )}
                  <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
                </div>
                {embedUrl ? (
                  <button
                    type="button"
                    aria-label={`Play ${active.title}`}
                    className="relative shrink-0 transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
                    onClick={() => setPlaying(true)}
                  >
                    <PlayIcon />
                  </button>
                ) : active.url ? (
                  // Not a YouTube/Vimeo link, so it cannot be embedded inline.
                  <a
                    aria-label={`Watch ${active.title}`}
                    className="relative shrink-0 transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
                    href={active.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <PlayIcon />
                  </a>
                ) : null}
              </>
            )}
          </div>

          <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start py-[12px] relative shrink-0 md:py-0 w-full">
            <p className="font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[#062530] text-[20px] md:text-[22px] w-full">
              {active.title}
            </p>
            {active.description ? (
              <p className="font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#55606b] text-[15px] w-full">
                {active.description}
              </p>
            ) : null}
          </div>
        </div>

        {others.length > 0 ? (
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full md:w-[460px]">
            {others.map((v) => {
              const thumb = imageUrl(v.thumbnail, 240, 150);
              return (
                <button
                  key={v._id}
                  type="button"
                  onClick={() => {
                    setActiveId(v._id);
                    setPlaying(false);
                  }}
                  className="border-[#e7e5e1] border-b border-solid content-stretch flex gap-[16px] items-center pb-[16px] relative shrink-0 text-left transition w-full hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#046675] focus-visible:ring-offset-2"
                >
                  <div className="bg-[#e5eff1] h-[75px] overflow-hidden relative rounded-[8px] shrink-0 w-[120px]">
                    {thumb ? (
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                        loading="lazy"
                        src={thumb}
                      />
                    ) : null}
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
                    <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[1.3] relative shrink-0 text-[#062530] text-[15px] w-full">
                      {v.title}
                    </p>
                    {v.duration ? (
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 text-[#8b939c]">
                        <ClockIcon />
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] whitespace-nowrap">
                          {v.duration}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function LearnLandingPage() {
  const { data, loading, error } = useSanityQuery<LearnPageData>(LEARN_PAGE_QUERY);
  const [activeCategory, setActiveCategory] = useState(ALL);

  const settings = { ...FALLBACK, ...(data?.settings ?? {}) };
  const categories = data?.categories ?? [];
  const featured = data?.featured ?? null;
  const videos = data?.videos ?? [];
  const resources = data?.resources ?? [];

  // The featured article already has its own large card above the grid.
  const posts = useMemo(
    () => (data?.posts ?? []).filter((p) => p._id !== featured?._id),
    [data?.posts, featured?._id],
  );

  const visiblePosts = useMemo(
    () => (activeCategory === ALL ? posts : posts.filter((p) => p.category?.slug === activeCategory)),
    [posts, activeCategory],
  );

  const featuredImg = imageUrl(featured?.mainImage, 1200, 840);
  const featuredAvatar = imageUrl(featured?.author?.image, 80, 80);

  return (
    <div
      className="bg-[#faf9f6] content-stretch flex flex-col items-start relative size-full"
      data-name="learn-landing-page"
    >
      {/* Hero */}
      <div className="content-stretch flex flex-col gap-[32px] items-center md:px-[120px] pb-[48px] pt-[80px] px-[20px] relative shrink-0 w-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-center w-full">
          <h1 className="font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[1.15] max-w-[800px] relative shrink-0 text-[#062530] text-[34px] md:text-[48px] w-full">
            {settings.heroTitle}
          </h1>
          <p className="font-['Inter:Regular'] font-normal leading-[1.5] max-w-[640px] not-italic relative shrink-0 text-[#55606b] text-[16px] md:text-[18px] w-full">
            {settings.heroSubtitle}
          </p>
        </div>

        {categories.length > 0 ? (
          <div className="content-start flex flex-wrap gap-[12px] items-start justify-center relative shrink-0 w-full">
            {[{ _id: ALL, title: 'All', slug: ALL }, ...categories].map((category) => {
              const isActive = activeCategory === category.slug;
              return (
                <button
                  key={category._id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category.slug)}
                  className={`content-stretch flex items-start px-[20px] py-[10px] relative rounded-[100px] shrink-0 transition ${
                    isActive
                      ? 'bg-[#046675] text-white'
                      : 'bg-white border border-[#e7e5e1] border-solid text-[#55606b] hover:border-[#046675] hover:text-[#046675]'
                  }`}
                >
                  <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
                    {category.title}
                  </span>
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      {error ? (
        <div className="md:px-[120px] pb-[80px] px-[20px] w-full">
          <SectionMessage>
            We couldn’t load articles right now. Please refresh the page or try again shortly.
          </SectionMessage>
        </div>
      ) : null}

      {/* Featured article */}
      {loading ? (
        <div className="md:px-[120px] pb-[80px] px-[20px] w-full">
          <Skeleton className="h-[320px] md:h-[420px] w-full" />
        </div>
      ) : featured ? (
        <div className="content-stretch flex flex-col items-start md:px-[120px] pb-[80px] px-[20px] relative shrink-0 w-full">
          <Link
            to={`/article-detail/${featured.slug}`}
            className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-col items-start lg:flex-row lg:items-stretch overflow-clip relative rounded-[24px] shrink-0 transition w-full hover:border-[#046675] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#046675] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf9f6]"
          >
            <div className="bg-[#e5eff1] h-[240px] min-w-px relative shrink-0 w-full lg:flex-[1_0_0] lg:h-auto lg:min-h-[420px] lg:w-auto">
              {featuredImg ? (
                <img
                  alt={featured.mainImage?.alt ?? ''}
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={featuredImg}
                />
              ) : null}
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] md:p-[48px] relative shrink-0 w-full lg:w-[580px]">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <p className="font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#eb5b18] text-[12px] tracking-[0.18px] w-full">
                  FEATURED GUIDE
                </p>
                <p className="font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[1.25] relative shrink-0 text-[#062530] text-[24px] md:text-[32px] w-full">
                  {featured.title}
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.6] not-italic relative shrink-0 text-[#55606b] text-[15px] w-full">
                {featured.excerpt}
              </p>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <div className="border-[#e7e5e1] border-solid border-t h-0 relative shrink-0 w-full" />
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 sm:flex-row sm:items-center sm:justify-between w-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <div className="bg-[#e5eff1] overflow-hidden relative rounded-full shrink-0 size-[40px]">
                      {featuredAvatar ? (
                        <img alt="" className="absolute inset-0 object-cover size-full" src={featuredAvatar} />
                      ) : null}
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0">
                      <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#062530] text-[14px]">
                        {featured.author?.name}
                      </p>
                      {featured.author?.role ? (
                        <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#8b939c] text-[12px]">
                          {featured.author.role}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8b939c] text-[13px]">
                    {formatLongDate(featured.publishedAt)}
                    {featured.readTime ? ` • ${featured.readTime} min read` : ''}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ) : null}

      {/* Latest articles */}
      <div className="bg-white border-[#e7e5e1] border-b border-solid border-t content-stretch flex flex-col gap-[40px] items-start md:px-[120px] px-[20px] py-[80px] relative shrink-0 w-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] relative shrink-0 w-full">
          <p className="font-['Inter:Bold'] font-bold not-italic relative shrink-0 text-[#046675] text-[14px] tracking-[1px]">
            {settings.latestEyebrow}
          </p>
          <p className="font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold relative shrink-0 text-[#062530] text-[26px] md:text-[32px]">
            {settings.latestTitle}
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 gap-[16px] lg:grid-cols-3 md:gap-[24px] relative shrink-0 w-full">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-[300px] w-full" />
            ))}
          </div>
        ) : visiblePosts.length > 0 ? (
          <div className="grid grid-cols-2 gap-[16px] lg:grid-cols-3 md:gap-[24px] relative shrink-0 w-full">
            {visiblePosts.map((post) => (
              <ArticleCard key={post._id} post={post} />
            ))}
          </div>
        ) : error ? (
          // The failure is already reported above — don't also claim the site
          // has no articles, which would be misleading.
          null
        ) : (
          <SectionMessage>
            {posts.length === 0
              ? 'No articles have been published yet. Check back soon.'
              : 'No articles in this category yet — try another one.'}
          </SectionMessage>
        )}
      </div>

      {/* Videos */}
      {videos.length > 0 ? (
        <VideoSection videos={videos} eyebrow={settings.videoEyebrow} title={settings.videoTitle} />
      ) : null}

      {/* Resources */}
      {resources.length > 0 ? (
        <div className="bg-[#e5eff1] border-[#e7e5e1] border-b border-solid border-t content-stretch flex flex-col gap-[40px] items-start md:px-[120px] px-[20px] py-[80px] relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center w-full">
            <p className="font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold relative shrink-0 text-[#062530] text-[26px] md:text-[32px]">
              {settings.resourcesTitle}
            </p>
            <p className="font-['Inter:Regular'] font-normal max-w-[560px] not-italic relative shrink-0 text-[#55606b] text-[16px] w-full">
              {settings.resourcesSubtitle}
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-stretch md:flex-row md:gap-[24px] relative shrink-0 w-full">
            {resources.map((r) => {
              const href = r.externalUrl || r.fileUrl;
              const icon = imageUrl(r.icon, 48, 48);
              return (
                <div
                  key={r._id}
                  className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-col gap-[20px] items-start min-w-px p-[32px] relative rounded-[18px] w-full md:flex-[1_0_0]"
                >
                  <div className="bg-[#e5eff1] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]">
                    {icon ? (
                      <img alt="" className="relative shrink-0 size-[24px]" src={icon} />
                    ) : null}
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start relative w-full">
                    <p className="font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[#062530] text-[20px] w-full">
                      {r.title}
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#55606b] text-[14px] w-full">
                      {r.description}
                    </p>
                  </div>
                  {href ? (
                    <a
                      className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[#046675] transition hover:text-[#034f5b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#046675] focus-visible:ring-offset-2 rounded-[4px]"
                      download={r.fileUrl && !r.externalUrl ? '' : undefined}
                      href={href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
                        {r.ctaLabel || 'Download Playbook'}
                      </span>
                      <DownloadIcon />
                    </a>
                  ) : (
                    // No file uploaded yet — show the label without a dead link.
                    <span className="content-stretch flex gap-[8px] items-center opacity-50 relative shrink-0 text-[#046675]">
                      <span className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
                        {r.ctaLabel || 'Download Playbook'}
                      </span>
                      <DownloadIcon />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
