# Style Audit

Plan: [02-depth-audit.md](../plans/02-depth-audit.md).
One row per component, one column per available style. Each cell = light/dark checked, bug logged below if found.
Audit one style (one column) per session - do not try to do a whole row pass in one sitting.

## Matrix

| Component | Category | default | glass | minimal | neobrutalism | neumorphism | gradient | retro | terminal |
|---|---|---|---|---|---|---|---|---|---|
| accordion | data-display | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| avatar | data-display | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| badge | data-display | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| card | data-display | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| chip | data-display | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| data-table | data-display | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| empty | data-display | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| progress | data-display | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| separator | data-display | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| table | data-display | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| tabs | data-display | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| tooltip | data-display | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| alert | feedback | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| alert-dialog | feedback | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| dialog | feedback | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| drawer | feedback | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| dropdown-menu | feedback | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| popover | feedback | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| sheet | feedback | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| sonner | feedback | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| spinner | feedback | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| toast | feedback | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| button | inputs | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| checkbox | inputs | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| combobox | inputs | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| date-picker | inputs | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| field | inputs | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| input | inputs | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| radio | inputs | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| radio-group | inputs | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| select | inputs | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| slider | inputs | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| switch | inputs | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| textarea | inputs | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| breadcrumb | navigation | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| command | navigation | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| pagination | navigation | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| sidebar | navigation | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

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

_None logged yet._
