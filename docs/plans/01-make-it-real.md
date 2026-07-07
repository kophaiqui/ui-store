# Plan 01 - Make It Real

**Status:** active
**Roadmap phase:** 0
**Time box:** 1-2 weeks

---

## Goal

A stranger opens the link and everything they see and read is true, current, and intentional.

## Why

The project only exists in one browser right now.
Everything else on the roadmap compounds only if there is a public, truthful surface to point at.

## Scope

### Deploy
- [x] Deploy to Vercel - live at https://that-one-ui.vercel.app (July 4)
- [x] Domain: `that-one-ui.vercel.app` is clean - decided, stop thinking about it
- [ ] Redeploy from latest `main`: live build is stale (`/api/health` 404s; style ZIP works: `/api/download-style/terminal` returns 200)
- [ ] After redeploy, re-verify: health OK, single `.tsx` download, style ZIP, new homepage copy visible

### Truth pass
- [x] Rewrite `README.md`: it still describes the pre-pivot project (Preview.tsx, `/library`, `/design/[slug]`, shadcn/ui, "motion-ready design library"). It must describe the styleConfig system, the real folder structure, and link to the live site
- [x] Grep the repo for hardcoded counts (`21 components`, `38 components`, `11 styles`) and either read from the registry or phrase as "and counting" - homepage now reads `styleCount` from the registry; intro copy made evergreen. `whats-new.mdx` left as point-in-time release history
- [ ] Walk every nav item as a first-time visitor; list and fix anything stale, empty, or wrong
- [x] `docs/PAGES_PLAN.md` marked as historical or updated

### Legal and polish
- [x] `LICENSE` file (README claims MIT; the file does not exist)
- [x] OG image + `metadata` for the homepage, `/components`, `/style`, `/docs` - a shared link must look intentional. Root `opengraph-image.tsx` + `metadataBase`/`openGraph`/`twitter` cover every route as a fallback; per-route custom OG images are a Later nice-to-have
- [x] Favicon/title check on every route - generated `icon.tsx` mark exists; titles use the `%s — That One UI` template
- [x] 404 page sanity check - `app/not-found.tsx` is intentional, links home

## Done when

You would paste the link in a public chat without adding a disclaimer.

## Out of scope

New components, new styles, new features of any kind.
This phase is allowed to feel boring; that is the point.
