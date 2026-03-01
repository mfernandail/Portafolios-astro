# Maria Fernanda — Portfolio

Minimal Astro site highlighting my work as a programmer focused on intentional, test-driven software and data solutions.

## Snapshot

- **Role:** Programmer & data-focused developer
- **Location:** Arica, Chile (remote-friendly)
- **Email:** maria.ibanez.leiva@gmail.com
- **LinkedIn:** [mfernandail](https://www.linkedin.com/in/mfernandail)
- **GitHub:** [mfernandail](https://github.com/mfernandail)

## Sections Covered

- Hero with hover-to-reveal contact info
- About & summary powered by `cv.json`
- Experience, Education, Projects, Skills, Mini Game, and Command Palette

## Tech Focus

`Astro` · `TypeScript` · `React` · `Node` · `Express` · `MySQL` · `Power Platform`

## Interests

- Reading fantasy and long-form fiction
- Exploring practical AI integrations for real products
- Casual Nintendo Switch gaming (New Super Mario Bros as a go-to reset)

## Getting Started

```bash
pnpm install
pnpm dev
```

| Script         | Purpose                                  |
| -------------- | ---------------------------------------- |
| `pnpm dev`     | Start the local dev server               |
| `pnpm build`   | Generate the production bundle (`dist/`) |
| `pnpm preview` | Preview the production build locally     |

## Data & Config

- All copy and profile links come from `cv.json`; updating it refreshes the UI automatically.
- Skills and contact icons are resolved via `src/components/Icon.astro` for consistency.
- Supabase integration notes for the Experience section live in `supabase.md` using `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY`.

## Deploy

Run `pnpm build` and publish the `dist/` folder to your preferred static host (Vercel, Netlify, Cloudflare Pages, etc.).
