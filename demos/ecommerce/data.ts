import { HEADPHONE_PHOTOS, SPEAKER_PHOTOS, TURNTABLE_PHOTOS, ACCESSORY_PHOTOS, type Photo } from "./images";

export type ProductCategory = "headphones" | "speakers" | "turntables" | "accessories";
export type ProductBadge = "new" | "bestseller" | "sale";

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  price: number;
  compareAtPrice?: number;
  colors: string[];
  rating: number;
  reviewCount: number;
  badges: ProductBadge[];
  description: string;
  specs: Record<string, string>;
  photo: Photo;
};

export type Review = {
  id: string;
  productId: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
};

export const CATEGORIES: { id: ProductCategory; label: string }[] = [
  { id: "headphones", label: "Headphones" },
  { id: "speakers", label: "Speakers" },
  { id: "turntables", label: "Turntables" },
  { id: "accessories", label: "Accessories" },
];

export const BRANDS = ["Ember", "Molten", "Cinder", "Ashlight"];

const [hp0, hp1, hp2, hp3] = HEADPHONE_PHOTOS;
const [sp0, sp1, sp2] = SPEAKER_PHOTOS;
const [tt0, tt1, tt2] = TURNTABLE_PHOTOS;
const [ac0, ac1] = ACCESSORY_PHOTOS;

export const PRODUCTS: Product[] = [
  { id: "p1", slug: "ember-aria-2", name: "Aria 2", brand: "Ember", category: "headphones", price: 349, compareAtPrice: 399, colors: ["Obsidian", "Fog"], rating: 4.8, reviewCount: 214, badges: ["bestseller"], description: "Over-ear planar magnetic headphones tuned for a wide, airy soundstage.", specs: { "Driver": "Planar magnetic 90mm", "Frequency response": "8Hz - 45kHz", "Weight": "312g", "Battery": "40h ANC on" }, photo: hp0 },
  { id: "p2", slug: "ember-aria-mini", name: "Aria Mini", brand: "Ember", category: "headphones", price: 179, colors: ["Obsidian", "Sand", "Fog"], rating: 4.5, reviewCount: 98, badges: ["new"], description: "Compact on-ear headphones with the Aria tuning in a lighter, travel-ready shell.", specs: { "Driver": "Dynamic 40mm", "Frequency response": "15Hz - 22kHz", "Weight": "198g", "Battery": "28h ANC on" }, photo: hp1 },
  { id: "p3", slug: "molten-drift", name: "Drift", brand: "Molten", category: "headphones", price: 129, colors: ["Charcoal"], rating: 4.2, reviewCount: 156, badges: ["sale"], compareAtPrice: 159, description: "Everyday closed-back headphones with a warm, bass-forward signature.", specs: { "Driver": "Dynamic 42mm", "Frequency response": "18Hz - 20kHz", "Weight": "230g", "Battery": "24h" }, photo: hp2 },
  { id: "p4", slug: "cinder-open-air", name: "Open Air", brand: "Cinder", category: "headphones", price: 259, colors: ["Walnut", "Obsidian"], rating: 4.7, reviewCount: 61, badges: [], description: "Open-back reference headphones for critical, at-home listening.", specs: { "Driver": "Dynamic 50mm", "Frequency response": "6Hz - 41kHz", "Weight": "340g", "Battery": "Wired only" }, photo: hp3 },
  { id: "p5", slug: "ember-lantern", name: "Lantern", brand: "Ember", category: "speakers", price: 249, colors: ["Obsidian", "Fog"], rating: 4.6, reviewCount: 132, badges: ["bestseller"], description: "360-degree tabletop speaker that fills a room without a single harsh edge.", specs: { "Output": "60W RMS", "Battery": "20h", "Waterproof": "IP67", "Connectivity": "Wi-Fi, Bluetooth 5.3" }, photo: sp0 },
  { id: "p6", slug: "molten-flare", name: "Flare", brand: "Molten", category: "speakers", price: 89, colors: ["Charcoal", "Sand"], rating: 4.1, reviewCount: 210, badges: ["sale"], compareAtPrice: 109, description: "Pocketable speaker for the porch, the shower, and everywhere in between.", specs: { "Output": "12W", "Battery": "14h", "Waterproof": "IP67", "Connectivity": "Bluetooth 5.2" }, photo: sp1 },
  { id: "p7", slug: "ashlight-column", name: "Column", brand: "Ashlight", category: "speakers", price: 599, colors: ["Obsidian"], rating: 4.9, reviewCount: 44, badges: ["new"], description: "Floor-standing tower speaker built around a single full-range driver line.", specs: { "Output": "140W RMS", "Frequency response": "35Hz - 22kHz", "Waterproof": "Indoor only", "Connectivity": "Wi-Fi, Bluetooth 5.3, optical" }, photo: sp2 },
  { id: "p8", slug: "cinder-hearth", name: "Hearth", brand: "Cinder", category: "speakers", price: 179, colors: ["Walnut", "Obsidian"], rating: 4.4, reviewCount: 87, badges: [], description: "A pair of compact bookshelf speakers with a wooden cabinet and a wide sweet spot.", specs: { "Output": "2x40W RMS", "Frequency response": "48Hz - 20kHz", "Waterproof": "Indoor only", "Connectivity": "Bluetooth, optical, aux" }, photo: sp0 },
  { id: "p9", slug: "ember-orbit", name: "Orbit", brand: "Ember", category: "turntables", price: 429, colors: ["Obsidian", "Walnut"], rating: 4.7, reviewCount: 76, badges: ["bestseller"], description: "Belt-drive turntable with a built-in preamp and USB output for digitizing records.", specs: { "Drive": "Belt", "Speeds": "33 / 45 RPM", "Cartridge": "Moving magnet", "Output": "RCA, USB-C" }, photo: tt0 },
  { id: "p10", slug: "ashlight-heirloom", name: "Heirloom", brand: "Ashlight", category: "turntables", price: 899, colors: ["Walnut"], rating: 5.0, reviewCount: 19, badges: ["new"], description: "Direct-drive turntable built for DJs and purists who want zero pitch drift.", specs: { "Drive": "Direct", "Speeds": "33 / 45 / 78 RPM", "Cartridge": "Moving coil", "Output": "RCA, balanced XLR" }, photo: tt1 },
  { id: "p11", slug: "molten-spin", name: "Spin", brand: "Molten", category: "turntables", price: 199, colors: ["Charcoal", "Sand"], rating: 4.0, reviewCount: 133, badges: ["sale"], compareAtPrice: 229, description: "An easy first turntable - fully automatic, built-in speakers, ready out of the box.", specs: { "Drive": "Belt", "Speeds": "33 / 45 RPM", "Cartridge": "Ceramic", "Output": "RCA, built-in speakers" }, photo: tt2 },
  { id: "p12", slug: "ember-thread", name: "Thread", brand: "Ember", category: "accessories", price: 39, colors: ["Obsidian", "Fog", "Sand"], rating: 4.3, reviewCount: 301, badges: [], description: "A braided replacement cable for any Ember over-ear pair.", specs: { "Length": "1.5m", "Connector": "3.5mm to 2.5mm", "Material": "Braided nylon" }, photo: ac1 },
  { id: "p13", slug: "cinder-case", name: "Travel Case", brand: "Cinder", category: "accessories", price: 49, colors: ["Obsidian"], rating: 4.6, reviewCount: 88, badges: ["new"], description: "Hard-shell case shaped for over-ear headphones, with a cable pocket.", specs: { "Material": "EVA shell", "Interior": "Microfiber lined", "Fits": "Most over-ear headphones" }, photo: ac1 },
  { id: "p14", slug: "ashlight-mat", name: "Slip Mat", brand: "Ashlight", category: "accessories", price: 22, colors: ["Charcoal", "Walnut"], rating: 4.4, reviewCount: 52, badges: [], description: "Anti-static turntable slip mat for smoother, quieter starts.", specs: { "Material": "Felt", "Thickness": "3mm", "Fits": "12in platters" }, photo: ac0 },
  { id: "p15", slug: "molten-stylus", name: "Replacement Stylus", brand: "Molten", category: "accessories", price: 29, colors: ["Standard"], rating: 3.9, reviewCount: 64, badges: [], description: "Drop-in replacement stylus compatible with most moving-magnet cartridges.", specs: { "Type": "Elliptical diamond", "Compatibility": "Moving magnet cartridges" }, photo: ac0 },
  { id: "p16", slug: "ember-aria-clip", name: "Aria Clip", brand: "Ember", category: "headphones", price: 99, colors: ["Obsidian", "Sand"], rating: 4.0, reviewCount: 27, badges: ["new"], description: "Open-ear clip-on headphones for calls and walks, not critical listening.", specs: { "Driver": "Dynamic 16mm x2", "Weight": "38g", "Battery": "18h" }, photo: hp0 },
  { id: "p17", slug: "cinder-puck", name: "Puck", brand: "Cinder", category: "speakers", price: 59, colors: ["Charcoal"], rating: 4.1, reviewCount: 143, badges: ["sale"], compareAtPrice: 75, description: "A tiny desk speaker that still gets surprisingly loud.", specs: { "Output": "8W", "Battery": "10h", "Connectivity": "Bluetooth 5.1" }, photo: sp1 },
  { id: "p18", slug: "ashlight-dust-cover", name: "Dust Cover", brand: "Ashlight", category: "accessories", price: 34, colors: ["Clear"], rating: 4.7, reviewCount: 40, badges: [], description: "A hinged acrylic dust cover fitted for full-size turntables.", specs: { "Material": "Acrylic", "Fits": "Most full-size turntables" }, photo: ac0 },
];

export const REVIEWS: Review[] = [
  { id: "r1", productId: "p1", author: "Dana K.", rating: 5, date: "2026-06-02", text: "The soundstage is genuinely wider than anything else I've owned at this price.", verified: true },
  { id: "r2", productId: "p1", author: "Marcus T.", rating: 4, date: "2026-05-14", text: "Clamp force loosened up after a week of wear. Comfortable for long sessions.", verified: true },
  { id: "r3", productId: "p1", author: "Priya S.", rating: 5, date: "2026-04-30", text: "Bought these for mixing at home, they're honest about what's actually in the track.", verified: false },
  { id: "r4", productId: "p9", author: "Ola B.", rating: 5, date: "2026-06-10", text: "The built-in preamp saved me from buying a separate phono stage.", verified: true },
  { id: "r5", productId: "p9", author: "Whit F.", rating: 4, date: "2026-05-02", text: "Great turntable, the included cartridge is fine but worth upgrading eventually.", verified: true },
  { id: "r6", productId: "p5", author: "Callum R.", rating: 5, date: "2026-06-18", text: "Fills our living room without ever sounding harsh at high volume.", verified: true },
  { id: "r7", productId: "p5", author: "Nadia H.", rating: 4, date: "2026-05-27", text: "Battery life is closer to 16h with it cranked, but still very good.", verified: false },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getReviewsForProduct(productId: string): Review[] {
  return REVIEWS.filter((r) => r.productId === productId);
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, count);
}
