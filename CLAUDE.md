# CLAUDE.md

Personal portfolio of Tien Pham Dinh (Tyler Pham), AI Engineer. Live at https://tylerpham.dev, deployed on Vercel from `main`.

## Commands

```bash
npm run dev      # local dev at http://localhost:3000
npm run build    # production build — run before every commit; it must pass
npm start        # serve the build
```

No test suite and no linter config. `npm run build` is the check.

## Stack

- Next.js 14 App Router, React 18, plain JavaScript (no TypeScript).
- **Plain global CSS in `app/globals.css`.** No Tailwind, no CSS modules, no UI library. Don't add one.
- Fonts via `next/font/google` in `app/layout.js`: Bricolage Grotesque (`--display`) and JetBrains Mono (`--mono`).
- Content is Markdown with front matter in `content/`, read at build time by `lib/content.js` (gray-matter + marked). Every page is static.
- `@/` resolves to the repo root (`jsconfig.json`).
- `@vercel/analytics` is mounted in the root layout.

## Layout

```
app/
  layout.js            root: metadata, JSON-LD, <SiteFX/>, <Nav/>, footer
  globals.css          ALL styles + design tokens
  page.js              home
  about|work|solutions|blog|contact/page.js
  solutions/[slug], blog/[slug]   detail pages (use <Article/>)
  robots.js, sitemap.js
components/
  Nav.js               sticky header + full-screen mobile menu (client)
  SiteFX.js            cursor follower, scroll progress, card spotlight, scroll reveals, TOC scrollspy (client)
  Preloader.js         home-only counter; shown once per session (client)
  Blocks.js            SolutionCard, PostRow, SectionHead, CtaBand
  Article.js           detail layout: header + meta row + sticky TOC + prose
  CopyEmail.js
lib/content.js         getAll / getOne / getSlugs / formatDate; getOne adds h2 ids + `toc`
content/solutions/*.md front matter: title, summary, category, stack[], date, featured
content/blog/*.md      front matter: title, summary, date, tags[], readingTime
public/                avatar.jpg, og.jpg, favicon.svg, CV PDF, llms.txt
github-profile/        separate repo (gitignored) — don't touch
```

## Adding content

- New solution or post = one `.md` file in `content/solutions/` or `content/blog/`. The filename is the slug. No code change needed.
- Use `##` for main sections: they become the table of contents (shown when there are 3 or more).
- Newest `date` sorts first. Home shows the first 4 solutions and the first 2 posts.

## Design system (keep it consistent)

Dark only, with no light mode. All colors come from tokens in `:root` at the top of `globals.css`. Never hard-code hex values in components.

| Token | Use |
|---|---|
| `--bg` `#0e0e10`, `--surface`, `--surface-2` | page, cards, chips |
| `--ink` | headings, important text |
| `--soft` | body text |
| `--muted` | labels, meta |
| `--line`, `--line-strong` | dividers, borders |
| `--accent` `#c8f560` | primary button, current nav item, highlights. **Change the brand color here only**; `--accent-soft` and `--accent-line` derive from it |

Rules:
- Text sizes: body 16–18px, small labels at least 12px (`.label`: mono, uppercase, `--muted`). Never go below 12px, and don't use font-weight 300 for body text.
- Reuse existing building blocks instead of inventing new ones: `.btn.primary` / `.btn.ghost`, `.more` (underlined text link), `.arr` (round arrow), `.tag`, `.card`, `.post-row`, `.work-row`, `.cta-band`, `.sec` + `<SectionHead/>`, `.page-hero`.
- Content width is `.wrap` (max 1200px, 32px padding, 20px under 640px). Reading text is capped at 68ch (`.prose`).
- At most one primary (accent) button per block.
- Layout must work at 375px with no horizontal scroll. Breakpoints in use are 640, 760, 820 and 900px.

## Animation (keep it, and keep it accessible)

- Ease is `var(--ease)` = `cubic-bezier(.22,1,.36,1)`.
- Scroll-in: add class `reveal` to an element. `SiteFX` adds `.in` and staggers siblings automatically.
- Hero entrance uses `.in-1` … `.in-5` and `.name .w i`. On Home these are paused until `Preloader` adds `.go` to `main.has-loader`.
- Every new animation must be covered by the `prefers-reduced-motion` block at the bottom of `globals.css`.
- The system cursor stays visible. The accent dot (`.cursor`) is decoration only.
- The `<noscript>` style in `layout.js` shows reveal and hero content when JS is off. Keep it.

## Conventions

- Server components by default. Add `'use client'` only for interactivity (Nav, SiteFX, Preloader, CopyEmail).
- Keep copy in English. Personal facts (email `phamdt203@gmail.com`, LinkedIn, GitHub `0121ienT`) live in `layout.js` (JSON-LD), `contact/page.js` and `Nav.js`. Update all of them together.
- When adding a route, also add it to `Nav.js` LINKS, the footer in `layout.js` and `app/sitemap.js`.
- Commit messages: short imperative subject, e.g. "Add consulting (remote) to availability across site".
