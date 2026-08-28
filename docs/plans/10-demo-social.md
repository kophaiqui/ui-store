# Plan 10 - Demo: Social Feed (Loud - gig-going community app)

**Status:** draft
**Roadmap phase:** new initiative - proposed, not yet slotted into ROADMAP.md
**Depends on:** 05 (templates), 08 and 09 (shares the demo site conventions established there)
**Style:** Neobrutalism, locked for the whole site

---

## Goal

A full social app for a fictional gig-going/concert community ("Loud") - a feed of show recaps and photos, post detail with comments, profiles, notifications, and DMs.
Frontend only: posting, liking, commenting, following, and messaging all mutate local state; nothing leaves the browser.

## Why

Neobrutalism - thick outlines, blocky offset shadows, unapologetic primary colors, "interfaces that refuse to be ignored" - is the loudest style in the library, and a punk/zine-flavored gig community is the one product category where that personality is a feature, not a clash. It is the deliberate opposite of Glass (plan 08, quiet and premium) and Aurora (plan 09, soft and dreamy) - the three demo sites together prove the style system spans calm to loud, not just three flavors of "clean SaaS."
Functionally this is the feed/interaction stress test: infinite-feeling scroll lists, comment threads, a DM inbox, and dogfooding the `command` component for search - none of which the library's templates or the other two demos exercise.

## Scope

### Pages
1. `/demo/social` - main feed: composer entry point (opens dialog), post cards (image or text, like/comment counts, tag chips)
2. `/demo/social/post/[id]` - full post, comment thread, comment input
3. `/demo/social/profile/[handle]` - avatar, bio, stats (followers/following/posts), follow button, post grid, tabs (posts / likes / tagged)
4. `/demo/social/notifications` - likes, comments, follows, mentions - grouped list, empty state when cleared
5. `/demo/social/messages` - conversation list + open thread, message bubbles, online-status chip
6. `/demo/social/explore` - trending tag chips, `command`-powered search, suggested profiles grid

### Mock data (`demos/social/data.ts`)
- `users`: id, handle, name, avatar, bio, followers, following, verified, isOnline
- `posts`: id, authorId, image? , text, tags[] (genre/venue tags like `punk`, `warehouse-show`, `acoustic`), likeCount, commentCount, timestamp, venueTag?
- `comments`: postId, authorId, text, timestamp
- `notifications`: type (`like` | `comment` | `follow` | `mention`), actorId, targetPostId?, timestamp, read
- `conversations` + `messages`: participants, messages[] (senderId, text, timestamp)
- ~15-20 posts, ~10 users, enough cross-links (comments referencing other users, mutual follows) that the profile/notification pages don't feel like a stub

### State (`demos/social/state.tsx`, `"use client"`)
- `SocialProvider`: current "logged in as" user (fixed demo user), like/comment/follow/message mutations against the mock data, all in-memory + `localStorage`
- New posts from the composer prepend to the feed for the session; no persistence across a hard data reset is required

### Components exercised (styleConfig = Neobrutalism throughout)
avatar, chip (tags/genres, online status), badge (verified/live), tooltip, dropdown-menu (post actions: report/share/save), dialog (composer), sonner (like/follow toast), tabs (profile sub-views), command (explore search), separator, empty (no notifications / no messages), sidebar or bottom-nav (mobile-first primary nav)

### Rules
- [ ] Built only from library components + Tailwind layout
- [ ] Comment/like/follow counts update optimistically and consistently across pages (liking from the feed reflects on the post-detail page too - shared state, not per-page mock copies)
- [ ] Every page keeps the Neobrutalism styleConfig - no mixed styles within this site
- [ ] Neobrutalism is intentionally theme-locked (renders identically in light/dark per `docs/COMPONENT_PITFALLS.md`) - do not "fix" that, it's correct

## Done when

A visitor can open the feed, like and comment on a post, follow the author from their profile, see a resulting notification, and send them a DM - all state changes visible everywhere they should be - entirely in Neobrutalism.

## Later

- Image upload in the composer (fake, local `URL.createObjectURL` preview only)
- Story/highlight strip at the top of the feed
- Search filters beyond tags (venue, date range)
