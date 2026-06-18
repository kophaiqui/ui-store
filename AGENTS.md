<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Component Rules

### Rule 1 — All props are adjustable, no fixed data inside a component

Every string, number, array, or node that renders inside a component must be exposed as a prop with a default value. Nothing is hardcoded. A consumer must always be able to override it.

**Correct:**
```tsx
export function UICheckbox({
  label = "Accept terms and conditions",
  size = "md",
  ...
}: Props) { ... }
```

**Wrong:**
```tsx
export function UICheckbox() {
  return <label>Accept terms and conditions <Checkbox /></label>; // not overridable
}
```

Default values exist **only for preview** — they are the fallback when the consumer passes nothing. They are not the identity of the component.

---

### Rule 2 — StyleConfig changes style only; all props stay

A custom `styleConfig` replaces Tailwind class strings only. It must never affect prop shape, default values, or component behavior. The full prop API is identical regardless of which style is imported.

Pattern:

```ts
// styles/default.ts — owns type definitions + default classes
export type ButtonStyleConfig = {
  base: string;
  variants: Record<ButtonVariant, { base: string; hover: string; focus: string }>;
  // ...
};
export const defaultStyle: ButtonStyleConfig = { ... };
```

```tsx
// Component.tsx — accepts styleConfig, all other props unchanged
export function UIButton({
  styleConfig = defaultStyle,
  variant = "solid",
  size = "md",
  disabled = false,
  // ... every prop still works regardless of styleConfig
}: Props) { ... }
```

Importing a different style only swaps the Tailwind classes. Props, defaults, and behavior are untouched.

---

### Rule 3 — Type ownership lives in styles/default.ts

Types used by both `styles/default.ts` and `Component.tsx` (e.g. `ButtonVariant`, `ButtonSize`) must be defined in `styles/default.ts` and re-exported from `Component.tsx`. Never import from `Component.tsx` inside `styles/default.ts` — that creates a circular dependency.

```ts
// styles/default.ts — defines the types
export type ButtonVariant = "solid" | "outline" | "ghost";
export type ButtonStyleConfig = { variants: Record<ButtonVariant, ...> };

// Component.tsx — re-exports them for consumers
export type { ButtonVariant, ButtonStyleConfig } from "./styles/default";
```

---

### Rule 4 — Component.tsx is the single source of truth

There are no `Preview.tsx` wrapper files. `Component.tsx` is loaded directly in all preview surfaces (listing cards, detail viewer, component panels). Default props on `Component.tsx` define what the preview shows. No separate demo file.

---

## File Structure (current)

```
designs/
  {category}/           e.g. inputs, data-display, feedback
    {slug}/
      Component.tsx     — the installable component (also the preview)
      styles/
        default.ts      — StyleConfig type + default Tailwind classes

registry/
  designs.json          — metadata: name, category, tags, props[], usage[]

components/
  layout/               — Sidebar, TableOfContents, SectionLayout, Header
  shared/               — DesignCardPreview, DesignViewer, ComponentPanel, PropExplorer, ...

app/
  components/
    page.tsx            — component listing overview
    [slug]/
      [variant]/
        page.tsx        — component detail page
```

---

## Registry (designs.json) shape

```json
{
  "button": {
    "name": "Button",
    "category": "inputs",
    "style": "default",
    "tags": ["button", "interactive"],
    "description": "...",
    "new": true,
    "props": [
      {
        "name": "variant",
        "type": "\"solid\" | \"outline\"",
        "default": "\"solid\"",
        "description": "Visual style",
        "companions": { "icon": "auto" }
      }
    ],
    "usage": [
      { "label": "Variants", "code": "<UIButton variant=\"outline\">..." }
    ]
  }
}
```

`companions` — extra props automatically passed alongside a demo prop in PropExplorer. Props prefixed `_` (e.g. `_demo`) are demo-only and excluded from generated code snippets.
