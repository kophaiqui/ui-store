# Style Audit

Plan: [02-depth-audit.md](../plans/02-depth-audit.md).
One row per component, one column per available style. Each cell = light/dark checked, bug logged below if found.
Audit one style (one column) per session - do not try to do a whole row pass in one sitting.

## Matrix

| Component | Category | default | glass | minimal | neobrutalism | neumorphism | gradient | retro | terminal |
|---|---|---|---|---|---|---|---|---|---|
| accordion | data-display | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| avatar | data-display | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| badge | data-display | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| card | data-display | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| chip | data-display | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| data-table | data-display | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| empty | data-display | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| progress | data-display | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| separator | data-display | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| table | data-display | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| tabs | data-display | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| tooltip | data-display | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| alert | feedback | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| alert-dialog | feedback | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| dialog | feedback | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| drawer | feedback | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| dropdown-menu | feedback | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| popover | feedback | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| sheet | feedback | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| sonner | feedback | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| spinner | feedback | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| toast | feedback | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| button | inputs | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| checkbox | inputs | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| combobox | inputs | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| date-picker | inputs | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| field | inputs | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| input | inputs | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| radio | inputs | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| radio-group | inputs | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| select | inputs | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| slider | inputs | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| switch | inputs | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| textarea | inputs | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| breadcrumb | navigation | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| command | navigation | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| pagination | navigation | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| sidebar | navigation | [x] | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

Legend: `[ ]` not checked - `[x]` checked, clean - `[!]` bug logged below.

## Known pitfall classes to check every cell against

See `docs/COMPONENT_PITFALLS.md`. In short:

- slider thumb using `transition-all` (causes drag lag) - use `transition-shadow` only
- toast/sonner demo missing `Toast.Provider` wrapper
- `pointer-events-none` on a wrapper that has interactive children (only OK on decorative siblings)
- text/background contrast per light and dark
- retro/neobrutalism/neumorphism are intentionally theme-locked (do not flag as a dark-mode bug)
- preview canvas dot grid must use `var(--preview-dot)`/`var(--preview-vignette)`, never hardcoded rgba

## Bugs found

- **default** (2026-07-31): audited via screenshots (light + dark, all 4 categories) - clean, no bugs found.
- **glass** (2026-07-31): same method - clean, no bugs found.
