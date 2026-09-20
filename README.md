# Tall vs Grande vs Venti Size Comparator

A calorie comparator across Starbucks' three standard sizes: pick a drink and
see calories and calories-per-ounce for Tall, Grande, and Venti side by
side.

## Stack

- Next.js 16 (App Router, static export — `output: 'export'` in
  `next.config.ts`)
- TypeScript, Tailwind CSS
- No backend — nutrition data is a static JSON file bundled at build time

## Data

`src/data/starbucks-nutrition.json` — drink calorie data by size, and the
`_meta.sizes_oz` table (Tall 12oz, Grande 16oz, Venti hot 20oz, Venti iced
24oz) used for the calories-per-ounce calculation. Self contained; no
external data source or build-time fetch.

## GitHub Pages base path

This site is served from `https://<user>.github.io/cinder-ledger/`, so
`next.config.ts` sets `basePath: "/cinder-ledger"`. If the repo is ever
renamed, update that value to match.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build     # outputs static site to ./out
```

## Deploy

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys
to GitHub Pages on every push to `main`.
