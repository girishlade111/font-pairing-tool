# Font Pairing Tool

A Next.js web app for discovering **Google Fonts pairings** — curated combinations of serif and sans-serif fonts for headings + body text, so web projects always have good typography.

Originally generated with [v0.app](https://v0.app); now maintained as a standalone tool.

## Features

- **Curated font-pair database** (`lib/font-data.ts`) — serif ↔ sans-serif pairings (Roboto, Open Sans, Lato, Playfair Display, Lora, Merriweather, Roboto Slab, …)
- **Browse grid** of fonts with live previews (`font-grid`, `font-card`)
- **Pairing detail view** — dialog showing each font's recommended partners (`font-pairing-detail`)
- **Search** across the font list (`search-bar`)
- **Editable preview** — type your own text to see how a pairing looks (`font-preview`)
- **Meteor-shower canvas animation** behind the header for ambiance
- **Dark/light theme** via `next-themes`
- Fully client-side — no API routes, no server actions, no database

## Tech Stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS (v3, `tailwind.config.ts`), tailwindcss-animate
- **UI:** Radix UI primitives (dialog, input), lucide-react icons
- **Extras:** react-hook-form + zod, recharts, sonner, embla-carousel-react
- **Analytics:** @vercel/analytics

## Quick Start

```bash
# Install dependencies (npm recommended on this setup)
npm install --legacy-peer-deps

# Run the dev server
npm run dev
# open http://localhost:3000

# Build for production (static export)
npm run build
# static output is written to ./out
```

## Project Structure

```
app/
  page.tsx          # home — header, meteor shower, font grid, footer
  layout.tsx        # root layout, fonts, theme provider, metadata
  globals.css
components/
  font-grid.tsx / font-card.tsx        # browsing UI
  font-pairing-detail.tsx              # pairing dialog
  font-preview.tsx                     # editable live preview
  search-bar.tsx                       # font search
  meteor-shower.tsx                    # canvas background animation
  footer.tsx / theme-provider.tsx
  ui/                                  # dialog, input primitives
lib/
  font-data.ts      # the curated pairing dataset — add fonts here
  utils.ts          # cn() class-merging helper
public/             # static assets
next.config.mjs     # static export (output: 'export'), unoptimized images
```

## Adding a Font

Edit `lib/font-data.ts` — add an entry to `fontData` with `name`, `category`
(`"serif"` | `"sans-serif"`), and a `pairings` array. Fonts are loaded from
Google Fonts at runtime.

## Env Vars

None required. The tool runs entirely client-side.

## Deployment

The site is a fully static export (`output: 'export'` in `next.config.mjs`):

- **GitHub Pages** — build with `npm run build` and publish the `out/` folder to the `gh-pages` branch.
- **Vercel** — import the repo; no build overrides needed.
- **Any static host** (Netlify, Cloudflare Pages) — publish directory is `out/`.

Note: the GitHub Pages build uses `basePath`/`assetPrefix` for the `/<repo>` subpath in `next.config.mjs`; if you deploy to a root domain (e.g. Vercel), remove those settings.

---

Built by Girish Lade — https://ladestack.in
