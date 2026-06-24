"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { FontMeta } from "@/lib/registry";

const WEIGHT_LABELS: Record<number, string> = {
  100: "Thin",
  200: "Extra Light",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "Semi Bold",
  700: "Bold",
  800: "Extra Bold",
  900: "Black",
};

const SIZES = [12, 14, 16, 18, 24, 32, 48, 64];

type Controls = { lineHeight: number; letterSpacing: number };

type Props = {
  slug: string;
  meta: FontMeta;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

export function FontSpecimen({ slug, meta, isFavorite, onToggleFavorite }: Props) {
  const [activeWeight, setActiveWeight] = useState<number>(
    meta.weights.includes(400) ? 400 : meta.weights[Math.floor(meta.weights.length / 2)]
  );
  const [controls, setControls] = useState<Controls>({ lineHeight: 1.4, letterSpacing: 0 });
  const [loaded, setLoaded] = useState(false);
  const [copied, setCopied] = useState<"css" | "url" | null>(null);
  const [previewSize, setPreviewSize] = useState(64);

  useEffect(() => {
    setActiveWeight(
      meta.weights.includes(400) ? 400 : meta.weights[Math.floor(meta.weights.length / 2)]
    );
    setLoaded(false);
  }, [slug, meta.weights]);

  useEffect(() => {
    if (meta.source.provider !== "google") { setLoaded(true); return; }
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(meta.family)}:wght@${meta.weights.join(";")}&display=swap`;
    const existing = document.head.querySelector(`link[data-font="${meta.family}"]`);
    if (existing) { setLoaded(true); return; }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    link.setAttribute("data-font", meta.family);
    link.onload = () => setLoaded(true);
    document.head.appendChild(link);
  }, [meta.family, meta.weights, meta.source.provider]);

  const fontStyle = useCallback((weight?: number, size?: number): React.CSSProperties => ({
    fontFamily: loaded ? `'${meta.family}', sans-serif` : "inherit",
    fontWeight: weight ?? activeWeight,
    lineHeight: controls.lineHeight,
    letterSpacing: `${controls.letterSpacing}em`,
    transition: "font-weight 0.15s ease",
    ...(size ? { fontSize: `${size}px` } : {}),
  }), [loaded, meta.family, activeWeight, controls]);

  const copyCSS = async () => {
    await navigator.clipboard.writeText(`font-family: '${meta.family}', ${meta.category};`);
    setCopied("css");
    setTimeout(() => setCopied(null), 2000);
  };

  const copyURL = async () => {
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(meta.family)}:wght@${meta.weights.join(";")}&display=swap`;
    await navigator.clipboard.writeText(url);
    setCopied("url");
    setTimeout(() => setCopied(null), 2000);
  };

  const setControl = (key: keyof Controls, value: number) =>
    setControls((c) => ({ ...c, [key]: value }));

  return (
    <div className="flex min-h-full flex-col">
      {/* Sticky controls bar */}
      <div className="sticky top-0 z-10 border-b border-border/60 bg-background/95 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-3 px-8 py-3">
          {/* Font name + category */}
          <div className="mr-2">
            <span className="text-sm font-semibold text-foreground">{meta.name}</span>
            <span className="ml-2 text-xs capitalize text-muted-foreground">{meta.category}</span>
          </div>

          {/* Weight buttons */}
          <div className="flex flex-wrap gap-1" role="group" aria-label="Font weight">
            {meta.weights.map((w) => (
              <button
                key={w}
                onClick={() => setActiveWeight(w)}
                aria-pressed={activeWeight === w}
                className={cn(
                  "rounded-md border px-2.5 py-1 text-xs font-medium transition-colors duration-100",
                  activeWeight === w
                    ? "border-foreground bg-foreground text-background"
                    : "border-border/60 text-muted-foreground hover:border-border hover:text-foreground"
                )}
              >
                {w}
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-border/60" />

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={onToggleFavorite}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-md border transition-colors duration-100",
                isFavorite
                  ? "border-rose-400/60 bg-rose-50 text-rose-500 dark:bg-rose-500/10"
                  : "border-border/60 text-muted-foreground hover:border-border hover:text-foreground"
              )}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>

            <button
              onClick={copyCSS}
              aria-label="Copy CSS font-family"
              className="flex h-7 items-center gap-1.5 rounded-md border border-border/60 px-2.5 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
            >
              {copied === "css" ? (
                <><CheckIcon /> CSS</>
              ) : (
                <><CopyIcon /> CSS</>
              )}
            </button>

            <button
              onClick={copyURL}
              aria-label="Copy Google Fonts import URL"
              className="flex h-7 items-center gap-1.5 rounded-md border border-border/60 px-2.5 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
            >
              {copied === "url" ? (
                <><CheckIcon /> URL</>
              ) : (
                <><LinkIcon /> URL</>
              )}
            </button>

            <Link
              href={`/fonts/${slug}`}
              className="flex h-7 items-center gap-1.5 rounded-md border border-border/60 px-2.5 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
              aria-label="Open detail page"
            >
              <ExternalIcon />
              Detail
            </Link>
          </div>

          <div className="ml-auto flex items-center gap-4 text-xs text-muted-foreground">
            {/* Line height */}
            <label className="flex items-center gap-1.5">
              <span>Leading</span>
              <input
                type="range" min="1" max="2.5" step="0.1" value={controls.lineHeight}
                onChange={(e) => setControl("lineHeight", Number(e.target.value))}
                className="w-20 accent-foreground"
                aria-label="Line height"
              />
              <span className="w-6 font-mono">{controls.lineHeight}</span>
            </label>
            {/* Letter spacing */}
            <label className="flex items-center gap-1.5">
              <span>Spacing</span>
              <input
                type="range" min="-0.05" max="0.2" step="0.01" value={controls.letterSpacing}
                onChange={(e) => setControl("letterSpacing", Number(e.target.value))}
                className="w-20 accent-foreground"
                aria-label="Letter spacing"
              />
              <span className="w-8 font-mono">{controls.letterSpacing.toFixed(2)}</span>
            </label>
            {/* Preview size */}
            <label className="flex items-center gap-1.5">
              <span>Size</span>
              <input
                type="range" min="24" max="96" step="4" value={previewSize}
                onChange={(e) => setPreviewSize(Number(e.target.value))}
                className="w-20 accent-foreground"
                aria-label="Preview font size"
              />
              <span className="w-6 font-mono">{previewSize}</span>
            </label>
          </div>
        </div>
      </div>

      {/* Specimen body */}
      <div className="flex-1 px-8 py-12 space-y-14">

        {/* Hero */}
        <section aria-label="Hero preview">
          <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">Preview</p>
          <div className={cn("min-h-[120px] flex items-center", !loaded && "opacity-40")}>
            <p
              style={{ ...fontStyle(), fontSize: `clamp(40px, 5vw, ${previewSize}px)` }}
              className="text-foreground"
            >
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          {!loaded && <p className="mt-2 text-xs text-muted-foreground">Loading font…</p>}
        </section>

        <div className="h-px bg-border/40" />

        {/* Alphabet */}
        <section aria-label="Character set">
          <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">Characters</p>
          <div className="space-y-4">
            <div>
              <p className="mb-1 text-[0.625rem] uppercase tracking-widest text-muted-foreground/40">Uppercase</p>
              <p style={fontStyle(undefined, 28)} className="text-foreground leading-relaxed">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
            </div>
            <div>
              <p className="mb-1 text-[0.625rem] uppercase tracking-widest text-muted-foreground/40">Lowercase</p>
              <p style={fontStyle(undefined, 28)} className="text-foreground leading-relaxed">
                abcdefghijklmnopqrstuvwxyz
              </p>
            </div>
            <div>
              <p className="mb-1 text-[0.625rem] uppercase tracking-widest text-muted-foreground/40">Numbers</p>
              <p style={fontStyle(undefined, 28)} className="text-foreground leading-relaxed">
                0123456789
              </p>
            </div>
            <div>
              <p className="mb-1 text-[0.625rem] uppercase tracking-widest text-muted-foreground/40">Special Characters</p>
              <p style={fontStyle(undefined, 22)} className="text-foreground leading-relaxed">
                {"!@#$%^&*()_+-=[]{}|;:'\",.<>/?`~"}
              </p>
            </div>
            <div>
              <p className="mb-1 text-[0.625rem] uppercase tracking-widest text-muted-foreground/40">Extended Symbols</p>
              <p style={fontStyle(undefined, 22)} className="text-foreground leading-relaxed">
                © ® ™ € £ ¥ § ¶ † ‡ • …
              </p>
            </div>
          </div>
        </section>

        <div className="h-px bg-border/40" />

        {/* Weights */}
        <section aria-label="Font weights">
          <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">Weights</p>
          <div className="space-y-1">
            {meta.weights.map((w) => (
              <button
                key={w}
                onClick={() => setActiveWeight(w)}
                className={cn(
                  "group flex w-full items-baseline gap-5 rounded-lg px-4 py-2.5 text-left transition-colors duration-100",
                  activeWeight === w ? "bg-muted/60" : "hover:bg-muted/30"
                )}
                aria-pressed={activeWeight === w}
              >
                <span className="w-24 shrink-0 font-mono text-xs text-muted-foreground">
                  {w} · {WEIGHT_LABELS[w] ?? ""}
                </span>
                <span style={fontStyle(w, 20)} className="text-foreground">
                  {meta.name}
                </span>
                <span style={fontStyle(w, 15)} className="text-muted-foreground">
                  The quick brown fox
                </span>
              </button>
            ))}
          </div>
        </section>

        <div className="h-px bg-border/40" />

        {/* Size scale */}
        <section aria-label="Size scale">
          <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">Size Scale</p>
          <div className="space-y-3">
            {SIZES.map((size) => (
              <div key={size} className="flex items-baseline gap-4">
                <span className="w-8 shrink-0 font-mono text-xs text-muted-foreground/50">{size}</span>
                <p style={fontStyle(undefined, size)} className="text-foreground leading-none">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-border/40" />

        {/* Paragraph */}
        <section aria-label="Paragraph preview">
          <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">Paragraph</p>
          <div className="max-w-2xl space-y-4">
            <p style={fontStyle(undefined, 18)} className="text-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p style={fontStyle(undefined, 16)} className="text-muted-foreground">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        {/* Meta footer */}
        <div className="border-t border-border/40 pt-8 flex flex-wrap gap-6 text-xs text-muted-foreground/60">
          <span><span className="text-muted-foreground">Designer</span> · {meta.designer}</span>
          <span><span className="text-muted-foreground">License</span> · {meta.license}</span>
          <span><span className="text-muted-foreground">Weights</span> · {meta.weights.length}</span>
          <a
            href={meta.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            View on Google Fonts →
          </a>
        </div>

      </div>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
