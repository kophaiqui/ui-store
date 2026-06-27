// ─── Types ───────────────────────────────────────────────────────────────────

export type Tab = "overview" | "base" | "styles" | "inspiration" | "maincolor" | "collection";
export type InspFilter = "all" | "dark" | "light" | "vibrant" | "minimal" | "warm" | "cool";
export type CollFilter = "all" | "ai" | "developer" | "design" | "fintech" | "consumer" | "automotive" | "saas";
export type HarmonyKey = "monochromatic" | "complementary" | "analogous" | "triadic" | "splitComp" | "tetradic" | "neutral";
export type HarmonySet = Record<HarmonyKey, string[]>;
export type DP = Record<string, string>;

export type InspPalette = {
  name: string;
  tags: string[];
  tag: string;
  swatches: string[];
  hexes: string[];
  desc: string;
};

export type Brand = {
  name: string;
  cat: string;
  catLabel: string;
  swatches: string[];
  hexes: string[];
  principle: string;
};

// ─── Static Data ─────────────────────────────────────────────────────────────

export const TOKEN_GROUPS = [
  {
    title: "Surface",
    tokens: [
      { var: "--background",         label: "Background",         description: "Page canvas" },
      { var: "--foreground",         label: "Foreground",         description: "Primary text" },
      { var: "--card",               label: "Card",               description: "Elevated surface" },
      { var: "--card-foreground",    label: "Card Foreground",    description: "Text on cards" },
      { var: "--popover",            label: "Popover",            description: "Dropdown backdrop" },
      { var: "--popover-foreground", label: "Popover Foreground", description: "Text in popovers" },
    ],
  },
  {
    title: "Interactive",
    tokens: [
      { var: "--primary",              label: "Primary",              description: "Main action" },
      { var: "--primary-foreground",   label: "Primary Foreground",   description: "Text on primary" },
      { var: "--secondary",            label: "Secondary",            description: "Secondary action" },
      { var: "--secondary-foreground", label: "Secondary Foreground", description: "Text on secondary" },
      { var: "--accent",               label: "Accent",               description: "Hover highlight" },
      { var: "--accent-foreground",    label: "Accent Foreground",    description: "Text on accent" },
    ],
  },
  {
    title: "Neutral",
    tokens: [
      { var: "--muted",            label: "Muted",            description: "Subdued background" },
      { var: "--muted-foreground", label: "Muted Foreground", description: "Labels / captions" },
      { var: "--border",           label: "Border",           description: "Dividers, outlines" },
      { var: "--input",            label: "Input",            description: "Form input border" },
      { var: "--ring",             label: "Ring",             description: "Focus ring" },
    ],
  },
  {
    title: "Feedback",
    tokens: [
      { var: "--destructive", label: "Destructive", description: "Error / danger actions" },
    ],
  },
  {
    title: "Charts",
    tokens: [
      { var: "--chart-1", label: "Chart 1", description: "Primary data series" },
      { var: "--chart-2", label: "Chart 2", description: "Secondary data series" },
      { var: "--chart-3", label: "Chart 3", description: "Tertiary data series" },
      { var: "--chart-4", label: "Chart 4", description: "Quaternary data series" },
      { var: "--chart-5", label: "Chart 5", description: "Quinary data series" },
    ],
  },
];

export const CHART_SWATCHES = [
  { var: "--chart-1", bg: "oklch(0.87 0 0)",          dark: false },
  { var: "--chart-2", bg: "oklch(0.556 0 0)",         dark: true  },
  { var: "--chart-3", bg: "oklch(0.439 0 0)",         dark: true  },
  { var: "--chart-4", bg: "oklch(0.371 0 0)",         dark: true  },
  { var: "--chart-5", bg: "oklch(0.269 0 0)",         dark: true  },
];

export const STYLE_PALETTES = [
  { key: "default",      name: "Default",      tagline: "Dark, emerald-accented, motion-ready",    status: "available",   accent: "#10b981", palette: ["#18181b","#27272a","#10b981","#059669","#d1fae5"] },
  { key: "glass",        name: "Glass",        tagline: "Frosted glassmorphism",                   status: "available",   accent: "#38bdf8", palette: ["rgba(255,255,255,0.08)","#38bdf8","#7dd3fc","rgba(56,189,248,0.2)","rgba(255,255,255,0.05)"] },
  { key: "minimal",      name: "Minimal",      tagline: "Quiet, editorial, monochrome",            status: "available",   accent: "#a1a1aa", palette: ["#ffffff","#f4f4f5","#a1a1aa","#52525b","#09090b"] },
  { key: "neobrutalism", name: "Neobrutalism", tagline: "Loud borders, hard shadows",              status: "available",   accent: "#facc15", palette: ["#facc15","#f87171","#4ade80","#60a5fa","#000000"] },
  { key: "neumorphism",  name: "Neumorphism",  tagline: "Soft extruded surfaces",                  status: "available",   accent: "#8b95a5", palette: ["#e0e5ec","#c8d0df","#8b95a5","#f8fafc","#64748b"] },
  { key: "gradient",     name: "Gradient",     tagline: "Vibrant, glowing, saturated",             status: "available",   accent: "#d946ef", palette: ["#7c3aed","#d946ef","#06b6d4","#f97316","#10b981"] },
  { key: "retro",        name: "Retro",        tagline: "Warm, nostalgic, 70s-inspired",           status: "available",   accent: "#e8743b", palette: ["#f5f0e8","#e8743b","#d4a017","#8b5e3c","#1c1410"] },
  { key: "terminal",     name: "Terminal",     tagline: "Monospace command-line green",            status: "available",   accent: "#22c55e", palette: ["#000000","#0d1a0d","#22c55e","#16a34a","rgba(34,197,94,0.12)"] },
  { key: "aurora",       name: "Aurora",       tagline: "Flowing northern-lights gradients",       status: "coming-soon", accent: "#2dd4bf", palette: ["#0a0f1e","#2dd4bf","#6366f1","#8b5cf6","#2dd4bf"] },
  { key: "pixel",        name: "Pixel",        tagline: "8-bit pixel-art interfaces",              status: "coming-soon", accent: "#ef476f", palette: ["#1a1a2e","#ef476f","#06d6a0","#ffd166","#118ab2"] },
  { key: "material",     name: "Material",     tagline: "Elevated, tonal, expressive",             status: "coming-soon", accent: "#6750a4", palette: ["#fffbfe","#eaddff","#6750a4","#b3261e","#1c1b1f"] },
] as const;

export const INSPIRATION_PALETTES: InspPalette[] = [
  { name: "Vercel",           tags: ["dark","minimal"],         tag: "Dark · Minimal",  swatches: ["#000000","#111111","#888888","#ededed","#ffffff"], hexes: ["#000000","#111111","#888888","#ededed"],     desc: "Pure black/white — zero color distraction, all focus on content" },
  { name: "Linear",           tags: ["dark","cool","vibrant"],  tag: "Dark · Cool",     swatches: ["#0f0f12","#1a1a2e","#5e6ad2","#9d85e9","#e8e8f0"], hexes: ["#0f0f12","#5e6ad2","#9d85e9","#e8e8f0"],    desc: "Deep navy base with indigo-violet accent system" },
  { name: "Nord",             tags: ["cool","minimal"],         tag: "Cool · Arctic",   swatches: ["#2e3440","#3b4252","#81a1c1","#88c0d0","#eceff4"], hexes: ["#2e3440","#81a1c1","#88c0d0","#eceff4"],    desc: "Arctic, north-bluish tones — timeless and serene" },
  { name: "Catppuccin Mocha", tags: ["dark","cool","vibrant"],  tag: "Dark · Pastel",   swatches: ["#1e1e2e","#cba6f7","#89dceb","#a6e3a1","#fab387"], hexes: ["#1e1e2e","#cba6f7","#89dceb","#a6e3a1"],    desc: "Warm dark canvas with vivid pastel accents" },
  { name: "Dracula",          tags: ["dark","vibrant"],         tag: "Dark · Vibrant",  swatches: ["#282a36","#bd93f9","#50fa7b","#ff79c6","#ffb86c"], hexes: ["#282a36","#bd93f9","#50fa7b","#ff79c6"],    desc: "Purple base, vivid neon accents for syntax and UI" },
  { name: "Stone",            tags: ["minimal","light","warm"], tag: "Minimal · Warm",  swatches: ["#fafaf9","#e7e5e4","#a8a29e","#57534e","#1c1917"], hexes: ["#fafaf9","#a8a29e","#57534e","#1c1917"],    desc: "Tailwind's warmest neutral — parchment and ink" },
  { name: "Solarized",        tags: ["warm","light"],           tag: "Warm · Classic",  swatches: ["#fdf6e3","#eee8d5","#268bd2","#2aa198","#cb4b16"], hexes: ["#fdf6e3","#268bd2","#2aa198","#cb4b16"],    desc: "Precision color calibrated for screens and print alike" },
  { name: "Material You",     tags: ["vibrant","light"],        tag: "Vibrant · Tonal", swatches: ["#6750a4","#958da5","#eaddff","#fffbfe","#b3261e"], hexes: ["#6750a4","#eaddff","#fffbfe","#b3261e"],    desc: "Google's dynamic tonal system — soft and expressive" },
  { name: "Radix Plum",       tags: ["cool","vibrant","dark"],  tag: "Dark · Rich",     swatches: ["#191117","#3a1d40","#9e4fb5","#d19ddd","#f3e5f8"], hexes: ["#191117","#9e4fb5","#d19ddd","#f3e5f8"],    desc: "Deep plum scale from Radix UI's semantic color system" },
  { name: "Sunset",           tags: ["warm","vibrant"],         tag: "Warm · Vibrant",  swatches: ["#1a0a0a","#ef4444","#f97316","#fbbf24","#fef3c7"], hexes: ["#ef4444","#f97316","#fbbf24","#fef3c7"],    desc: "Fire gradient — deep crimson to golden hour amber" },
  { name: "Blueprint",        tags: ["cool","minimal","light"], tag: "Cool · Minimal",  swatches: ["#eff6ff","#bfdbfe","#3b82f6","#1d4ed8","#1e3a8a"], hexes: ["#eff6ff","#3b82f6","#1d4ed8","#1e3a8a"],    desc: "Full-blue monochrome — structured and calm" },
  { name: "Gruvbox",          tags: ["warm","dark"],            tag: "Warm · Dark",     swatches: ["#282828","#cc241d","#d79921","#98971a","#ebdbb2"], hexes: ["#282828","#cc241d","#d79921","#ebdbb2"],    desc: "Retro groove — warm dark with earthy accents" },
];

export const BRANDS: Brand[] = [
  { name: "Claude",   cat: "ai",              catLabel: "AI · LLM",         swatches: ["#faf9f5","#cc785c","#5db8a6","#e8a55a","#181715"], hexes: ["#faf9f5","#cc785c","#5db8a6","#e8a55a","#181715"],  principle: "Cream + coral pairing — deliberately warm, stands apart from cool-toned AI competitors." },
  { name: "Cursor",   cat: "ai developer",    catLabel: "AI · Dev",         swatches: ["#f7f7f4","#f54e00","#dfa88f","#9fc9a2","#26251e"], hexes: ["#f7f7f4","#f54e00","#dfa88f","#9fc9a2","#26251e"],  principle: "Parchment canvas with Cursor Orange as the brand mark. Each AI action type gets its own hue." },
  { name: "Linear",   cat: "developer saas",  catLabel: "Developer · SaaS", swatches: ["#010102","#0f1011","#5e6ad2","#828fff","#f7f8f8"], hexes: ["#010102","#5e6ad2","#828fff","#27a644","#f7f8f8"],  principle: "Single chromatic accent discipline — lavender on the mark, focus states, and CTAs only." },
  { name: "Figma",    cat: "design",          catLabel: "Design Tool",      swatches: ["#000000","#dceeb1","#c5b0f4","#f4ecd6","#f3c9b6"], hexes: ["#000000","#dceeb1","#c5b0f4","#f4ecd6","#c8e6cd"],  principle: "Black/white base with bold pastel color-block sections. Color substitutes for elevation shadows." },
  { name: "Raycast",  cat: "design developer",catLabel: "Dev Tool",         swatches: ["#07080a","#121212","#ff5757","#57c1ff","#ffffff"], hexes: ["#07080a","#ff5757","#57c1ff","#59d499","#ffffff"],   principle: "Pure black canvas with white pill CTAs. Multi-accent semantic system — each color owns a domain." },
  { name: "Supabase", cat: "developer",       catLabel: "Developer",        swatches: ["#ffffff","#3ecf8e","#1c1c1c","#6b01c2","#ffdb13"], hexes: ["#3ecf8e","#ffffff","#1c1c1c","#6b01c2","#ffdb13"],  principle: "Emerald on light for docs, dark for code. Accent colors exclusive to integration logos and charts." },
  { name: "Vercel",   cat: "developer",       catLabel: "Developer",        swatches: ["#171717","#888888","#0070f3","#50e3c2","#ff0080"], hexes: ["#171717","#0070f3","#50e3c2","#7928ca","#ff0080"],  principle: "Ink + white as the permanent base. Color reserved for the develop/preview/ship gradient only." },
  { name: "Stripe",   cat: "fintech",         catLabel: "Fintech",          swatches: ["#ffffff","#533afd","#1c1e54","#ea2261","#0d253d"], hexes: ["#533afd","#1c1e54","#ea2261","#f96bee","#0d253d"],  principle: "Indigo CTA on clean canvas, navy for featured tiers, organic blob gradients as decoration." },
  { name: "Airbnb",   cat: "consumer",        catLabel: "Consumer",         swatches: ["#ffffff","#ff385c","#e00b41","#222222","#6a6a6a"], hexes: ["#ff385c","#ffffff","#222222","#dddddd","#6a6a6a"],  principle: "Rausch red as the sole brand color — everything else is stepped grayscale." },
  { name: "Spotify",  cat: "consumer",        catLabel: "Consumer",         swatches: ["#121212","#181818","#1ed760","#b3b3b3","#ffffff"], hexes: ["#121212","#1ed760","#1db954","#b3b3b3","#ffffff"],  principle: "Phosphor green on near-black. Green is never used on light backgrounds." },
  { name: "Apple",    cat: "consumer",        catLabel: "Consumer",         swatches: ["#000000","#f5f5f7","#0066cc","#1d1d1f","#ffffff"], hexes: ["#000000","#f5f5f7","#0066cc","#1d1d1f","#ffffff"],  principle: "Black-white canvas with link blue for interactive CTAs only. Product renders carry all color." },
  { name: "Nike",     cat: "consumer",        catLabel: "Consumer",         swatches: ["#111111","#ffffff","#d30005","#ed1aa0","#007d48"], hexes: ["#111111","#d30005","#ed1aa0","#007d48","#ffffff"],  principle: "Near-black/white base, sale red as the single semantic accent." },
  { name: "Ferrari",  cat: "automotive",      catLabel: "Automotive",       swatches: ["#181818","#303030","#da291c","#969696","#ffffff"], hexes: ["#da291c","#181818","#303030","#969696","#ffffff"],  principle: "Rosso Corsa used scarcely — near-black lets it explode on contact." },
  { name: "Tesla",    cat: "automotive",      catLabel: "Automotive",       swatches: ["#ffffff","#F4F4F4","#3E6AE1","#393C41","#171A20"],hexes: ["#3E6AE1","#ffffff","#171A20","#393C41","#EEEEEE"],  principle: "White/light for configurators, Electric Blue owns CTAs and order flows. Zero decorative color." },
  { name: "Notion",   cat: "saas",            catLabel: "SaaS",             swatches: ["#0a1530","#5645d4","#dd5b00","#ff64c8","#ffffff"], hexes: ["#5645d4","#0a1530","#dd5b00","#ff64c8","#ffffff"],  principle: "Brand purple for the single dominant CTA, navy hero bands, and a wide multi-color accent palette." },
];

export const HARMONY_DEFS: { key: HarmonyKey; title: string; desc: string; roles: string[] }[] = [
  { key: "monochromatic", title: "Monochromatic",       desc: "Same hue at five lightness steps. Safe, polished, easy to implement — use for button states, hover effects, and depth scaling.", roles: ["Backgrounds","Borders","Hover states","Text","Focus rings"] },
  { key: "complementary", title: "Complementary",       desc: "The color directly opposite on the wheel. Maximum contrast — ideal for a CTA accent against your brand background.", roles: ["CTA accent","Highlight badge","Alert"] },
  { key: "analogous",     title: "Analogous",           desc: "Five adjacent hues spanning ±30°. Feels natural and cohesive — colors that appear together in nature.", roles: ["Multi-section","Charts","Category colors"] },
  { key: "triadic",       title: "Triadic",             desc: "120° apart — three equal voices. Vibrant and balanced, each color gets a distinct role without dominating.", roles: ["Three-product system","Data viz","Pricing tiers"] },
  { key: "splitComp",     title: "Split-complementary", desc: "Your primary plus two colors flanking its complement. The energy of complementary with more variety and less tension.", roles: ["Accent pair","Status colors","Two supporting tones"] },
  { key: "tetradic",      title: "Tetradic (Square)",   desc: "Four colors at 90° intervals. Rich and complex — works best when one color clearly dominates.", roles: ["Full product palette","Multi-brand","Large systems"] },
  { key: "neutral",       title: "Neutral scale",       desc: "Hue-tinted grays derived from your primary. Use for backgrounds, borders, and text instead of flat grays.", roles: ["Background","Card surface","Muted text","Border","Divider"] },
];

export const DEMO_PRESETS = ["#3b82f6","#8b5cf6","#ec4899","#10b981","#f97316","#ef4444","#06b6d4","#f59e0b"] as const;

export const GROUP_TOKEN_KEYS: Record<string, string[]> = {
  Surface:     ["background","foreground","card","card-foreground","popover","popover-foreground"],
  Interactive: ["primary","primary-foreground","secondary","secondary-foreground","accent","accent-foreground"],
  Neutral:     ["muted","muted-foreground","border","input","ring"],
  Feedback:    ["destructive"],
  Charts:      [],
};

export const PALETTE_ROLES = ["background", "surface", "primary", "secondary", "highlight"] as const;

export const PICKER_PRESETS = [
  "#ef4444","#f97316","#eab308","#22c55e",
  "#06b6d4","#6366f1","#a855f7","#ec4899",
  "#ffffff","#d4d4d8","#71717a","#27272a",
  "#1d4ed8","#0891b2","#059669","#000000",
] as const;

export const THUMB = [
  "[&::-webkit-slider-thumb]:h-3.5",
  "[&::-webkit-slider-thumb]:w-3.5",
  "[&::-webkit-slider-thumb]:appearance-none",
  "[&::-webkit-slider-thumb]:rounded-full",
  "[&::-webkit-slider-thumb]:border-2",
  "[&::-webkit-slider-thumb]:border-white/80",
  "[&::-webkit-slider-thumb]:bg-white",
  "[&::-webkit-slider-thumb]:shadow",
  "[&::-moz-range-thumb]:h-3.5",
  "[&::-moz-range-thumb]:w-3.5",
  "[&::-moz-range-thumb]:appearance-none",
  "[&::-moz-range-thumb]:rounded-full",
  "[&::-moz-range-thumb]:border-2",
  "[&::-moz-range-thumb]:border-white/80",
  "[&::-moz-range-thumb]:bg-white",
].join(" ");

export const INSP_FILTERS: { value: InspFilter; label: string }[] = [
  { value: "all",     label: "All"     },
  { value: "dark",    label: "Dark"    },
  { value: "light",   label: "Light"   },
  { value: "vibrant", label: "Vibrant" },
  { value: "minimal", label: "Minimal" },
  { value: "warm",    label: "Warm"    },
  { value: "cool",    label: "Cool"    },
];

export const COLL_FILTERS: { value: CollFilter; label: string }[] = [
  { value: "all",        label: "All"        },
  { value: "ai",         label: "AI & LLM"   },
  { value: "developer",  label: "Developer"  },
  { value: "design",     label: "Design"     },
  { value: "fintech",    label: "Fintech"    },
  { value: "consumer",   label: "Consumer"   },
  { value: "automotive", label: "Automotive" },
  { value: "saas",       label: "SaaS"       },
];

export const LIGHT_CHIPS = [
  { label: "Primary",     bg: "oklch(0.205 0 0)",          border: false },
  { label: "Secondary",   bg: "oklch(0.97 0 0)",           border: true  },
  { label: "Destructive", bg: "oklch(0.577 0.245 27.325)", border: false },
  { label: "Border",      bg: "oklch(0.922 0 0)",          border: true  },
];

export const DARK_CHIPS = [
  { label: "Primary",     bg: "oklch(0.922 0 0)"          },
  { label: "Secondary",   bg: "oklch(0.269 0 0)"          },
  { label: "Destructive", bg: "oklch(0.704 0.191 22.216)" },
  { label: "Border",      bg: "rgba(255,255,255,0.1)"     },
];

// ─── Color Math ───────────────────────────────────────────────────────────────

export function hexToHSL(hex: string): [number, number, number] {
  hex = hex.replace("#", "");
  if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

export function hslToHex(h: number, s: number, l: number): string {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(100, s)) / 100;
  l = Math.max(0, Math.min(100, l)) / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const c = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * c).toString(16).padStart(2, "0");
  };
  return "#" + f(0) + f(8) + f(4);
}

export function luminance(hex: string): number {
  hex = hex.replace("#", "");
  const [r, g, b] = [hex.slice(0,2), hex.slice(2,4), hex.slice(4,6)].map(c => {
    const s = parseInt(c, 16) / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastColor(hex: string): string {
  return luminance(hex) > 0.179 ? "#000000" : "#ffffff";
}

export function buildHarmonies(h: number, s: number, l: number): HarmonySet {
  return {
    monochromatic: [hslToHex(h,s,Math.min(l+35,92)),hslToHex(h,s,Math.min(l+18,84)),hslToHex(h,s,l),hslToHex(h,s,Math.max(l-18,10)),hslToHex(h,s,Math.max(l-35,6))],
    complementary: [hslToHex(h,s,l),hslToHex(h+180,s,l)],
    analogous:     [hslToHex(h-30,s,l),hslToHex(h-15,s,l),hslToHex(h,s,l),hslToHex(h+15,s,l),hslToHex(h+30,s,l)],
    triadic:       [hslToHex(h,s,l),hslToHex(h+120,s,l),hslToHex(h+240,s,l)],
    splitComp:     [hslToHex(h,s,l),hslToHex(h+150,s,l),hslToHex(h+210,s,l)],
    tetradic:      [hslToHex(h,s,l),hslToHex(h+90,s,l),hslToHex(h+180,s,l),hslToHex(h+270,s,l)],
    neutral:       [hslToHex(h,Math.round(s*0.12),96),hslToHex(h,Math.round(s*0.14),80),hslToHex(h,Math.round(s*0.16),55),hslToHex(h,Math.round(s*0.18),30),hslToHex(h,Math.round(s*0.20),12)],
  };
}

export function detectRelationship(h1: number, h2: number) {
  const n = Math.min(Math.abs(h2 - h1), 360 - Math.abs(h2 - h1));
  if (n < 20)  return { name: "Analogous",           dot: "#10b981", desc: "Neighboring hues — harmonious and cohesive." };
  if (n < 50)  return { name: "Near-analogous",       dot: "#22d3ee", desc: "Close but not adjacent. Gentle visual tension." };
  if (n < 80)  return { name: "Double split",         dot: "#eab308", desc: "Wide warm/cool counterpart system." };
  if (n < 110) return { name: "Triadic-adjacent",     dot: "#a855f7", desc: "Approaching a triadic split. Lively and balanced." };
  if (n < 140) return { name: "Triadic",              dot: "#6366f1", desc: "One-third of the wheel apart — vibrant without clashing." };
  if (n < 170) return { name: "Split-complementary",  dot: "#ec4899", desc: "Strong contrast with more flexibility than a true complement." };
  return         { name: "Complementary",             dot: "#f97316", desc: "Directly opposite on the wheel — maximum contrast." };
}

export function adaptForMode(hex: string, dark: boolean): string {
  const [h, s, l] = hexToHSL(hex);
  const newL = dark ? Math.min(l + 15, 85) : Math.max(l - 12, 18);
  return hslToHex(h, s, newL);
}

export function deriveDemoPalette(hex: string): Record<string, string> {
  const [h, s, l] = hexToHSL(hex);
  const sat = Math.max(s, 35);
  const fg  = hslToHex(h, Math.round(sat * 0.05), 94);
  return {
    "background":           hslToHex(h, Math.round(sat * 0.25), 9),
    "foreground":           fg,
    "card":                 hslToHex(h, Math.round(sat * 0.35), 13),
    "card-foreground":      fg,
    "popover":              hslToHex(h, Math.round(sat * 0.40), 16),
    "popover-foreground":   fg,
    "primary":              hex,
    "primary-foreground":   contrastColor(hex),
    "secondary":            hslToHex(h, Math.round(sat * 0.30), 19),
    "secondary-foreground": fg,
    "accent":               hslToHex(h, Math.round(sat * 0.40), 24),
    "accent-foreground":    fg,
    "muted":                hslToHex(h, Math.round(sat * 0.25), 15),
    "muted-foreground":     hslToHex(h, Math.round(sat * 0.20), 55),
    "border":               hslToHex(h, Math.round(sat * 0.30), 20),
    "input":                hslToHex(h, Math.round(sat * 0.30), 22),
    "ring":                 hex,
    "destructive":          hslToHex(0, 70, 50),
    "chart-1":              hex,
    "chart-2":              hslToHex(h + 40,  sat, l),
    "chart-3":              hslToHex(h + 80,  sat, Math.min(l + 8, 80)),
    "chart-4":              hslToHex(h + 160, sat, l),
    "chart-5":              hslToHex(h + 220, sat, l),
  };
}
