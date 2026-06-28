"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import type { FontMeta } from "@/lib/registry";

// ─── Types ────────────────────────────────────────────────────────────────────

type Props = {
  fonts: Record<string, FontMeta>;
  onSelect: (slug: string) => void;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const CATEGORY_ORDER = ["sans-serif", "serif", "display", "monospace", "handwriting"] as const;
type Category = (typeof CATEGORY_ORDER)[number];

const CATEGORY_META: Record<Category, { label: string; description: string; color: string }> = {
  "sans-serif":  { label: "Sans-serif",  description: "Clean, no-stroke endings. Optimized for screen and UI.",          color: "#6366f1" },
  serif:         { label: "Serif",        description: "Small strokes at letter ends. Classic, editorial, trustworthy.", color: "#f59e0b" },
  display:       { label: "Display",      description: "Bold personality. Built for headlines, not body copy.",           color: "#ef4444" },
  monospace:     { label: "Monospace",    description: "Fixed-width glyphs. Essential for code and tabular data.",        color: "#10b981" },
  handwriting:   { label: "Handwriting",  description: "Script or casual forms. Adds warmth and human character.",       color: "#ec4899" },
};

const SHOWCASE_FONTS: Record<Category, string> = {
  "sans-serif":  "inter",
  serif:         "playfair-display",
  display:       "oswald",
  monospace:     "jetbrains-mono",
  handwriting:   "dancing-script",
};

const PROP_DEMOS = [
  {
    label: "Weight",
    description: "Controls stroke thickness. Ranges from Thin (100) to Black (900).",
    render: () => (
      <div className="flex items-baseline gap-3">
        {[300, 400, 600, 800].map(w => (
          <span key={w} className="text-xl leading-none text-foreground" style={{ fontWeight: w }}>Ag</span>
        ))}
        <span className="text-[0.625rem] text-muted-foreground/40 self-end">300 → 800</span>
      </div>
    ),
  },
  {
    label: "Style",
    description: "Normal vs italic. True italic cuts are drawn differently — not just slanted.",
    render: () => (
      <div className="flex items-baseline gap-4">
        <span className="text-xl font-medium text-foreground" style={{ fontStyle: "normal" }}>Italic</span>
        <span className="text-xl font-medium text-foreground" style={{ fontStyle: "italic" }}>Italic</span>
        <span className="text-[0.625rem] text-muted-foreground/40 self-end">normal · italic</span>
      </div>
    ),
  },
  {
    label: "Tracking",
    description: "Letter spacing. Tight for headlines, wide for all-caps labels and badges.",
    render: () => (
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-foreground" style={{ letterSpacing: "-0.04em" }}>Tight headline</span>
        <span className="text-[0.625rem] font-bold uppercase text-muted-foreground/60" style={{ letterSpacing: "0.18em" }}>WIDE LABEL</span>
      </div>
    ),
  },
  {
    label: "Leading",
    description: "Line height. Body text needs ~1.5–1.6× for comfortable reading.",
    render: () => (
      <div className="flex gap-4">
        <div>
          <p className="text-[0.625rem] text-muted-foreground/40 mb-1">tight 1.2</p>
          <p className="text-xs text-foreground/80 max-w-[80px]" style={{ lineHeight: 1.2 }}>Stack of lines close together here</p>
        </div>
        <div>
          <p className="text-[0.625rem] text-muted-foreground/40 mb-1">loose 1.7</p>
          <p className="text-xs text-foreground/80 max-w-[80px]" style={{ lineHeight: 1.7 }}>Stack of lines with more room to breathe</p>
        </div>
      </div>
    ),
  },
  {
    label: "Category",
    description: "Five families: sans-serif, serif, display, monospace, handwriting. Each carries its own voice.",
    render: () => (
      <div className="flex flex-wrap gap-1.5">
        {Object.entries(CATEGORY_META).map(([key, { label, color }]) => (
          <span
            key={key}
            className="rounded-md px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-widest"
            style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
          >
            {label}
          </span>
        ))}
      </div>
    ),
  },
];

// ─── Showcase card ────────────────────────────────────────────────────────────

function ShowcaseCard({
  slug, meta, category, onSelect,
}: {
  slug: string;
  meta: FontMeta;
  category: Category;
  onSelect: (slug: string) => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const { color, label } = CATEGORY_META[category];
  const displayWeights = meta.weights.filter(w => [300, 400, 500, 600, 700, 800].includes(w)).slice(0, 5);

  useEffect(() => {
    const el = ref.current;
    if (!el || meta.source.provider !== "google") { setLoaded(true); return; }
    const existing = document.head.querySelector(`link[data-font="${meta.family}"]`);
    if (existing) { setLoaded(true); return; }
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const weights = meta.weights.join(";");
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(meta.family)}:wght@${weights}&display=swap`;
      link.setAttribute("data-font", meta.family);
      link.onload = () => setLoaded(true);
      document.head.appendChild(link);
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [meta.family, meta.weights, meta.source.provider]);

  return (
    <button
      ref={ref}
      onClick={() => onSelect(slug)}
      className="group flex flex-col gap-5 rounded-2xl border border-border/60 bg-card p-5 text-left transition-all duration-150 hover:border-border hover:bg-muted/20 active:scale-[0.99]"
    >
      {/* category badge */}
      <div className="flex items-center justify-between">
        <span
          className="rounded-md px-2 py-0.5 text-[0.5625rem] font-bold uppercase tracking-widest"
          style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
        >
          {label}
        </span>
        <span className="text-[0.5625rem] text-muted-foreground/30 uppercase tracking-widest">
          {meta.weights.length} weight{meta.weights.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* big name */}
      <div className={cn("transition-opacity duration-500", !loaded && "opacity-10")}>
        <p
          className="mb-1 truncate text-[2.25rem] leading-none"
          style={{ fontFamily: loaded ? `'${meta.family}', sans-serif` : "inherit", fontWeight: 700 }}
        >
          {meta.name}
        </p>
        <p
          className="text-sm text-muted-foreground/70 leading-relaxed"
          style={{ fontFamily: loaded ? `'${meta.family}', sans-serif` : "inherit", fontWeight: 400 }}
        >
          {meta.preview}
        </p>
      </div>

      {/* weight strip */}
      {displayWeights.length > 1 && (
        <div className={cn("flex items-baseline gap-3 transition-opacity duration-500", !loaded && "opacity-10")}>
          {displayWeights.map(w => (
            <span
              key={w}
              className="text-base leading-none text-foreground/80"
              style={{ fontFamily: loaded ? `'${meta.family}', sans-serif` : "inherit", fontWeight: w }}
            >
              Aa
            </span>
          ))}
        </div>
      )}

      {/* meta footer */}
      <div className="mt-auto flex items-center justify-between border-t border-border/40 pt-3">
        <p className="text-[0.6875rem] text-muted-foreground/50">{meta.designer}</p>
        <p className="text-[0.6875rem] text-muted-foreground/30">{meta.license}</p>
      </div>
    </button>
  );
}

// ─── Stat chip ────────────────────────────────────────────────────────────────

function Stat({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-2xl font-bold tracking-tight text-foreground">{value}</span>
      <span className="text-[0.75rem] text-muted-foreground/50">{label}</span>
    </div>
  );
}

// ─── Panel ────────────────────────────────────────────────────────────────────

export function TypoOverviewPanel({ fonts, onSelect }: Props) {
  const totalFonts = Object.keys(fonts).length;
  const countByCategory = Object.values(fonts).reduce<Record<string, number>>((acc, f) => {
    acc[f.category] = (acc[f.category] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div className="space-y-20 pb-8">

      {/* ── 1. Welcome ─────────────────────────────────────────── */}
      <section>
        <p className="mb-4 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground/40">Typography</p>
        <h2 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-foreground">
          Type that fits.<br />Installed in seconds.
        </h2>
        <p className="mb-10 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
          A curated library of {totalFonts} fonts — spanning editorial serifs, clean interfaces, expressive displays, developer-ready monospaces, and human handwriting styles. Every font is sourced from Google Fonts under an open license, ready to drop into any project.
        </p>

        <div className="flex flex-wrap gap-x-10 gap-y-6 rounded-2xl border border-border/60 bg-card/40 px-6 py-5">
          <Stat value={totalFonts} label="total fonts" />
          <div className="w-px self-stretch bg-border/40" />
          {CATEGORY_ORDER.map(cat => (
            <Stat key={cat} value={countByCategory[cat] ?? 0} label={CATEGORY_META[cat].label.toLowerCase()} />
          ))}
          <div className="w-px self-stretch bg-border/40" />
          <Stat value="OFL" label="open license" />
        </div>
      </section>

      {/* ── 2. Properties ──────────────────────────────────────── */}
      <section className="border-t border-border/20 pt-14">
        <p className="mb-3 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground/40">Font properties</p>
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-foreground">The controls behind every typeface</h3>
        <p className="mb-10 max-w-[50ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
          Five properties define how a font behaves in your UI. Understand them once and you can compose any typographic system.
        </p>

        <div className="grid grid-cols-1 gap-px bg-border/50 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-border/50">
          {PROP_DEMOS.map(({ label, description, render }) => (
            <div key={label} className="flex flex-col gap-4 bg-card p-5">
              <div>
                <p className="mb-1 text-[0.875rem] font-semibold text-foreground">{label}</p>
                <p className="text-[0.8125rem] leading-relaxed text-muted-foreground/70">{description}</p>
              </div>
              <div className="mt-auto rounded-xl border border-border/50 bg-background/50 px-4 py-3">
                {render()}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Showcase ────────────────────────────────────────── */}
      <section className="border-t border-border/20 pt-14">
        <p className="mb-3 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground/40">Showcase</p>
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-foreground">One font per category</h3>
        <p className="mb-10 max-w-[48ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
          Click any card to open the full specimen — weights, sizes, and a live text playground.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORY_ORDER.map(cat => {
            const slug = SHOWCASE_FONTS[cat];
            const meta = fonts[slug];
            if (!meta) return null;
            return (
              <ShowcaseCard key={cat} slug={slug} meta={meta} category={cat} onSelect={onSelect} />
            );
          })}
        </div>
      </section>

    </div>
  );
}
