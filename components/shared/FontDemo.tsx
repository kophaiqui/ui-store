"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  family: string;
  weights: number[];
  provider: string;
};

const SAMPLE_TEXTS = [
  "The quick brown fox jumps over the lazy dog",
  "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm",
  "0123456789 !@#$%^&*()",
];

export function FontDemo({ family, weights, provider }: Props) {
  const [activeWeight, setActiveWeight] = useState(weights[Math.floor(weights.length / 2)] ?? 400);
  const [sampleIdx, setSampleIdx] = useState(0);
  const [fontSize, setFontSize] = useState(32);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (provider !== "google") { setLoaded(true); return; }
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weights.join(";")}&display=swap`;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    link.onload = () => setLoaded(true);
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, [family, weights, provider]);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Weight picker */}
        <div className="flex flex-wrap gap-1.5">
          {weights.map((w) => (
            <button
              key={w}
              onClick={() => setActiveWeight(w)}
              className={cn(
                "rounded-md border px-3 py-1 text-sm transition-colors",
                activeWeight === w
                  ? "border-foreground bg-foreground text-background"
                  : "border-border/60 text-muted-foreground hover:border-border hover:text-foreground"
              )}
            >
              {w}
            </button>
          ))}
        </div>

        {/* Font size slider */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Size</span>
          <input
            type="range"
            min={14}
            max={80}
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-24 accent-foreground"
          />
          <span className="w-6">{fontSize}</span>
        </div>

        {/* Sample text toggle */}
        <button
          onClick={() => setSampleIdx((i) => (i + 1) % SAMPLE_TEXTS.length)}
          className="rounded-md border border-border/60 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
        >
          Change text
        </button>
      </div>

      {/* Preview */}
      <div className="min-h-[120px] rounded-xl border border-border/60 bg-muted/10 px-8 py-8">
        <p
          style={{
            fontFamily: loaded ? `'${family}', sans-serif` : "inherit",
            fontWeight: activeWeight,
            fontSize: `${fontSize}px`,
            lineHeight: 1.3,
            opacity: loaded ? 1 : 0.4,
            transition: "font-weight 0.15s ease, opacity 0.3s ease",
          }}
        >
          {SAMPLE_TEXTS[sampleIdx]}
        </p>
        {!loaded && (
          <p className="mt-2 text-xs text-muted-foreground">Loading font…</p>
        )}
      </div>

      {/* Weight showcase */}
      <div className="space-y-1">
        {weights.map((w) => (
          <div
            key={w}
            className="flex items-baseline gap-4 rounded-lg px-3 py-2 transition-colors hover:bg-muted/30 cursor-pointer"
            onClick={() => setActiveWeight(w)}
          >
            <span className="w-10 shrink-0 text-xs text-muted-foreground">{w}</span>
            <span
              style={{
                fontFamily: loaded ? `'${family}', sans-serif` : "inherit",
                fontWeight: w,
                fontSize: 18,
              }}
              className="text-foreground"
            >
              {family}
            </span>
            <span
              style={{
                fontFamily: loaded ? `'${family}', sans-serif` : "inherit",
                fontWeight: w,
                fontSize: 15,
              }}
              className="text-muted-foreground"
            >
              The quick brown fox
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
