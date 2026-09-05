# Content migration and route audit

## Canonical route map

| Source / legacy URL | New canonical URL | Handling |
|---|---|---|
| `/` | `/` | retained |
| `/about` | `/about` | retained |
| `/services` | `/services` | retained |
| `/copy-of-service-1` | `/criminal-law` | permanent redirect |
| `/service-1` | `/construction-law` | permanent redirect |
| `/copy-of-criminal-law-1` | `/family-law` | permanent redirect |
| `/copy-of-criminal-law` | `/conveyancing` | permanent redirect |
| `/copy-of-property-law` | `/commercial-law` | permanent redirect |
| `/contact-us` | `/contact-us` | retained |
| `/blog` | `/blog` | retained |
| `/post/welcome-a-law-firm-wollongong-online-frontier` | `/blog/welcome-a-law-firm-wollongong-online-frontier` | permanent redirect |
| `/profile/hanna/profile` | `/about#hanna-ayoub` | permanent redirect |
| `/about-5` | `/about#hanna-ayoub` | permanent redirect |
| `/practice-areas` | `/services` | permanent redirect from earlier redesign |
| `/practice-areas/criminal-law` | `/criminal-law` | permanent redirect from earlier redesign |
| `/practice-areas/construction-law` | `/construction-law` | permanent redirect from earlier redesign |
| `/practice-areas/family-law` | `/family-law` | permanent redirect from earlier redesign |
| `/practice-areas/conveyancing` | `/conveyancing` | permanent redirect from earlier redesign |
| `/practice-areas/commercial-law` | `/commercial-law` | permanent redirect from earlier redesign |
| `/contact` | `/contact-us` | permanent redirect from earlier redesign |

The scrape reported `/family-law` and `/conveyancing` as 404s on the Wix site. In this redesign those routes are intentionally made valid canonical pages.

## Fidelity validation
A source-string validation was run against the migrated content model covering:
- Services introduction and all five service summaries.
- Homepage philosophy, contact copy and nine reviews.
- About philosophy and all four team biographies.
- Full five practice-area page bodies.
- Contact page wording.
- Existing blog post metadata/body.

**171 source strings checked; 0 missing from the migrated content model.**

Immediate duplicate paragraph nodes emitted by Wix for list items were de-duplicated structurally; the wording itself was not rewritten.

## Source validation
- TS/TSX syntax transpilation: 0 syntax diagnostics.
- CSS parsed with `tinycss2`: 0 parse errors.
- A dependency-backed `next build` could not be completed in this environment because package installation did not finish; run `npm install`, `npm run lint`, and `npm run build` locally or in CI.
