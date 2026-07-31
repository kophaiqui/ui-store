# Contributing

This project is a copy-paste component library, not a package — most of the "codebase" is `designs/`, `motion/`, and `templates/`, each folder a self-contained thing someone will copy into their own project. Contributions should respect that shape.

## Before you start

Read `AGENTS.md` at the repo root. It defines the non-negotiable rules every component follows:

1. Every prop is adjustable, with a default value for preview. Nothing is hardcoded.
2. A `styleConfig` prop changes Tailwind classes only — never prop shape, defaults, or behavior.
3. Types shared between a component and its style file live in `styles/default.ts`, re-exported from `Component.tsx`.
4. `Component.tsx` is the single source of truth — there is no separate `Preview.tsx`.

Also skim `docs/COMPONENT_PITFALLS.md` — a short list of bugs that have shipped more than once (slider `transition-all` lag, missing `Toast.Provider`, `pointer-events-none` on the wrong element, contrast per light/dark).

## Local setup

```bash
npm install
npm run dev
```

Before opening a PR:

```bash
npm run validate   # registry/designs.json must match the real files on disk
npx tsc --noEmit    # no type errors
npm run lint
```

## Good first contributions

- **Add a style to an existing component.** Pick any component missing one of the 8 available styles (`docs/audits/STYLE_AUDIT.md` tracks which are done) and port it, following an existing style file in the same folder as a template.
- **Fix a logged style bug.** `docs/audits/STYLE_AUDIT.md` and `docs/COMPONENT_PITFALLS.md` list known issue classes — if you spot one that isn't fixed yet, a PR with a screenshot before/after is the fastest way in.
- **Add a motion pattern.** `docs/plans/04-motion-library.md` has the target list; each pattern is one file in `motion/` with props/defaults, no different from adding a component.
- **Improve accessibility.** A keyboard-only pass (tab order, escape, arrow keys) on any component is genuinely useful and doesn't require design taste.
- **Report instead of fix.** If something looks wrong and you're not sure how to fix it, an issue with a screenshot and the component/style/mode combination is still valuable.

## What not to send

- New dependencies for something a few lines of Tailwind or vanilla JS already solves.
- A new component without both `Component.tsx` and `styles/default.ts`.
- Renamed props, removed defaults, or anything that breaks rule 1-4 above.

## Questions

Open an issue, or reach out through the links in the site footer.
