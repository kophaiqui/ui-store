"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import {
  TOKEN_GROUPS,
  GROUP_TOKEN_KEYS,
  DEMO_PRESETS,
  LIGHT_CHIPS,
  DARK_CHIPS,
  deriveDemoPalette,
  hexToHSL,
  hslToHex,
  type DP,
} from "@/lib/colors/utils";
import { ColorPickerPopup } from "@/components/colors/shared/ColorPickerPopup";

// ─── Demo components ──────────────────────────────────────────────────────────

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
          <p className="text-sm" style={{ color: `${d}90` }}>You don&apos;t have permission to delete this item. Contact your admin.</p>
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

// ─── Modal ────────────────────────────────────────────────────────────────────

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
        <div className="flex items-center justify-between border-b border-border/40 px-4 py-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Token group demo</p>
            <p className="text-base font-semibold">{group}</p>
          </div>
          <button onClick={onClose} className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>

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

        <div className="p-4">{demoMap[group]}</div>
      </div>
    </div>
  );
}

// ─── Panel ────────────────────────────────────────────────────────────────────

export function BasePanel() {
  const [openDemo,   setOpenDemo]   = useState<string | null>(null);
  const [primaryHex, setPrimaryHex] = useState("#3b82f6");
  const [pickerOpen, setPickerOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (!pickerOpen) return;
    function down(e: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) setPickerOpen(false);
    }
    document.addEventListener("mousedown", down);
    return () => document.removeEventListener("mousedown", down);
  }, [pickerOpen]);

  const palette = useMemo(() => deriveDemoPalette(primaryHex), [primaryHex]);

  const copy = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setToast(label);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1800);
  }, []);

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
              className="flex items-center gap-1.5 rounded-lg border border-purple-500/60 bg-purple-500/10 px-2.5 py-1 text-[0.625rem] font-medium text-purple-400 transition-colors hover:border-purple-400 hover:bg-purple-500/20 hover:text-purple-300"
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
                  className="group flex flex-col bg-card text-left transition-colors duration-150 hover:bg-muted/50"
                >
                  <div
                    className="relative h-[68px] border-b border-border/40"
                    style={{ background: swatchColor, boxShadow: "inset 0 0 0 1px rgba(128,128,128,0.18)" }}
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
