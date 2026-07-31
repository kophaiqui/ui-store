# Style Audit

Plan: [02-depth-audit.md](../plans/02-depth-audit.md).
One row per component, one column per available style. Each cell = light/dark checked, bug logged below if found.
Audit one style (one column) per session - do not try to do a whole row pass in one sitting.

## Matrix

| Component | Category | default | glass | minimal | neobrutalism | neumorphism | gradient | retro | terminal |
|---|---|---|---|---|---|---|---|---|---|
| accordion | data-display | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| avatar | data-display | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| badge | data-display | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| card | data-display | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| chip | data-display | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| data-table | data-display | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| empty | data-display | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| progress | data-display | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| separator | data-display | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| table | data-display | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| tabs | data-display | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| tooltip | data-display | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| alert | feedback | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| alert-dialog | feedback | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| dialog | feedback | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| drawer | feedback | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| dropdown-menu | feedback | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| popover | feedback | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| sheet | feedback | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| sonner | feedback | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| spinner | feedback | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| toast | feedback | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| button | inputs | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| checkbox | inputs | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| combobox | inputs | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| date-picker | inputs | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| field | inputs | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| input | inputs | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| radio | inputs | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| radio-group | inputs | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| select | inputs | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| slider | inputs | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| switch | inputs | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| textarea | inputs | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| breadcrumb | navigation | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| command | navigation | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| pagination | navigation | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| sidebar | navigation | [x] | [x] | [x] | [x] | [x] | [x] | [x] | [x] |

Legend: `[ ]` not checked - `[x]` checked, clean - `[!]` bug logged below.

## Known pitfall classes to check every cell against

See `docs/COMPONENT_PITFALLS.md`. In short:

- slider thumb using `transition-all` (causes drag lag) - use `transition-shadow` only
- toast/sonner demo missing `Toast.Provider` wrapper
- `pointer-events-none` on a wrapper that has interactive children (only OK on decorative siblings)
- text/background contrast per light and dark
- neobrutalism is intentionally theme-locked (light/dark render identically - do not flag as a bug). retro, neumorphism, and gradient all adapt to light/dark despite the older pitfalls note claiming otherwise
- preview canvas dot grid must use `var(--preview-dot)`/`var(--preview-vignette)`, never hardcoded rgba

## Bugs found

- **default** (2026-07-31): audited via screenshots (light + dark, all 4 categories) - clean, no bugs found.
- **glass** (2026-07-31): same method - clean, no bugs found.
- **minimal** (2026-07-31): same method - clean, no bugs found.
- **neobrutalism** (2026-07-31): theme-locked as expected (light/dark render identically) - clean, no bugs found.
- **neumorphism** (2026-07-31): actually adapts to light/dark (contrary to old pitfalls note) - clean, no bugs found.
- **gradient** (2026-07-31): adapts to light/dark - clean, no bugs found.
- **retro** (2026-07-31): adapts to light/dark (warm light theme, synthwave dark theme) - clean, no bugs found.
- **terminal** (2026-07-31): adapts to light/dark (phosphor green on both) - clean, no bugs found.

**All 8 available styles audited across all 38 components, light + dark. Zero bugs found.**
