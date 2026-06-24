# Component Pitfalls

Check this file whenever creating or modifying UI components. These are recurring, non-obvious bugs.

---

## CONTRAST RULE (applies to every style, every component)

**Rule: text must always contrast against its actual background.**

| Background | Text to use |
|---|---|
| Dark bg (e.g. `bg-zinc-900`, `bg-violet-950`, `bg-black/50`) | Light text: `text-white`, `text-zinc-100`, `text-*-100` |
| Light bg (e.g. `bg-white`, `bg-[#fdf6e3]`, `bg-blue-50`) | Dark text: `text-zinc-900`, `text-*-700`, `text-*-800` |
| Transparent/adaptive bg (`bg-blue-500/8`, `bg-card`) | Use `dark:` prefix: `text-blue-700 dark:text-blue-300` |

**Rule for transparent backgrounds** (e.g. `bg-blue-500/8`):
- In light mode: bg is nearly white → use dark text (e.g. `text-blue-700`)
- In dark mode: bg is nearly black → use light text (e.g. `dark:text-blue-300`)
- Always write: `text-blue-700 dark:text-blue-300`

**Rule for hardcoded-palette styles** (retro, neobrutalism, neumorphism):
- These styles do NOT adapt to the site's light/dark theme toggle — that is intentional
- Their color choices are locked to their aesthetic
- They must still pass contrast within their fixed palette

---

## THEME LOCK vs THEME ADAPTIVE (know which style you are editing)

| Style | Theme behavior | Why |
|---|---|---|
| `default` | Adaptive — uses CSS vars (`text-foreground`, `bg-card`) | Main design system style |
| `minimal` | Adaptive — uses CSS vars | Same |
| `gradient` (toast) | Fixed dark | Always dark gradient bg, theme doesn't change it |
| `glass` | Adaptive dark/light | Uses `dark:` prefix — adapts to `.dark` class |
| `retro` | Fixed light (cream palette) | The cream/brown palette IS the retro identity |
| `neobrutalism` | Fixed light (white bg, black border) | Brutalist identity requires high-contrast white/black |
| `neumorphism` | Fixed light (light gray bg) | Neumorphic shadows only work on a specific bg color |

When creating a new style: decide which category it belongs to, then apply text colors accordingly.

---

---

## 1. Slider — never use `transition-all` on the thumb

**Symptom:** Noticeable drag lag when moving the slider thumb.

**Cause:** `transition-all` animates CSS `translate`/`transform` changes on every `pointermove` event during drag, creating visual delay.

**Rule:** On slider thumbs, ONLY use `transition-shadow` (or another single non-transform property). Never `transition-all`, `transition-transform`, or `transition`.

```ts
// WRONG — causes drag lag
thumb: "... transition-all duration-100 ...",

// CORRECT — shadow transitions only
thumb: "... transition-shadow duration-100 ...",
```

---

## 2. Toast — must mount `Toast.Provider` for toasts to appear

**Symptom:** Clicking "Show toast" does nothing; no toast appears.

**Cause:** `toastManager.add()` puts items in the manager's store, but without a `Toast.Provider` mounted in the React tree, there is no `Toast.Viewport` to render them.

**Rule:** Any demo or self-contained usage of `UIToast` must wrap the trigger AND the `ToastRegion` inside `Toast.Provider`. This is how `UISonner` works — `Toast.Provider` → trigger + viewport all together.

```tsx
// WRONG — toasts fire but never render
return <DemoToastTrigger />;

// CORRECT — provider connects manager to the React tree
return (
  <Toast.Provider toastManager={toastManager} timeout={timeout} limit={limit}>
    <DemoToastTrigger />
    <ToastRegion styleConfig={styleConfig} />
  </Toast.Provider>
);
```

---

## 3. Pointer events — `pointer-events-none` on a wrapper blocks ALL children

**Symptom:** Buttons inside a container are not clickable.

**Cause:** `pointer-events-none` on a parent element disables pointer events for its entire subtree, including interactive children.

**Rule:** Only put `pointer-events-none` on decorative/overlay elements that have no interactive children. If you need a non-interactive background but interactive content on top, make the background a sibling (with `absolute`/`fixed` positioning), not a wrapper.

```tsx
// WRONG — blocks the button inside
<div className="pointer-events-none">
  <button>Click me</button> // unreachable
</div>

// CORRECT — overlay is a sibling, not a parent
<div className="relative">
  <div className="pointer-events-none absolute inset-0 bg-overlay" />
  <button>Click me</button> // reachable
</div>
```

**Recent example:** `fix(ui): fix clearable input button blocked by pointer-events-none on suffix wrapper`

---

## 4. Preview canvas dot grid — must use CSS vars, not hardcoded colors

**Symptom:** In light mode, the dot grid background in props/usage preview areas is invisible (no dots visible).

**Cause:** Hardcoded `rgba(255,255,255,0.045)` (white dots) are invisible against a white `bg-card` background. Hardcoded `rgba(0,0,0,0.32)` vignette is too dark for light mode.

**Rule:** All preview canvas dot grids and vignettes must use the CSS variables `--preview-dot` and `--preview-vignette`. These are theme-aware (defined in both `:root` and `.dark` in `globals.css`). The preview container must also have an explicit `bg-card` so the dots have a background to contrast against.

```tsx
// WRONG — hardcoded, invisible in light mode
<div style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
<div style={{ background: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, rgba(0,0,0,0.32) 100%)" }} />

// CORRECT — uses CSS vars, works in both modes
<div className="relative overflow-hidden bg-card px-8 py-8">
  <div style={{ backgroundImage: "radial-gradient(circle, var(--preview-dot) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
  <div style={{ background: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, var(--preview-vignette) 100%)" }} />
</div>
```

`GRID_BG` constant in `lib/tokenizeJSX.ts` already uses `var(--preview-dot)` — use it instead of writing inline styles. The preview container still needs `bg-card` explicitly.

---

## 5. Retro style — thumb hover must not use translate

**Symptom:** When hovering over a retro slider thumb with `hover:translate-x-[-1px]`, the translate fights against the drag position update.

**Rule:** Retro-style interactive thumb hover should use `shadow` changes only, not translate/transform.

```ts
// WRONG — hover translate conflicts with drag
thumb: "... hover:translate-x-[-1px] hover:translate-y-[-1px] ...",

// CORRECT — only shadow changes on hover
thumb: "... hover:shadow-[3px_3px_0px_0px_#3d2410] ...",
```
