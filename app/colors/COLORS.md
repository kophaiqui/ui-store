# Color System

The color page (`/colors`) is a five-tab explorer built on top of the project's existing oklch design token stack. Each tab addresses a different consumer: a developer who needs semantic tokens, a designer who wants to compare style personalities, or anyone building a new product who needs inspiration or a quick palette generator.

---

## Architecture

**Component:** `components/shared/ColorExplorer.tsx`  
**Route:** `app/colors/page.tsx` (server component shell, renders `<ColorExplorer />`)  
**No external data fetching.** All static data is colocated inside `ColorExplorer.tsx`.

---

## Tab 1 — Base Tokens

The full set of CSS custom properties defined in `app/globals.css`, organized into five groups:

| Group       | Tokens |
|-------------|--------|
| Surface     | `--background`, `--foreground`, `--card`, `--card-foreground`, `--popover`, `--popover-foreground` |
| Interactive | `--primary`, `--primary-foreground`, `--secondary`, `--secondary-foreground`, `--accent`, `--accent-foreground` |
| Neutral     | `--muted`, `--muted-foreground`, `--border`, `--input`, `--ring` |
| Feedback    | `--destructive` |
| Charts      | `--chart-1` through `--chart-5` |

All tokens are oklch-based and resolve automatically between light and dark mode. The mode-compare panel at the top shows both resolved values side-by-side regardless of the current theme (uses hardcoded oklch literals from `globals.css`).

**Click any token card** to copy `var(--token-name)` to the clipboard.

---

## Tab 2 — Style Palettes

Displays the color personality of all 11 styles from `registry/styles.json`. Each row shows:

- The accent color dot (from `styles.json → accent`)
- Name + tagline (from `styles.json → tagline`)
- A 5-swatch palette strip (hardcoded in `STYLE_PALETTES` inside the component)
- Availability badge (`available` / `coming-soon`)

Coming-soon styles are visually dimmed and non-interactive. The palette swatches scale up on hover to signal interactivity before the style pages exist.

**Palette colors per style:**

| Style | Palette |
|-------|---------|
| Default | `#18181b` · `#27272a` · `#10b981` · `#059669` · `#d1fae5` |
| Glass | Translucent whites · `#38bdf8` · `#7dd3fc` |
| Minimal | `#ffffff` · `#f4f4f5` · `#a1a1aa` · `#52525b` · `#09090b` |
| Neobrutalism | `#facc15` · `#f87171` · `#4ade80` · `#60a5fa` · `#000000` |
| Neumorphism | `#e0e5ec` · `#c8d0df` · `#8b95a5` · `#f8fafc` · `#64748b` |
| Gradient | `#7c3aed` · `#d946ef` · `#06b6d4` · `#f97316` · `#10b981` |
| Retro | `#f5f0e8` · `#e8743b` · `#d4a017` · `#8b5e3c` · `#1c1410` |
| Terminal | `#000000` · `#0d1a0d` · `#22c55e` · `#16a34a` · green tint |

---

## Tab 3 — Inspiration

12 curated palettes from well-known design systems and developer tools. Filterable by mood tag: `dark`, `light`, `vibrant`, `minimal`, `warm`, `cool`.

**Click any card** to copy all hex values as a comma-separated list.

| Palette | Source | Tags |
|---------|--------|------|
| Vercel | vercel.com | dark, minimal |
| Linear | linear.app | dark, cool, vibrant |
| Nord | nordtheme.com | cool, minimal |
| Catppuccin Mocha | github.com/catppuccin | dark, cool, vibrant |
| Dracula | draculatheme.com | dark, vibrant |
| Stone | Tailwind CSS | minimal, light, warm |
| Solarized | ethanschoonover.com | warm, light |
| Material You | m3.material.io | vibrant, light |
| Radix Plum | radix-ui.com | cool, vibrant, dark |
| Sunset | custom | warm, vibrant |
| Blueprint | custom | cool, minimal, light |
| Gruvbox | github.com/morhetz | warm, dark |

---

## Tab 4 — Your Colors

An interactive color harmony tool. No external dependencies — all color math runs in the browser.

### How it works

1. Pick a **primary color** using the native HTML color picker or type a hex code.
2. Optionally add a **second color** to detect the harmonic relationship between them.
3. Seven harmony palettes are generated live from the primary using HSL math.
4. A **live UI preview** shows the chosen color applied to buttons, a card, and an input with a focus ring.

### Generated harmonies

| Harmony | Colors | Use case |
|---------|--------|----------|
| Monochromatic | 5 steps (same hue, varying L) | Button states, hover, depth |
| Complementary | 2 colors (180° apart) | CTA accent, alert |
| Analogous | 5 colors (±15°, ±30°) | Multi-section, charts |
| Triadic | 3 colors (120° apart) | Three-product system, pricing |
| Split-complementary | 3 colors (primary + ±150°) | Accent pair, status colors |
| Tetradic | 4 colors (90° intervals) | Full palette, large systems |
| Neutral scale | 5 hue-tinted grays | Backgrounds, text, borders |

### Relationship detection (two-color mode)

When a second color is selected, the angular distance between the two hues is computed and labeled:

| Range (normalized angle) | Relationship |
|--------------------------|--------------|
| < 20° | Analogous |
| 20°–50° | Near-analogous |
| 50°–80° | Double split |
| 80°–110° | Triadic-adjacent |
| 110°–140° | Triadic |
| 140°–170° | Split-complementary |
| ≥ 170° | Complementary |

### Color math

All functions are pure, defined at module scope in `ColorExplorer.tsx`:

- `hexToHSL(hex)` → `[h, s, l]` — converts 6-digit hex to HSL integers
- `hslToHex(h, s, l)` → `string` — converts HSL back to hex, handles angle wrapping
- `luminance(hex)` → `number` — WCAG relative luminance (0–1)
- `contrastColor(hex)` → `"#000000" | "#ffffff"` — returns the more readable text color
- `buildHarmonies(h, s, l)` → `HarmonySet` — generates all seven harmony arrays
- `detectRelationship(h1, h2)` → `{ name, dot, desc }` — names the harmonic relationship

---

## Tab 5 — Collection

15 brand color systems sourced from [awesome-design-md](https://github.com/voltagent/awesome-design-md). Filterable by category: `AI & LLM`, `Developer`, `Design`, `Fintech`, `Consumer`, `Automotive`, `SaaS`.

**Click any card** to copy all hex values.

| Brand | Category | Notable principle |
|-------|----------|-------------------|
| Claude | AI | Cream + coral — warm counterpoint to cool AI competitors |
| Cursor | AI · Dev | Each AI action type (thinking, grep, read) owns its own hue |
| Linear | Developer · SaaS | Single chromatic accent, never used decoratively |
| Figma | Design | Pastel color blocks replace elevation shadows |
| Raycast | Dev Tool | Each accent color owns exactly one category domain |
| Supabase | Developer | Accent colors exclusive to logos and charts, not UI chrome |
| Vercel | Developer | Color reserved for the develop/preview/ship gradient only |
| Stripe | Fintech | Organic blob gradients — never flat CSS gradients |
| Airbnb | Consumer | Rausch red as the sole brand color; grayscale for everything else |
| Spotify | Consumer | Phosphor green never used on light backgrounds |
| Apple | Consumer | Link blue reserved for interactive CTAs only |
| Nike | Consumer | Sale red as single semantic accent |
| Ferrari | Automotive | Rosso Corsa used scarcely — explodes on contact with dark canvas |
| Tesla | Automotive | Zero decorative color; Electric Blue owns order flows only |
| Notion | SaaS | Unusually wide multi-color accent palette for feature card tints |

---

## Adding More Palettes

**Inspiration tab** — add an entry to `INSPIRATION_PALETTES` in `ColorExplorer.tsx`:

```ts
{
  name: "Your Palette",
  tags: ["dark", "cool"],          // used for filter buttons
  tag: "Dark · Cool",              // displayed on the card
  swatches: ["#hex1","#hex2","#hex3","#hex4","#hex5"],  // 5 colors for the strip
  hexes: ["#hex1","#hex2","#hex3","#hex4"],             // shown as chips + copied
  desc: "One-line description of the palette's character.",
}
```

**Collection tab** — add an entry to `BRANDS`:

```ts
{
  name: "Brand Name",
  cat: "developer saas",           // space-separated, must match COLL_FILTERS values
  catLabel: "Developer · SaaS",    // displayed on the card
  swatches: ["#hex1","#hex2","#hex3","#hex4","#hex5"],
  hexes: ["#hex1","#hex2","#hex3","#hex4","#hex5"],
  principle: "The design decision that makes this palette distinctive.",
}
```

No registry change needed — the collection data lives entirely in the component.
