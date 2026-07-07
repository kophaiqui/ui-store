# Plan 06 - People

**Status:** draft
**Roadmap phase:** 4
**Depends on:** 01 shipped; stronger after 00 pilot exists to show

---

## Goal

The project stops being built in the dark: real people see it, use it, and tell you things you could not have guessed alone.

## Why

Hype is the current fuel and it is not renewable.
Feedback is.
One stranger saying "I used your checkbox" is worth more sustained motivation than any burst.

## Scope

### The story
- [ ] Write one honest post: why one person hand-built ~418 style implementations, what the styleConfig idea is, what a "world" is. The introduction's "Why this exists" section is the seed
- [ ] Post where builders are: X/Twitter thread with GIFs of the world switcher, r/webdev or r/reactjs, dev.to. One channel per week, not all at once

### The repo
- [ ] Decide: is the source repo public? (Recommendation: yes - the copy-paste model means the code is public anyway)
- [ ] CONTRIBUTING note, issues enabled, 3-5 good-first-issues (e.g. "add X style to Y component" is perfectly scoped for outsiders)

### The loop
- [ ] Lightweight privacy-friendly analytics (Vercel Analytics or Plausible): which components, styles, and downloads people actually use
- [ ] A tiny feedback entry point on the site (one link: "something feel off? tell me")
- [ ] What's New updated monthly even if the entry is two lines - a changelog with a pulse signals a living project

### The measure
- [ ] After 4 weeks public: review analytics and every piece of feedback in one sitting; adjust the roadmap phases based on what real people cared about

## Done when

At least one person you have never met uses a component and tells you - and the roadmap has been adjusted at least once because of something a user said instead of something you guessed.

## Later

- Showcase page: sites built with the library
- Sponsor/support link if traffic justifies it
