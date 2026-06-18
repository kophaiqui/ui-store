# Pages Plan — Home & Docs Rebuild

## Decision: What gets built now vs later

### Home Page

| Section | Decision | Why |
|---|---|---|
| Hero | ✅ Build | Core identity, already exists — refine it |
| Stats strip | ✅ Build | 21 components + 11 styles — real numbers, shows progress |
| Features / pillars | ✅ Build | 3 key ideas: copy-paste, styleConfig, all-props — the "why" of the project |
| Component showcase | ✅ Build | 21 real components exist, live previews already work |
| Style system teaser | ✅ Build | 11 styles exist in registry, links to /style |
| Motion preview | ❌ Skip | Only 2 motion items — not enough to showcase |
| Template showcase | ❌ Skip | 0 templates built yet |
| Theme / Color / Typography interactive | ❌ Skip | No content, would be empty sections |
| Testimonials | ❌ Skip | No real testimonials |
| Sponsors | ❌ Skip | None yet |
| GitHub stats | ❌ Skip | Would need API call; keep static for now |
| CTA | ✅ Build | Simple "start browsing" — always useful |

### Docs Page

| Section | Decision | Why |
|---|---|---|
| Getting Started — Introduction | ✅ Build | Can write meaningful content about the project |
| Getting Started — Quick Start / Installation | ⏳ Coming soon | Need to decide install method (npm pkg vs copy-paste only) |
| Component Reference | ✅ Build | All 21 components exist — link to live /components/[slug] pages |
| Foundations — Colors / Typography / etc. | ⏳ Coming soon | Need design token decisions before writing |
| Templates | ⏳ Coming soon | No templates built |
| Resources / Community / Developer | ⏳ Coming soon | Too early |

### New Pages (stubs)
- `/template` → coming soon
- `/resources` → coming soon  
- `/changelog` → coming soon

### Nav order
Home | Docs | Components | Templates | Resources | Changelog | GitHub

---

## What "that one ui" means for these pages

- **No filler** — if a section has no real content, it doesn't exist yet. Coming soon > empty sections.
- **Show the work** — live component previews are the argument. Don't just describe, show.
- **Confident, not loud** — no "🚀 Blazing fast" copy. Just clear statements about what it is.
- **The styleConfig system is the differentiator** — every mention of "style" should point to this.
