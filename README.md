# Frame & Focus — Video Editor Portfolio

A premium, cinematic portfolio site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Every piece of content — projects, text, links, testimonials — lives in two plain-language data files, so you never need to touch component code to update the site.

---

## 1. Folder structure

```
video-editor-portfolio/
├── app/
│   ├── layout.tsx            # Root layout: fonts, metadata, providers, navbar/footer
│   ├── page.tsx               # Homepage — order of sections lives here
│   ├── globals.css            # Theme variables, base styles, custom classes
│   ├── not-found.tsx          # Custom 404 page
│   ├── sitemap.ts             # Auto-generated sitemap.xml
│   ├── robots.ts              # Auto-generated robots.txt
│   └── portfolio/[id]/page.tsx # Individual project detail page (auto-generated per project)
├── components/
│   ├── hero.tsx, about.tsx, services.tsx, skills.tsx, software.tsx,
│   │   portfolio-section.tsx, testimonials.tsx, experience.tsx,
│   │   process.tsx, stats.tsx, faq.tsx, contact.tsx   # one file per homepage section
│   ├── navbar.tsx, footer.tsx, theme-toggle.tsx, theme-provider.tsx
│   ├── scroll-progress.tsx, back-to-top.tsx, loading-screen.tsx, custom-cursor.tsx
│   ├── video-player.tsx       # Universal video embed (mp4/YouTube/Vimeo/Drive/IG/FB)
│   └── portfolio/
│       ├── portfolio-grid.tsx      # Filtering/search/sort logic
│       ├── portfolio-filters.tsx   # Filter bar UI
│       ├── portfolio-card.tsx      # Grid card UI
│       ├── before-after-slider.tsx # Color-grade comparison slider
│       └── share-button.tsx
├── data/
│   ├── portfolio.ts           # 🎬 ALL PROJECTS — add/remove/edit videos here
│   └── site-config.ts         # ⚙️ ALL OTHER TEXT — hero, about, services, FAQ, etc.
├── lib/utils.ts                # Small helpers (class merging, embed URL builders)
├── public/                     # Static files (favicon, og-image, etc.)
├── tailwind.config.ts          # 🎨 COLOR & FONT TOKENS
└── next.config.js
```

---

## 2. How to add a new video

Open **`data/portfolio.ts`**. Copy any existing project object inside the `projects` array, paste it at the position you want it to appear, and edit the fields:

```ts
{
  id: 'my-new-project',                 // unique, used in the URL /portfolio/my-new-project
  title: 'My New Project',
  description: 'One or two sentence summary shown on the card.',
  thumbnail: 'https://.../thumb.jpg',    // grid card image
  coverImage: 'https://.../cover.jpg',   // large image on the project page
  video: { type: 'youtube', src: 'dQw4w9WgXcQ' }, // see VIDEO GUIDE below
  category: 'Commercial',                // must match a string in `categories`
  client: 'Client Name',
  software: ['Premiere Pro', 'DaVinci Resolve'],
  duration: '1:30',
  date: '2026-07-01',
  tags: ['Commercial', 'Color Grading'],
  featured: true,
  published: true,
  platform: 'YouTube',
}
```

**Video guide** — set `video.type` and `video.src` together:
| type | `src` should be |
|---|---|
| `mp4` | direct link to the .mp4 file |
| `youtube` | the video ID after `v=` in the URL |
| `vimeo` | the numeric Vimeo video ID |
| `drive` | the Google Drive file ID |
| `instagram` | the full reel URL |
| `facebook` | the full video URL |

## 3. How to delete a video

Delete that project's entire `{ ... }` object from the `projects` array in `data/portfolio.ts`.

## 4. How to edit project information

Find the project in `data/portfolio.ts` by its `title` or `id`, and edit any field directly — title, description, client, software, tags, date, etc. Changes appear on both the grid card and the project detail page automatically.

To **hide** a project without deleting it: set `published: false`.
To **feature** a project: set `featured: true`.
To **reorder** projects: move its object up or down in the array — cards render in file order.
To **add a new category**: add the string to the `categories` array at the bottom of the file, then use that exact string in a project's `category` field.

## 5. How to change thumbnails

Edit the `thumbnail` (grid card) and `coverImage` (project page hero image) fields for that project in `data/portfolio.ts`. Any hosted image URL works (Unsplash, Cloudinary, your own CDN, etc.) — if you host images on a domain not already listed, add it to `remotePatterns` in `next.config.js` (a wildcard is already included, so most hosts work out of the box).

## 6. How to change website colors

Open **`tailwind.config.ts`**. All colors are named tokens under `theme.extend.colors`:

```ts
accent: { DEFAULT: '#F2A65A' }  // primary accent (buttons, highlights)
teal:   { DEFAULT: '#3E8E8E' }  // secondary accent
bg:     { DEFAULT: '#0B0D10' }  // page background
```

Change any hex value and it updates everywhere that color is used across the site.

## 7. How to change fonts

Open **`app/layout.tsx`**. Three Google Fonts are loaded via `next/font/google`:

```ts
const displayFont = Space_Grotesk({ ... })  // headings
const bodyFont = Inter({ ... })              // body text
const monoFont = JetBrains_Mono({ ... })     // timecodes / labels
```

Swap the imported font name (any [Google Font](https://fonts.google.com) works) and keep the `variable` name the same — the rest of the site picks it up automatically through `tailwind.config.ts`.

## 8. How to edit every section

| Section | Edit here |
|---|---|
| Logo, site name, nav links, socials, contact info | `data/site-config.ts` |
| Hero headline/subtext/buttons | `data/site-config.ts` → `hero` |
| About text, portrait, stats | `data/site-config.ts` → `about` |
| Services cards | `data/site-config.ts` → `services` |
| Skills bars | `data/site-config.ts` → `skills` |
| Software marquee | `data/site-config.ts` → `software` |
| Portfolio projects & categories | `data/portfolio.ts` |
| Testimonials | `data/site-config.ts` → `testimonials` |
| Experience timeline | `data/site-config.ts` → `experience` |
| Editing process steps | `data/site-config.ts` → `process` |
| Client statistics | `data/site-config.ts` → `stats` |
| FAQ | `data/site-config.ts` → `faq` |
| Contact form destination email | `data/site-config.ts` → `contact.email` |
| Section order on homepage | `app/page.tsx` |
| SEO title/description/Open Graph/Twitter card | `data/site-config.ts` → `seo` |

Every homepage section is its own component file in `components/` if you ever need deeper layout changes — each has a comment at the top pointing to its data source.

---

## 9. Installation

Requires Node.js 18.17+.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# Site is now running at http://localhost:3000
```

Before going live, add your own `public/favicon.ico` and `public/og-image.jpg` (a 1200×630 image used for social share previews), and update `siteConfig.seo.url` in `data/site-config.ts` to your real domain.

---

## 10. Deployment

**Vercel (recommended, zero-config):**
1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset is auto-detected as Next.js — click **Deploy**.

**Netlify:**
1. Push the project to a Git repo and import it in Netlify.
2. Build command: `npm run build` — Publish directory: `.next`.
3. Install the official **Next.js Runtime** plugin (Netlify prompts for this automatically).

**GitHub Pages (static export):**
GitHub Pages only serves static files, so a couple of features change:
1. Add `output: 'export'` to `next.config.js`.
2. Note that dynamic routes (`/portfolio/[id]`) are pre-rendered at build time via `generateStaticParams`, which is already set up — this works fine with static export.
3. Run `npm run build`, then push the generated `out/` folder to your `gh-pages` branch (or use the `peaceiris/actions-gh-pages` GitHub Action).
4. The custom cursor, theme toggle, and video embeds all work client-side and are unaffected by static export.

---

## Performance & accessibility notes

- Images use `next/image` for automatic optimization and lazy loading.
- Focus states are visible on every interactive element (`:focus-visible` in `globals.css`).
- `prefers-reduced-motion` is respected — animations shorten to near-zero for users who request it.
- Fonts are self-hosted via `next/font` (no external font requests, no layout shift).
- The custom cursor auto-disables on touch devices.
