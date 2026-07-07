# Plan 03 - Theme Configurator

**Status:** draft
**Roadmap phase:** 2
**Depends on:** 02 (stable components), aligns token names with 00 (worlds)

---

## Goal

A visitor picks one brand color and leaves with a complete, ready-to-paste CSS variable block - their own theme running on real components before they copy it.

## Why

This closes the loop the whole site is about: browse -> configure -> copy -> done.
Today the Base tokens tab is a reference panel; the "Your colors" tab generates palettes that map to nothing.
The missing piece is the bridge from generated colors to the actual CSS variable names.

In ecosystem terms (plan 00): the 11 preset worlds are curated souls; the configurator is **"build your own world"**.
Same token shape, same output format.

## Scope

### The flow (one page, three steps visible at once)
1. **Pick**: color input (picker + hex field + a few curated starting points)
2. **See**: a mini app preview built from real library components (button, card, input, badge, tabs, alert) re-theming live, with a light/dark toggle
3. **Copy**: the generated `:root { ... }` + `.dark { ... }` block, one click

### Token generation
- [ ] Define the canonical variable list once, shared with worlds and `globals.css`: `--background`, `--foreground`, `--primary`, `--primary-foreground`, `--secondary`, `--muted`, `--muted-foreground`, `--accent`, `--border`, `--ring`, `--destructive` (final list to be decided in one sitting, then frozen)
- [ ] Derivation rules from one brand color: reuse the harmony math in `lib/colors`; document each rule (e.g. muted = primary hue, low chroma, high lightness)
- [ ] Auto-check foreground/background contrast (WCAG AA); nudge lightness when a pair fails and show a small badge when nudged
- [ ] Advanced panel: per-token override after generation

### Output
- [ ] Copy as CSS variables block
- [ ] Copy as Tailwind v4 `@theme` block
- [ ] "Download theme" as a small `theme.css`

### Docs
- [ ] Guide: "Make it yours in 5 minutes" - pick color, paste block, install a component, screenshot of result

## Tasks (build order)
1. Freeze the token list (this unblocks plan 00 too)
2. Derivation function: `brandColor -> TokenSet` (pure, tested with a handful of snapshot cases: a red, a blue, a near-black, a pastel)
3. Live preview panel from real components
4. Output formats + copy
5. Overrides panel
6. Docs guide

## Done when

A new user goes from "nice site" to "my colors, in my project, on my components" in one sitting, and the output block works by pasting into a fresh Tailwind project.

## Later

- Save/share a generated theme via URL params
- Import an existing `globals.css` and visualize it
- Export a generated theme as a custom world (plan 00 "Later")
