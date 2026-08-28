// Real, verified Unsplash photography (stable images.unsplash.com CDN URLs,
// each HTTP-checked before use) - no gradient placeholders, no hotlinked
// Sony/JBL/Bose branded product shots (trademark risk on a fictional
// competing storefront), no guessed/unverified URLs.

export type Photo = { url: string; alt: string };

export const HEADPHONE_PHOTOS: Photo[] = [
  { url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80", alt: "Wireless over-ear headphones, flat lay" },
  { url: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=1200&q=80", alt: "Black wireless headphones on a dark surface" },
  { url: "https://images.unsplash.com/photo-1713801129175-8e60c67e0412?auto=format&fit=crop&w=1200&q=80", alt: "Headphones against a black background" },
  { url: "https://images.unsplash.com/photo-1567928513899-997d98489fbd?auto=format&fit=crop&w=1200&q=80", alt: "Black wireless headphones with purple-toned light" },
];

export const SPEAKER_PHOTOS: Photo[] = [
  { url: "https://images.unsplash.com/photo-1511499271651-073325718d90?auto=format&fit=crop&w=1200&q=80", alt: "Black bluetooth speaker" },
  { url: "https://images.unsplash.com/photo-1542483381-41a479b1fb88?auto=format&fit=crop&w=1200&q=80", alt: "White bluetooth speaker" },
  { url: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80", alt: "Black tower speaker against a white wall" },
];

export const TURNTABLE_PHOTOS: Photo[] = [
  { url: "https://images.unsplash.com/photo-1709649246219-220dfca6f75a?auto=format&fit=crop&w=1200&q=80", alt: "Blue vinyl record spinning on a turntable, warm light" },
  { url: "https://images.unsplash.com/photo-1751133336473-cac4230b25a5?auto=format&fit=crop&w=1200&q=80", alt: "Turntable playing a vinyl record, warm light" },
  { url: "https://images.unsplash.com/photo-1505672984986-b7c468c7a134?auto=format&fit=crop&w=1200&q=80", alt: "Black vinyl record on a turntable" },
];

export const ACCESSORY_PHOTOS: Photo[] = [
  { url: "https://images.unsplash.com/photo-1732950092748-04ee6e485bda?auto=format&fit=crop&w=1200&q=80", alt: "Close-up stack of vinyl record spines" },
  { url: "https://images.unsplash.com/photo-1420161900862-9a86fa1f5c79?auto=format&fit=crop&w=1200&q=80", alt: "Corded headphones on a wood table, grayscale" },
];

export const HERO_PHOTOS: Photo[] = [
  { url: "https://images.unsplash.com/photo-1756706916864-0e4ed0fa85cf?auto=format&fit=crop&w=1600&q=80", alt: "Person wearing headphones against a dark, moody background" },
  { url: "https://images.unsplash.com/photo-1543896777-b3b82d89c491?auto=format&fit=crop&w=1600&q=80", alt: "Grayscale portrait of a man wearing headphones" },
];
