"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import type { FontMeta } from "@/lib/registry";

const WEIGHT_LABELS: Record<number, string> = {
  100: "Thin",
  200: "ExtraLight",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
  800: "ExtraBold",
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
  const [copied, setCopied] = useState(false);
  const [previewSize, setPreviewSize] = useState(64);
  const previewRef = useRef<HTMLDivElement>(null);

  // Reset preview text and weight when font changes
  useEffect(() => {
    setActiveWeight(
      meta.weights.includes(400) ? 400 : meta.weights[Math.floor(meta.weights.length / 2)]
    );
    setLoaded(false);
    if (previewRef.current) {
      previewRef.current.textContent = "The quick brown fox jumps over the lazy dog";
    }
  // slug change drives all resets; meta is derived from slug
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  // Load Google Font stylesheet
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
    transition: "font-weight 0.12s ease",
    ...(size ? { fontSize: `${size}px` } : {}),
  }), [loaded, meta.family, activeWeight, controls]);

  const urlText = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(meta.family)}:wght@${meta.weights.join(";")}&display=swap`;

  const copy = async () => {
    await navigator.clipboard.writeText(urlText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const setControl = (key: keyof Controls, value: number) =>
    setControls((c) => ({ ...c, [key]: value }));

  return (
    <div className="flex min-h-full flex-col">

      {/* ── Sticky controls — single row ─────────────────────────── */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b border-border/60">
        <div className="flex items-center gap-3 px-6 py-2.5 overflow-x-auto">

          {/* Font identity */}
          <div className="flex shrink-0 items-baseline gap-2">
            <span className="text-sm font-semibold tracking-tight text-foreground">{meta.name}</span>
            <span className="rounded border border-border/50 px-1.5 py-0.5 text-[0.625rem] capitalize text-muted-foreground/60">
              {meta.category}
            </span>
          </div>

          <div className="h-4 w-px shrink-0 bg-border/50" />

          {/* Weight pills */}
          <div className="flex shrink-0 gap-1" role="group" aria-label="Font weight">
            {meta.weights.map((w) => (
              <button
                key={w}
                onClick={() => setActiveWeight(w)}
                aria-pressed={activeWeight === w}
                className={cn(
                  "rounded px-2 py-0.5 font-mono text-[0.75rem] transition-colors duration-100",
                  activeWeight === w
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                {w}
              </button>
            ))}
          </div>

          <div className="h-4 w-px shrink-0 bg-border/50" />

          {/* Sliders */}
          <div className="flex shrink-0 items-center gap-4 text-[0.75rem] text-muted-foreground/60">
            <label className="flex items-center gap-1.5">
              <span>Lead</span>
              <input type="range" min="1" max="2.5" step="0.1" value={controls.lineHeight}
                onChange={(e) => setControl("lineHeight", Number(e.target.value))}
                className="w-16 accent-foreground/80" aria-label="Line height" />
              <span className="w-6 font-mono text-foreground/60 tabular-nums">{controls.lineHeight}</span>
            </label>
            <label className="flex items-center gap-1.5">
              <span>Track</span>
              <input type="range" min="-0.05" max="0.2" step="0.01" value={controls.letterSpacing}
                onChange={(e) => setControl("letterSpacing", Number(e.target.value))}
                className="w-16 accent-foreground/80" aria-label="Letter spacing" />
              <span className="w-8 font-mono text-foreground/60 tabular-nums">{controls.letterSpacing.toFixed(2)}</span>
            </label>
            <label className="flex items-center gap-1.5">
              <span>Size</span>
              <input type="range" min="24" max="96" step="4" value={previewSize}
                onChange={(e) => setPreviewSize(Number(e.target.value))}
                className="w-16 accent-foreground/80" aria-label="Preview size" />
              <span className="w-6 font-mono text-foreground/60 tabular-nums">{previewSize}</span>
            </label>
          </div>

          {/* URL pill — long box with inline copy */}
          <div className="flex min-w-0 flex-1 items-center rounded-md border border-violet-400/40 bg-violet-500/[0.06] dark:bg-violet-500/10">
            <code className="flex-1 truncate px-3 font-mono text-[0.75rem] text-violet-700 dark:text-violet-300">
              {urlText}
            </code>
            <button
              onClick={copy}
              aria-label="Copy Google Fonts URL"
              className="flex h-7 shrink-0 items-center gap-1.5 border-l border-violet-400/30 px-3 text-[0.75rem] font-medium text-violet-600 hover:bg-violet-500/10 dark:text-violet-400 dark:hover:bg-violet-500/15 transition-colors rounded-r-md"
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

        </div>
      </div>

      {/* ── Specimen body ─────────────────────────────────────────── */}
      <div className="flex-1 px-8 py-10 space-y-12">

        {/* Editable hero preview */}
        <section aria-label="Editable preview">
          <div className="mb-3 flex items-center gap-2">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground/50">Preview</p>
            <span className="text-[0.625rem] text-muted-foreground/35">· click to edit</span>
          </div>
          <div className={cn("min-h-[120px] flex items-start", !loaded && "opacity-30")}>
            <div
              ref={previewRef}
              contentEditable
              suppressContentEditableWarning
              spellCheck={false}
              aria-label="Editable font preview — type to customize"
              style={{
                fontFamily: loaded ? `'${meta.family}', sans-serif` : "inherit",
                fontWeight: activeWeight,
                lineHeight: controls.lineHeight,
                letterSpacing: `${controls.letterSpacing}em`,
                fontSize: `clamp(36px, 4.5vw, ${previewSize}px)`,
                transition: "font-weight 0.12s ease",
                outline: "none",
                caretColor: "currentColor",
              }}
              className="w-full text-foreground cursor-text"
            >
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          {!loaded && <p className="mt-2 text-xs text-muted-foreground/40">Loading font…</p>}
        </section>

        <div className="h-px bg-border/40" />

        {/* Character set */}
        <section aria-label="Character set">
          <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground/50">Characters</p>
          <div className="space-y-5">
            {[
              { label: "Uppercase", text: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", size: 28 },
              { label: "Lowercase", text: "abcdefghijklmnopqrstuvwxyz", size: 28 },
              { label: "Numerals", text: "0123456789", size: 28 },
              { label: "Punctuation", text: `!@#$%^&*()_+-=[]{}|;:'",.<>/?`, size: 20 },
              { label: "Symbols", text: "© ® ™ € £ ¥ § ¶ † ‡ • …", size: 20 },
            ].map(({ label, text, size }) => (
              <div key={label}>
                <p className="mb-1.5 text-[0.5625rem] uppercase tracking-[0.12em] text-muted-foreground/35">{label}</p>
                <p style={fontStyle(undefined, size)} className="text-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-border/40" />

        {/* Weight showcase */}
        <section aria-label="Font weights">
          <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground/50">Weights</p>
          <div className="space-y-0.5">
            {meta.weights.map((w) => (
              <button
                key={w}
                onClick={() => setActiveWeight(w)}
                aria-pressed={activeWeight === w}
                className={cn(
                  "group flex w-full items-baseline gap-5 rounded-lg px-4 py-2.5 text-left transition-colors duration-100",
                  activeWeight === w ? "bg-muted/50" : "hover:bg-muted/25"
                )}
              >
                <span className="w-28 shrink-0 font-mono text-[0.6875rem] text-muted-foreground/50">
                  {w} · {WEIGHT_LABELS[w] ?? ""}
                </span>
                <span style={fontStyle(w, 20)} className="text-foreground">{meta.name}</span>
                <span style={fontStyle(w, 14)} className="text-muted-foreground/60">The quick brown fox</span>
              </button>
            ))}
          </div>
        </section>

        <div className="h-px bg-border/40" />

        {/* Size scale */}
        <section aria-label="Size scale">
          <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground/50">Size Scale</p>
          <div className="space-y-3">
            {SIZES.map((size) => (
              <div key={size} className="flex items-baseline gap-4">
                <span className="w-8 shrink-0 font-mono text-[0.6875rem] tabular-nums text-muted-foreground/40">{size}</span>
                <p style={fontStyle(undefined, size)} className="text-foreground leading-none">
                  The quick brown fox
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-border/40" />

        {/* Paragraph */}
        <section aria-label="Paragraph preview">
          <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground/50">Paragraph</p>
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
        <div className="border-t border-border/40 pt-8 flex flex-wrap gap-6 text-xs text-muted-foreground/50">
          <span><span className="text-muted-foreground/80">Designer</span> · {meta.designer}</span>
          <span><span className="text-muted-foreground/80">License</span> · {meta.license}</span>
          <span><span className="text-muted-foreground/80">Weights</span> · {meta.weights.length}</span>
          <a
            href={meta.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            View on {meta.source.provider === "google" ? "Google Fonts" : meta.source.provider} →
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
