# Plan 00 - Ecosystem: Style Worlds

**Status:** draft
**Roadmap phase:** north star - pilot in Phase 2, full rollout in Phase 3
**Depends on:** 02 (depth audit), feeds 03 (theme configurator), 04 (motion), 05 (templates)

---

## The idea

Today a "style" is a set of Tailwind class strings.
The ecosystem turns each style into a **world**: a complete, coherent visual universe where every part of the site relates to every other part.

Pick the Terminal world and you do not just get terminal-styled components.
You get its phosphor-green token palette, its monospace font pairing, its instant stepped motion, and a data table that already wears all three.
One choice, everything coherent.

No other library does this.
shadcn gives you components and leaves the feeling to you.
Theme galleries give you colors with no components.
A world gives you the entire feeling, ready to ship.

**The sentence that sells it:** "Don't download a component. Download a soul."

---

## What a world is made of

Every world = the 4 layers, all keyed to the same style id:

| Layer | Source today | What the world adds |
|---|---|---|
| Components | `designs/*/styles/{style}.ts` (exists, 38 per style) | nothing new - already done |
| Tokens | scattered inside class strings | explicit CSS variable block, light + dark |
| Typography | `registry/fonts.json` (32 fonts, unconnected) | a pairing: heading / body / mono font slugs |
| Motion | `registry/motion.json` (2 entries, unconnected) | a motion preset: durations, easing, signature patterns |

## Registry schema

Extend each entry in `registry/styles.json` with a `world` object:

```json
"terminal": {
  "name": "Terminal",
  "tagline": "Monospace command-line green",
  "status": "available",
  "accent": "#22c55e",
  "modes": "both",
  "world": {
    "tokens": {
      "light": { "--background": "#f4f4f0", "--foreground": "#166534", "--primary": "#16a34a", "--border": "#16653433" },
      "dark":  { "--background": "#030903", "--foreground": "#22c55e", "--primary": "#4ade80", "--border": "#22c55e33" }
    },
    "typography": {
      "heading": "geist-mono",
      "body": "geist-mono",
      "mono": "geist-mono"
    },
    "motion": {
      "personality": "instant",
      "duration": { "fast": "50ms", "base": "120ms", "slow": "200ms" },
      "easing": "steps(2, end)",
      "patterns": ["cursor-blink", "type-in"]
    }
  }
}
```

Rules:

- `typography.*` values are **slugs from `fonts.json`** - the validation script (plan 02) must check they exist.
- `motion.patterns` values are **slugs from `motion.json`** - same check.
- Token keys use the same CSS variable names as `globals.css` and the Theme Configurator (plan 03), so a preset world and a custom-generated theme are the same shape.

## Motion personality per world (draft)

The differentiator is that motion is not one-size-fits-all.
A neobrutalist button should not ease like a glass one.

| World | Personality | Feel |
|---|---|---|
| Default | balanced | 150-250ms, standard ease-out |
| Glass | floaty | slow (300-500ms), blur-in, soft overshoot |
| Minimal | subtle | opacity-only, almost no movement |
| Neobrutalism | snappy | hard fast springs, no fade, things SNAP into place |
| Neumorphism | soft | slow press-in/press-out, shadow morphs |
| Gradient | glowing | glow pulses, gradient shifts on hover |
| Retro | bouncy | springy overshoot, playful |
| Terminal | instant | steps() easing, cursor blink, type-in |
| Aurora | drifting | very slow ambient background motion |
| Pixel | stepped | 4-frame steps(), sprite-like |
| Material | standard | Material easing curves, elevation transitions |

## Typography pairing per world (to decide)

Assign from `fonts.json`; add fonts to the catalog if a world needs one that is missing.
Draft direction (verify slugs exist before committing to registry):

- Terminal / Pixel: monospace everything (geist-mono or similar)
- Minimal: editorial serif headings + neutral sans body
- Neobrutalism: loud grotesque headings (Space Grotesk / Archivo class)
- Glass / Default / Material: clean sans (inter / geist)
- Retro: warm rounded or serif headings

## Where it shows up (surfaces)

1. **Style detail page (`/style/[style]`)** becomes a world page:
   - palette strip from `world.tokens` with click-to-copy
   - font pairing specimen ("Aa" heading in the heading font, paragraph in body font, code line in mono)
   - motion personality demo (one card animating with the world's durations/easing)
   - the existing component grid below
2. **World kit download**: the existing ZIP grows to include `tokens.css` (the variable block), `FONTS.md` (pairing + install links), and `motion.ts` (duration/easing constants). One download = a complete starting point.
3. **Component detail page**: when a style variant is selected, a small "part of the {World} world" link with its accent color, palette dots, and font name.
4. **Homepage**: the style carousel becomes a world carousel - each slide shows palette + font + a moving component, not just a static preview.
5. **Docs**: one short guide per world: "Building in Terminal" - tokens, fonts, motion, and a screenshot of the template (plan 05) in that world.
6. **World switcher demo (one page)**: a single page (the template preview from plan 05, or a small `/worlds` demo) where flipping Terminal -> Glass -> Retro re-themes everything live. This five-second moment is the whole ecosystem pitch and the GIF for the Phase 4 story post. Full-site switching stays in Later; this one page does not.

## Maker's notes (the emotion layer)

The site's differentiator is that one person cares this much - make that visible in the details, not just the copy.

- `designs.json` entries and `world` objects get an optional `"note"` field: one hand-written sentence about a detail ("the tick draws in 120ms because slower felt smug")
- Shown as a small, quiet line on component detail and world pages - discovery, not decoration
- Notes are written by the maker only, never generated. A missing note is better than a fake one
- [ ] Add `note` to registry schema + render surfaces
- [ ] Write notes gradually: one per session touching that component, no backfill marathon

## Rollout

Do not build all 11 at once. Pilot, stabilize the schema, then roll.

1. **Pilot (2 worlds):** Terminal and Glass - the two most opposite personalities. Define their full `world` objects, build the world panel on the style page, extend the ZIP.
2. **Schema freeze:** adjust whatever the pilot proved wrong, then lock the shape and add validation.
3. **Rollout (6 worlds):** the remaining available styles.
4. **Coming-soon styles (aurora, pixel, material):** ship as full worlds from day one - components + world object together. No more style without a soul.

## Tasks

- [ ] Decide final token variable list (align with `globals.css` and plan 03)
- [ ] Write `world` objects for Terminal and Glass
- [ ] World panel component on `/style/[style]`
- [ ] Extend style ZIP with `tokens.css`, `FONTS.md`, `motion.ts`
- [ ] Add world link to component detail page
- [ ] Validation: typography slugs exist in `fonts.json`, motion slugs in `motion.json`
- [ ] Roll out to remaining 6 available styles
- [ ] Ship aurora, pixel, material as complete worlds
- [ ] Homepage world carousel upgrade
- [ ] Per-world docs guides
- [ ] World switcher demo page (scoped: one page, not full site)
- [ ] `note` field in registry + maker's note surfaces

## Done when

A visitor can pick any available style and leave with a ZIP containing components, tokens, font instructions, and motion constants that all belong together - and the site itself demonstrates that coherence on the world page.

## Later

- User-created worlds: Theme Configurator output saved/shared as a custom world
- World switcher that re-themes the **entire** showcase site live (the one-page demo ships earlier, see surfaces)
- Per-world exclusive components (a Terminal-only ASCII table, a Pixel-only health bar)
