"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import {
  TOKEN_GROUPS,
  STYLE_PALETTES,
  INSPIRATION_PALETTES,
  BRANDS,
  HARMONY_DEFS,
  hexToHSL,
  buildHarmonies,
  type HarmonyKey,
} from "@/lib/colors/utils";

const SAMPLE_HARMONIES: Record<HarmonyKey, string[]> = {
  monochromatic: ["hsl(239,84%,80%)","hsl(239,84%,68%)","hsl(239,84%,55%)","hsl(239,84%,42%)","hsl(239,84%,28%)"],
  complementary: ["hsl(239,84%,55%)","hsl(59,84%,55%)"],
  analogous:     ["hsl(209,84%,55%)","hsl(224,84%,55%)","hsl(239,84%,55%)","hsl(254,84%,55%)","hsl(269,84%,55%)"],
  triadic:       ["hsl(239,84%,55%)","hsl(359,84%,55%)","hsl(119,84%,55%)"],
  splitComp:     ["hsl(239,84%,55%)","hsl(29,84%,55%)","hsl(89,84%,55%)"],
  tetradic:      ["hsl(239,84%,55%)","hsl(329,84%,55%)","hsl(59,84%,55%)","hsl(149,84%,55%)"],
  neutral:       ["hsl(239,10%,92%)","hsl(239,12%,75%)","hsl(239,14%,55%)","hsl(239,16%,30%)","hsl(239,18%,12%)"],
};

function ExploreBtn({ href }: { href: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className="group inline-flex items-center gap-2 rounded-lg border border-violet-500/40 bg-violet-500/[0.08] px-4 py-2 text-[0.8125rem] font-semibold text-violet-600 transition-all duration-200 hover:border-violet-500/70 hover:bg-violet-500/[0.14] hover:text-violet-700 active:scale-[0.98] dark:text-violet-400 dark:hover:text-violet-300"
    >
      Explore
      <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
    </button>
  );
}

export function OverviewPanel() {
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
            <ExploreBtn href="/colors/base" />
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
            <ExploreBtn href="/colors/maincolor" />
          </div>
        </div>
        <div className="mb-8 flex items-center gap-4">
          <label className="group flex cursor-pointer items-center gap-3.5">
            <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-border/60 shadow-sm transition-all duration-200 group-hover:border-border" style={{ background: demoColor }}>
              <input type="color" value={demoColor} onChange={e => setDemoColor(e.target.value)} className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
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
            <ExploreBtn href="/colors/styles" />
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
          <div>
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground/40">Inspiration</p>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">Real systems, curated.</h3>
              </div>
              <ExploreBtn href="/colors/inspiration" />
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

          <div className="md:border-l md:border-border/20 md:pl-10">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground/40">Collection</p>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">Fifteen brands, studied.</h3>
              </div>
              <ExploreBtn href="/colors/collection" />
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
