# Nightingale Lawyers — Poppins animated redesign

A Next.js redesign of the existing Nightingale Lawyers website using the polished animated landing-page layout, Google Poppins, clean semantic routes, and source-site copy restored from the supplied Playwright scrape.

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## Canonical routes

```text
/
/about
/services
/criminal-law
/construction-law
/family-law
/conveyancing
/commercial-law
/blog
/blog/welcome-a-law-firm-wollongong-online-frontier
/contact-us
```

Legacy Wix URLs and the `/practice-areas/...` URLs from earlier redesign packages are handled by permanent redirects in `next.config.ts`.

## Content fidelity

The supplied `nightingale_scrape.zip` was used as the source authority. Source wording, spelling, capitalisation, punctuation, visible review quotes, long-form service copy, team bios, contact copy and the existing blog post are retained without editorial rewriting.

See `CONTENT-MIGRATION-AUDIT.md` for the route map and validation notes.

## Typography

Google **Poppins** is loaded with `next/font/google` in `app/layout.tsx` with 400, 500, 600 and 700 weights and `display: swap`. The global font variable is also used explicitly by form controls.

## Motion

The homepage motion layer remains in `components/LandingMotion.tsx`. It uses CSS transforms, IntersectionObserver, requestAnimationFrame and pointer motion rather than a separate animation dependency. Reduced-motion and mobile fallbacks remain enabled.
