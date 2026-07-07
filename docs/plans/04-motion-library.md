# Plan 04 - Motion Library

**Status:** draft
**Roadmap phase:** 3
**Depends on:** 02; feeds the motion layer of 00 (worlds)

---

## Goal

Grow motion from 2 entries to 12 real, copy-paste patterns - and make motion a first-class layer of the ecosystem, where each world has a motion personality.

## Why

Motion is half of what makes UI feel loved, and it is the emptiest section of the site.
It is also the layer no component library treats as part of the design system - this is where "ecosystem" stops being a word and becomes visible.

## Scope

### The 12 patterns (2 exist, +10)

| Category | Pattern | Notes |
|---|---|---|
| entrance | fade-in | exists |
| entrance | slide-up | distance + duration props |
| entrance | scale-in | with slight overshoot option |
| entrance | blur-in | glass world signature |
| entrance | stagger-children | list/grid entrance |
| interaction | hover-lift | exists |
| interaction | hover-glow | gradient world signature |
| interaction | press | scale-down tap feedback |
| interaction | magnetic | cursor-follow pull |
| feedback | shake | error/invalid |
| feedback | success-pop | check draw + pop |
| transition | collapse | height auto animation, accordion-grade |

### Same treatment as components
- [ ] Each pattern is one self-contained file with all timing/distance values as props with defaults
- [ ] Registry entries in `motion.json` follow the component pattern: props array, usage snippets
- [ ] Live preview with a replay button on each detail page
- [ ] Copy + download like components

### Ecosystem hooks (with plan 00)
- [ ] Each pattern accepts a `motionConfig` (duration/easing) the same way components accept `styleConfig`
- [ ] Export per-world presets: `terminalMotion`, `glassMotion`, ... matching `world.motion` in the registry
- [ ] Motion page gets a world switcher: same pattern, played in each world's personality, side by side - this demo IS the ecosystem pitch

## Done when

The motion section stands on its own (12 patterns, browsable, copyable), and at least the pilot worlds (terminal, glass) have working motion presets applied to real patterns.

## Later

- Page transitions (needs App Router view transitions decision)
- Scroll-driven patterns (reveal on scroll, parallax)
- Per-world exclusive patterns (cursor-blink for terminal, sprite-steps for pixel)
