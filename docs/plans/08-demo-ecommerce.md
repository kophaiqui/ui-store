# Plan 08 - Demo: E-commerce (Ember Audio)

**Status:** done
**Roadmap phase:** new initiative - proposed, not yet slotted into ROADMAP.md
**Depends on:** 05 (templates - same "built entirely from library components" rule, one scale up)
**Style:** Glass, locked for the whole site

---

## Goal

A full, multi-page, click-through storefront for a fictional premium audio brand ("Ember Audio" - headphones, speakers, turntables) - browse, filter, add to cart, checkout, confirm.
Frontend only: no real payment, no backend, cart/checkout state lives in a React context + `localStorage`.

## Why

Templates prove single pages compose. A demo site proves a full *flow* composes - state carried across pages, not just static markup.
E-commerce is the required starter category (user request) and it is the component library's best stress test for data-heavy, filterable, stateful UI: nothing else in the library exercises price sliders, cart quantity steppers, and multi-step checkout in one place.
Glass was chosen because premium audio gear (glossy black product photography, colored ambient lighting) is exactly the backdrop glassmorphism was designed to float over.

## Scope

### Pages
1. `/demo/ecommerce` - homepage: hero, featured collection strip, trending grid, brand story blurb
2. `/demo/ecommerce/shop` - full catalog: category chips, price-range slider, brand combobox, sort select, pagination
3. `/demo/ecommerce/product/[slug]` - product detail: image gallery, color/variant select, add-to-cart, tabs (description / specs / reviews), related products
4. `/demo/ecommerce/cart` - line items with quantity steppers, promo code field, subtotal, empty-cart state
5. `/demo/ecommerce/checkout` - shipping fields, payment method radio-group, order summary table, place-order button
6. `/demo/ecommerce/order-confirmation` - success state (empty-state component repurposed), order number, itemized summary

### Mock data (`demos/ecommerce/data.ts`)
- `products`: id, slug, name, brand, category (`headphones` | `speakers` | `turntables` | `accessories`), price, compareAtPrice, images[], colors[], rating, reviewCount, badges (`new` | `bestseller` | `sale`), description, specs (record)
- `reviews`: productId, author, avatar, rating, date, text, verified
- `categories`, `brands`: id + label, for filter chips/combobox
- ~18-24 products across 4 categories - enough to make filtering/sorting/pagination feel real, not a stub

### State (`demos/ecommerce/state.tsx`, `"use client"`)
- `CartProvider`: items (productId, variant, qty), add/remove/updateQty, subtotal - persisted to `localStorage`
- No real auth, no real payment gateway - checkout "succeeds" unconditionally and clears the cart

### Components exercised (styleConfig = Glass throughout)
navbar (default only - sections components have no Glass variant yet), card, badge, chip, combobox, slider, tabs, button, field, input, radio-group, dialog (clear-cart confirm - product quick-view was dropped, `UIDialog`'s trigger is a plain string and its body is a fixed title/description/footer, not an arbitrary children slot, so it can't host a rich product preview), sonner-flavored inline toast text on add-to-cart, avatar (reviewer initials), pagination, empty (empty cart / no results), breadcrumb (product detail)

Deviation from the original list: `select` was swapped for `combobox` everywhere a filter needed to be controlled - `UISelect` manages its value internally with no `value`/`onChange` prop, so it can't be read from outside; `UICombobox` is the only one of the two with a real controlled API.

### Rules
- [x] Built only from library components + Tailwind layout, same rule as templates (plan 05)
- [x] Cart state survives navigation and a page refresh (localStorage)
- [x] Every page keeps `styleConfig={glassStyle}` (or the component's Glass import) - no mixed styles within this site
- [x] Responsive (mobile-first grid breakpoints throughout)
- [ ] Both light/dark - not done. The site's own chrome (backdrop blobs, `text-white` copy) is hardcoded dark, matching the reference Glass backdrop used elsewhere in the site (`components/shared/StyleDemo.tsx`'s `GlassDemo`) - Glass panels need a dark, colorful backdrop to read as glass. A real light-mode pass would mean re-deriving the whole page chrome, not just the library components (which do support both). Left for later.

### Redesign pass (anti-slop, real photography)
- [x] Replaced the hue-gradient placeholder art (`ProductImage`) with real, verified Unsplash product photography (`demos/ecommerce/images.ts` - 14 photos across headphones/speakers/turntables/accessories/hero, each HTTP-checked before use). Deliberately not hotlinking actual Sony/JBL/Bose branded photos onto a fictional competing storefront - trademark risk, and no unverified/guessed manufacturer CDN URLs.
- [x] `next.config.ts` now allow-lists `images.unsplash.com` via `images.remotePatterns`, first real use of `next/image` in this repo.
- [x] Homepage hero rebuilt from centered text to an asymmetric split (text left, full-bleed photo right, fading into the page background) - centered heroes are an explicit anti-slop violation.
- [x] Toned down the Glass backdrop blobs to match the proportions of the site's own reference (`components/shared/StyleDemo.tsx`'s `GlassDemo`) instead of three oversized page-wide glows.

## Done when

A visitor can land on the homepage, filter and open a product, add it to the cart from two different pages, adjust quantity, complete checkout, and land on a confirmation page that reflects what they actually ordered - entirely in Glass, entirely without a backend.

## Later

- Wishlist/save-for-later
- Product search (dogfood the `command` component)
- Guest vs. "account" checkout branching (still fake, just a UI fork)
