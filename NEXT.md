# NEXT

One file. No fluff. Do top unchecked box. Ignore everything below it.
Detail lives in `docs/plans/` if needed. This file is the only one you must open.

## NOW - make it real (phase 0)

- [x] deploy -> https://that-one-ui.vercel.app (jul 4)
- [ ] redeploy from latest main (deploymentEnabled is off in vercel.json, so pushes to main don't auto-deploy; needs a manual `vercel --prod`. note: /api/health now 404s by design when unauthorized - it's not a staleness signal anymore, verify with HEALTH_TOKEN instead)
- [x] rewrite README (still describes the old dead project)
- [x] add LICENSE file
- [x] OG image + meta tags
- [x] walk every page once as a stranger, fix what reads wrong (found + fixed: dead Preview.tsx fallback in api/design-code, hardcoded "33 fonts" in fonts metadata; everything else checked clean)
- [x] kill hardcoded counts in docs

## NEXT - depth (phase 1)

- [x] style audit: all 8 available styles x 38 components x light/dark checked in docs/audits/STYLE_AUDIT.md. zero bugs found. reusable helper: scripts/audit-style-screenshots.mjs <style> <outDir>
- [ ] fix logged bugs, one style batch at a time
- [x] scripts/validate-registry.mjs + npm run validate (checks file existence, registry props vs Component.tsx Props type, companion targets, underscore-prop leaks into usage snippets - passes clean on all 38. not yet wired into a pre-commit hook or CI, that's still open)
- [ ] cmd+k search (dogfood own command component)
- [x] llms.txt + copy-as-prompt button (plan 07: llms.txt, llms-full.txt, "Copy for AI" button on component detail pages, docs page at /documents/use-with-ai. MCP server + CLI installer stay in the parking lot per the plan)
- [ ] keyboard-only pass, all components
- [ ] new: circular-progress
- [ ] new: timeline
- [ ] new: navbar
- [ ] new: hero-section
- [ ] new: pricing-card
- [ ] screenshot tests (freeze the audit forever)

## THEN

- phase 2: theme configurator + pilot worlds (terminal, glass) + maker's notes
- phase 3: 12 motions, 3 templates, world switcher demo, all worlds
- phase 4: tell people

**2026-08-01: explicit user override** - user asked to jump straight to plans 03-07 (theme configurator, motion, templates, people, agent-friendly) out of the normal phase order. Working through them in dependency order rather than declining - noting it here so a future session understands why phase order was skipped once.

- [x] plan 07 (agent-friendly): llms.txt, llms-full.txt, Copy for AI button, /documents/use-with-ai doc page. MCP + CLI stay in the parking lot.
- [x] plan 04 (motion library): grew motion.json from 2 to 12 real patterns (entrance: fade-in, slide-up, scale-in, blur-in, stagger-children · interaction: hover-lift, hover-glow, press, magnetic · feedback: shake, success-pop · transition: collapse). Each is a self-contained file in `motion/` with props+defaults, matching the component convention. Live preview + replay + download + copy-for-ai on /motion/[slug], real listing on /motion. World-dependent tasks (per-world motion presets, world switcher demo) skipped - depend on plan 00 which is out of scope for this pass.
- [x] plan 03 (theme configurator): /colors/configurator - pick a brand color, see it live on real components (UIButton/UICard/UIInput/UIBadge/UITabs/UIAlert via CSS variable overrides on a wrapper div, no styleConfig plumbing needed), copy CSS variables or Tailwind v4 @theme block, download theme.css, per-token override panel. Token list reuses the already-frozen TOKEN_GROUPS from lib/colors/utils.ts (matches globals.css exactly). Added deriveLightTokens + WCAG AA contrast auto-nudge (lib/colors/utils.ts) alongside the existing deriveDemoPalette (dark). Docs guide at /documents/make-it-yours.
- [x] plan 05 (templates): built the 3 missing "sections" components first (navbar, hero-section, pricing-card - default style only, tagged `stylesOnly: ["default"]` in designs.json so npm run validate doesn't demand the other 7 styles yet), then 3 real templates in `templates/` (landing, dashboard, auth) composed only from library components. /template overview (live thumbnails via TemplateFrame - real components scaled down, not screenshots) + /template/[slug] full preview + download-as-zip (registry/templates.json + /api/download-template). World switcher skipped - depends on plan 00. Found and fixed a real bug along the way: nested `<a>` tags (Link wrapping a preview that itself renders `<a>`s) caused a hydration error - fixed with the overlay-link pattern.
- [~] plan 06 (people) - mostly non-code by design, did what's actually code:
  - [x] Vercel Analytics already wired in app/layout.tsx (`<Analytics />`) - nothing to add, plan's "lightweight privacy-friendly analytics" task is already done
  - [x] footer already has GitHub/LinkedIn/Email contact links - functions as the "tell me" feedback entry point the plan asks for, didn't add a duplicate
  - [x] CONTRIBUTING.md - rules summary, local setup, 5 good-first-contribution ideas
  - [ ] NOT done (needs the user, not code): decide if the repo goes public, write + actually post the "why I built this" story to X/Reddit/dev.to, enable GitHub issues, file the good-first-issues, the 4-week analytics review. These require a human account and a real decision, not something to fake from here.

**2026-08-29: new initiative, demo sites** - "level up" past static previews: full multi-page, click-through sites built from the library, not part of the phase 0-4 roadmap yet. Plans 08-10 (`docs/plans/08-demo-ecommerce.md`, `09-demo-travel.md`, `10-demo-social.md`), one style locked per site (no live world switcher - still depends on plan 00).

- [x] plan 08 (demo: e-commerce, "Ember Audio") - 6 pages under `/demo/ecommerce` (home, shop w/ filters, product detail, cart, checkout, order confirmation), Glass style throughout except the navbar (sections components still default-only). Mock data + cart context in `demos/ecommerce/` (18 products, localStorage-persisted cart, sessionStorage handoff for the confirmation page). Swapped `select` for `combobox` everywhere a filter needed live state - `UISelect` has no controlled `value`/`onChange`. `tsc`, lint, and `next build` all clean; light-mode pass explicitly skipped (dark-only chrome by design, noted in the plan file).
- [ ] plan 09 (demo: travel booking, "Nightfall Aurora Tours") - not started
- [ ] plan 10 (demo: social feed, "Loud") - not started

## RULES (for the ADHD brain, with love)

- new idea mid-session -> write ONE line in the right plan's Later. do not build it.
- session too short? do the smallest box. a checked box beats a big plan.
- end every session by checking a box here or adding one.
- lost? open this file, do the top box. that is the whole system.
