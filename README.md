# Shuman Cleaners

Website for Shuman Cleaners, a family-owned dry cleaner on South West Main Street in Vidalia, Georgia, since 1926.

Built with Next.js 16, TypeScript, Tailwind CSS v4 and shadcn/ui. The hero is an interactive WebGL particle effect that rebuilds the Shuman logo from ~100k particles. Moving the cursor turns it liquid, and it settles back into the crisp logo.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run lint
```

## Deploy (Cloudflare Workers)

The site is a static export: `npm run build` writes plain files to `out/`, and `wrangler.jsonc` serves that folder from the `shuman-cleaners` Worker. Pushing to `main` deploys through Workers Builds, with these settings:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

To deploy from your own machine instead, run `npm run deploy`.

## Where things live

| What | Where |
| --- | --- |
| Business details, services, perks, story timeline | `lib/site.ts` |
| Page sections (Services, Our story, Visit, footer) | `components/site/sections.tsx` |
| Hero settings and light/dark theme state | `components/site/site-shell.tsx` |
| Liquid particle hero component | `components/ui/liquid-sculpture-hero.tsx` |
| Colours and fonts | `app/globals.css`, `app/layout.tsx` |
| Photos and logo cut-outs | `public/images/` |

Most copy changes only need `lib/site.ts`.

## Notes

- Content was taken from the previous site, shumanscleaners.com, and the lettering on the company van.
- `shuman-logo-light.png` and `shuman-logo-dark.png` are high-res recolours of the original logo, used by the particle hero. Keep their transparent backgrounds.
- The hero component is from 21st.dev (by guglielmogiannattasio.it). Local changes: fixed escaped newlines from the paste, added an `onThemeChange` prop so the page follows the hero's light/dark switch, and fixed a stretched fallback image while the logo loads.

## Still needed from the client

- Opening hours (the old site never listed them).
- Founding year confirmation: the old site says 1926 in most places and 1929 once. This site uses 1926.
- Whether fur storage (on the van) is still offered.
- Higher-resolution scans of the archive photos.
