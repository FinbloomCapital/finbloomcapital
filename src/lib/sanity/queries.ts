/**
 * GROQ queries. `publishedAt <= now()` everywhere means an article dated in the
 * future stays hidden until that moment arrives, so posts can be scheduled.
 */

/** Fields every article card needs. Kept in one place so cards stay consistent. */
const CARD_FIELDS = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  readTime,
  featured,
  category->{title, "slug": slug.current},
  author->{name, image, role}
`;

/** Everything the Learn landing page renders, in a single round trip. */
export const LEARN_PAGE_QUERY = /* groq */ `{
  "settings": *[_type == "learnPage"][0]{
    heroTitle,
    heroSubtitle,
    latestEyebrow,
    latestTitle,
    videoEyebrow,
    videoTitle,
    resourcesTitle,
    resourcesSubtitle
  },
  "categories": *[_type == "category"] | order(order asc, title asc){
    _id,
    title,
    "slug": slug.current,
    order
  },
  "featured": *[_type == "post" && featured == true && publishedAt <= now()]
    | order(publishedAt desc)[0]{${CARD_FIELDS}},
  "posts": *[_type == "post" && publishedAt <= now()]
    | order(publishedAt desc)[0...50]{${CARD_FIELDS}},
  "videos": *[_type == "video"] | order(order asc)[0...12]{
    _id,
    title,
    description,
    url,
    thumbnail,
    duration,
    featured,
    order
  },
  "resources": *[_type == "resource"] | order(order asc)[0...9]{
    _id,
    title,
    description,
    icon,
    "fileUrl": file.asset->url,
    externalUrl,
    ctaLabel,
    order
  }
}`;

/**
 * A single article plus its related reading. Related articles from the same
 * category come first; `relatedRecent` is a top-up pool so the row is never
 * short when a category only has one article in it.
 */
export const ARTICLE_QUERY = /* groq */ `{
  "post": *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    featured,
    body,
    category->{title, "slug": slug.current},
    author->{
      _id,
      name,
      "slug": slug.current,
      image,
      role,
      bioHeadline,
      bio,
      linkedin,
      twitter
    },
    "relatedByCategory": *[
      _type == "post"
      && _id != ^._id
      && publishedAt <= now()
      && category._ref == ^.category._ref
    ] | order(publishedAt desc)[0...3]{${CARD_FIELDS}},
    "relatedRecent": *[
      _type == "post"
      && _id != ^._id
      && publishedAt <= now()
    ] | order(publishedAt desc)[0...6]{${CARD_FIELDS}}
  }
}`;
