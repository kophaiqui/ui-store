# Plan 09 - Demo: Travel Booking (Nightfall Aurora Tours)

**Status:** draft
**Roadmap phase:** new initiative - proposed, not yet slotted into ROADMAP.md
**Depends on:** 05 (templates), 08 (shares the demo site conventions established there)
**Style:** Aurora, locked for the whole site

---

## Goal

A full booking site for a fictional aurora-chasing travel agency ("Nightfall") - search destinations, filter lodges, pick dates, book a trip, see it land in "My Trips".
Frontend only: bookings are fake, "availability" and "forecast" are mock data, everything persists to `localStorage` for the session.

## Why

The Aurora style's own description - deep night surfaces, drifting teal/indigo/violet glow - is the literal subject matter of this site (booking trips to see actual aurora borealis). Few demos get to have their content and their skin be the same idea; this one does, and it is the strongest possible showcase for why Aurora exists as a style.
Functionally this demo is the date-range and filter-heavy stress test the library hasn't had yet: `date-picker` across a real multi-night range, a price/forecast-strength double-duty slider, and a "my trips" table are all new territory compared to plan 08's cart flow.

## Scope

### Pages
1. `/demo/travel` - homepage: destination search bar (combobox), aurora-forecast teaser strip, featured destinations grid
2. `/demo/travel/search` - results: date-range picker, price slider, star-rating filter, amenity chips, sortable results list
3. `/demo/travel/stay/[slug]` - lodge detail: photo gallery, amenities, room-type select, date-range picker, forecast-strength meter (progress bar reused as a "Kp-index" gauge), reviews tab, book button
4. `/demo/travel/booking` - traveler detail fields, room/tour option recap, price breakdown table, confirm button
5. `/demo/travel/confirmation` - booking confirmed: itinerary summary, "add to calendar" affordance (UI only), forecast reminder
6. `/demo/travel/trips` - "My Trips": upcoming/past bookings as a data-table, cancel/modify actions (UI only, mutates local state)

### Mock data (`demos/travel/data.ts`)
- `destinations`: id, slug, name (e.g. Tromsø, Reykjavík, Rovaniemi, Yukon, Fairbanks), country, heroImage, currentForecast (`low` | `medium` | `high`), blurb
- `lodges`: id, destinationId, name, pricePerNight, rating, amenities[], images[], roomTypes[] (name, price, capacity)
- `reviews`: lodgeId, author, avatar, rating, date, text
- `bookings` (seed data for "My Trips" so the page isn't empty on first load): lodge, dates, travelers, status

### State (`demos/travel/state.tsx`, `"use client"`)
- `BookingProvider`: search criteria (destination, date range, travelers), in-progress booking draft, confirmed bookings list - persisted to `localStorage`
- Forecast numbers are static mock values per destination, not a real API - labeled as such if it matters contextually (a small "simulated forecast" note is enough, no real astronomy needed)

### Components exercised (styleConfig = Aurora throughout)
combobox, date-picker, slider (price *and* reused as a forecast-strength control), chip (amenities), card, badge (forecast level), progress (forecast gauge), tabs (lodge detail), avatar, data-table (my trips), dialog (booking confirm step), sonner (booking success toast), field/input, radio-group (room type), breadcrumb

### Rules
- [ ] Built only from library components + Tailwind layout
- [ ] Date-range picking actually constrains what's bookable (checkout can't proceed with an incomplete range) - real validation, not just decoration
- [ ] Every page keeps the Aurora styleConfig - no mixed styles within this site
- [ ] Aurora is dark-only (`modes: "dark"` in the registry) - this site does not need a light-mode pass, same as the style itself

## Done when

A visitor can search a destination, filter and open a lodge, pick a valid date range, book a room, land on a confirmation page, and then find that exact booking listed in "My Trips" - entirely in Aurora.

## Later

- Live-ish forecast animation (ties into plan 04's motion library - a slow drifting gradient already matches Aurora's "world" personality)
- Multi-destination trip builder
- Currency/unit toggle (still fake, just a UI affordance)
