import { PortableText as BasePortableText, type PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { imageUrl, type SanityImageRef } from './image';
import { blockToPlainText, headingId } from './utils';

const BODY_TEXT =
  "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] not-italic text-[#062530] text-[16px] w-full";

function InfoIcon() {
  return (
    <svg
      aria-hidden="true"
      className="shrink-0"
      fill="none"
      height="20"
      stroke="#046675"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="20"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

/**
 * Renders article bodies using the same type scale, colours and blocks as the
 * original static article design. Every custom type here has a matching schema
 * in studio/schemaTypes.
 */
export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className={BODY_TEXT}>{children}</p>,

    h2: ({ children, value }) => (
      <h2
        id={headingId(blockToPlainText(value))}
        className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] scroll-mt-[120px] text-[#062530] text-[24px] md:text-[28px] w-full"
      >
        {children}
      </h2>
    ),

    h3: ({ children, value }) => (
      <h3
        id={headingId(blockToPlainText(value))}
        className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] scroll-mt-[120px] text-[#062530] text-[19px] md:text-[21px] w-full"
      >
        {children}
      </h3>
    ),

    blockquote: ({ children }) => (
      <blockquote className="border-[#046675] border-l-[3px] border-solid pl-[20px] w-full">
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal italic leading-[1.6] text-[#55606b] text-[17px]">
          {children}
        </p>
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="content-stretch flex flex-col gap-[16px] items-start pl-[8px] md:pl-[24px] w-full">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="content-stretch flex flex-col gap-[16px] items-start list-decimal pl-[28px] md:pl-[44px] w-full marker:font-bold marker:text-[#046675]">
        {children}
      </ol>
    ),
  },

  listItem: {
    // The bullet is a drawn dot rather than a list marker so it matches the
    // 6px teal dot in the design.
    bullet: ({ children }) => (
      <li className="content-stretch flex gap-[12px] items-start w-full">
        <span aria-hidden="true" className="bg-[#046675] mt-[9px] rounded-full shrink-0 size-[6px]" />
        <span className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.6] min-w-px not-italic text-[#062530] text-[16px]">
          {children}
        </span>
      </li>
    ),
    number: ({ children }) => (
      <li className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.6] not-italic pl-[4px] text-[#062530] text-[16px]">
        {children}
      </li>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-['Inter:Bold'] font-bold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const href: string = value?.href ?? '#';
      const external = /^https?:\/\//i.test(href);
      return (
        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="font-['Inter:Semi_Bold'] font-semibold text-[#046675] underline underline-offset-2 hover:text-[#034f5b]"
        >
          {children}
        </a>
      );
    },
  },

  types: {
    image: ({ value }: { value: SanityImageRef }) => {
      const src = imageUrl(value, 1600);
      if (!src) return null;
      return (
        <figure className="w-full">
          <img
            alt={value.alt ?? ''}
            className="h-auto max-w-full rounded-[16px] w-full"
            loading="lazy"
            src={src}
          />
          {value.caption ? (
            <figcaption className="font-['Inter:Regular'] font-normal mt-[12px] not-italic text-[#8b939c] text-[13px]">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },

    callout: ({ value }: { value: { label?: string; text?: string } }) => (
      <aside className="bg-[#e5eff1] border border-[#e7e5e1] border-solid content-stretch flex flex-col gap-[12px] items-start p-[24px] rounded-[16px] w-full">
        <div className="content-stretch flex gap-[8px] items-center">
          <InfoIcon />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic text-[#046675] text-[14px] tracking-[1px]">
            {value.label}
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.6] not-italic text-[#062530] text-[15px] w-full">
          {value.text}
        </p>
      </aside>
    ),

    pullQuote: ({ value }: { value: { quote?: string; attribution?: string } }) => (
      <figure className="content-stretch flex flex-col items-start pl-[20px] md:pl-[32px] pr-[24px] py-[24px] w-full">
        <blockquote className="font-['Plus_Jakarta_Sans:Italic'] font-normal italic leading-[1.5] text-[#062530] text-[19px] md:text-[22px] w-full">
          {`“${value.quote ?? ''}”`}
        </blockquote>
        {value.attribution ? (
          <figcaption className="font-['Inter:Bold'] font-bold leading-[normal] mt-[12px] not-italic text-[#55606b] text-[14px] uppercase">
            {`— ${value.attribution}`}
          </figcaption>
        ) : null}
      </figure>
    ),
  },
};

export default function ArticleBody({ value }: { value: PortableTextBlock[] | undefined }) {
  if (!value?.length) return null;
  return <BasePortableText value={value} components={portableTextComponents} />;
}
