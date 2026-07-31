# Style Audit

Plan: [02-depth-audit.md](../plans/02-depth-audit.md).
One row per component, one column per available style. Each cell = light/dark checked, bug logged below if found.
Audit one style (one column) per session - do not try to do a whole row pass in one sitting.

## Matrix

| Component | Category | default | glass | minimal | neobrutalism | neumorphism | gradient | retro | terminal |
|---|---|---|---|---|---|---|---|---|---|
| accordion | data-display | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| avatar | data-display | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| badge | data-display | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| card | data-display | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| chip | data-display | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| data-table | data-display | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| empty | data-display | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| progress | data-display | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| separator | data-display | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| table | data-display | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| tabs | data-display | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| tooltip | data-display | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| alert | feedback | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| alert-dialog | feedback | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| dialog | feedback | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| drawer | feedback | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| dropdown-menu | feedback | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| popover | feedback | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| sheet | feedback | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| sonner | feedback | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| spinner | feedback | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| toast | feedback | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| button | inputs | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| checkbox | inputs | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| combobox | inputs | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| date-picker | inputs | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| field | inputs | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| input | inputs | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| radio | inputs | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| radio-group | inputs | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| select | inputs | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| slider | inputs | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| switch | inputs | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| textarea | inputs | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| breadcrumb | navigation | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| command | navigation | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| pagination | navigation | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| sidebar | navigation | [x] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

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
