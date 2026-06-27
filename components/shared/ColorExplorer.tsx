"use client";

import { useState, useMemo, useCallback, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = "base" | "styles" | "inspiration" | "maincolor" | "collection";
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
    neutral:       [hslToHex(h,5,96),hslToHex(h,5,80),hslToHex(h,4,55),hslToHex(h,5,30),hslToHex(h,5,12)],
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

      {/* Token groups */}
      {TOKEN_GROUPS.map(group => (
        <div key={group.title} className="mb-10">
          <SectionLabel>{group.title}</SectionLabel>
          <div
            className="overflow-hidden rounded-2xl border border-border/60 bg-border/60"
            style={{ display: "grid", gridTemplateColumns: `repeat(${group.tokens.length}, 1fr)`, gap: "1px" }}
          >
            {group.tokens.map(token => (
              <button
                key={token.var}
                onClick={() => copy(`var(${token.var})`, `Copied var(${token.var})`)}
                className="group flex flex-col bg-card text-left transition-colors duration-150 hover:bg-muted/50 active:scale-[0.99]"
              >
                <div
                  className="relative h-[68px] border-b border-border/40"
                  style={{
                    background: `var(${token.var})`,
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
            ))}
          </div>
        </div>
      ))}

      {/* Charts band */}
      <SectionLabel>Charts</SectionLabel>
      <div className="flex h-[68px] overflow-hidden rounded-2xl border border-border/60" style={{ gap: "1px", background: "rgba(128,128,128,0.18)" }}>
        {CHART_SWATCHES.map(s => (
          <button
            key={s.var}
            onClick={() => copy(`var(${s.var})`, `Copied var(${s.var})`)}
            className="group flex flex-1 items-end px-3 pb-2.5 transition-[flex] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:flex-[2.2]"
            style={{ background: s.bg }}
          >
            <span className="font-mono text-[0.5rem] font-bold uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-60" style={{ color: s.dark ? "#fff" : "#000" }}>
              {s.var}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Styles Panel ─────────────────────────────────────────────────────────────

function StylesPanel() {
  const available = STYLE_PALETTES.filter(s => s.status === "available");
  const soon      = STYLE_PALETTES.filter(s => s.status === "coming-soon");

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
            className="group grid grid-cols-[1fr_auto_100px] items-center gap-6 bg-card px-5 py-4 transition-colors hover:bg-muted/40 sm:grid-cols-[200px_1fr_100px]"
          >
            <div>
              <div className="mb-0.5 flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: style.accent }} />
                <span className="text-[0.9375rem] font-semibold">{style.name}</span>
              </div>
              <p className="text-xs text-muted-foreground">{style.tagline}</p>
            </div>
            <div className="hidden h-6 gap-[3px] sm:flex">
              {style.palette.map((color, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-transform duration-200 group-hover:scale-y-[1.4]"
                  style={{ background: color, transformOrigin: "bottom" }}
                />
              ))}
            </div>
            <div className="text-right">
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[0.5625rem] font-bold uppercase tracking-widest text-emerald-500">
                Available
              </span>
            </div>
          </div>
        ))}
      </div>

      <SectionLabel>Coming soon</SectionLabel>
      <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-border/60 opacity-40 select-none pointer-events-none">
        {soon.map(style => (
          <div key={style.key} className="grid grid-cols-[1fr_auto_100px] items-center gap-6 bg-card px-5 py-4 sm:grid-cols-[200px_1fr_100px]">
            <div>
              <div className="mb-0.5 flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: style.accent }} />
                <span className="text-[0.9375rem] font-semibold">{style.name}</span>
              </div>
              <p className="text-xs text-muted-foreground">{style.tagline}</p>
            </div>
            <div className="hidden h-6 gap-[3px] sm:flex">
              {style.palette.map((color, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ background: color }} />
              ))}
            </div>
            <div className="text-right">
              <span className="rounded-full bg-muted px-2.5 py-1 text-[0.5625rem] font-bold uppercase tracking-widest text-muted-foreground">
                Soon
              </span>
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

function PickerBlock({
  label, hex, inputVal, onPickerChange, onInputChange, onBlur, action,
}: {
  label: string; hex: string; inputVal: string;
  onPickerChange: (v: string) => void; onInputChange: (v: string) => void;
  onBlur: () => void; action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}{action}
      </label>
      <div
        className="relative h-[120px] w-[120px] cursor-pointer overflow-hidden rounded-2xl border border-border/60 transition-[box-shadow] hover:shadow-[0_0_0_2px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_0_2px_rgba(255,255,255,0.2)]"
        style={{ background: hex }}
      >
        <input type="color" value={hex} onChange={e => onPickerChange(e.target.value)} className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
        <div className="absolute inset-x-0 bottom-0 px-2.5 py-2 font-mono text-[0.625rem] font-semibold text-white" style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}>
          {hex}
        </div>
      </div>
      <input
        type="text" value={inputVal} onChange={e => onInputChange(e.target.value)} onBlur={onBlur} maxLength={7}
        className="w-[120px] rounded-xl border border-border/60 bg-card px-3 py-2 font-mono text-sm text-foreground outline-none transition-colors focus:border-foreground/30"
      />
    </div>
  );
}

function HarmonyPanel({ copy }: { copy: (text: string, label: string) => void }) {
  const [primaryHex, setPrimaryHex]       = useState("#6366f1");
  const [secondaryHex, setSecondaryHex]   = useState("#f97316");
  const [hasSecondary, setHasSecondary]   = useState(false);
  const [primaryInput, setPrimaryInput]   = useState("#6366f1");
  const [secondaryInput, setSecondaryInput] = useState("#f97316");

  const [h, s, l] = useMemo(() => hexToHSL(primaryHex), [primaryHex]);
  const harmonies  = useMemo(() => buildHarmonies(h, s, l), [h, s, l]);
  const relationship = useMemo(() => {
    if (!hasSecondary) return null;
    const [h2] = hexToHSL(secondaryHex);
    return detectRelationship(h, h2);
  }, [h, hasSecondary, secondaryHex]);

  const lightened    = useMemo(() => hslToHex(h, s, Math.min(l + 30, 92)), [h, s, l]);
  const darkened     = useMemo(() => hslToHex(h, s, Math.max(l - 25, 8)), [h, s, l]);
  const textOnPrimary = useMemo(() => contrastColor(primaryHex), [primaryHex]);
  const neutralBg    = harmonies.neutral[0];
  const neutralText  = harmonies.neutral[3];

  function applyHex(n: 1 | 2, raw: string) {
    let v = raw.trim();
    if (!v.startsWith("#")) v = "#" + v;
    if (/^#[0-9a-fA-F]{6}$/.test(v)) {
      if (n === 1) { setPrimaryHex(v); setPrimaryInput(v); }
      else         { setSecondaryHex(v); setSecondaryInput(v); }
    } else {
      if (n === 1) setPrimaryInput(primaryHex);
      else         setSecondaryInput(secondaryHex);
    }
  }

  return (
    <div>
      <p className="mb-8 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
        Pick your main brand color — or two. Seven harmony palettes are generated live using color theory math. Click any swatch to copy its hex.
      </p>

      {/* Pickers */}
      <div className="mb-8 flex flex-wrap items-start gap-5">
        <PickerBlock label="Primary color" hex={primaryHex} inputVal={primaryInput}
          onPickerChange={v => { setPrimaryHex(v); setPrimaryInput(v); }}
          onInputChange={v => setPrimaryInput(v)} onBlur={() => applyHex(1, primaryInput)} />
        {hasSecondary ? (
          <PickerBlock label="Second color" hex={secondaryHex} inputVal={secondaryInput}
            onPickerChange={v => { setSecondaryHex(v); setSecondaryInput(v); }}
            onInputChange={v => setSecondaryInput(v)} onBlur={() => applyHex(2, secondaryInput)}
            action={
              <button onClick={() => setHasSecondary(false)} className="ml-auto text-[0.625rem] text-muted-foreground/40 hover:text-muted-foreground transition-colors">
                remove
              </button>
            } />
        ) : (
          <div className="flex flex-col gap-2.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-transparent select-none">·</label>
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
          <div key={def.key} className="overflow-hidden rounded-2xl border border-border/60 bg-card">
            <div className="flex h-12">
              {harmonies[def.key].map((hex, i) => (
                <button
                  key={i}
                  onClick={() => copy(hex, `Copied ${hex}`)}
                  className="group/sw relative flex-1 transition-[flex] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:flex-[2]"
                  style={{ background: hex }} title={hex}
                >
                  <span className="absolute inset-x-0 bottom-0 py-1 text-center font-mono text-[0.4375rem] font-semibold text-white opacity-0 transition-opacity group-hover/sw:opacity-100" style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(2px)" }}>
                    {hex}
                  </span>
                </button>
              ))}
            </div>
            <div className="p-4">
              <p className="mb-1 text-sm font-semibold">{def.title}</p>
              <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{def.desc}</p>
              <div className="flex flex-wrap gap-1">
                {def.roles.map(r => (
                  <span key={r} className="rounded-md bg-muted px-1.5 py-0.5 text-[0.5rem] font-bold uppercase tracking-widest text-muted-foreground">{r}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Live preview */}
      <SectionLabel>Live UI preview</SectionLabel>
      <div className="grid grid-cols-1 gap-[1px] overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-3">
        {/* Buttons + badges */}
        <div className="flex flex-col gap-3 bg-card p-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Actions</span>
          <button className="flex w-full items-center justify-center rounded-xl py-2.5 text-sm font-semibold transition-transform active:scale-[0.98]" style={{ background: primaryHex, color: textOnPrimary }}>
            Primary action
          </button>
          <button className="flex w-full items-center justify-center rounded-xl bg-transparent py-2.5 text-sm font-semibold transition-colors" style={{ color: primaryHex, border: `1.5px solid ${primaryHex}` }}>
            Secondary
          </button>
          <div className="flex gap-2">
            <span className="rounded-full px-2.5 py-0.5 text-xs font-semibold" style={{ background: primaryHex, color: textOnPrimary }}>New</span>
            <span className="rounded-full px-2.5 py-0.5 text-xs font-semibold" style={{ background: lightened, color: darkened }}>Active</span>
          </div>
        </div>

        {/* Card */}
        <div className="overflow-hidden bg-card">
          <div className="px-5 py-3" style={{ background: primaryHex }}>
            <span className="text-[0.5rem] font-bold uppercase tracking-widest" style={{ color: textOnPrimary, opacity: 0.7 }}>Feature</span>
          </div>
          <div className="p-5" style={{ background: neutralBg }}>
            <p className="mb-1.5 text-sm font-bold" style={{ color: neutralText }}>Card heading</p>
            <p className="text-xs leading-relaxed" style={{ color: neutralText, opacity: 0.65 }}>Supporting text describing this card in a brief, scannable way.</p>
          </div>
        </div>

        {/* Input + neutral */}
        <div className="flex flex-col gap-3 bg-card p-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Input</span>
          <input readOnly value="Focused input" className="w-full rounded-xl px-3 py-2 text-sm outline-none" style={{ borderWidth: "1.5px", borderStyle: "solid", borderColor: primaryHex, color: neutralText, background: neutralBg }} />
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 shrink-0 rounded-full" style={{ background: primaryHex, boxShadow: `0 0 0 3px ${primaryHex}35` }} />
            <span className="text-xs text-muted-foreground">Focus ring</span>
          </div>
          <div className="flex gap-[3px] mt-1">
            {harmonies.neutral.map((c, i) => (
              <button key={i} onClick={() => copy(c, `Copied ${c}`)} className="h-4 flex-1 rounded-sm transition-[flex] hover:flex-[1.6]" style={{ background: c }} title={c} />
            ))}
          </div>
          <span className="text-[0.5rem] font-bold uppercase tracking-widest text-muted-foreground/50">Neutral scale</span>
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

// ─── Main Export ──────────────────────────────────────────────────────────────

function ColorExplorerInner() {
  const searchParams = useSearchParams();
  const activeTab    = (searchParams.get("tab") as Tab) ?? "base";

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
      {activeTab === "base"        && <BasePanel copy={copy} />}
      {activeTab === "styles"      && <StylesPanel />}
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
