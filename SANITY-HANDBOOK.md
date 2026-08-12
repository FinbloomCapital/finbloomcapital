# Finbloom Sanity Handbook

How to reach the CMS, how to publish a blog post, and what every CLI command does.

Companion to [`SANITY.md`](./SANITY.md), which covers architecture and how the
code fits together. This document is the operational guide.

---

## At a glance

| | |
| --- | --- |
| **Project** | Finbloom Blog — `hroyuvjy` |
| **Organization** | `opOTOCQS8` |
| **Dataset** | `production` — public read, no token needed by the site |
| **Studio app id** | `on4sfs3bes5qwei7h27qof9w` |
| **Editors sign in at** | <https://www.sanity.io/welcome> |
| **Vanity URL** | <https://finbloom.sanity.studio> → 302 redirects into the Dashboard |
| **Admin console** | <https://sanity.io/manage/project/hroyuvjy> — **no content editing here** |

The Studio is deployed to Sanity's hosting. Editors need no terminal, no repo
checkout, and no local install.

---

# Part 1 — For editors

## Getting in

1. Go to <https://www.sanity.io/welcome> and sign in.
2. Open **Finbloom Capital**. The Studio loads inside the Dashboard.

If you don't see it, you haven't been invited yet — an administrator adds you at
sanity.io/manage → **Members → Invite**, role **Editor**. Editor gives full
read/write on all content while keeping you out of tokens and project settings.

> **sanity.io/manage is not where you write.** It is the admin console —
> members, API tokens, CORS, datasets. It has a *Studios* tab that links to the
> Studio, but no editing surface of its own. Content always lives in the
> Dashboard.

## What's in the sidebar

| Section | Controls |
| --- | --- |
| **Learn Page Settings** | Hero headline/subtitle and section headings. One document only. Blank fields fall back to the built-in copy. |
| **Articles** | Blog posts. |
| **Categories** | The filter pills on the Learn page. |
| **Authors** | Bylines and the bio card at the foot of an article. |
| **Videos** | The "Watch & Learn" section. |
| **Resources** | The downloadable guides. |

## Publishing a blog post

**Before your first article**, at least one **Category** and one **Author** must
exist — an article cannot be saved without both, because they are references
rather than free text.

Then: **Articles → Create new**, and fill in:

| Field | Required | Notes |
| --- | --- | --- |
| **Title** | ✅ | |
| **Slug** | ✅ | Auto-generates from the title. Becomes the URL: `/article-detail/<slug>`. **Avoid changing it after publishing** — old links break. |
| **Excerpt** | ✅ | Max 320 characters. Shown on cards and under the headline. |
| **Main image** | ✅ | Set the hotspot so it crops well on cards. Fill in **Alt text**. |
| **Category** | ✅ | Pick an existing one. |
| **Author** | ✅ | Pick an existing one. |
| **Body** | — | The article itself. See below. |
| **Published at** | ✅ | Defaults to now. See *Scheduling*. |
| **Read time** | — | Leave blank to auto-estimate from body length (~200 wpm). |
| **Feature this article** | — | See *Featuring*. |

Press **Publish**. The change is live on the site in about a minute — the site
reads through Sanity's CDN, which is why it isn't instant.

Metadata fields (*Published at*, *Read time*, *Feature*) sit under the
**Metadata** tab at the top of the form.

## Writing the body

Available from the block-style dropdown:

- **Normal**, **Section heading** (h2), **Sub heading** (h3), **Quote**
- Bullet and numbered lists
- **Bold**, *Italic*, and links (http, https, mailto, tel)

Available from the `+` menu inside the editor:

- **Image** — with alt text and an optional caption
- **Callout box** — the teal tip box. Has a *Label* (defaults to "LAGOS SME TIP")
  and body text.
- **Pull quote** — the large italic quote.

**The "In This Guide" sidebar builds itself** from your *Section heading* (h2)
and *Sub heading* (h3) blocks, and highlights whichever section the reader is
scrolled to. An article with no headings simply gets no index — so use headings
if you want one.

## Featuring, scheduling, read time

- **Featuring** — tick *Feature this article*. The **most recently published**
  featured article fills the large card at the top of the Learn page and gets a
  "FEATURED GUIDE" tag on its own page. It is automatically removed from the
  grid below, so it never appears twice. Ticking it on a second article simply
  demotes the older one — there is no need to untick the previous one.
- **Scheduling** — set *Published at* to a future date and the article stays
  hidden until that moment, then appears on its own. No further action needed.
- **Read time** — leave blank unless you want to override the estimate.

## The other content types

- **Categories** — *Sort order* sets left-to-right position in the filter bar;
  lower numbers first.
- **Authors** — the bio card at the bottom of an article **only appears once
  Bio is filled in**. *Short role* shows under the byline; *Bio headline* is the
  longer title on the card.
- **Videos** — a video with no URL renders as a still with no play button, which
  is the intended way to tease something unpublished. Add a YouTube or Vimeo
  link and it plays inline. One video can be featured into the large player.
- **Resources** — upload a file **or** set an external link; the link wins if
  both are set. With neither, the button renders greyed out rather than as a
  dead link.

## Limits worth knowing

The Learn page renders at most **50 articles**, **12 videos**, and **9
resources**. Older items past those cuts stop appearing on the landing page —
articles remain reachable by direct URL.

---

# Part 2 — CLI reference

All commands run from the repo root unless noted. Node and npm required.

### `npm install`

Installs the **site's** dependencies. Does not touch the Studio.

### `npm run studio:install`

> `npm --prefix studio install`

Installs the **Studio's** dependencies, which live in their own `studio/`
package. Needed once on a fresh clone — `npm install` at the root does not cover
it. Skipping this is the usual cause of `npm run studio` failing immediately.

### `npm run studio`

> `npm --prefix studio run dev` → `sanity dev`

Runs the Studio locally at <http://localhost:3333>, against the **live
production dataset**. There is no separate staging dataset, so anything you
publish here is immediately real. Use it for schema work, not as a safer place
to draft.

### `npm run studio:deploy`

> `npm --prefix studio run deploy` → `sanity deploy`

Builds the Studio and ships it to Sanity's hosting, updating what editors see at
sanity.io/welcome.

**Run this after any change under `studio/schemaTypes/`.** The hosted Studio
serves a build, not your working tree — a new field is invisible to editors
until you redeploy.

Needs credentials, either:

- a local session from `npx sanity login` (interactive, opens a browser), or
- `SANITY_AUTH_TOKEN` set to a **Deploy Studio** token, created at
  sanity.io/manage → **API → Tokens**. The narrow `deploy-studio` role is
  sufficient — prefer it over an administrator token.

```bash
# CI / non-interactive
SANITY_AUTH_TOKEN=<deploy-studio-token> npm run studio:deploy
```

The target Studio is pinned by `deployment.appId` in `studio/sanity.cli.ts`.
Leave it alone unless you deliberately want a second, separate Studio — without
it the CLI prompts, and answering wrong creates a duplicate.

### `npm run seed`

> `node scripts/seed.mjs`

Imports the original hardcoded articles into Sanity. **Safe to re-run** —
existing documents are left untouched.

```bash
cp .env.example .env.local     # then paste an Editor token into SANITY_API_TOKEN
npm run seed
npm run seed -- --replace      # overwrite existing docs, DISCARDING Studio edits
```

`--replace` destroys editor changes. Only use it to reset a dataset you are
certain nobody has edited.

Requires `SANITY_API_TOKEN` — an **Editor** token from sanity.io/manage → API →
Tokens. It is deliberately never prefixed with `VITE_`, so it cannot reach the
browser bundle. It is read only by Node.

### `npm run dev` / `npm run build` / `npm run preview`

The website itself — Vite dev server, production build, and local preview of
that build. The site reads Sanity at runtime; no build step pulls content in, so
publishing does not require a redeploy of the site.

### Useful raw CLI

Run from `studio/`:

```bash
npx sanity login          # interactive browser auth
npx sanity logout
npx sanity schema list    # what schemas are deployed
npx sanity build          # build without deploying — a safe pre-flight check
```

---

# Part 3 — How content reaches the site

1. You publish in the Studio.
2. The document lands in the `production` dataset.
3. The site queries it with GROQ (`src/lib/sanity/queries.ts`) at page load,
   through Sanity's CDN.
4. CDN cache means the change surfaces in roughly a minute.

No site rebuild or deploy is involved. Publishing is the whole flow.

**Scheduling is enforced in the query** — every article query carries
`publishedAt <= now()`, which is what makes future-dated posts invisible rather
than merely unlisted.

### If you add a field to the schema

Three steps, and missing any one of them means it silently doesn't appear:

1. Add it in `studio/schemaTypes/`.
2. Add it to the relevant GROQ query in `src/lib/sanity/queries.ts` — GROQ
   projections are explicit, so an unlisted field is simply not fetched.
3. Render it. For **body block types specifically**, add a renderer in
   `src/lib/sanity/PortableText.tsx` or the block will not show up on the site.

Then `npm run studio:deploy`.

### First-time setup on a new machine

```bash
npm install
npm run studio:install
```

Add `http://localhost:5173` and the production domain under **API → CORS
origins** at sanity.io/manage, or the browser refuses to load content.
Credentials are not needed — leave *Allow credentials* off.

---

## Troubleshooting

| Symptom | Cause |
| --- | --- |
| Editor can't see the project at sanity.io/welcome | Not invited yet, or invited to the wrong organization. |
| A new schema field isn't in the Studio | Studio not redeployed — run `npm run studio:deploy`. |
| A new field is in the Studio but not on the site | Missing from the GROQ projection, or missing a PortableText renderer. |
| Site loads but shows no content | CORS origin missing for that domain at sanity.io/manage. |
| Published article doesn't appear | *Published at* is in the future, or it's the featured article (which renders in the top card, not the grid). |
| `npm run studio` fails instantly | `npm run studio:install` not run. |
| `sanity deploy` prompts for an application id | `deployment.appId` missing from `studio/sanity.cli.ts`. |

---

## Current status

The Studio is deployed and editors can publish today.

**However — the live site does not yet read from Sanity.** The CMS integration
was merged to `main` and then reverted (`0dade4d`), so production currently
serves the previous hardcoded articles. Content published in the Studio will not
appear on finbloomcapital.com until the `feat/sanity-blog-cms` work is re-landed
on `main`.
