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
- [ ] plan 03 (theme configurator) - next
- [ ] plan 05 (templates) - needs navbar/hero-section/pricing-card components first
- [ ] plan 06 (people) - mostly non-code (social posts, repo-public decision); will only build the code-adjacent parts (feedback link, analytics check)

## RULES (for the ADHD brain, with love)

- new idea mid-session -> write ONE line in the right plan's Later. do not build it.
- session too short? do the smallest box. a checked box beats a big plan.
- end every session by checking a box here or adding one.
- lost? open this file, do the top box. that is the whole system.
