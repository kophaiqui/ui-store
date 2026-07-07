# Plans

One file per feature area.
`ROADMAP.md` says **when** and in what order; each plan here says **what exactly** and **how**.

A plan is the visual of the product before it exists.
If a feature is not clear enough to write a plan for, it is not clear enough to build.

## How to use this folder

- Before building anything, open its plan and read the **Scope** and **Done when**.
- When an idea appears mid-session, add it to the right plan's **Later** section instead of building it.
- When scope changes, change the plan file first, then the code.
- Status legend: `draft` (still deciding) / `active` (being built) / `done` / `parked`.

## The plans

| # | Plan | Status | Roadmap phase |
|---|---|---|---|
| 00 | [Ecosystem: Style Worlds](./00-ecosystem.md) | draft | North star, spans phases 2-3 |
| 01 | [Make It Real](./01-make-it-real.md) | active | Phase 0 |
| 02 | [Depth Audit](./02-depth-audit.md) | draft | Phase 1 |
| 03 | [Theme Configurator](./03-theme-configurator.md) | draft | Phase 2 |
| 04 | [Motion Library](./04-motion-library.md) | draft | Phase 3 |
| 05 | [Templates](./05-templates.md) | draft | Phase 3 |
| 06 | [People](./06-people.md) | draft | Phase 4 |
| 07 | [Agent-Friendly Library](./07-agent-friendly.md) | draft | Quick wins in Phase 1, MCP later |

## Feature inventory

What exists, what v1.0 needs, and what comes after.
"v1.0" means: the ecosystem promise is true for every available style.

| Area | Now | Target for v1.0 | Later |
|---|---|---|---|
| Components | 38 | 43: add circular-progress, timeline, navbar, hero-section, pricing-card | file-upload, calendar, rating, stepper, carousel, kbd |
| Styles | 11 (8 available, 3 coming-soon) | 11 available, each one a full **world** (tokens + fonts + motion) | New styles only ship as complete worlds |
| Motion | 2 | 12 patterns across entrance / interaction / feedback / transition | Scroll-driven, page transitions, per-world exclusive patterns |
| Fonts | 32 catalogued | Reframe around **pairings**: heading/body/mono per world, with the why. Stop growing the raw catalog - Google Fonts already owns inventory; curation is the value | Pairing explorer |
| Colors | Explorer (5 tabs) | Theme Configurator: brand color in, full token block out | Contrast checker, palette export formats |
| Templates | 0 | 3: landing page, dashboard, auth flow - each buildable in any world | Pricing page, settings, e-commerce |
| Docs | 5 pages | + per-world guide, + "make it yours" guide, + component API pages | Interactive playground in docs |
| Infra | none | registry validation script, style audit checklist, OG images, LICENSE, Cmd+K search, visual regression tests, `llms.txt` + copy-for-AI | CLI installer, MCP server |

Counts are targets, not quotas.
Cutting an item is fine; adding an unplanned one mid-hype is the thing this folder exists to prevent.
