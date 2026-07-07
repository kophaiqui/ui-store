# Plan 05 - Templates

**Status:** draft
**Roadmap phase:** 3
**Depends on:** 02 (component quality), 00 pilot (worlds make templates shine)

---

## Goal

Three real templates built entirely from the library's own components - the proof that the system composes into actual products.

## Why

Components prove craft; templates prove the system.
A visitor who sees a full dashboard wearing the Terminal world understands the ecosystem in five seconds, faster than any docs page.
Templates are also the dogfood test: every gap they reveal (a missing component, an awkward prop) is a free, prioritized bug report on the library itself.

## Scope

### The three templates
1. **Landing page** - navbar, hero-section, feature cards, pricing-card row, footer (uses all 3 "sections" components from plan 02)
2. **Dashboard** - sidebar, data-table, cards with stats, tabs, dialog, toast
3. **Auth flow** - sign in / sign up / forgot password, field, input, checkbox, alert

### Rules
- [ ] Built ONLY from library components + Tailwind layout. Any needed one-off is either promoted into a real component or the template design changes
- [ ] Each template works in at least the 2 pilot worlds (terminal, glass) plus default - a world switcher sits on the template page
- [ ] Fully responsive; both modes
- [ ] Download as ZIP: pages + the components used + the world's `tokens.css`

### Pages
- [ ] `/template` overview: one card per template with live thumbnail
- [ ] `/template/[slug]`: full-screen preview, world switcher, download

### Registry
- [ ] `registry/templates.json`: name, description, components used (slugs, validated against `designs.json`), supported worlds

## Done when

All three templates are live, switchable between at least 3 worlds, downloadable, and every component gap they exposed is filed in plan 02's audit file or DEFERRED_IDEAS.

## Later

- Pricing page, settings page, e-commerce product page
- "Open in StackBlitz" per template
