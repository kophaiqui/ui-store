# Architecture

## What this is

A static-first UI component showcase. No database. Content is driven by JSON + source code files. Every component is a self-contained installable file that users can copy directly into their project.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + `cn()` (tailwind-merge + clsx) |
| Components | `@base-ui/react` primitives |
| Registry | JSON flat file (`registry/designs.json`) |
| Deployment | Vercel (static + SSR) |

---

## Folder Structure

```
designs/
  {category}/           inputs | data-display | feedback
    {slug}/
      Component.tsx     the installable component — also the live preview
      styles/
        default.ts      StyleConfig type definitions + default Tailwind classes

registry/
  designs.json          single source of truth for metadata, props, usage examples

components/
  layout/               Sidebar, Header, SectionLayout, TableOfContents
  shared/               DesignCardPreview, DesignViewer, ComponentPanel,
                        PropExplorer, StyleComponentCard, ...

app/
  components/
    layout.tsx          injects Sidebar + TableOfContents
    page.tsx            overview grid of all components
    [slug]/
      [variant]/
        page.tsx        component detail: preview + props explorer + code

lib/
  registry.ts           reads designs.json, exposes getAllDesigns / getDesignMeta
  getDesignCode.ts      reads Component.tsx source for the code tab
  utils.ts              cn() helper
```

---

## Component Pattern

Every component follows the same three-file pattern:

### `Component.tsx` — installable + preview

```tsx
"use client";
import { defaultStyle } from "./styles/default";
import type { ButtonStyleConfig, ButtonVariant } from "./styles/default";

export type { ButtonStyleConfig, ButtonVariant }; // re-export for consumers

type Props = {
  styleConfig?: ButtonStyleConfig;
  variant?: ButtonVariant;
  // ... all other props with defaults
};

export function UIButton({
  styleConfig = defaultStyle,
  variant = "solid",
  children = "Button",
  // defaults exist for preview — all are overridable
}: Props) {
  // uses styleConfig.variants[variant] for Tailwind classes
}

export { UIButton as default };
```

### `styles/default.ts` — type owner + default classes

```ts
// Types live HERE, not in Component.tsx
export type ButtonVariant = "solid" | "outline" | "ghost" | "soft" | "link" | "destructive";
export type ButtonSize   = "sm" | "md" | "lg";

export type ButtonStyleConfig = {
  base: string;
  variants: Record<ButtonVariant, { base: string; hover: string; focus: string }>;
  sizes: Record<ButtonSize, { base: string; text: string }>;
  disabled: string;
};

export const defaultStyle: ButtonStyleConfig = {
  base: "inline-flex items-center ...",
  variants: { solid: { base: "bg-primary ...", hover: "...", focus: "..." }, ... },
  // ...
};
```

---

## Key Rules (see AGENTS.md for full detail)

1. **All props are adjustable** — no hardcoded data inside a component. Every string, number, and array must be a prop with a default value.

2. **StyleConfig = style only** — passing a custom `styleConfig` swaps Tailwind classes and nothing else. All props, defaults, and behavior remain identical.

3. **Types live in `styles/default.ts`** — never import from `Component.tsx` inside `styles/default.ts` (circular dependency). `Component.tsx` re-exports types for consumers.

4. **No `Preview.tsx`** — `Component.tsx` IS the preview. All preview surfaces (listing cards, detail viewer, component panels) load `Component.tsx` directly via dynamic import. Default props define what the preview shows.

---

## Registry Shape

`registry/designs.json` drives the entire UI — component listing, detail pages, props explorer, usage examples.

```json
{
  "button": {
    "name": "Button",
    "category": "inputs",
    "style": "default",
    "tags": ["button", "interactive", "action"],
    "description": "6 variants · 3 sizes · 3 shapes ...",
    "new": true,
    "props": [
      {
        "name": "variant",
        "type": "\"solid\" | \"outline\" | \"ghost\"",
        "default": "\"solid\"",
        "description": "Visual style of the button",
        "companions": { "icon": "auto" }
      }
    ],
    "usage": [
      { "label": "Variants", "code": "<UIButton variant=\"outline\">Label</UIButton>" }
    ]
  }
}
```

**`companions`** — extra props auto-passed alongside a demo prop in PropExplorer (e.g. showing `iconPosition` also passes `icon`).  
**`_demo` prefix** — props starting with `_` are demo-only; excluded from generated install snippets.

---

## Preview Loading

All preview surfaces use `next/dynamic` to load `Component.tsx` client-side:

```tsx
const Preview = dynamic(
  () =>
    import(`@/designs/${meta.category}/${slug}/Component`)
      .then((m) => m.default ?? (() => null))
      .catch(() => () => null),
  { ssr: false, loading: () => <div className="animate-pulse ..." /> }
);
```

Used in: `DesignCardPreview`, `DesignViewer`, `ComponentPanel`, `StyleComponentCard`.

---

## Adding a New Component

1. Create `designs/{category}/{slug}/Component.tsx` — all props with defaults, `styleConfig` optional.
2. Create `designs/{category}/{slug}/styles/default.ts` — types + default Tailwind classes.
3. Add an entry to `registry/designs.json` — name, category, props array, usage examples.
4. Add a sidebar icon in `components/layout/Sidebar.tsx` under `SLUG_ICONS`.

No other files needed. The detail page, listing card, and props explorer are all generated from the registry.

---

## Performance

- `ssr: false` on all component previews — avoids hydration issues with portal-based components.
- No preloading — components load lazily as they appear in viewport.
- `designs.json` is statically imported — no API calls for metadata.
- `getDesignCode` reads source files at request time (server component only).
