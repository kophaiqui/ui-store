"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import {
  DEMO_PRESETS,
  deriveThemeTokens,
  formatCSSVariables,
  formatTailwindTheme,
  type DP,
} from "@/lib/colors/utils";
import { ColorPickerPopup } from "@/components/colors/shared/ColorPickerPopup";
import { SectionLabel } from "@/components/colors/shared/SectionLabel";
import { UIButton } from "@/designs/inputs/button/Component";
import { UICard } from "@/designs/data-display/card/Component";
import { UIInput } from "@/designs/inputs/input/Component";
import { UIBadge } from "@/designs/data-display/badge/Component";
import { UITabs } from "@/designs/data-display/tabs/Component";
import { UIAlert } from "@/designs/feedback/alert/Component";

const TOKEN_LABELS = [
  "background", "foreground", "card", "card-foreground", "popover", "popover-foreground",
  "primary", "primary-foreground", "secondary", "secondary-foreground",
  "accent", "accent-foreground", "muted", "muted-foreground",
  "border", "input", "ring", "destructive",
];

function LivePreview({ tokens }: { tokens: DP }) {
  const style = {
    ...Object.fromEntries(Object.entries(tokens).map(([k, v]) => [`--${k}`, v])),
    background: "var(--background)",
    color: "var(--foreground)",
  } as React.CSSProperties;

  return (
    <div style={style} className="space-y-4 rounded-2xl p-6">
      <div className="flex flex-wrap items-center gap-3">
        <UIButton variant="solid">Get started</UIButton>
        <UIButton variant="outline">Learn more</UIButton>
        <UIBadge>New</UIBadge>
      </div>

      <UICard>
        <p className="mb-1 text-sm font-semibold" style={{ color: "var(--card-foreground)" }}>Your project</p>
        <p className="mb-3 text-xs" style={{ color: "var(--muted-foreground)" }}>
          Every component below reads the same tokens you are about to copy.
        </p>
        <UIInput placeholder="you@example.com" />
      </UICard>

      <UITabs
        tabs={[
          { label: "Overview", value: "overview", content: "Overview content goes here." },
          { label: "Settings", value: "settings", content: "Settings content goes here." },
        ]}
      />

      <UIAlert variant="info" description="This alert keeps its own semantic color on purpose." />
    </div>
  );
}

export function ConfiguratorPanel() {
  const [brandHex, setBrandHex] = useState("#3b82f6");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [overrides, setOverrides] = useState<{ light: DP; dark: DP }>({ light: {}, dark: {} });
  const [output, setOutput] = useState<"css" | "tailwind">("css");
  const [toast, setToast] = useState<string | null>(null);
  const [overridesOpen, setOverridesOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (!pickerOpen) return;
    function down(e: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) setPickerOpen(false);
    }
    document.addEventListener("mousedown", down);
    return () => document.removeEventListener("mousedown", down);
  }, [pickerOpen]);

  const derived = useMemo(() => deriveThemeTokens(brandHex), [brandHex]);
  const light = useMemo(() => ({ ...derived.light, ...overrides.light }), [derived.light, overrides.light]);
  const dark = useMemo(() => ({ ...derived.dark, ...overrides.dark }), [derived.dark, overrides.dark]);
  const active = mode === "light" ? light : dark;
  const activeNudged = mode === "light" ? derived.nudgedLight : derived.nudgedDark;

  function setOverride(key: string, value: string) {
    setOverrides((o) => ({ ...o, [mode]: { ...o[mode], [key]: value } }));
  }

  const copy = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setToast(label);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1800);
  }, []);

  const cssBlock = useMemo(() => formatCSSVariables(light, dark), [light, dark]);
  const tailwindBlock = useMemo(() => formatTailwindTheme(), []);

  function handleDownload() {
    const blob = new Blob([`${cssBlock}\n\n${tailwindBlock}\n`], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "theme.css";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <p className="mb-8 max-w-[60ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
        Pick your brand color, see it running on real components, copy the token block. Same shape as the preset worlds — this is <span className="font-medium text-foreground/80">build your own</span>.
      </p>

      {/* Step 1: Pick */}
      <SectionLabel>1. Pick</SectionLabel>
      <div className="mb-10 flex flex-wrap items-center gap-4">
        <div ref={pickerRef} className="relative shrink-0">
          <button
            onClick={() => setPickerOpen((o) => !o)}
            className="h-12 w-12 rounded-xl shadow-md transition-transform hover:scale-105"
            style={{ background: brandHex, border: `2px solid ${brandHex}60` }}
            title="Pick a brand color"
          />
          {pickerOpen && (
            <ColorPickerPopup hex={brandHex} onChange={setBrandHex} onClose={() => setPickerOpen(false)} />
          )}
        </div>
        <code className="text-sm font-medium">{brandHex}</code>
        <div className="flex flex-wrap gap-1.5">
          {DEMO_PRESETS.map((c) => (
            <button
              key={c}
              onClick={() => setBrandHex(c)}
              className="h-6 w-6 rounded-md transition-transform hover:scale-110"
              style={{ background: c, outline: brandHex === c ? `2px solid ${c}` : "none", outlineOffset: "2px" }}
              title={c}
            />
          ))}
        </div>
      </div>

      {/* Step 2: See */}
      <div className="mb-3 flex items-center justify-between">
        <SectionLabel>2. See</SectionLabel>
        <div className="flex items-center gap-2">
          {activeNudged.length > 0 && (
            <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-[0.6875rem] text-amber-500">
              adjusted {activeNudged.length} token{activeNudged.length === 1 ? "" : "s"} for contrast
            </span>
          )}
          <div className="flex items-center rounded-lg border border-border/60 bg-card p-0.5">
            {(["light", "dark"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={cn(
                  "rounded-md px-3 py-1 text-xs font-medium capitalize transition-colors",
                  mode === m ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-10 overflow-hidden rounded-2xl border border-border/60">
        <LivePreview tokens={active} />
      </div>

      {/* Advanced overrides */}
      <button
        onClick={() => setOverridesOpen((o) => !o)}
        className="mb-3 flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className={cn("transition-transform", overridesOpen && "rotate-90")}>›</span>
        Advanced — override individual tokens ({mode})
      </button>
      {overridesOpen && (
        <div className="mb-10 flex flex-wrap gap-2">
          {TOKEN_LABELS.map((key) => (
            <TokenOverrideSwatch
              key={key}
              label={key}
              value={active[key]}
              onChange={(v) => setOverride(key, v)}
            />
          ))}
        </div>
      )}

      {/* Step 3: Copy */}
      <SectionLabel>3. Copy</SectionLabel>
      <div className="mb-4 flex items-center gap-2">
        <div className="flex items-center rounded-lg border border-border/60 bg-card p-0.5">
          {(["css", "tailwind"] as const).map((o) => (
            <button
              key={o}
              onClick={() => setOutput(o)}
              className={cn(
                "rounded-md px-3 py-1 text-xs font-medium transition-colors",
                output === o ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {o === "css" ? "CSS variables" : "Tailwind v4 @theme"}
            </button>
          ))}
        </div>
        <button
          onClick={() => copy(output === "css" ? cssBlock : tailwindBlock, "Copied")}
          className="rounded-lg border border-border/60 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
        >
          Copy
        </button>
        <button
          onClick={handleDownload}
          className="rounded-lg border border-border/60 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
        >
          Download theme.css
        </button>
      </div>
      <pre className="overflow-auto rounded-2xl border border-border/60 bg-muted/20 p-5 text-[0.8125rem] leading-relaxed">
        <code className="font-mono">{output === "css" ? cssBlock : tailwindBlock}</code>
      </pre>

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

function TokenOverrideSwatch({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function down(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", down);
    return () => document.removeEventListener("mousedown", down);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/40 px-2 py-1 transition-colors hover:border-border"
      >
        <div className="h-3 w-3 shrink-0 rounded-sm" style={{ background: value, boxShadow: "inset 0 0 0 1px rgba(128,128,128,0.2)" }} />
        <span className="font-mono text-[0.625rem] text-muted-foreground">--{label}</span>
      </button>
      {open && <ColorPickerPopup hex={value} onChange={onChange} onClose={() => setOpen(false)} />}
    </div>
  );
}
