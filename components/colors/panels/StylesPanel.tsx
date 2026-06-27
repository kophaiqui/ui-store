"use client";

import { useState, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { STYLE_PALETTES, PALETTE_ROLES } from "@/lib/colors/utils";
import { SectionLabel } from "@/components/colors/shared/SectionLabel";

export function StylesPanel() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const available = STYLE_PALETTES.filter(s => s.status === "available");
  const soon      = STYLE_PALETTES.filter(s => s.status === "coming-soon");

  const copy = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setToast(label);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1800);
  }, []);

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
            <div>
              <div className="mb-0.5 flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: style.accent }} />
                <span className="text-[0.9375rem] font-semibold">{style.name}</span>
              </div>
              <p className="text-xs text-muted-foreground">{style.tagline}</p>
            </div>

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
