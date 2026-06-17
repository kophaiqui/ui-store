# Deferred Ideas

Items recorded here are real ideas that need more design direction or implementation effort before they're ready to ship.
Each entry explains what it is, why it was deferred, and what you'd need to decide before building it.

---

## Component Props — Deferred Additions

### Button — `as` prop (polymorphic)

**What:** `as: "button" | "a"` — let the button render as an anchor tag.

**Why deferred:** Base UI's `Button` primitive doesn't support an `asChild` or `as` pattern natively in 1.5.x. Implementing this requires either a render-prop wrapper or switching to a custom primitive. The decision also affects how `href`, `target`, `rel` props surface in TypeScript types.

**Decide:** Is the use case clicking vs. navigation? If navigation, the `variant="link"` is already a styled `<button>` — maybe just pair it with Next.js `Link` as a child instead.

---

### Button — `destructive` convenience prop

**What:** `destructive: boolean` shorthand to set variant to "destructive".

**Why deferred:** Already covered by `variant="destructive"`. Adding a separate boolean would create two ways to do the same thing and confuse the API. Recommend leaving this out unless there's a specific composability reason.

---

### Select — `searchable`

**What:** A search input inside the dropdown to filter options.

**Why deferred:** Needs significant complexity: controlled search state, filtered option list, keyboard navigation with filtering, and accessibility (aria-activedescendant). Base UI doesn't include this in Select — the Combobox primitive (`@base-ui/react/combobox`) is the right building block.

**Next step:** Build a separate `Combobox` component based on `@base-ui/react/combobox`.

---

### Progress — `variant: "circle"`

**What:** A circular/ring progress indicator in addition to the existing linear bar.

**Why deferred:** Requires SVG arc math (`stroke-dashoffset` calculations) and a separate visual design. Should be a separate "Circular Progress" component entry rather than a variant of Progress.

**Next step:** Add `circular-progress` as a new component in `data-display`.

---

### Tabs — `closable`

**What:** Each tab has an × button to remove it from the list.

**Why deferred:** Requires state management for the tabs array to be lifted out of the component. The current `UITabs` takes a static `tabs` prop. Making this work means either making the component fully controlled (consumer manages the array) or handling it internally (which is less flexible). Needs a decision on controlled vs. uncontrolled design.

---

### Switch — `color`

**What:** Customizable accent color for the track when checked (instead of always emerald).

**Why deferred:** Needs a decision on whether to accept arbitrary CSS colors (`color: "#6366f1"`), a preset enum (`color: "violet" | "blue" | ...`), or CSS variable names. The token approach integrates better with future theming but has a steeper API surface.

---

## New Components — Phase 2 (Design Showcase)

These are higher-level marketing/showcase components. They need visual design direction before coding starts — the props are just suggestions.

### Navbar

Props sketch: `sticky`, `transparent`, `blur`, `layout`

**Questions:**
- What does a "transparent" navbar look like on dark vs. light background?
- Does it include logo + nav links + CTA? Or is it content-agnostic (like Card)?
- Mobile hamburger behavior?

---

### Hero Section

Props sketch: `alignment`, `background`, `layout`, `height`

**Questions:**
- What background options exist — gradient, image, noise texture, animated?
- What's the default content? (headline, subheadline, CTA pair)
- Is this a full-page section or a flexible-height block?

---

### Pricing Card

Props sketch: `featured`, `badge`, `price`, `action`

**Questions:**
- Should the pricing currency/period be separate props or a formatted string?
- Should feature lists be typed or freeform children?
- Is the "featured" variant just a border/shadow change or a full color inversion?

---

### Empty State

Props sketch: `icon`, `title`, `description`, `action`

**Questions:**
- Is this a full-page empty state or an inline one (e.g., inside a table)?
- Should the icon accept an illustration URL or only inline SVG?

---

### Timeline

Props sketch: `orientation`, `lineStyle`, `items`

**Questions:**
- Horizontal vs. vertical — should both be supported in one component or separate?
- Each item: icon + label + description + timestamp? Define the item schema.
- Does it support branching/nested timelines?

---

## Architecture — Registry Multi-Style Support

From the plan:

```json
{
  "component": "Button",
  "styles": ["default", "glass", "minimal", "neon"],
  "props": {}
}
```

**Current state:** The registry uses `"style": "default"` as a string (one style per entry). Multi-style means a single component slug needs multiple implementations.

**Options:**
1. **Separate entries per style** (e.g., `button-glass`, `button-minimal`) — simple, but the component list gets long.
2. **Nested registry** — `designs.json` becomes `{ "button": { "styles": { "default": {...}, "glass": {...} } } }` — more structured, bigger refactor.
3. **Directory-based** — `designs/inputs/button/default/Component.tsx`, `designs/inputs/button/glass/Component.tsx` — maps to the file system naturally.

**Recommendation:** Option 3 (directory-based) aligns best with how Next.js dynamic routes work and how styles were planned in the style explorer. Start when committing to a second style implementation.
