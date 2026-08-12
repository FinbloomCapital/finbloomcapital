/**
 * One-time import of the previously hardcoded Learn/Article content into Sanity.
 *
 *   npm run seed              # create anything that does not exist yet
 *   npm run seed -- --replace # overwrite existing documents (discards Studio edits)
 *
 * Requires SANITY_API_TOKEN (Editor permission) in .env.local. The token is only
 * ever read here, in Node — it is never part of the browser bundle.
 */

import { createClient } from '@sanity/client';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import {
  authors,
  categories,
  excerptOnlyBody,
  learnPage,
  postsNeedingBody,
  posts,
  resources,
  videos,
} from './seedData.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// --- env ------------------------------------------------------------------

/** Minimal .env reader so the script needs no extra dependency. */
function loadEnvFile(file) {
  const path = join(root, file);
  if (!existsSync(path)) return;
  for (const rawLine of readFileSync(path, 'utf8').split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const name = line.slice(0, eq).trim();
    const value = line.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
    if (!(name in process.env)) process.env[name] = value;
  }
}

loadEnvFile('.env.local');
loadEnvFile('.env');

const projectId = process.env.VITE_SANITY_PROJECT_ID || 'hroyuvjy';
const dataset = process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;
const replace = process.argv.includes('--replace');

if (!token) {
  console.error(
    [
      '',
      'Missing SANITY_API_TOKEN.',
      '',
      '  1. Go to https://sanity.io/manage/project/' + projectId + '/api',
      '  2. Add API token → name it "Finbloom seed script" → permission: Editor',
      '  3. Create .env.local in the project root containing:',
      '',
      '       SANITY_API_TOKEN=your_token_here',
      '',
    ].join('\n'),
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-10-01',
  useCdn: false,
});

// --- helpers --------------------------------------------------------------

const imageCache = new Map();

/** Downloads a remote image once and uploads it into Sanity's asset store. */
async function uploadImage(url, filename) {
  if (!url) return null;
  if (imageCache.has(url)) return imageCache.get(url);

  const res = await fetch(url);
  if (!res.ok) throw new Error(`download failed (${res.status})`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload('image', buffer, { filename });

  const ref = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
  imageCache.set(url, ref);
  return ref;
}

const stats = { created: 0, replaced: 0, skipped: 0, failed: 0 };

/**
 * Writes one document, honouring --replace. Returns false when it already
 * existed and was left alone.
 */
async function put(doc, existingIds) {
  const exists = existingIds.has(doc._id);
  if (exists && !replace) {
    stats.skipped++;
    console.log(`  · ${doc._id} — already exists, left untouched`);
    return false;
  }
  await client.createOrReplace(doc);
  if (exists) {
    stats.replaced++;
    console.log(`  ↻ ${doc._id}`);
  } else {
    stats.created++;
    console.log(`  + ${doc._id}`);
  }
  return true;
}

const ref = (id) => ({ _type: 'reference', _ref: id });

const ids = {
  category: (slug) => `category-${slug}`,
  author: (slug) => `author-${slug}`,
  post: (slug) => `post-${slug}`,
  video: (slug) => `video-${slug}`,
  resource: (slug) => `resource-${slug}`,
};

// --- run ------------------------------------------------------------------

async function main() {
  console.log(`\nSeeding ${projectId}/${dataset}${replace ? ' (replacing existing documents)' : ''}\n`);

  const allIds = [
    'learnPage',
    ...categories.map((c) => ids.category(c.slug)),
    ...authors.map((a) => ids.author(a.slug)),
    ...posts.map((p) => ids.post(p.slug)),
    ...videos.map((v) => ids.video(v.slug)),
    ...resources.map((r) => ids.resource(r.slug)),
  ];

  let existingIds;
  try {
    existingIds = new Set(await client.fetch('*[_id in $ids]._id', { ids: allIds }));
  } catch (err) {
    console.error('\nCould not reach Sanity. Check the token and project id.\n');
    console.error(err.message);
    process.exit(1);
  }

  console.log('Categories');
  for (const c of categories) {
    await put(
      { _id: ids.category(c.slug), _type: 'category', title: c.title, slug: { _type: 'slug', current: c.slug }, order: c.order },
      existingIds,
    );
  }

  console.log('\nAuthors');
  for (const a of authors) {
    const id = ids.author(a.slug);
    if (existingIds.has(id) && !replace) {
      stats.skipped++;
      console.log(`  · ${id} — already exists, left untouched`);
      continue;
    }
    let image = null;
    if (a.image) {
      try {
        image = await uploadImage(a.image, `${a.slug}.png`);
      } catch (err) {
        stats.failed++;
        console.warn(`  ! ${id} — photo upload failed (${err.message}); creating without it`);
      }
    }
    await put(
      {
        _id: id,
        _type: 'author',
        name: a.name,
        slug: { _type: 'slug', current: a.slug },
        role: a.role,
        ...(a.bioHeadline ? { bioHeadline: a.bioHeadline } : {}),
        ...(a.bio ? { bio: a.bio } : {}),
        ...(image ? { image } : {}),
      },
      existingIds,
    );
  }

  console.log('\nArticles');
  for (const p of posts) {
    const id = ids.post(p.slug);
    if (existingIds.has(id) && !replace) {
      stats.skipped++;
      console.log(`  · ${id} — already exists, left untouched`);
      continue;
    }
    let mainImage = null;
    try {
      mainImage = await uploadImage(p.image, `${p.slug}.png`);
    } catch (err) {
      stats.failed++;
      console.warn(`  ! ${id} — image upload failed (${err.message}); creating without it`);
    }
    await put(
      {
        _id: id,
        _type: 'post',
        title: p.title,
        slug: { _type: 'slug', current: p.slug },
        excerpt: p.excerpt,
        ...(mainImage ? { mainImage: { ...mainImage, alt: p.title } } : {}),
        category: ref(ids.category(p.category)),
        author: ref(ids.author(p.author)),
        publishedAt: p.publishedAt,
        ...(p.readTime ? { readTime: p.readTime } : {}),
        featured: Boolean(p.featured),
        body: p.body ?? excerptOnlyBody(p.excerpt),
      },
      existingIds,
    );
  }

  console.log('\nVideos');
  for (const v of videos) {
    const id = ids.video(v.slug);
    if (existingIds.has(id) && !replace) {
      stats.skipped++;
      console.log(`  · ${id} — already exists, left untouched`);
      continue;
    }
    let thumbnail = null;
    try {
      thumbnail = await uploadImage(v.thumbnail, `${v.slug}.png`);
    } catch (err) {
      stats.failed++;
      console.warn(`  ! ${id} — thumbnail upload failed (${err.message}); creating without it`);
    }
    await put(
      {
        _id: id,
        _type: 'video',
        title: v.title,
        ...(v.description ? { description: v.description } : {}),
        ...(thumbnail ? { thumbnail } : {}),
        ...(v.duration ? { duration: v.duration } : {}),
        featured: Boolean(v.featured),
        order: v.order,
      },
      existingIds,
    );
  }

  console.log('\nResources');
  for (const r of resources) {
    const id = ids.resource(r.slug);
    if (existingIds.has(id) && !replace) {
      stats.skipped++;
      console.log(`  · ${id} — already exists, left untouched`);
      continue;
    }
    let icon = null;
    try {
      icon = await uploadImage(r.icon, `${r.slug}-icon.png`);
    } catch (err) {
      stats.failed++;
      console.warn(`  ! ${id} — icon upload failed (${err.message}); creating without it`);
    }
    await put(
      {
        _id: id,
        _type: 'resource',
        title: r.title,
        description: r.description,
        ...(icon ? { icon } : {}),
        ctaLabel: 'Download Playbook',
        order: r.order,
      },
      existingIds,
    );
  }

  console.log('\nLearn page settings');
  await put(learnPage, existingIds);

  console.log(
    `\nDone — ${stats.created} created, ${stats.replaced} replaced, ${stats.skipped} skipped` +
      (stats.failed ? `, ${stats.failed} asset upload(s) failed` : '') +
      '.',
  );

  if (postsNeedingBody.length) {
    console.log(
      [
        '',
        'Heads up: these articles only have their intro paragraph, because full',
        'body text never existed in the codebase. Write them out in the Studio:',
        '',
        ...postsNeedingBody.map((s) => `  - ${s}`),
        '',
      ].join('\n'),
    );
  }
}

main().catch((err) => {
  console.error('\nSeed failed:', err.message);
  process.exit(1);
});
