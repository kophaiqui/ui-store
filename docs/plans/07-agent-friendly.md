# Plan 07 - Agent-Friendly Library

**Status:** draft
**Roadmap phase:** quick wins in Phase 1; MCP server in parking lot until Phase 4 traffic justifies it

---

## Goal

Make That One UI the easiest component library for AI coding agents to discover, understand, and install from - not just for humans.

## Why

The registry is already pure JSON and every component is one self-contained file: accidentally the perfect shape for agents.
shadcn won the copy-paste era for humans; the next era belongs to whoever is copy-paste friendly for agents (Claude Code, Cursor, and friends).
Making this deliberate is cheap because the architecture already did the hard part.

## Scope

### Quick wins (Phase 1, one session each)
- [ ] `llms.txt` at the site root: what the library is, the styleConfig contract, the component list with URLs, generated from `designs.json` at build time (never hand-maintained)
- [ ] "Copy for AI" button next to "Copy code" on component detail pages: one paste containing the component source, its style file, the relevant component rules (props adjustable, styleConfig contract), and install notes
- [ ] `llms-full.txt` variant with full component sources for agents that want everything
- [ ] Document the raw content URLs (component source, registry JSON) on one docs page: "Use with AI tools"

### With worlds (after plan 00 pilot)
- [ ] "Copy for AI" includes the selected world's `tokens.css` and motion constants, so an agent reproduces the whole soul, not just the markup

### Later (parking lot)
- MCP server: `list_components`, `get_component`, `get_world` - lets agents install directly
- CLI installer (`npx that-one-ui add button`) - same registry, different consumer

## Done when

An agent given only the site URL can correctly install a component with the right style file and tokens, without a human copying anything - verified by actually asking Claude Code to do it as a test.

## Out of scope

Anything requiring accounts, keys, or server state. The whole point is that static + JSON is enough.
