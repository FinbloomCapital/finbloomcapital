/**
 * The content that used to be hardcoded in LearnLandingPage.tsx and
 * ArticleDetailPage.tsx, expressed as Sanity documents.
 *
 * Every string here is copy that already existed in the codebase — nothing is
 * invented. Articles whose full body text never existed get the excerpt as
 * their opening paragraph and need to be written out in the Studio.
 */

// ---------------------------------------------------------------------------
// Portable Text helpers
// ---------------------------------------------------------------------------

let keyCounter = 0;
const key = () => `s${(++keyCounter).toString(36)}`;

const span = (text, marks = []) => ({ _type: 'span', _key: key(), text, marks });

export const para = (...children) => ({
  _type: 'block',
  _key: key(),
  style: 'normal',
  markDefs: [],
  children: children.map((c) => (typeof c === 'string' ? span(c) : c)),
});

export const heading = (text, style = 'h2') => ({
  _type: 'block',
  _key: key(),
  style,
  markDefs: [],
  children: [span(text)],
});

/** A bullet whose first fragment is bold, e.g. "Inventory Days: how long…" */
export const bullet = (lead, rest) => ({
  _type: 'block',
  _key: key(),
  style: 'normal',
  listItem: 'bullet',
  level: 1,
  markDefs: [],
  children: lead ? [span(lead, ['strong']), span(rest)] : [span(rest)],
});

export const callout = (label, text) => ({ _type: 'callout', _key: key(), label, text });

export const pullQuote = (quote, attribution) => ({
  _type: 'pullQuote',
  _key: key(),
  quote,
  attribution,
});

// ---------------------------------------------------------------------------
// Images (uploaded into Sanity so the live site stops depending on figma.com)
// ---------------------------------------------------------------------------

export const IMAGES = {
  featuredLarge: 'https://www.figma.com/api/mcp/asset/97207881-9d08-4233-b0e0-21f81fe8cdd2',
  thumb0: 'https://www.figma.com/api/mcp/asset/fe9198ab-6695-4e55-bc92-28ac8b4a821b',
  thumb1: 'https://www.figma.com/api/mcp/asset/582e1372-319f-41b7-9257-25c204fb56d3',
  thumb2: 'https://www.figma.com/api/mcp/asset/4571257a-01dd-46a6-9ad1-449a4370c69f',
  thumb3: 'https://www.figma.com/api/mcp/asset/7575c70c-be18-4a29-b52c-d34a36e566d0',
  thumb4: 'https://www.figma.com/api/mcp/asset/3ebf1fa5-97f2-40fc-9ace-9a305d93870a',
  thumb5: 'https://www.figma.com/api/mcp/asset/456127f5-1842-4e1f-ab23-8235b710d508',
  authorOluwaseun: 'https://www.figma.com/api/mcp/asset/41600207-cd86-4170-a275-ec945d7dbaec',
  videoFeatured: 'https://www.figma.com/api/mcp/asset/ab17e769-e9d3-4402-8a2d-a14577c8c764',
  videoMini0: 'https://www.figma.com/api/mcp/asset/8a3de065-b61b-498f-b5a6-091687fd49ff',
  videoMini1: 'https://www.figma.com/api/mcp/asset/f4848c10-06c1-4686-a186-0087fd3eace5',
  videoMini2: 'https://www.figma.com/api/mcp/asset/79f1a8b9-30bc-40f1-bd32-c19aa7171967',
  iconFile: 'https://www.figma.com/api/mcp/asset/e04de64c-c644-40ed-8f5e-3fc658612c17',
  iconChart: 'https://www.figma.com/api/mcp/asset/6f80b1c4-b429-417f-bbb1-70951add62e8',
  iconReceipt: 'https://www.figma.com/api/mcp/asset/d8dc5c0e-275b-45c8-835b-7ea018a04b91',
};

// ---------------------------------------------------------------------------
// Documents
// ---------------------------------------------------------------------------

export const categories = [
  { slug: 'business-growth', title: 'Business Growth', order: 1 },
  { slug: 'financing-tips', title: 'Financing Tips', order: 2 },
  { slug: 'cash-flow', title: 'Cash Flow', order: 3 },
  { slug: 'industry-news', title: 'Industry News', order: 4 },
  { slug: 'guides', title: 'Guides', order: 5 },
];

export const authors = [
  {
    slug: 'oluwaseun-adebayo',
    name: 'Oluwaseun Adebayo',
    role: 'Chief Risk Officer, Finbloom',
    bioHeadline: 'Senior Financial Analyst & Chief Risk Officer at Finbloom Capital',
    bio: 'Oluwaseun has over 12 years of experience analyzing corporate credit risks and treasury operations across West Africa. He is dedicated to helping local SMEs simplify cash forecasting, optimize transaction liquidity, and access collateral-free capital.',
    image: IMAGES.authorOluwaseun,
  },
  {
    slug: 'timothy-adeyemi',
    name: 'Timothy Adeyemi',
    role: 'Chief Executive Officer, Finbloom Capital',
  },
  { slug: 'faith-adeyemi', name: 'Faith Adeyemi', role: 'Contributor, Finbloom Capital' },
  { slug: 'adewunmi-obadina', name: 'Adewunmi Obadina', role: 'Contributor, Finbloom Capital' },
  { slug: 'ayodeji-peters', name: 'Ayodeji Peters', role: 'Contributor, Finbloom Capital' },
];

/**
 * The one article that had a real body in the codebase, rebuilt as Portable Text
 * including its bullet list, pull quote and callout box.
 */
const cashFlowGuideBody = [
  para(
    'In the Nigerian business ecosystem, cash flow is the ultimate lifeblood. Many SMEs fall into the fatal trap of conflating profitability with liquidity. A business can secure numerous purchase orders and have a highly profitable quarter on paper, but if cash is locked up in unpaid invoices while immediate operational expenses loom, that business is at risk of structural collapse.',
  ),
  heading('1. Understanding Your Working Capital Cycle'),
  para(
    'Your working capital cycle measures the time it takes to convert net current assets and liabilities into cash. For retail and distribution businesses, this means the duration between purchasing raw inventory and actually receiving naira in your bank account from your final clients.',
  ),
  bullet('Inventory Days:', ' How long your raw goods sit in storage before selling.'),
  bullet('Receivable Days:', ' The average time clients take to transfer funds after receiving invoices.'),
  bullet('Payable Days:', ' The grace period your suppliers grant you to settle outstanding balances.'),
  pullQuote(
    'The cost of waiting on cash is often higher than the cost of capital. Ambitious Nigerian businesses must treat liquidity management as a daily strategic operation, not an end-of-month accounting chore.',
    'Oluwaseun Adebayo, Chief Risk Officer at Finbloom',
  ),
  heading('2. Structural Solutions: Invoice Financing vs. SME Loans'),
  para(
    'Traditional commercial banks in Nigeria often require heavy collateral like landed property in prime Lagos locations to secure basic credit. For modern digital businesses and logistics companies, this is an impractical barrier. Fast-growing SMEs instead turn to flexible financing options like Invoice Factoring, which unlocks up to 80% of your unpaid receivables value within 24 hours.',
  ),
  callout(
    'LAGOS SME TIP',
    'Always negotiate a 2% early-settlement discount with your key corporate clients. While it reduces your margin slightly, it dramatically accelerates your collection cycles and frees up immediate operating cash.',
  ),
];

export const posts = [
  {
    slug: 'cash-flow-management-guide',
    title: 'The Definitive Guide to Cash Flow Management for Nigerian SMEs',
    excerpt:
      'Managing incoming invoices while waiting on client payments can paralyze operations. Learn how to secure working capital, structure payment cycles, and optimize liquidity without taking on expensive traditional debt.',
    category: 'cash-flow',
    author: 'oluwaseun-adebayo',
    image: IMAGES.featuredLarge,
    publishedAt: '2026-03-04T09:00:00Z',
    readTime: 8,
    featured: true,
    body: cashFlowGuideBody,
  },
  {
    slug: 'choosing-right-financing',
    title: 'How to Choose the Right Financing for Your Growing Business',
    excerpt:
      'Not all capital is created equal. Learn the structural differences between Invoice Factoring and SME Growth Loans.',
    category: 'financing-tips',
    author: 'timothy-adeyemi',
    image: IMAGES.thumb0,
    publishedAt: '2026-02-28T09:00:00Z',
  },
  {
    slug: 'scaling-distribution-network',
    title: 'Scaling Your Distribution Network Across Southwest Nigeria',
    excerpt:
      'Strategic distribution planning is key. Here are the 5 logistics traps to avoid when expanding beyond Lagos.',
    category: 'business-growth',
    author: 'faith-adeyemi',
    image: IMAGES.thumb1,
    publishedAt: '2026-02-24T09:00:00Z',
  },
  {
    slug: 'working-capital-cycle-blueprint',
    title: 'Understanding Your Working Capital Cycle: A Simple Blueprint',
    excerpt:
      'A simple formula to accurately calculate how long your cash is locked up in business inventory and unpaid receivables.',
    category: 'cash-flow',
    author: 'oluwaseun-adebayo',
    image: IMAGES.thumb2,
    publishedAt: '2026-02-20T09:00:00Z',
  },
  {
    slug: 'lagos-sme-regulation-changes-2026',
    title: 'Lagos SME Regulation Changes in 2026: What You Need to Know',
    excerpt:
      'A comprehensive summary of the latest licensing, compliance framework, and tax policy updates affecting retail businesses.',
    category: 'industry-news',
    author: 'adewunmi-obadina',
    image: IMAGES.thumb3,
    publishedAt: '2026-02-15T09:00:00Z',
  },
  {
    slug: 'solar-energy-asset-finance',
    title: 'Financing Productive Assets: Why Solar Energy is a Smart SME Move',
    excerpt:
      'Tired of generator diesel costs? Here is how solar equipment leasing paybacks can quickly boost your operating margin.',
    category: 'guides',
    author: 'ayodeji-peters',
    image: IMAGES.thumb4,
    publishedAt: '2026-02-11T09:00:00Z',
  },
  {
    slug: 'invoicing-best-practices',
    title: '6 Invoicing Best Practices to Shorten Your Payment Terms',
    excerpt:
      'Simple, highly actionable updates you can make to your invoice templates to ensure prompt customer responses and transfers.',
    category: 'cash-flow',
    author: 'timothy-adeyemi',
    image: IMAGES.thumb5,
    publishedAt: '2026-02-05T09:00:00Z',
  },
];

export const videos = [
  {
    slug: 'raise-first-10m-growth-facility',
    title: 'Finbloom Capital Masterclass: How to Raise Your First ₦10M Growth Facility',
    description:
      "Our CEO, Timothy Adeyemi, walks you step-by-step through the requirements, data points, credit profiling, and operational details you need to secure your SME's expansion funds.",
    thumbnail: IMAGES.videoFeatured,
    featured: true,
    order: 0,
  },
  {
    slug: 'invoice-financing-unlock-cash',
    title: 'Invoice Financing: How to Unlock Cash from Unpaid Invoices',
    thumbnail: IMAGES.videoMini0,
    duration: '04:35',
    order: 1,
  },
  {
    slug: 'leasing-commercial-equipment',
    title: "An Insider's Guide to Leasing High-Value Commercial Equipment",
    thumbnail: IMAGES.videoMini1,
    duration: '06:12',
    order: 2,
  },
  {
    slug: 'future-of-credit-bureau-operations',
    title: 'Timothy Adeyemi on the Future of Credit Bureau Operations',
    thumbnail: IMAGES.videoMini2,
    duration: '08:45',
    order: 3,
  },
];

export const resources = [
  {
    slug: 'sme-financing-guide',
    title: 'SME Financing Guide',
    description:
      'A complete handbook explaining interest structures, maturity repayment risks, and loan evaluation formulas for small businesses.',
    icon: IMAGES.iconFile,
    order: 1,
  },
  {
    slug: 'cash-flow-playbook',
    title: 'Cash Flow Playbook',
    description:
      'Excel template & instruction guide to forecast your receivables, payables, and project seasonal capital shortfalls easily.',
    icon: IMAGES.iconChart,
    order: 2,
  },
  {
    slug: 'invoice-management-101',
    title: 'Invoice Management 101',
    description:
      'A practical strategy checklist on automating payment reminders, designing early-settlement discounts, and reducing bad debt.',
    icon: IMAGES.iconReceipt,
    order: 3,
  },
];

export const learnPage = {
  _id: 'learnPage',
  _type: 'learnPage',
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

/** Articles that need their real body written in the Studio. */
export const postsNeedingBody = posts.filter((p) => !p.body).map((p) => p.slug);

/** Builds the opening paragraph for an article whose full text was never written. */
export function excerptOnlyBody(excerpt) {
  return [para(excerpt)];
}
