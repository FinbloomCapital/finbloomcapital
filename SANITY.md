# Sanity CMS — Blogs & Articles

The Learn page and every article are driven by Sanity. Nothing about them is
hardcoded any more.

- **Project id:** `hroyuvjy`
- **Dataset:** `production` (public — the site reads it without a token)
- **Studio:** lives in [`studio/`](./studio), deployed separately to Sanity's hosting

## Day-to-day: editing content

```bash
npm run studio          # opens the Studio at http://localhost:3333
```

The sidebar is organised as:

| Section | What it controls |
| --- | --- |
| **Learn Page Settings** | Hero headline/subtitle and the section headings. Blank fields fall back to the original copy. |
| **Articles** | Blog posts. The slug becomes the URL: `/article-detail/<slug>`. |
| **Categories** | The filter pills on the Learn page. `Sort order` sets their left-to-right order. |
| **Authors** | Name, photo, role, bio and social links. The bio card at the bottom of an article only appears once **Bio** is filled in. |
| **Videos** | The "Watch & Learn" section. |
| **Resources** | The downloadable guides. |

Publishing in the Studio makes a change live within about a minute (the site
reads through Sanity's CDN).

### Things worth knowing

- **Featuring an article** — tick *Feature this article*. The most recently
  published featured article fills the large card at the top of Learn and gets a
  "FEATURED GUIDE" tag on its own page. It is automatically excluded from the
  grid below so it never appears twice.
- **Scheduling** — an article dated in the future stays hidden until that moment.
- **Read time** — leave blank and it is estimated from the body (~200 wpm).
- **The "In This Guide" sidebar** builds itself from the *Section heading* (h2)
  and *Sub heading* (h3) blocks in the body, and highlights whichever section
  you are scrolled to. An article with no headings simply has no index.
- **Callout box** and **Pull quote** are available from the `+` menu inside the
  body editor — they render as the teal tip box and the large italic quote.
- **Videos** without a URL show as a still with no play button. Add a YouTube or
  Vimeo link and it plays inline.
- **Resources** without an uploaded file show the button label greyed out rather
  than a dead link.

## Deploying the Studio

```bash
npm run studio:deploy   # publishes to https://finbloom.sanity.studio
```

Change `studioHost` in [`studio/sanity.cli.ts`](./studio/sanity.cli.ts) if that
hostname is taken. Editors then need inviting under
*Members* in [sanity.io/manage](https://sanity.io/manage/project/hroyuvjy).

## First-time setup on a new machine

```bash
npm install
npm run studio:install
```

Add `http://localhost:5173` and the production domain under
**API → CORS origins** in sanity.io/manage, or the browser will refuse to load
content. Credentials are not needed — leave "Allow credentials" off.

## Re-running the content import

`scripts/seed.mjs` imported the original hardcoded articles. It is safe to run
again: existing documents are left untouched.

```bash
cp .env.example .env.local     # then paste an Editor token into SANITY_API_TOKEN
npm run seed
npm run seed -- --replace      # overwrite existing docs, discarding Studio edits
```

The token is read only by Node. It is never prefixed with `VITE_`, so it can
never end up in the browser bundle.

## How the code fits together

| File | Role |
| --- | --- |
| `src/lib/sanity/client.ts` | Configured read-only client. Project id/dataset default here and can be overridden with `VITE_` env vars. |
| `src/lib/sanity/queries.ts` | The two GROQ queries — one per page. |
| `src/lib/sanity/PortableText.tsx` | Renders article bodies. **Add a block type to the schema and you must add a renderer here**, or it will not appear on the site. |
| `src/lib/sanity/image.ts` | Builds sized CDN image URLs. Always pass a width. |
| `src/lib/sanity/utils.ts` | Dates, read-time estimate, heading extraction, video embed URLs. |
| `src/lib/sanity/useSanityQuery.ts` | Fetch hook with loading/error state. |
| `src/components/shared/ArticleCard.tsx` | The article card, shared by the Learn grid and "Continue reading". |
