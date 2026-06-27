"use client";

import { useState, useMemo, useCallback, useRef, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = "overview" | "base" | "styles" | "inspiration" | "maincolor" | "collection";
type InspFilter = "all" | "dark" | "light" | "vibrant" | "minimal" | "warm" | "cool";
type CollFilter = "all" | "ai" | "developer" | "design" | "fintech" | "consumer" | "automotive" | "saas";
type HarmonyKey = "monochromatic" | "complementary" | "analogous" | "triadic" | "splitComp" | "tetradic" | "neutral";
type HarmonySet = Record<HarmonyKey, string[]>;

// ─── Static Data ──────────────────────────────────────────────────────────────

const TOKEN_GROUPS = [
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

const CHART_SWATCHES = [
  { var: "--chart-1", bg: "oklch(0.87 0 0)",          dark: false },
  { var: "--chart-2", bg: "oklch(0.556 0 0)",         dark: true  },
  { var: "--chart-3", bg: "oklch(0.439 0 0)",         dark: true  },
  { var: "--chart-4", bg: "oklch(0.371 0 0)",         dark: true  },
  { var: "--chart-5", bg: "oklch(0.269 0 0)",         dark: true  },
];

const STYLE_PALETTES = [
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

type InspPalette = { name: string; tags: string[]; tag: string; swatches: string[]; hexes: string[]; desc: string };
const INSPIRATION_PALETTES: InspPalette[] = [
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

type Brand = { name: string; cat: string; catLabel: string; swatches: string[]; hexes: string[]; principle: string };
const BRANDS: Brand[] = [
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

const HARMONY_DEFS: { key: HarmonyKey; title: string; desc: string; roles: string[] }[] = [
  { key: "monochromatic", title: "Monochromatic",       desc: "Same hue at five lightness steps. Safe, polished, easy to implement — use for button states, hover effects, and depth scaling.", roles: ["Backgrounds","Borders","Hover states","Text","Focus rings"] },
  { key: "complementary", title: "Complementary",       desc: "The color directly opposite on the wheel. Maximum contrast — ideal for a CTA accent against your brand background.", roles: ["CTA accent","Highlight badge","Alert"] },
  { key: "analogous",     title: "Analogous",           desc: "Five adjacent hues spanning ±30°. Feels natural and cohesive — colors that appear together in nature.", roles: ["Multi-section","Charts","Category colors"] },
  { key: "triadic",       title: "Triadic",             desc: "120° apart — three equal voices. Vibrant and balanced, each color gets a distinct role without dominating.", roles: ["Three-product system","Data viz","Pricing tiers"] },
  { key: "splitComp",     title: "Split-complementary", desc: "Your primary plus two colors flanking its complement. The energy of complementary with more variety and less tension.", roles: ["Accent pair","Status colors","Two supporting tones"] },
  { key: "tetradic",      title: "Tetradic (Square)",   desc: "Four colors at 90° intervals. Rich and complex — works best when one color clearly dominates.", roles: ["Full product palette","Multi-brand","Large systems"] },
  { key: "neutral",       title: "Neutral scale",       desc: "Hue-tinted grays derived from your primary. Use for backgrounds, borders, and text instead of flat grays.", roles: ["Background","Card surface","Muted text","Border","Divider"] },
];

// ─── Color Math ───────────────────────────────────────────────────────────────

function hexToHSL(hex: string): [number, number, number] {
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

function hslToHex(h: number, s: number, l: number): string {
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

function luminance(hex: string): number {
  hex = hex.replace("#", "");
  const [r, g, b] = [hex.slice(0,2), hex.slice(2,4), hex.slice(4,6)].map(c => {
    const s = parseInt(c, 16) / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastColor(hex: string): string {
  return luminance(hex) > 0.179 ? "#000000" : "#ffffff";
}

function buildHarmonies(h: number, s: number, l: number): HarmonySet {
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

function detectRelationship(h1: number, h2: number) {
  const n = Math.min(Math.abs(h2 - h1), 360 - Math.abs(h2 - h1));
  if (n < 20)  return { name: "Analogous",           dot: "#10b981", desc: "Neighboring hues — harmonious and cohesive." };
  if (n < 50)  return { name: "Near-analogous",       dot: "#22d3ee", desc: "Close but not adjacent. Gentle visual tension." };
  if (n < 80)  return { name: "Double split",         dot: "#eab308", desc: "Wide warm/cool counterpart system." };
  if (n < 110) return { name: "Triadic-adjacent",     dot: "#a855f7", desc: "Approaching a triadic split. Lively and balanced." };
  if (n < 140) return { name: "Triadic",              dot: "#6366f1", desc: "One-third of the wheel apart — vibrant without clashing." };
  if (n < 170) return { name: "Split-complementary",  dot: "#ec4899", desc: "Strong contrast with more flexibility than a true complement." };
  return         { name: "Complementary",             dot: "#f97316", desc: "Directly opposite on the wheel — maximum contrast." };
}

// ─── Shared primitives ────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      {children}
    </p>
  );
}

function FilterPills<T extends string>({
  options,
  active,
  setActive,
}: {
  options: { value: T; label: string }[];
  active: T;
  setActive: (v: T) => void;
}) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => setActive(opt.value)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150",
            active === opt.value
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

// ─── Token Group Demo Popups ──────────────────────────────────────────────────

const DEMO_PRESETS = ["#3b82f6","#8b5cf6","#ec4899","#10b981","#f97316","#ef4444","#06b6d4","#f59e0b"] as const;

const GROUP_TOKEN_KEYS: Record<string, string[]> = {
  Surface:     ["background","foreground","card","card-foreground","popover","popover-foreground"],
  Interactive: ["primary","primary-foreground","secondary","secondary-foreground","accent","accent-foreground"],
  Neutral:     ["muted","muted-foreground","border","input","ring"],
  Feedback:    ["destructive"],
  Charts:      [],
};

function deriveDemoPalette(hex: string): Record<string, string> {
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

type DP = Record<string, string>;

function DemoSurface({ p }: { p: DP }) {
  return (
    <div className="space-y-3">
      <div className="relative rounded-2xl p-4" style={{ background: p["background"], border: `1px solid ${p["border"]}` }}>
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest" style={{ color: p["muted-foreground"] }}>--background · Page canvas</span>
        <p className="mb-3 text-sm" style={{ color: p["muted-foreground"] }}>The outermost layer everything sits on. Swap <code style={{ color: p["primary"] }}>--background</code> and the whole page shifts.</p>
        <div className="rounded-xl p-4" style={{ background: p["card"], border: `1px solid ${p["border"]}` }}>
          <div className="mb-2.5 flex items-center justify-between">
            <div>
              <p className="text-base font-semibold" style={{ color: p["card-foreground"] }}>Card surface</p>
              <p className="text-xs" style={{ color: p["muted-foreground"] }}>--card · elevated from --background</p>
            </div>
            <span className="rounded-full px-2.5 py-1 text-xs font-bold" style={{ background: `${p["primary"]}18`, color: p["primary"], border: `1px solid ${p["primary"]}30` }}>--card-foreground</span>
          </div>
          <div className="rounded-lg p-3" style={{ background: p["popover"], border: `1px solid ${p["border"]}`, boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: p["muted-foreground"] }}>--popover · Floating menu</p>
            {["Profile", "Settings", "Sign out"].map(item => (
              <div key={item} className="flex items-center gap-2 rounded-md px-2 py-1.5">
                <div className="h-1.5 w-1.5 rounded-full" style={{ background: item === "Profile" ? p["primary"] : p["border"] }} />
                <span className="text-sm" style={{ color: p["popover-foreground"] }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">Three elevation layers — <span className="font-medium text-foreground/70">background → card → popover</span> — float content without extra shadows.</p>
    </div>
  );
}

function DemoInteractive({ p }: { p: DP }) {
  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Button roles</p>
        <div className="flex flex-wrap gap-3">
          <div className="flex flex-col items-center gap-1.5">
            <button className="rounded-lg px-4 py-2 text-sm font-semibold" style={{ background: p["primary"], color: p["primary-foreground"], boxShadow: `0 4px 14px ${p["primary"]}50` }}>Save changes</button>
            <span className="text-xs text-muted-foreground/50">--primary</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <button className="rounded-lg px-4 py-2 text-sm font-semibold" style={{ background: p["secondary"], color: p["secondary-foreground"], border: `1px solid ${p["border"]}` }}>Cancel</button>
            <span className="text-xs text-muted-foreground/50">--secondary</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <button className="rounded-lg px-4 py-2 text-sm font-semibold" style={{ background: p["accent"], color: p["accent-foreground"], border: `1px solid ${p["border"]}` }}>Filter</button>
            <span className="text-xs text-muted-foreground/50">--accent</span>
          </div>
        </div>
      </div>
      <div>
        <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Toggle — primary as selected state</p>
        <div className="flex overflow-hidden rounded-lg" style={{ border: `1px solid ${p["border"]}` }}>
          {["Weekly", "Monthly", "Yearly"].map((label, i) => (
            <button key={label} className="flex-1 py-2 text-sm font-semibold" style={i === 0 ? { background: p["primary"], color: p["primary-foreground"] } : { background: "transparent", color: p["muted-foreground"] }}>
              {label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Badges — tints</p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest" style={{ background: `${p["primary"]}18`, color: p["primary"], border: `1px solid ${p["primary"]}30` }}>Active</span>
          <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest" style={{ background: p["accent"], color: p["accent-foreground"], border: `1px solid ${p["border"]}` }}>Pending</span>
          <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest" style={{ background: p["muted"], color: p["muted-foreground"], border: `1px solid ${p["border"]}` }}>Draft</span>
        </div>
      </div>
    </div>
  );
}

function DemoNeutral({ p }: { p: DP }) {
  return (
    <div className="space-y-3 rounded-2xl p-4" style={{ background: p["background"], border: `1px solid ${p["border"]}` }}>
      <div>
        <label className="text-xs font-bold uppercase tracking-widest" style={{ color: p["muted-foreground"] }}>Email address</label>
        <div className="mt-1.5 rounded-lg px-3 py-2.5 text-sm" style={{ background: p["background"], border: `1px solid ${p["input"]}`, color: p["muted-foreground"] }}>user@example.com</div>
        <p className="mt-1 text-xs" style={{ color: p["muted-foreground"] }}>--muted-foreground on placeholder · --input on border</p>
      </div>
      <div>
        <label className="text-xs font-bold uppercase tracking-widest" style={{ color: p["muted-foreground"] }}>Password <span style={{ color: p["ring"] }}>(focused)</span></label>
        <div className="mt-1.5 rounded-lg px-3 py-2.5 text-sm" style={{ background: p["background"], border: `1.5px solid ${p["ring"]}`, color: p["foreground"], boxShadow: `0 0 0 3px ${p["ring"]}25` }}>
          ••••••••
          <span className="float-right text-xs font-bold uppercase tracking-wide" style={{ color: p["ring"] }}>--ring</span>
        </div>
      </div>
      <div className="h-px" style={{ background: p["border"] }} />
      <div className="rounded-lg px-3 py-3" style={{ background: p["muted"] }}>
        <p className="text-sm font-semibold" style={{ color: p["muted-foreground"] }}>--muted</p>
        <p className="text-xs" style={{ color: p["muted-foreground"], opacity: 0.7 }}>Quiet containers for hints, sidebars, and helper text.</p>
      </div>
    </div>
  );
}

function DemoFeedback({ p }: { p: DP }) {
  const d = p["destructive"];
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-3 rounded-2xl p-4" style={{ background: `${d}12`, border: `1px solid ${d}30` }}>
        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ background: d }}>
          <svg width="11" height="11" fill="white" viewBox="0 0 24 24"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
        </div>
        <div>
          <p className="text-base font-semibold" style={{ color: d }}>Action failed</p>
          <p className="text-sm" style={{ color: `${d}90` }}>You don't have permission to delete this item. Contact your admin.</p>
        </div>
      </div>
      <div>
        <label className="text-xs font-bold uppercase tracking-widest" style={{ color: `${d}90` }}>Email address</label>
        <div className="mt-1.5 rounded-lg px-3 py-2.5 text-sm" style={{ background: p["background"], border: `1.5px solid ${d}`, color: p["foreground"] }}>
          invalid-email@
        </div>
        <p className="mt-1 text-xs" style={{ color: d }}>--destructive on border + message — invalid email address</p>
      </div>
      <button className="w-full rounded-lg py-2.5 text-sm font-semibold text-white" style={{ background: d, boxShadow: `0 4px 16px ${d}45` }}>
        Delete account permanently
      </button>
    </div>
  );
}

function DemoCharts({ p }: { p: DP }) {
  const [h, s, l] = hexToHSL(p["primary"]);
  const CHART_COLORS = [
    p["primary"],
    hslToHex(h + 40,  s, l),
    hslToHex(h + 80,  s, Math.min(l + 8, 80)),
    hslToHex(h + 160, s, l),
    hslToHex(h + 220, s, l),
  ];
  const DATA = [{ label: "Mon", value: 72 }, { label: "Tue", value: 88 }, { label: "Wed", value: 55 }, { label: "Thu", value: 94 }, { label: "Fri", value: 68 }];
  const max  = Math.max(...DATA.map(d => d.value));
  return (
    <div className="space-y-3">
      <div className="rounded-2xl p-4" style={{ background: p["card"], border: `1px solid ${p["border"]}` }}>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-base font-semibold" style={{ color: p["card-foreground"] }}>Weekly activity</p>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: p["muted-foreground"] }}>5 series · 5 tokens</span>
        </div>
        <div className="flex items-end gap-3" style={{ height: "72px" }}>
          {DATA.map((d, i) => (
            <div key={d.label} className="flex-1 rounded-t" style={{ height: `${(d.value / max) * 72}px`, background: CHART_COLORS[i], boxShadow: `0 4px 14px ${CHART_COLORS[i]}55` }} />
          ))}
        </div>
        <div className="mt-2 flex gap-3">
          {DATA.map(d => <span key={d.label} className="flex-1 text-center text-xs font-medium" style={{ color: p["muted-foreground"] }}>{d.label}</span>)}
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {CHART_COLORS.map((c, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
            <span className="font-mono text-xs" style={{ color: p["muted-foreground"] }}>--chart-{i + 1}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">Colors derived from your primary hue — each series steps 40° around the wheel.</p>
    </div>
  );
}

function TokenGroupDemoModal({ group, onClose }: { group: string; onClose: () => void }) {
  const [primaryHex, setPrimaryHex] = useState("#3b82f6");
  const [pickerOpen, setPickerOpen]  = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pickerOpen) return;
    function down(e: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) setPickerOpen(false);
    }
    document.addEventListener("mousedown", down);
    return () => document.removeEventListener("mousedown", down);
  }, [pickerOpen]);

  const palette   = useMemo(() => deriveDemoPalette(primaryHex), [primaryHex]);
  const tokenKeys = GROUP_TOKEN_KEYS[group] ?? [];

  const demoMap: Record<string, React.ReactNode> = {
    Surface:     <DemoSurface     p={palette} />,
    Interactive: <DemoInteractive p={palette} />,
    Neutral:     <DemoNeutral     p={palette} />,
    Feedback:    <DemoFeedback    p={palette} />,
    Charts:      <DemoCharts      p={palette} />,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-[50vw] overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-black/40"
        onClick={e => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-border/40 px-4 py-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Token group demo</p>
            <p className="text-base font-semibold">{group}</p>
          </div>
          <button onClick={onClose} className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Primary color picker */}
        <div className="flex items-center gap-3 border-b border-border/40 px-4 py-3">
          <div ref={pickerRef} className="relative shrink-0">
            <button
              onClick={() => setPickerOpen(o => !o)}
              className="h-9 w-9 rounded-xl shadow-md transition-transform hover:scale-105"
              style={{ background: primaryHex, border: `2px solid ${primaryHex}60` }}
              title="Change primary color"
            />
            {pickerOpen && (
              <ColorPickerPopup hex={primaryHex} onChange={setPrimaryHex} onClose={() => setPickerOpen(false)} />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">Demo primary — <code className="font-mono text-xs" style={{ color: primaryHex }}>{primaryHex}</code></p>
            <p className="text-xs text-muted-foreground">Using this as <code className="font-mono">--primary</code> · all tokens derive from it · click to change</p>
          </div>
          <div className="flex shrink-0 gap-1.5">
            {DEMO_PRESETS.map(c => (
              <button
                key={c}
                onClick={() => setPrimaryHex(c)}
                className="h-5 w-5 rounded-md transition-transform hover:scale-110"
                style={{ background: c, outline: primaryHex === c ? `2px solid ${c}` : "none", outlineOffset: "2px" }}
                title={c}
              />
            ))}
          </div>
        </div>

        {/* Derived token colors for this group */}
        {tokenKeys.length > 0 && (
          <div className="border-b border-border/40 px-4 py-3">
            <p className="mb-2 text-[0.5625rem] font-bold uppercase tracking-widest text-muted-foreground/40">Derived token colors from this primary</p>
            <div className="flex flex-wrap gap-2">
              {tokenKeys.map(key => (
                <div key={key} className="flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/40 px-2.5 py-1.5">
                  <div className="h-3 w-3 shrink-0 rounded-sm" style={{ background: palette[key], boxShadow: "inset 0 0 0 1px rgba(128,128,128,0.2)" }} />
                  <span className="font-mono text-[0.625rem] text-muted-foreground">--{key}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Demo UI */}
        <div className="p-4">{demoMap[group]}</div>
      </div>
    </div>
  );
}

// ─── Base Panel ───────────────────────────────────────────────────────────────

const LIGHT_CHIPS = [
  { label: "Primary",     bg: "oklch(0.205 0 0)",          border: false },
  { label: "Secondary",   bg: "oklch(0.97 0 0)",           border: true  },
  { label: "Destructive", bg: "oklch(0.577 0.245 27.325)", border: false },
  { label: "Border",      bg: "oklch(0.922 0 0)",          border: true  },
];
const DARK_CHIPS = [
  { label: "Primary",     bg: "oklch(0.922 0 0)"           },
  { label: "Secondary",   bg: "oklch(0.269 0 0)"           },
  { label: "Destructive", bg: "oklch(0.704 0.191 22.216)"  },
  { label: "Border",      bg: "rgba(255,255,255,0.1)"      },
];

function BasePanel({ copy }: { copy: (text: string, label: string) => void }) {
  const [openDemo,    setOpenDemo]    = useState<string | null>(null);
  const [primaryHex,  setPrimaryHex]  = useState("#3b82f6");
  const [pickerOpen,  setPickerOpen]  = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pickerOpen) return;
    function down(e: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) setPickerOpen(false);
    }
    document.addEventListener("mousedown", down);
    return () => document.removeEventListener("mousedown", down);
  }, [pickerOpen]);

  const palette = useMemo(() => deriveDemoPalette(primaryHex), [primaryHex]);

  return (
    <div>
      {/* Explainer */}
      <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border/60 bg-card p-5">
          <p className="mb-1.5 text-sm font-semibold">What are tokens?</p>
          <p className="text-[0.8125rem] leading-relaxed text-muted-foreground">
            Tokens are named CSS variables — <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.75rem] text-foreground/80">--primary</code>, <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.75rem] text-foreground/80">--background</code> — that every component reads from. Change one value and the whole UI updates.
          </p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-5">
          <p className="mb-1.5 text-sm font-semibold">How do I use them?</p>
          <p className="text-[0.8125rem] leading-relaxed text-muted-foreground">
            Paste the token block into your <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.75rem] text-foreground/80">globals.css</code> under <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.75rem] text-foreground/80">:root</code> and <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.75rem] text-foreground/80">.dark</code>. All installed components will pick them up automatically.
          </p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-5">
          <p className="mb-1.5 text-sm font-semibold">Can I customize?</p>
          <p className="text-[0.8125rem] leading-relaxed text-muted-foreground">
            Yes — override any token with your own color. Use the <span className="font-medium text-foreground/80">Your colors</span> tab to generate a full palette from your brand color, then swap the values here.
          </p>
        </div>
      </div>

      {/* Mode compare */}
      <div className="mb-12 grid grid-cols-2 gap-[1px] overflow-hidden rounded-2xl border border-border/60 bg-border/60">
        <div className="p-5" style={{ background: "#ffffff" }}>
          <p className="mb-4 text-[0.5625rem] font-semibold uppercase tracking-widest" style={{ color: "#71717a" }}>
            Light mode
          </p>
          <div className="flex flex-wrap gap-1.5">
            {LIGHT_CHIPS.map(c => (
              <div
                key={c.label}
                className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
                style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}
              >
                <div className="h-5 w-5 shrink-0 rounded" style={{ background: c.bg, border: c.border ? "1px solid #e5e7eb" : undefined }} />
                <span className="text-[0.6875rem] font-medium" style={{ color: "#374151" }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5" style={{ background: "oklch(0.145 0 0)" }}>
          <p className="mb-4 text-[0.5625rem] font-semibold uppercase tracking-widest" style={{ color: "#71717a" }}>
            Dark mode
          </p>
          <div className="flex flex-wrap gap-1.5">
            {DARK_CHIPS.map(c => (
              <div
                key={c.label}
                className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="h-5 w-5 shrink-0 rounded" style={{ background: c.bg, border: "1px solid rgba(255,255,255,0.08)" }} />
                <span className="text-[0.6875rem] font-medium" style={{ color: "#a1a1aa" }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Primary preview */}
      <div className="mb-10 overflow-hidden rounded-2xl border border-border/60 bg-card">
        {/* Picker row */}
        <div className="flex items-center gap-3 px-5 py-4">
          <div ref={pickerRef} className="relative shrink-0">
            <button
              onClick={() => setPickerOpen(o => !o)}
              className="h-9 w-9 rounded-xl shadow-md transition-transform hover:scale-105"
              style={{ background: primaryHex, border: `2px solid ${primaryHex}60` }}
              title="Change preview primary"
            />
            {pickerOpen && (
              <ColorPickerPopup hex={primaryHex} onChange={setPrimaryHex} onClose={() => setPickerOpen(false)} />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">Preview primary — <code className="font-mono text-xs" style={{ color: primaryHex }}>{primaryHex}</code></p>
            <p className="text-xs text-muted-foreground">See what all token groups look like with this primary · click swatch or pick a preset</p>
          </div>
          <div className="flex shrink-0 gap-1.5">
            {DEMO_PRESETS.map(c => (
              <button
                key={c}
                onClick={() => setPrimaryHex(c)}
                className="h-5 w-5 rounded-md transition-transform hover:scale-110"
                style={{ background: c, outline: primaryHex === c ? `2px solid ${c}` : "none", outlineOffset: "2px" }}
                title={c}
              />
            ))}
          </div>
        </div>

        {/* Derived token rows per group */}
        <div className="border-t border-border/40">
          {TOKEN_GROUPS.filter(g => (GROUP_TOKEN_KEYS[g.title] ?? []).length > 0).map((group, gi, arr) => (
            <div key={group.title} className={`flex items-start gap-4 px-5 py-3 ${gi < arr.length - 1 ? "border-b border-border/40" : ""}`}>
              <span className="mt-0.5 w-20 shrink-0 text-[0.625rem] font-bold uppercase tracking-widest text-muted-foreground/50">{group.title}</span>
              <div className="flex flex-wrap gap-1.5">
                {(GROUP_TOKEN_KEYS[group.title] ?? []).map(key => (
                  <div key={key} className="flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/40 px-2 py-1">
                    <div className="h-3 w-3 shrink-0 rounded-sm" style={{ background: palette[key], boxShadow: "inset 0 0 0 1px rgba(128,128,128,0.15)" }} />
                    <span className="font-mono text-[0.575rem] text-muted-foreground">--{key}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Token groups */}
      {TOKEN_GROUPS.map(group => (
        <div key={group.title} className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{group.title}</p>
            <button
              onClick={() => setOpenDemo(group.title)}
              className="flex items-center gap-1.5 rounded-lg border border-border/60 px-2.5 py-1 text-[0.625rem] font-medium text-muted-foreground transition-colors hover:border-border hover:bg-muted hover:text-foreground"
            >
              <svg width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/></svg>
              Demo
            </button>
          </div>
          <div
            className="overflow-hidden rounded-2xl border border-border/60 bg-border/60"
            style={{ display: "grid", gridTemplateColumns: `repeat(${group.tokens.length}, 1fr)`, gap: "1px" }}
          >
            {group.tokens.map(token => {
              const key = token.var.slice(2);
              const swatchColor = palette[key] ?? `var(${token.var})`;
              return (
              <button
                key={token.var}
                onClick={() => copy(`var(${token.var})`, `Copied var(${token.var})`)}
                className="group flex flex-col bg-card text-left transition-colors duration-150 hover:bg-muted/50 "
              >
                <div
                  className="relative h-[68px] border-b border-border/40"
                  style={{
                    background: swatchColor,
                    boxShadow: "inset 0 0 0 1px rgba(128,128,128,0.18)",
                  }}
                >
                  <span className="absolute right-2.5 top-2 rounded-md bg-background/80 px-1.5 py-0.5 text-[0.5rem] font-semibold uppercase tracking-widest text-foreground/60 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    copy
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 p-3.5">
                  <span className="text-[0.8125rem] font-semibold leading-snug">{token.label}</span>
                  <code className="font-mono text-[0.6rem] text-muted-foreground/50">var({token.var})</code>
                  <span className="mt-0.5 text-[0.6875rem] text-muted-foreground/45">{token.description}</span>
                </div>
              </button>
              );
            })}
          </div>
        </div>
      ))}

      {openDemo && <TokenGroupDemoModal group={openDemo} onClose={() => setOpenDemo(null)} />}
    </div>
  );
}

// ─── Styles Panel ─────────────────────────────────────────────────────────────

const PALETTE_ROLES = ["background", "surface", "primary", "secondary", "highlight"] as const;

function StylesPanel({ copy }: { copy: (text: string, label: string) => void }) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const available = STYLE_PALETTES.filter(s => s.status === "available");
  const soon      = STYLE_PALETTES.filter(s => s.status === "coming-soon");

  function copyPalette(style: typeof STYLE_PALETTES[number]) {
    const text = style.palette
      .map((hex, i) => `${PALETTE_ROLES[i] ?? `color-${i + 1}`}: ${hex}`)
      .join("\n");
    copy(text, `Copied ${style.name} palette`);
    setCopiedKey(style.key);
    setTimeout(() => setCopiedKey(null), 1400);
  }

  return (
    <div>
      <p className="mb-10 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
        Each visual style ships its own color DNA. Swap the{" "}
        <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.8125rem] text-foreground/80">styleConfig</code>{" "}
        and the entire palette shifts — surfaces, accents, and borders all move together.
      </p>

      <SectionLabel>Available</SectionLabel>
      <div className="mb-10 flex flex-col gap-px overflow-hidden rounded-2xl border border-border/60">
        {available.map(style => (
          <div
            key={style.key}
            className="group grid grid-cols-[1fr_auto_auto] items-center gap-4 bg-card px-5 py-4 transition-colors hover:bg-muted/40 sm:grid-cols-[200px_1fr_auto]"
          >
            {/* Name + tagline */}
            <div>
              <div className="mb-0.5 flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: style.accent }} />
                <span className="text-[0.9375rem] font-semibold">{style.name}</span>
              </div>
              <p className="text-xs text-muted-foreground">{style.tagline}</p>
            </div>

            {/* Swatches — each copies its own hex on click */}
            <div className="hidden h-8 gap-[3px] sm:flex">
              {style.palette.map((color, i) => (
                <button
                  key={i}
                  onClick={() => copy(color, `Copied ${color}`)}
                  title={PALETTE_ROLES[i]}
                  className="group/sw relative flex-1 overflow-hidden rounded-sm transition-transform duration-200 group-hover:scale-y-[1.3]"
                  style={{ background: color, transformOrigin: "bottom", boxShadow: "inset 0 0 0 1px rgba(128,128,128,0.18)" }}
                >
                  <span
                    className="absolute inset-x-0 bottom-0 truncate px-0.5 py-0.5 text-center font-mono text-[0.4rem] font-semibold text-white opacity-0 transition-opacity duration-150 group-hover/sw:opacity-100"
                    style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(2px)" }}
                  >
                    {color}
                  </span>
                </button>
              ))}
            </div>

            {/* Copy button — always visible */}
            <div className="flex items-center gap-2">
              <span className={cn(
                "text-[0.5rem] font-bold uppercase tracking-widest transition-opacity duration-150",
                copiedKey === style.key ? "text-foreground/40 opacity-100" : "opacity-0"
              )}>
                Copied!
              </span>
              <button
                onClick={() => copyPalette(style)}
                title="Copy palette"
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-border hover:bg-muted hover:text-foreground"
              >
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <SectionLabel>Coming soon</SectionLabel>
      <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-border/60 opacity-40 select-none pointer-events-none">
        {soon.map(style => (
          <div key={style.key} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 bg-card px-5 py-4 sm:grid-cols-[200px_1fr_auto]">
            <div>
              <div className="mb-0.5 flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: style.accent }} />
                <span className="text-[0.9375rem] font-semibold">{style.name}</span>
              </div>
              <p className="text-xs text-muted-foreground">{style.tagline}</p>
            </div>
            <div className="hidden h-8 gap-[3px] sm:flex">
              {style.palette.map((color, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ background: color, boxShadow: "inset 0 0 0 1px rgba(128,128,128,0.18)" }} />
              ))}
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-border/60 text-muted-foreground">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Inspiration Panel ────────────────────────────────────────────────────────

const INSP_FILTERS: { value: InspFilter; label: string }[] = [
  { value: "all",     label: "All"     },
  { value: "dark",    label: "Dark"    },
  { value: "light",   label: "Light"   },
  { value: "vibrant", label: "Vibrant" },
  { value: "minimal", label: "Minimal" },
  { value: "warm",    label: "Warm"    },
  { value: "cool",    label: "Cool"    },
];

function PaletteCard({ palette: p, copy }: { palette: InspPalette; copy: (t: string, l: string) => void }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { copy(p.hexes.join(", "), "Palette copied"); setCopied(true); setTimeout(() => setCopied(false), 1400); }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card text-left transition-all duration-200 hover:border-border hover:-translate-y-0.5 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]"
    >
      <div className="flex h-14">
        {p.swatches.map((hex, i) => (
          <div key={i} className="flex-1 transition-[flex] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[&:hover]:flex-[2.5]" style={{ background: hex }} />
        ))}
      </div>
      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-semibold">{copied ? "Copied!" : p.name}</span>
          <span className="rounded-full bg-muted px-2 py-0.5 text-[0.5rem] font-bold uppercase tracking-widest text-muted-foreground">{p.tag}</span>
        </div>
        <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
        <div className="flex flex-wrap gap-1">
          {p.hexes.map(hex => (
            <span key={hex} className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.5625rem] text-muted-foreground">{hex}</span>
          ))}
        </div>
      </div>
    </button>
  );
}

function InspirationPanel({ filter, setFilter, copy }: { filter: InspFilter; setFilter: (v: InspFilter) => void; copy: (t: string, l: string) => void }) {
  const visible = filter === "all" ? INSPIRATION_PALETTES : INSPIRATION_PALETTES.filter(p => p.tags.includes(filter));
  return (
    <div>
      <p className="mb-6 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
        Palettes from renowned design systems and developer tools. Click any card to copy all hex values.
      </p>
      <FilterPills options={INSP_FILTERS} active={filter} setActive={setFilter} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map(p => <PaletteCard key={p.name} palette={p} copy={copy} />)}
      </div>
    </div>
  );
}

// ─── Harmony Panel ────────────────────────────────────────────────────────────

const PICKER_PRESETS = [
  "#ef4444","#f97316","#eab308","#22c55e",
  "#06b6d4","#6366f1","#a855f7","#ec4899",
  "#ffffff","#d4d4d8","#71717a","#27272a",
  "#1d4ed8","#0891b2","#059669","#000000",
] as const;

const THUMB = [
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

function ColorPickerPopup({ hex, onChange, onClose }: {
  hex: string;
  onChange: (v: string) => void;
  onClose: () => void;
}) {
  const [localHex, setLocalHex] = useState(hex);
  const ref = useRef<HTMLDivElement>(null);
  const [h, s, l] = useMemo(() => hexToHSL(hex), [hex]);

  useEffect(() => { setLocalHex(hex); }, [hex]);

  useEffect(() => {
    function down(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", down);
    return () => document.removeEventListener("mousedown", down);
  }, [onClose]);

  function applyHex(raw: string) {
    let v = raw.trim();
    if (!v.startsWith("#")) v = "#" + v;
    if (/^#[0-9a-fA-F]{6}$/.test(v)) onChange(v);
    else setLocalHex(hex);
  }

  const hueGrad = `linear-gradient(to right,${Array.from({ length: 13 }, (_, i) => `hsl(${i * 30},${Math.max(s, 50)}%,${Math.min(Math.max(l, 30), 65)}%)`).join(",")})`;
  const satGrad = `linear-gradient(to right,hsl(${h},0%,${l}%),hsl(${h},100%,${l}%))`;
  const litGrad = `linear-gradient(to right,hsl(${h},${s}%,5%),hsl(${h},${s}%,50%),hsl(${h},${s}%,95%))`;

  return (
    <div
      ref={ref}
      className="absolute left-0 top-[calc(100%+8px)] z-50 w-60 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-black/30"
    >
      {/* Preview bar */}
      <div className="h-10 w-full transition-colors duration-75" style={{ background: hex }} />

      {/* HSL sliders */}
      <div className="space-y-3 p-4 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="w-3 shrink-0 text-[0.5625rem] font-bold uppercase tracking-widest text-muted-foreground/40">H</span>
          <input type="range" min="0" max="359" value={h}
            onChange={e => onChange(hslToHex(+e.target.value, s, l))}
            className={cn("h-2 flex-1 cursor-pointer appearance-none rounded-full", THUMB)}
            style={{ background: hueGrad }}
          />
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-3 shrink-0 text-[0.5625rem] font-bold uppercase tracking-widest text-muted-foreground/40">S</span>
          <input type="range" min="0" max="100" value={s}
            onChange={e => onChange(hslToHex(h, +e.target.value, l))}
            className={cn("h-2 flex-1 cursor-pointer appearance-none rounded-full", THUMB)}
            style={{ background: satGrad }}
          />
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-3 shrink-0 text-[0.5625rem] font-bold uppercase tracking-widest text-muted-foreground/40">L</span>
          <input type="range" min="0" max="100" value={l}
            onChange={e => onChange(hslToHex(h, s, +e.target.value))}
            className={cn("h-2 flex-1 cursor-pointer appearance-none rounded-full", THUMB)}
            style={{ background: litGrad }}
          />
        </div>
        <input
          type="text"
          value={localHex}
          onChange={e => setLocalHex(e.target.value)}
          onBlur={() => applyHex(localHex)}
          onKeyDown={e => e.key === "Enter" && applyHex(localHex)}
          maxLength={7}
          className="mt-1 w-full rounded-xl border border-border/60 bg-background px-3 py-1.5 font-mono text-sm text-foreground outline-none transition-colors focus:border-foreground/30"
        />
      </div>

      {/* Presets */}
      <div className="border-t border-border/40 px-4 pb-4 pt-3">
        <p className="mb-2 text-[0.5rem] font-bold uppercase tracking-widest text-muted-foreground/40">Presets</p>
        <div className="grid grid-cols-8 gap-1">
          {PICKER_PRESETS.map(c => (
            <button
              key={c}
              onClick={() => onChange(c)}
              title={c}
              className="h-6 w-6 rounded-md transition-transform hover:scale-110 active:scale-95"
              style={{
                background: c,
                boxShadow: hex.toLowerCase() === c.toLowerCase()
                  ? "0 0 0 2px var(--background), 0 0 0 3.5px var(--foreground)"
                  : "inset 0 0 0 1px rgba(128,128,128,0.22)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SwatchStrip({ colors, label, copy }: {
  colors: string[];
  label?: string;
  copy: (text: string, label: string) => void;
}) {
  return (
    <div className="relative flex h-10">
      {label && (
        <span className="pointer-events-none absolute left-2 top-1/2 z-10 -translate-y-1/2 text-[0.4rem] font-bold uppercase tracking-widest text-white/60">
          {label}
        </span>
      )}
      {colors.map((hex, i) => (
        <button
          key={i}
          onClick={() => copy(hex, `Copied ${hex}`)}
          className="group/sw relative flex-1 transition-[flex] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:flex-[2]"
          style={{ background: hex }} title={hex}
        >
          <span className="absolute inset-x-0 bottom-0 py-0.5 text-center font-mono text-[0.4rem] font-semibold text-white opacity-0 transition-opacity group-hover/sw:opacity-100" style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(2px)" }}>
            {hex}
          </span>
        </button>
      ))}
    </div>
  );
}

function HarmonyCard({ def, harmonies, harmonies2, hasSecondary, isSelected, onSelect, copy }: {
  def: typeof HARMONY_DEFS[number];
  harmonies: HarmonySet;
  harmonies2?: HarmonySet;
  hasSecondary: boolean;
  isSelected: boolean;
  onSelect: () => void;
  copy: (text: string, label: string) => void;
}) {
  const accent = harmonies[def.key][0];
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border bg-card transition-[border-color,box-shadow] duration-150",
        isSelected
          ? "border-transparent shadow-[0_0_0_2px_var(--selected-ring)]"
          : "border-border/60 hover:border-border"
      )}
      style={{ "--selected-ring": accent } as React.CSSProperties}
    >
      <SwatchStrip colors={harmonies[def.key]} label={hasSecondary ? "primary" : undefined} copy={copy} />
      {hasSecondary && harmonies2 && (
        <SwatchStrip colors={harmonies2[def.key]} label="second" copy={copy} />
      )}
      <button
        onClick={onSelect}
        className="w-full p-4 text-left transition-colors hover:bg-muted/30"
      >
        <div className="mb-1 flex items-center justify-between">
          <p className="text-sm font-semibold">{def.title}</p>
          {isSelected && (
            <span className="rounded-full px-2 py-0.5 text-[0.5rem] font-bold uppercase tracking-widest text-white" style={{ background: accent }}>
              previewing
            </span>
          )}
        </div>
        <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{def.desc}</p>
        <div className="flex flex-wrap gap-1">
          {def.roles.map(r => (
            <span key={r} className="rounded-md bg-muted px-1.5 py-0.5 text-[0.5rem] font-bold uppercase tracking-widest text-muted-foreground">{r}</span>
          ))}
        </div>
      </button>
    </div>
  );
}

function PickerBlock({ label, hex, onChange, onRemove }: {
  label: string;
  hex: string;
  onChange: (v: string) => void;
  onRemove?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function down(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", down);
    return () => document.removeEventListener("mousedown", down);
  }, [open]);

  return (
    <div ref={containerRef} className="relative flex flex-col gap-2.5">
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>

      {/* Color square + remove overlay */}
      <div className="relative w-fit">
        <button
          onClick={() => setOpen(o => !o)}
          className={cn(
            "relative h-[120px] w-[120px] overflow-hidden rounded-2xl border border-border/60 transition-[box-shadow]",
            open
              ? "shadow-[0_0_0_2px_rgba(0,0,0,0.2)] dark:shadow-[0_0_0_2px_rgba(255,255,255,0.25)]"
              : "hover:shadow-[0_0_0_2px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_0_0_2px_rgba(255,255,255,0.15)]"
          )}
          style={{ background: hex }}
        >
          <div className="absolute inset-x-0 bottom-0 px-2.5 py-2 font-mono text-[0.625rem] font-semibold text-white" style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}>
            {hex}
          </div>
        </button>

        {onRemove && (
          <button
            onClick={onRemove}
            title="Remove"
            className="group/rm absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-red-500/60 bg-black shadow-[0_0_6px_rgba(239,68,68,0.3)] transition-all duration-150 hover:border-red-500 hover:bg-red-500 hover:shadow-none"
          >
            <svg
              width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24"
              className="text-red-500 drop-shadow-[0_0_4px_rgba(239,68,68,0.9)] transition-all duration-150 group-hover/rm:text-white group-hover/rm:drop-shadow-none"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {open && (
        <ColorPickerPopup
          hex={hex}
          onChange={onChange}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

function HarmonyPanel({ copy }: { copy: (text: string, label: string) => void }) {
  const [primaryHex, setPrimaryHex]     = useState("#6366f1");
  const [secondaryHex, setSecondaryHex] = useState("#f97316");
  const [hasSecondary, setHasSecondary] = useState(false);
  const [selectedKey, setSelectedKey]   = useState<HarmonyKey | null>(null);

  const [h, s, l]    = useMemo(() => hexToHSL(primaryHex),   [primaryHex]);
  const [h2, s2, l2] = useMemo(() => hexToHSL(secondaryHex), [secondaryHex]);
  const harmonies     = useMemo(() => buildHarmonies(h,  s,  l),  [h, s, l]);
  const harmonies2    = useMemo(() => buildHarmonies(h2, s2, l2), [h2, s2, l2]);

  const relationship = useMemo(() => {
    if (!hasSecondary) return null;
    return detectRelationship(h, h2);
  }, [h, h2, hasSecondary]);

  // Preview colors — driven by selected harmony card
  const previewAccent = useMemo(() => {
    if (!selectedKey) return primaryHex;
    // Neutral: light→dark scale; use darkest as accent so buttons/title bar are legible
    if (selectedKey === "neutral") return harmonies.neutral[4];
    // Monochromatic: [0] is lightest (+35L), [2] is the original primary — use [2] as accent
    if (selectedKey === "monochromatic") return harmonies.monochromatic[2];
    return harmonies[selectedKey][0];
  }, [selectedKey, harmonies, primaryHex]);

  const previewSecond = useMemo(() => {
    if (hasSecondary) return secondaryHex;
    if (!selectedKey) return primaryHex;
    if (selectedKey === "neutral") return harmonies.neutral[3];
    if (selectedKey === "monochromatic") return harmonies.monochromatic[1];
    return harmonies[selectedKey][1] ?? harmonies[selectedKey][0];
  }, [selectedKey, harmonies, hasSecondary, secondaryHex, primaryHex]);

  const previewThird = useMemo(() => {
    if (!selectedKey) return null;
    if (selectedKey === "neutral") return harmonies.neutral[2];
    if (selectedKey === "monochromatic") return harmonies.monochromatic[3];
    return harmonies[selectedKey][2] ?? null;
  }, [selectedKey, harmonies]);

  const textOnAccent  = useMemo(() => contrastColor(previewAccent), [previewAccent]);
  const textOnSecond  = useMemo(() => contrastColor(previewSecond), [previewSecond]);
  const textOnThird   = useMemo(() => previewThird ? contrastColor(previewThird) : "#fff", [previewThird]);

  const neutralBg   = harmonies.neutral[0];
  // Auto-contrast: pick text from the opposite end of the neutral scale relative to the bg
  const neutralText = luminance(neutralBg) > 0.179 ? harmonies.neutral[4] : harmonies.neutral[1];

  return (
    <div>
      <p className="mb-8 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
        Pick your main brand color — or two. Seven harmony palettes are generated live using color theory math. Click any swatch to copy its hex.
      </p>

      {/* Pickers */}
      <div className="mb-8 flex flex-wrap items-start gap-5">
        <PickerBlock label="Primary color" hex={primaryHex} onChange={setPrimaryHex} />
        {hasSecondary ? (
          <PickerBlock
            label="Second color"
            hex={secondaryHex}
            onChange={setSecondaryHex}
            onRemove={() => setHasSecondary(false)}
          />
        ) : (
          <div className="flex flex-col gap-2.5">
            <label className="select-none text-xs font-semibold uppercase tracking-widest text-transparent">·</label>
            <button
              onClick={() => setHasSecondary(true)}
              className="flex h-[120px] w-[120px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border/60 text-sm font-medium text-muted-foreground transition-all hover:border-border hover:bg-muted hover:text-foreground"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
              Add second
            </button>
          </div>
        )}
      </div>

      {/* Relationship badge */}
      {relationship && (
        <div className="mb-8 flex w-fit items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm text-muted-foreground">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: relationship.dot }} />
          <strong className="text-foreground">{relationship.name}</strong>
          <span className="hidden sm:inline">— {relationship.desc}</span>
        </div>
      )}

      {/* Harmony cards */}
      <SectionLabel>Generated harmonies</SectionLabel>
      <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HARMONY_DEFS.map(def => (
          <HarmonyCard
            key={def.key}
            def={def}
            harmonies={harmonies}
            harmonies2={hasSecondary ? harmonies2 : undefined}
            hasSecondary={hasSecondary}
            isSelected={selectedKey === def.key}
            onSelect={() => setSelectedKey(k => k === def.key ? null : def.key)}
            copy={copy}
          />
        ))}
      </div>

      {/* Live preview */}
      <div className="mb-3 flex items-center justify-between">
        <SectionLabel>Live UI preview</SectionLabel>
        {selectedKey && (
          <span className="text-[0.6875rem] text-muted-foreground/60">
            Using <strong className="text-muted-foreground">{HARMONY_DEFS.find(d => d.key === selectedKey)?.title}</strong> · click card to deselect
          </span>
        )}
      </div>

      {/* Mini app mockup */}
      <div className="overflow-hidden rounded-2xl border border-border/60 transition-all duration-500" style={{ background: neutralBg }}>

        {/* Title bar */}
        <div
          className="flex h-9 items-center justify-between px-4 transition-colors duration-500"
          style={{ background: previewAccent }}
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[previewAccent, previewSecond, previewThird ?? neutralBg].map((c, i) => (
                <div key={i} className="h-2 w-2 rounded-full border border-white/20" style={{ background: `${textOnAccent}30` }} />
              ))}
            </div>
            <span className="text-[0.4375rem] font-bold uppercase tracking-widest" style={{ color: textOnAccent, opacity: 0.6 }}>Dashboard</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="rounded-full px-2 py-0.5 text-[0.4rem] font-bold uppercase tracking-wider" style={{ background: `${previewSecond}`, color: textOnSecond }}>
              Pro
            </span>
            <div className="h-4 w-4 rounded-full border border-white/30" style={{ background: `${textOnAccent}20` }} />
          </div>
        </div>

        {/* Body: sidebar + content */}
        <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[130px_1fr]">

          {/* Sidebar */}
          <div className="border-r p-3 transition-colors duration-500" style={{ borderColor: `${neutralText}12`, background: `${neutralBg}` }}>
            <p className="mb-2 px-1 text-[0.375rem] font-bold uppercase tracking-widest" style={{ color: neutralText, opacity: 0.35 }}>Menu</p>
            {[
              { label: "Overview", active: true },
              { label: "Projects",  active: false },
              { label: "Analytics", active: false },
              { label: "Settings",  active: false },
            ].map(({ label, active }) => (
              <div
                key={label}
                className="relative mb-0.5 flex items-center gap-1.5 overflow-hidden rounded-lg px-2 py-1.5 text-[0.5625rem] font-medium transition-colors duration-300"
                style={active
                  ? { background: `${previewAccent}18`, color: previewAccent }
                  : { color: neutralText, opacity: 0.5 }
                }
              >
                {active && <div className="absolute inset-y-1.5 left-0 w-[2px] rounded-full transition-colors duration-500" style={{ background: previewAccent }} />}
                <div className="h-1.5 w-1.5 shrink-0 rounded-sm transition-colors duration-500" style={{ background: active ? previewAccent : `${neutralText}40` }} />
                {label}
              </div>
            ))}

            {/* Secondary color promo card */}
            <div className="mt-3 rounded-xl p-2.5 transition-colors duration-500" style={{ background: `${previewSecond}18`, border: `1px solid ${previewSecond}30` }}>
              <p className="mb-0.5 text-[0.4375rem] font-bold uppercase tracking-widest transition-colors duration-500" style={{ color: previewSecond }}>Upgrade</p>
              <p className="mb-1.5 text-[0.5rem] leading-tight" style={{ color: neutralText, opacity: 0.6 }}>Unlock all features</p>
              <div
                className="rounded-md px-2 py-1 text-center text-[0.4375rem] font-bold transition-colors duration-500"
                style={{ background: previewSecond, color: textOnSecond }}
              >
                Go Pro
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="p-4 transition-colors duration-500">

            {/* Top bar */}
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-[0.6875rem] font-semibold" style={{ color: neutralText }}>Good morning, Alex</p>
                <p className="text-[0.5rem]" style={{ color: neutralText, opacity: 0.45 }}>3 tasks pending this week</p>
              </div>
              {/* PRIMARY CTA — highlighted with colored shadow */}
              <button
                className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-[0.5625rem] font-bold transition-all duration-500 active:scale-95"
                style={{
                  background: previewAccent,
                  color: textOnAccent,
                  boxShadow: `0 4px 16px ${previewAccent}60, 0 1px 3px ${previewAccent}40`,
                }}
              >
                <svg width="7" height="7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
                New task
              </button>
            </div>

            {/* Stat tiles — each uses a different harmony color */}
            <div className="mb-4 grid grid-cols-3 gap-2">
              {[
                { value: "47", label: "Done",    color: previewAccent,  text: textOnAccent  },
                { value: "12", label: "Review",  color: previewSecond,  text: textOnSecond  },
                { value: "8",  label: "Blocked", color: previewThird ?? `${neutralText}20`, text: previewThird ? textOnThird : neutralText },
              ].map(({ value, label, color, text }) => (
                <div
                  key={label}
                  className="rounded-xl p-2.5 transition-colors duration-500"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <p className="font-mono text-[0.875rem] font-bold leading-none transition-colors duration-500" style={{ color }}>{value}</p>
                  <p className="mt-0.5 text-[0.375rem] font-bold uppercase tracking-wider" style={{ color: neutralText, opacity: 0.45 }}>{label}</p>
                </div>
              ))}
            </div>

            {/* Progress bar — all harmony colors in one bar */}
            <div className="mb-4">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-[0.4375rem] font-bold uppercase tracking-widest" style={{ color: neutralText, opacity: 0.4 }}>Sprint progress</p>
                <p className="font-mono text-[0.5rem] font-semibold" style={{ color: neutralText, opacity: 0.6 }}>68%</p>
              </div>
              <div className="h-2 overflow-hidden rounded-full transition-colors duration-500" style={{ background: `${neutralText}12` }}>
                <div className="flex h-full transition-all duration-700">
                  <div className="transition-colors duration-500" style={{ width: "48%", background: previewAccent, borderRadius: "9999px 0 0 9999px" }} />
                  <div className="transition-colors duration-500" style={{ width: "20%", background: previewSecond }} />
                  {previewThird
                    ? <div className="transition-colors duration-500" style={{ width: "8%", background: previewThird, borderRadius: "0 9999px 9999px 0" }} />
                    : null
                  }
                </div>
              </div>
              <div className="mt-1.5 flex items-center gap-3">
                {[
                  { label: "Primary",   color: previewAccent },
                  { label: "Secondary", color: previewSecond },
                  ...(previewThird ? [{ label: "Tertiary", color: previewThird }] : []),
                ].map(({ label, color }) => (
                  <div key={label} className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-500" style={{ background: color }} />
                    <span className="text-[0.375rem] font-medium" style={{ color: neutralText, opacity: 0.5 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions row */}
            <div className="flex items-center gap-2">
              <button
                className="flex-1 rounded-xl py-2 text-[0.5625rem] font-bold transition-all duration-500 active:scale-[0.97]"
                style={{
                  background: previewAccent,
                  color: textOnAccent,
                  boxShadow: `0 4px 14px ${previewAccent}55`,
                }}
              >
                Confirm
              </button>
              <button
                className="flex-1 rounded-xl py-2 text-[0.5625rem] font-semibold transition-all duration-500"
                style={{ color: previewSecond, border: `1.5px solid ${previewSecond}`, background: "transparent" }}
              >
                Cancel
              </button>
              {previewThird && (
                <button
                  className="rounded-xl px-3 py-2 text-[0.5625rem] font-semibold transition-all duration-500"
                  style={{ background: `${previewThird}20`, color: previewThird, border: `1px solid ${previewThird}40` }}
                >
                  More
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footer neutral strip */}
        <div className="flex items-center gap-2 border-t px-4 py-2 transition-colors duration-500" style={{ borderColor: `${neutralText}10`, background: `${neutralText}06` }}>
          <span className="text-[0.375rem] font-bold uppercase tracking-widest" style={{ color: neutralText, opacity: 0.3 }}>Neutral scale</span>
          <div className="flex flex-1 gap-[2px]">
            {harmonies.neutral.map((c, i) => (
              <button
                key={i}
                onClick={() => copy(c, `Copied ${c}`)}
                title={c}
                className="h-3 flex-1 rounded-sm transition-[flex] duration-200 hover:flex-[1.6]"
                style={{ background: c }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Collection Panel ─────────────────────────────────────────────────────────

const COLL_FILTERS: { value: CollFilter; label: string }[] = [
  { value: "all",        label: "All"        },
  { value: "ai",         label: "AI & LLM"   },
  { value: "developer",  label: "Developer"  },
  { value: "design",     label: "Design"     },
  { value: "fintech",    label: "Fintech"    },
  { value: "consumer",   label: "Consumer"   },
  { value: "automotive", label: "Automotive" },
  { value: "saas",       label: "SaaS"       },
];

function BrandCard({ brand: b, copy }: { brand: Brand; copy: (t: string, l: string) => void }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { copy(b.hexes.join(", "), "Brand palette copied"); setCopied(true); setTimeout(() => setCopied(false), 1400); }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card text-left transition-all duration-200 hover:border-border hover:-translate-y-0.5 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]"
    >
      <div className="flex h-16">
        {b.swatches.map((hex, i) => (
          <div key={i} className="flex-1 transition-[flex] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[&:hover]:flex-[2]" style={{ background: hex }} />
        ))}
      </div>
      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[0.9375rem] font-bold">{copied ? "Copied!" : b.name}</span>
          <span className="rounded-full bg-muted px-2 py-0.5 text-[0.5rem] font-bold uppercase tracking-widest text-muted-foreground">{b.catLabel}</span>
        </div>
        <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{b.principle}</p>
        <div className="flex flex-wrap gap-1">
          {b.hexes.map(hex => (
            <span key={hex} className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.5625rem] text-muted-foreground">{hex}</span>
          ))}
        </div>
      </div>
    </button>
  );
}

function CollectionPanel({ filter, setFilter, copy }: { filter: CollFilter; setFilter: (v: CollFilter) => void; copy: (t: string, l: string) => void }) {
  const visible = filter === "all" ? BRANDS : BRANDS.filter(b => b.cat.includes(filter));
  return (
    <div>
      <p className="mb-6 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
        Real color systems from{" "}
        <a href="https://github.com/voltagent/awesome-design-md" target="_blank" rel="noopener noreferrer" className="underline underline-offset-[3px] decoration-muted-foreground/40 hover:decoration-foreground/60 transition-colors">
          awesome-design-md
        </a>{" "}
        — 15 brands across AI, developer tools, design, fintech, consumer, and automotive.
      </p>
      <FilterPills options={COLL_FILTERS} active={filter} setActive={setFilter} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map(b => <BrandCard key={b.name} brand={b} copy={copy} />)}
      </div>
    </div>
  );
}

// ─── Overview Panel ───────────────────────────────────────────────────────────

const SAMPLE_HARMONIES: Record<HarmonyKey, string[]> = {
  monochromatic: ["hsl(239,84%,80%)","hsl(239,84%,68%)","hsl(239,84%,55%)","hsl(239,84%,42%)","hsl(239,84%,28%)"],
  complementary: ["hsl(239,84%,55%)","hsl(59,84%,55%)"],
  analogous:     ["hsl(209,84%,55%)","hsl(224,84%,55%)","hsl(239,84%,55%)","hsl(254,84%,55%)","hsl(269,84%,55%)"],
  triadic:       ["hsl(239,84%,55%)","hsl(359,84%,55%)","hsl(119,84%,55%)"],
  splitComp:     ["hsl(239,84%,55%)","hsl(29,84%,55%)","hsl(89,84%,55%)"],
  tetradic:      ["hsl(239,84%,55%)","hsl(329,84%,55%)","hsl(59,84%,55%)","hsl(149,84%,55%)"],
  neutral:       ["hsl(239,10%,92%)","hsl(239,12%,75%)","hsl(239,14%,55%)","hsl(239,16%,30%)","hsl(239,18%,12%)"],
};

function ExploreBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-2 rounded-lg border border-violet-500/40 bg-violet-500/[0.08] px-4 py-2 text-[0.8125rem] font-semibold text-violet-600 transition-all duration-200 hover:border-violet-500/70 hover:bg-violet-500/[0.14] hover:text-violet-700 active:scale-[0.98] dark:text-violet-400 dark:hover:text-violet-300"
    >
      Explore
      <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
    </button>
  );
}

function OverviewPanel() {
  const router   = useRouter();
  const pathname = usePathname();
  const go = (tab: string) => router.push(`${pathname}?tab=${tab}`, { scroll: false });

  const [demoColor, setDemoColor] = useState("#6366f1");
  const [demoH, demoS, demoL]    = useMemo(() => hexToHSL(demoColor), [demoColor]);
  const demoHarmonies             = useMemo(() => buildHarmonies(demoH, demoS, demoL), [demoH, demoS, demoL]);

  const availableStyles = STYLE_PALETTES.filter(s => s.status === "available");
  const CHART_VARS = ["var(--chart-1)","var(--chart-2)","var(--chart-3)","var(--chart-4)","var(--chart-5)"];

  return (
    <div className="space-y-20 pb-8">

      {/* ── 1. Welcome ─────────────────────────────────────────── */}
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-[3fr_2fr]">
        <div>
          <p className="mb-4 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground/40">Color system</p>
          <h2 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-foreground">
            Five tools.<br />One palette.
          </h2>
          <p className="max-w-[48ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
            Semantic tokens that resolve across themes, a live harmony generator, eight style personalities, curated palettes from well-known design systems, and fifteen real brand color systems — all in one place.
          </p>
        </div>
        <div className="space-y-5 lg:border-l lg:border-border/20 lg:pl-10">
          <div>
            <p className="mb-2.5 text-[0.625rem] font-bold uppercase tracking-widest text-muted-foreground/30">Tokens</p>
            <div className="flex gap-2">
              {["var(--primary)","var(--secondary)","var(--accent)","var(--destructive)","var(--muted-foreground)","var(--border)"].map((v, i) => (
                <div key={i} className="h-5 w-5 rounded-full border border-border/40" style={{ background: v }} />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2.5 text-[0.625rem] font-bold uppercase tracking-widest text-muted-foreground/30">Harmonies</p>
            <div className="space-y-1.5">
              {(["monochromatic","complementary","analogous","triadic"] as const).map(k => (
                <div key={k} className="flex gap-1">
                  {SAMPLE_HARMONIES[k].map((c, i) => (
                    <div key={i} className="h-6 flex-1 rounded-sm border border-border/25 shadow-[0_2px_5px_rgba(0,0,0,0.22)]" style={{ background: c }} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2.5 text-[0.625rem] font-bold uppercase tracking-widest text-muted-foreground/30">Styles</p>
            <div className="space-y-1.5">
              {STYLE_PALETTES.slice(0, 3).map(s => (
                <div key={s.key} className="flex gap-1">
                  {s.palette.map((c, i) => (
                    <div key={i} className="h-6 flex-1 rounded-sm border border-border/25 shadow-[0_2px_5px_rgba(0,0,0,0.22)]" style={{ background: c }} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Base Tokens ──────────────────────────────────────── */}
      <section className="border-t border-border/20 pt-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr]">
          <div>
            <p className="mb-4 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground/40">Base tokens</p>
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground">21 CSS custom properties</h3>
            <p className="mb-6 max-w-[38ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
              Built on oklch for perceptual uniformity. Semantic names map to roles — not raw values — so they resolve correctly in light and dark mode automatically.
            </p>
            <div className="mb-8 flex gap-6 text-[0.875rem] text-muted-foreground/40">
              <span><strong className="font-semibold text-foreground/50">5</strong> groups</span>
              <span><strong className="font-semibold text-foreground/50">21</strong> tokens</span>
              <span><strong className="font-semibold text-foreground/50">oklch</strong>-based</span>
              <span><strong className="font-semibold text-foreground/50">auto</strong> dark/light</span>
            </div>
            <ExploreBtn onClick={() => go("base")} />
          </div>
          <div className="rounded-2xl border border-border/40 bg-card/20 p-6">
            <div className="space-y-5">
              {TOKEN_GROUPS.map(({ title, tokens }) => (
                <div key={title}>
                  <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground/45">{title}</p>
                  {title === "Charts" ? (
                    <div className="flex items-center gap-2">
                      {CHART_VARS.map((v, i) => (
                        <div key={i} className="h-4 w-4 rounded-full border border-border/40 shadow-sm" style={{ background: v }} />
                      ))}
                      <span className="ml-1 font-mono text-xs text-muted-foreground/45">chart-1 → chart-5</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {tokens.slice(0, 2).map(t => (
                        <div key={t.var} className="flex items-center gap-2.5">
                          <div className="h-4 w-4 shrink-0 rounded-full border border-border/40 shadow-sm" style={{ background: `var(${t.var})` }} />
                          <span className="w-48 shrink-0 font-mono text-xs text-muted-foreground/60">{t.var}</span>
                          <span className="truncate text-xs text-muted-foreground/40">{t.description}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Your Colors ──────────────────────────────────────── */}
      <section className="border-t border-border/20 pt-14">
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[3fr_1fr]">
          <div>
            <p className="mb-4 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground/40">Your colors</p>
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground">One color. Seven harmony systems.</h3>
            <p className="max-w-[50ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
              Pick any hex — the math builds complementary, analogous, triadic, and four more palettes in real time. Try it below and watch the strips update live.
            </p>
          </div>
          <div className="flex items-end lg:justify-end">
            <ExploreBtn onClick={() => go("maincolor")} />
          </div>
        </div>
        <div className="mb-8 flex items-center gap-4">
          <label className="group flex cursor-pointer items-center gap-3.5">
            <div
              className="relative h-11 w-11 overflow-hidden rounded-xl border border-border/60 shadow-sm transition-all duration-200 group-hover:border-border"
              style={{ background: demoColor }}
            >
              <input
                type="color"
                value={demoColor}
                onChange={e => setDemoColor(e.target.value)}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
            </div>
            <div>
              <p className="font-mono text-sm font-semibold tracking-wide text-foreground">{demoColor.toUpperCase()}</p>
              <p className="text-[0.6875rem] text-muted-foreground/40">Click swatch to pick a color</p>
            </div>
          </label>
        </div>
        <div className="space-y-2.5">
          {HARMONY_DEFS.map(hd => (
            <div key={hd.key} className="flex items-center gap-5">
              <span className="w-40 shrink-0 text-[0.6875rem] font-medium text-muted-foreground/60">{hd.title}</span>
              <div className="flex flex-1 gap-1.5">
                {demoHarmonies[hd.key].map((c, i) => (
                  <div key={i} className="h-9 flex-1 rounded-xl border border-border/25 shadow-[0_2px_6px_rgba(0,0,0,0.22)] transition-colors duration-300" style={{ background: c }} />
                ))}
              </div>
              <span className="hidden w-44 shrink-0 text-right text-[0.625rem] text-muted-foreground/30 lg:block">
                {hd.roles.slice(0, 2).join(" · ")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Style Palettes ───────────────────────────────────── */}
      <section className="border-t border-border/20 pt-14">
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[3fr_1fr]">
          <div>
            <p className="mb-4 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground/40">Style palettes</p>
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground">Eight personalities. One import.</h3>
            <p className="max-w-[50ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
              Each style is a complete Tailwind configuration. Swap it in and every component updates automatically — no token-hunting required.
            </p>
          </div>
          <div className="flex items-end lg:justify-end">
            <ExploreBtn onClick={() => go("styles")} />
          </div>
        </div>
        <div className="space-y-2">
          {availableStyles.map(s => (
            <div key={s.key} className="flex items-center gap-5 rounded-xl border border-border/30 bg-card/20 px-4 py-3">
              <div className="w-40 shrink-0">
                <div className="mb-0.5 flex items-center gap-2">
                  <div className="h-2 w-2 shrink-0 rounded-full" style={{ background: s.accent }} />
                  <span className="text-[0.8125rem] font-semibold text-foreground">{s.name}</span>
                </div>
                <p className="pl-4 text-xs text-muted-foreground/45">{s.tagline}</p>
              </div>
              <div className="flex flex-1 gap-1.5">
                {s.palette.map((c, i) => (
                  <div key={i} className="h-8 flex-1 rounded-sm border border shadow-[0_2px_5px_rgba(0,0,0,0.2)]" style={{ background: c }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Inspiration + Collection ─────────────────────────── */}
      <section className="border-t border-border/20 pt-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

          {/* Inspiration */}
          <div>
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground/40">Inspiration</p>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">Real systems, curated.</h3>
              </div>
              <ExploreBtn onClick={() => go("inspiration")} />
            </div>
            <p className="mb-8 text-[0.9375rem] leading-relaxed text-muted-foreground">
              12 palettes from Vercel, Linear, Nord, Dracula, and more — filterable by mood: dark, warm, vibrant, minimal, cool.
            </p>
            <div className="space-y-4">
              {INSPIRATION_PALETTES.slice(0, 4).map(p => (
                <div key={p.name}>
                  <div className="mb-1.5 flex items-center gap-3">
                    <span className="w-32 shrink-0 text-[0.8125rem] font-semibold text-foreground/70">{p.name}</span>
                    <div className="flex flex-1 overflow-hidden rounded-md border border-border/30 shadow-[0_1px_4px_rgba(0,0,0,0.18)]">
                      {p.swatches.map((c, i) => (
                        <div key={i} className="h-5 flex-1" style={{ background: c }} />
                      ))}
                    </div>
                    <span className="hidden w-24 shrink-0 text-right text-xs text-muted-foreground/45 sm:block">{p.tag}</span>
                  </div>
                  <p className="truncate pl-[8.5rem] text-xs leading-relaxed text-muted-foreground/50">{p.desc}</p>
                </div>
              ))}
              <p className="pt-1 text-xs text-muted-foreground/35">+8 more palettes inside</p>
            </div>
          </div>

          {/* Collection */}
          <div className="md:border-l md:border-border/20 md:pl-10">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground/40">Collection</p>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">Fifteen brands, studied.</h3>
              </div>
              <ExploreBtn onClick={() => go("collection")} />
            </div>
            <p className="mb-8 text-[0.9375rem] leading-relaxed text-muted-foreground">
              Color systems from Claude, Linear, Figma, Stripe, Spotify, Apple, and more — each with its defining design principle.
            </p>
            <div className="space-y-4">
              {BRANDS.slice(0, 6).map(b => (
                <div key={b.name}>
                  <div className="mb-1 flex items-center gap-2.5">
                    <div className="h-3.5 w-3.5 shrink-0 rounded-full border border-border/40 shadow-sm" style={{ background: b.swatches[1] ?? b.swatches[0] }} />
                    <span className="w-20 shrink-0 text-[0.8125rem] font-semibold text-foreground/70">{b.name}</span>
                    <span className="text-xs text-muted-foreground/45">{b.catLabel}</span>
                  </div>
                  <p className="truncate pl-6 text-xs leading-relaxed text-muted-foreground/50">{b.principle}</p>
                </div>
              ))}
              <p className="pt-1 text-xs text-muted-foreground/35">+9 more brands inside</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

function ColorExplorerInner() {
  const searchParams = useSearchParams();
  const activeTab    = (searchParams.get("tab") as Tab) ?? "overview";

  const [toast, setToast]           = useState<string | null>(null);
  const toastTimer                  = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [inspFilter, setInspFilter] = useState<InspFilter>("all");
  const [collFilter, setCollFilter] = useState<CollFilter>("all");

  const copy = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setToast(label);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1800);
  }, []);

  return (
    <div className="px-8 py-10">
      {/* Page header */}
      <div className="mb-10">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">Colors</h1>
        <p className="text-[0.9375rem] text-muted-foreground">
          Semantic tokens, style palettes, curated inspiration, a live harmony tool, and a collection from 15 real design systems.
        </p>
      </div>

      {/* Tab content */}
      {activeTab === "overview"    && <OverviewPanel />}
      {activeTab === "base"        && <BasePanel copy={copy} />}
      {activeTab === "styles"      && <StylesPanel copy={copy} />}
      {activeTab === "inspiration" && <InspirationPanel filter={inspFilter} setFilter={setInspFilter} copy={copy} />}
      {activeTab === "maincolor"   && <HarmonyPanel copy={copy} />}
      {activeTab === "collection"  && <CollectionPanel filter={collFilter} setFilter={setCollFilter} copy={copy} />}

      {/* Toast */}
      <div
        role="status"
        aria-live="polite"
        className={cn(
          "pointer-events-none fixed bottom-6 right-6 z-50 rounded-xl px-4 py-2.5 text-sm font-medium shadow-lg",
          "bg-foreground text-background transition-all duration-200",
          toast ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        )}
      >
        {toast ?? ""}
      </div>
    </div>
  );
}

export function ColorExplorer() {
  return (
    <Suspense>
      <ColorExplorerInner />
    </Suspense>
  );
}
