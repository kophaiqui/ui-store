# Plan 02 - Depth Audit

**Status:** draft
**Roadmap phase:** 1
**Time box:** 3-6 weeks

---

## Goal

The core promise - 38 components x 11 styles x light/dark, all consistent and accessible - becomes verifiably true, and stays true automatically.

## Why

"Invisible text in light mode" has shipped at least three times.
With ~418 hand-written style implementations, unchecked promises rot.
Everything after this phase (worlds, configurator, templates) builds on these components; auditing later means auditing more.

## Scope

### 1. Style audit matrix
- [ ] Create `docs/audits/STYLE_AUDIT.md`: one table, rows = 38 components, columns = 8 available styles, each cell checked in light and dark
- [ ] Audit one style per session (38 cells per sitting is one honest session)
- [ ] Log every visual bug found in the same file with a checkbox; fix in batches per style
- [ ] Known bug classes to look for specifically: invisible text per mode, `transition-all` lag (slider), `pointer-events-none` blocking clicks on wrappers, missing focus rings per style, portal components (toast, dialog, tooltip) escaping the style

### 2. Registry validation script
- [ ] `scripts/validate-registry.ts`, run via `npm run validate`
- [ ] Checks: every `designs.json` slug has `Component.tsx` + `styles/default.ts` on disk; every prop in `designs.json` exists in the component's Props type (parse or import); every `companions` target is a real prop; every style id in `styles.json` has an implementation file per component (or is `coming-soon`); no `_`-prefixed props leak into `usage` snippets
- [ ] Later hook for plan 00: world typography slugs exist in `fonts.json`, motion slugs in `motion.json`
- [ ] Wire into a pre-commit hook or minimal GitHub Action so drift fails loudly

### 3. Accessibility pass
- [ ] Keyboard-only walk of every interactive component: tab order, escape, arrows, enter/space
- [ ] Visible focus ring in every style (a style may restyle the ring, never remove it)
- [ ] Quick screen-reader smoke test on the 5 most complex components (select, combobox, dialog, tabs, data-table)

### 4. Finish the set (+5 components, 38 -> 43)
From `docs/DEFERRED_IDEAS.md`, now unblocked:
- [ ] `circular-progress` (data-display) - SVG ring, own entry, not a Progress variant
- [ ] `timeline` (data-display) - vertical first, item schema: icon/label/description/timestamp
- [ ] `navbar` (navigation) - content-agnostic slots: brand/links/actions, mobile collapse
- [ ] `hero-section` (new category: sections) - alignment, background, CTA pair
- [ ] `pricing-card` (sections) - featured variant, typed feature list
- [ ] Each new component ships with all 8 available styles, both modes, registry entry, and passes `npm run validate` - no more "default now, styles later"

### 5. Pitfalls as process
- [ ] Turn `docs/COMPONENT_PITFALLS.md` into a checklist template pasted into the work of every new component

### 6. Cmd+K search
- [ ] Site-wide command palette: components, styles, fonts, motion, docs pages - all searchable from one Cmd+K
- [ ] Dogfood `designs/navigation/command` as the implementation - the site's own component running in production is a live demo
- [ ] Index built from the registries at build time, no server needed

### 7. Visual regression harness (after the audit, not before)
- [ ] Playwright screenshot run: every component x available style x light/dark, stored as baselines
- [ ] `npm run test:visual` diffs against baselines; run before merging style changes
- [ ] This freezes the audit's result permanently - the "invisible text in light mode" bug class dies here

### 8. Agent quick wins (plan 07)
- [ ] `llms.txt` generated from the registry at build time
- [ ] "Copy for AI" button on component detail pages

## Done when

- The audit matrix has every cell checked and every found bug fixed
- `npm run validate` exists, passes, and runs automatically
- You would send the site to a hiring manager or a designer you admire, unprompted

## Out of scope

New styles, world objects, motion patterns, templates - they all inherit this quality floor, so the floor comes first.
