# That One UI

> The UI library you keep coming back to.

**Live:** https://that-one-ui.vercel.app

A static, copy-paste UI resource.
Every component is one accessible primitive that renders in many complete visual styles — swap the look without touching the logic.
Pick a component, pick a style, copy the source or download the file. Ship it.

No install, no account, no database.
Everything is JSON plus source code, statically generated.

---

## The idea: one component, many styles

A component's behavior and its appearance are separated.
Each component takes a `styleConfig` prop that holds nothing but Tailwind class strings.
Importing a different style swaps those strings — the prop API, defaults, and behavior stay identical.

```tsx
import { UIButton } from "@/designs/inputs/button/Component";
import { terminalStyle } from "@/designs/inputs/button/styles/terminal";

<UIButton styleConfig={terminalStyle} variant="solid">Deploy</UIButton>
```

A **style** is meant to be a whole world — tokens, and over time fonts and motion — not just a recolor.
Eight styles are available today (default, glass, minimal, neobrutalism, neumorphism, gradient, retro, terminal); more are marked coming-soon in the registry.

---

## What's on the site

- **Components** — every component, browsable by category, each with a live preview, prop explorer, and copyable source
- **Styles** — each style as its own page, applied across the library
- **Colors** — palette and brand-color explorers
- **Fonts** — a catalogued type reference
- **Motion** — reusable animation patterns
- **Docs** — MDX guides and a changelog

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Primitives | Base UI (`@base-ui/react`) |
| Animation | Motion |
| Docs | MDX |
| Theme | next-themes |
| Deploy | Vercel |

---

## Project structure

```
designs/
  {category}/                 inputs, feedback, navigation, data-display
    {slug}/
      Component.tsx           the installable component (also the preview)
      styles/
        default.ts            StyleConfig type + default Tailwind classes
        terminal.ts, ...      one file per available style

registry/
  designs.json               component metadata: name, category, tags, props, usage
  styles.json                style metadata: tagline, accent, status
  fonts.json, motion.json    font and motion catalogues

app/                         App Router pages (components, style, colors, fonts, motion, documents)
components/                  shared UI and layout (viewer, prop explorer, sidebar, ...)
content/docs/                MDX documentation
lib/registry/               typed accessors over the JSON registry
```

There are no `Preview.tsx` wrappers.
`Component.tsx` is the single source of truth — it is loaded directly in every preview surface, and its default props define what the preview shows.

---

## Adding a component

1. Create `designs/<category>/<slug>/Component.tsx` — every rendered string, number, and node is exposed as a prop with a default.
2. Create `designs/<category>/<slug>/styles/default.ts` — it owns the `StyleConfig` type and the default Tailwind classes; `Component.tsx` re-exports the shared types.
3. Register the component in `registry/designs.json`.

The page generates automatically.
See `AGENTS.md` for the full component rules.

---

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Script | Does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run props` | Regenerate component prop metadata |
| `npm run licenses` | Regenerate third-party license list |

---

## License

MIT — see [LICENSE](./LICENSE).
Take the designs, make them yours.
