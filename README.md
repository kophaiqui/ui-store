# That One UI

> The UI library you keep coming back to.

A curated collection of beautiful, motion-ready UI designs. Not another component library — this is a design library. Every entry is a distinct take on a familiar element: a button, a card, an input. Same HTML, different soul.

Pick a design. Copy the code. Ship it.

---

## What makes it different

Most UI libraries give you a `<Button>`. We give you ten buttons — each with its own personality, motion, and visual style. You're not here for API docs. You're here because you saw something that looked good and want it in your project in 30 seconds.

- **Design-first** — organized by category, each category has many distinct visual designs
- **Motion-ready** — hover effects, entrance animations, cursor interactions built in
- **Copy-paste** — no install required, just grab the source from the Code tab
- **Dark + light** — everything works in both modes
- **Zero database** — all content is JSON + source code, statically generated

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (base-ui) |
| Animation | Motion (formerly Framer Motion) |
| Docs | MDX |
| Theme | next-themes |
| Deploy | Vercel |

---

## Project structure

```
designs/
├── buttons/
│   ├── neon-button/      ← Preview.tsx + meta.json
│   ├── shimmer-button/
│   └── magnetic-button/
└── cards/
    ├── glass-card/
    └── tilt-card/

registry/
├── designs.json          ← source of truth for the library
├── fonts.json
└── components.json

app/
├── page.tsx              ← landing page
├── library/              ← browsable grid with category tabs
└── design/[slug]/        ← individual design (preview + code)
```

---

## Adding a new design

1. Create the folder: `designs/<category>/<slug>/`
2. Add `Preview.tsx` — the component itself, self-contained
3. Add `meta.json` — slug, name, category
4. Register it in `registry/designs.json`

That's it. The page generates automatically.

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploying

Push to GitHub, import into Vercel. No environment variables needed.

---

## License

MIT. Take the designs, make them yours.
