# Cloudflare Pages static-export fix

The project uses `output: "export"`, so the legacy dynamic Next.js route
`app/practice-areas/[slug]/page.tsx` cannot remain unless it implements
`generateStaticParams()`.

Because these old paths are already handled by `public/_redirects`, the
correct fix is to remove the legacy Next.js redirect routes entirely:

- `app/practice-areas/[slug]/page.tsx`
- `app/practice-areas/page.tsx`
- `app/contact/page.tsx`

Cloudflare Pages now handles those redirects from `public/_redirects`.

Recommended Pages settings:
- Build command: `npm run build`
- Output directory: `out`
- Node: 22.x is fine

Canonical application routes remain `/services`, `/criminal-law`,
`/construction-law`, `/family-law`, `/conveyancing`, `/commercial-law`, and
`/contact-us`.
