"use client";

import { motion } from "motion/react";

const STYLE_OPTIONS = ["default", "glass", "neobrutalism", "terminal", "flat"];

export function HeroShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="relative pb-16 pl-14 select-none hidden lg:block"
    >
      {/* ── Main card: browser-window mockup ── */}
      <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_24px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-[0_24px_64px_-16px_rgba(0,0,0,0.5)]">
        {/* Chrome bar */}
        <div className="flex items-center gap-3 border-b border-border/60 bg-muted/50 px-4 py-2.5">
          <div className="flex gap-1.5 shrink-0">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex flex-1 items-center gap-1.5 rounded-md border border-border/60 bg-background/60 px-2.5 py-1 text-[0.625rem] font-mono text-muted-foreground/60">
            <svg width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            that-one-ui / components / button
          </div>
        </div>

        {/* Component content */}
        <div className="p-5 space-y-3.5">
          {/* Section label */}
          <div className="flex items-center justify-between">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/40">
              Button
            </span>
            <div className="flex gap-1.5">
              <span className="rounded-full bg-violet-500/10 dark:bg-violet-400/15 px-2 py-0.5 text-[0.5625rem] font-semibold text-violet-700 dark:text-violet-400">
                styleConfig
              </span>
              <span className="rounded-full bg-muted px-2 py-0.5 text-[0.5625rem] font-medium text-muted-foreground">
                inputs
              </span>
            </div>
          </div>

          {/* Button variants */}
          <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border/60 bg-background p-4">
            <button className="rounded-md bg-blue-600 dark:bg-blue-500 px-3.5 py-1.5 text-[0.6875rem] font-semibold text-white">
              Solid
            </button>
            <button className="rounded-md border border-blue-500/50 dark:border-blue-400/50 px-3.5 py-1.5 text-[0.6875rem] font-semibold text-blue-700 dark:text-blue-400">
              Outline
            </button>
            <button className="rounded-md px-3.5 py-1.5 text-[0.6875rem] font-semibold text-muted-foreground">
              Ghost
            </button>
            <button className="rounded-md bg-muted px-3.5 py-1.5 text-[0.6875rem] font-semibold text-foreground">
              Secondary
            </button>
          </div>

          {/* Badge variants */}
          <div className="flex flex-wrap gap-2 rounded-xl border border-border/60 bg-background p-3.5">
            <span className="rounded-full bg-violet-500/10 dark:bg-violet-400/15 px-2.5 py-0.5 text-[0.625rem] font-medium text-violet-700 dark:text-violet-400">
              Highlight
            </span>
            <span className="rounded-full bg-blue-500/10 dark:bg-blue-400/15 px-2.5 py-0.5 text-[0.625rem] font-medium text-blue-700 dark:text-blue-400">
              Active
            </span>
            <span className="rounded-full bg-emerald-500/10 dark:bg-emerald-400/15 px-2.5 py-0.5 text-[0.625rem] font-medium text-emerald-700 dark:text-emerald-400">
              Live
            </span>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-[0.625rem] font-medium text-muted-foreground">
              Default
            </span>
          </div>

          {/* Checkbox group */}
          <div className="rounded-xl border border-border/60 bg-background p-3.5 space-y-2">
            {[
              { label: "Accessible by default", checked: true },
              { label: "Props override everything", checked: true },
              { label: "Style without touching logic", checked: false },
            ].map(({ label, checked }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div
                  className={`h-3.5 w-3.5 shrink-0 rounded flex items-center justify-center border ${
                    checked
                      ? "bg-blue-600 dark:bg-blue-500 border-blue-600 dark:border-blue-500"
                      : "border-border bg-background"
                  }`}
                >
                  {checked && (
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span className={`text-[0.625rem] ${checked ? "text-foreground" : "text-muted-foreground"}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Floating mini card: styleConfig picker ── */}
      <motion.div
        initial={{ opacity: 0, x: -12, y: 12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 w-48 overflow-hidden rounded-xl border border-border/70 bg-card shadow-[0_8px_24px_-6px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.4)]"
      >
        <div className="border-b border-border/60 bg-muted/50 px-3 py-2 text-[0.5625rem] font-semibold uppercase tracking-widest text-muted-foreground/50">
          Style
        </div>
        <div className="p-2.5 space-y-0.5">
          {STYLE_OPTIONS.map((style, i) => (
            <div
              key={style}
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${i === 0 ? "bg-violet-500/10 dark:bg-violet-400/15" : ""}`}
            >
              <div
                className={`h-1.5 w-1.5 rounded-full ${
                  i === 0
                    ? "bg-violet-600 dark:bg-violet-400"
                    : "bg-border"
                }`}
              />
              <span
                className={`font-mono text-[0.5625rem] ${
                  i === 0
                    ? "font-semibold text-violet-700 dark:text-violet-400"
                    : "text-muted-foreground"
                }`}
              >
                {style}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
