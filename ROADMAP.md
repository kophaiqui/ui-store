# Roadmap

This file is the spine of the project.
Hype bursts are welcome - they are how this project got built - but every burst should land on an item from the **current phase**, not open a new surface.
When a phase's "done when" is true, move to the next one.

Detailed plans live in [`docs/plans/`](./docs/plans/README.md) - one file per feature area, with exact scope, schemas, and "done when".
This file says when; the plans say what and how.
For day-to-day work, open [`NEXT.md`](./NEXT.md) and do the top box - that file is the only one that must be opened every session.

**Live site:** https://that-one-ui.vercel.app

---

## The soul

That One UI exists because I have loved building interfaces since my first line of web code.
It is the place I wished existed: the foundation (colors, type, tokens, styles) ready before the first component, and the same component able to wear a completely different visual soul with one prop.

**Where it is going:** every style becomes a complete **world** - components, color tokens, a font pairing, and a motion personality that all belong together.
Pick the Terminal world and the data table, the palette, the monospace type, and the stepped motion all match.
That is the ecosystem, and it is the north star: [plan 00](./docs/plans/00-ecosystem.md).

Everything on the roadmap serves that one idea.
If a task does not make the site more true to it, it can wait.

---

## Where it stands (v0.4.0, July 2026)

- 38 components x 11 styles, all on Base UI primitives, light + dark
- Color explorer, typography explorer (32 fonts), docs system, per-component and per-style downloads
- Motion: 2 entries. Templates: 0. Not deployed as a public link people actually visit (or barely shared if it is)
- README still describes the old "design library" concept from before the styleConfig pivot

---

## Phase 0 - Make it real (1-2 weeks) - [plan 01](./docs/plans/01-make-it-real.md)

The project is only real when a stranger can open a link and everything they read is true.

- [x] Deploy to Vercel - live at https://that-one-ui.vercel.app (July 4)
- [ ] Redeploy from latest main - the live build is stale (`/api/health` 404s, newest copy missing)
- [ ] Rewrite `README.md` - it still describes Preview.tsx, `/library`, shadcn/ui, and the pre-pivot identity
- [ ] Kill every stale number: docs must read counts from the registry or say "38 (and counting)", never hardcode
- [ ] Add a `LICENSE` file (README claims MIT but there is no file)
- [ ] OG image + meta tags so a shared link looks intentional
- [ ] One pass through every page as a first-time visitor, fixing anything that reads wrong

**Done when:** you would paste the link in a public chat without adding a disclaimer.

---

## Phase 1 - Depth pass (3-6 weeks) - [plan 02](./docs/plans/02-depth-audit.md)

The promise is "38 components, 11 styles, both modes, all consistent". Make that promise bulletproof before adding anything new.

- [ ] Style audit: walk all 38 components x 11 styles x light/dark. Log every visual bug in one checklist file and burn it down (the "invisible text in light mode" class of bug has appeared at least 3 times - assume more exist)
- [ ] Registry validation script: check `designs.json` props against the actual `Component.tsx` prop types, fail loudly on drift. Run it in CI or a pre-commit hook
- [ ] Keyboard-only pass on every interactive component
- [ ] Finish the deferred components that complete the set: circular-progress, timeline, empty-state variants (see `docs/DEFERRED_IDEAS.md`)
- [ ] Component pitfalls checklist (`docs/COMPONENT_PITFALLS.md`) turned into an actual review step for every new component
- [ ] Cmd+K site search, dogfooding the library's own `command` component
- [ ] Visual regression harness after the audit (Playwright screenshots, plan 02)
- [ ] Agent quick wins (plan 07): `llms.txt` + "Copy for AI" button

**Done when:** you would send the site to a hiring manager or a designer you admire, unprompted.

---

## Phase 2 - Theme Configurator + world pilot - [plan 03](./docs/plans/03-theme-configurator.md), [plan 00](./docs/plans/00-ecosystem.md)

Already designed (see project notes): pick a brand color, auto-generate the full semantic token block (`--primary`, `--accent`, `--muted`, ...), live preview on real components, one-click copy for `globals.css`.

- [ ] Map the "Your colors" harmony output to real CSS variable names
- [ ] Live preview panel using real library components (button, card, input, badge)
- [ ] Copy-ready CSS block output
- [ ] A docs page: "Make it yours in 5 minutes"
- [ ] World pilot (plan 00): freeze the token variable list, write full `world` objects for Terminal and Glass, world panel on the style page, extend the style ZIP with `tokens.css` + `FONTS.md` + `motion.ts`

This closes the loop the whole site is about: browse, configure, copy, done.
The configurator and the worlds share one token shape: presets are curated souls, the configurator is "build your own".

**Done when:** a new user can go from "nice site" to "my colors, in my project" in one sitting.

---

## Phase 3 - Motion, templates, world rollout - [plan 04](./docs/plans/04-motion-library.md), [plan 05](./docs/plans/05-templates.md)

Only start this after Phase 2. Two motion entries is not a section; zero templates is not a section.

- [ ] Grow motion to 12 real patterns (entrance, interaction, feedback, transition) with the same copy-paste treatment as components
- [ ] Build 3 templates from the library's own components: a landing page, a dashboard, an auth flow. Templates are the proof the system composes - dogfood it
- [ ] World rollout (plan 00): all 8 available styles get full world objects; aurora, pixel, and material ship as complete worlds from day one
- [ ] Retire or hide any nav item that still says "coming soon" after this phase

**Done when:** every item in the nav has real content behind it.

---

## Phase 4 - People - [plan 06](./docs/plans/06-people.md)

The project has been built in the dark. This phase is about light.

- [ ] Write the story: why one person built 418 style implementations by hand. Post it (blog, X, dev.to, r/webdev)
- [ ] Add lightweight analytics to learn what people actually browse
- [ ] Open the GitHub repo properly: contributing note, issues enabled, good first issues
- [ ] Keep the What's New page on a monthly rhythm, even if the entry is small

**Done when:** at least one person you have never met uses a component and tells you.

---

## Working rhythm (the anti-burnout contract)

- **Minimum:** one focused session per week, even 45 minutes. Ship one checklist item and update What's New.
- **Maximum:** burst as hard as the hype carries, but only on current-phase items.
- **Every session ends by** checking a box here or adding a discovered task to the right phase.
- **New ideas** go to `docs/DEFERRED_IDEAS.md`, not into the codebase. The idea is not lost; it is parked.

---

## Parking lot

Bigger ideas with no phase yet, so they stop pulling at attention:

- Multi-style registry (directory-based, option 3 in `docs/DEFERRED_IDEAS.md`)
- CLI installer (`npx that-one-ui add button`)
- MCP server so agents install components directly (plan 07 Later)
- Figma library mirroring the styles
- Component playground with editable props and live code

They only leave the parking lot by entering a phase.
