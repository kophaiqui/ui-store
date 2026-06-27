"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  HARMONY_DEFS,
  hexToHSL,
  hslToHex,
  luminance,
  contrastColor,
  buildHarmonies,
  detectRelationship,
  adaptForMode,
  type HarmonyKey,
  type HarmonySet,
} from "@/lib/colors/utils";
import { ColorPickerPopup } from "@/components/colors/shared/ColorPickerPopup";
import { SectionLabel } from "@/components/colors/shared/SectionLabel";

function SwatchStrip({ colors, label, copy }: {
  colors: string[];
  label?: string;
  copy: (text: string, label: string) => void;
}) {
  return (
    <div className="relative flex h-10">
      {label && (
        <span className="pointer-events-none absolute left-2 top-1/2 z-10 -translate-y-1/2 text-[0.4rem] font-bold uppercase tracking-widest text-white/60">
          {label}
        </span>
      )}
      {colors.map((hex, i) => (
        <button
          key={i}
          onClick={() => copy(hex, `Copied ${hex}`)}
          className="group/sw relative flex-1 transition-[flex] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:flex-[2]"
          style={{ background: hex }} title={hex}
        >
          <span className="absolute inset-x-0 bottom-0 py-0.5 text-center font-mono text-[0.4rem] font-semibold text-white opacity-0 transition-opacity group-hover/sw:opacity-100" style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(2px)" }}>
            {hex}
          </span>
        </button>
      ))}
    </div>
  );
}

function HarmonyCard({ def, harmonies, harmonies2, hasSecondary, isSelected, onSelect, copy }: {
  def: typeof HARMONY_DEFS[number];
  harmonies: HarmonySet;
  harmonies2?: HarmonySet;
  hasSecondary: boolean;
  isSelected: boolean;
  onSelect: () => void;
  copy: (text: string, label: string) => void;
}) {
  const accent = harmonies[def.key][0];
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border bg-card transition-[border-color,box-shadow] duration-150",
        isSelected
          ? "border-transparent shadow-[0_0_0_2px_var(--selected-ring)]"
          : "border-border/60 hover:border-border"
      )}
      style={{ "--selected-ring": accent } as React.CSSProperties}
    >
      <SwatchStrip colors={harmonies[def.key]} label={hasSecondary ? "primary" : undefined} copy={copy} />
      {hasSecondary && harmonies2 && (
        <SwatchStrip colors={harmonies2[def.key]} label="second" copy={copy} />
      )}
      <button onClick={onSelect} className="w-full p-4 text-left transition-colors hover:bg-muted/30">
        <div className="mb-1 flex items-center justify-between">
          <p className="text-sm font-semibold">{def.title}</p>
          {isSelected && (
            <span className="rounded-full px-2 py-0.5 text-[0.5rem] font-bold uppercase tracking-widest text-white" style={{ background: accent }}>
              previewing
            </span>
          )}
        </div>
        <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{def.desc}</p>
        <div className="flex flex-wrap gap-1">
          {def.roles.map(r => (
            <span key={r} className="rounded-md bg-muted px-1.5 py-0.5 text-[0.5rem] font-bold uppercase tracking-widest text-muted-foreground">{r}</span>
          ))}
        </div>
      </button>
    </div>
  );
}

function PickerBlock({ label, hex, onChange, onRemove }: {
  label: string;
  hex: string;
  onChange: (v: string) => void;
  onRemove?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function down(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", down);
    return () => document.removeEventListener("mousedown", down);
  }, [open]);

  return (
    <div ref={containerRef} className="relative flex flex-col gap-2.5">
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <div className="relative w-fit">
        <button
          onClick={() => setOpen(o => !o)}
          className={cn(
            "relative h-[120px] w-[120px] overflow-hidden rounded-2xl border border-border/60 transition-[box-shadow]",
            open
              ? "shadow-[0_0_0_2px_rgba(0,0,0,0.2)] dark:shadow-[0_0_0_2px_rgba(255,255,255,0.25)]"
              : "hover:shadow-[0_0_0_2px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_0_0_2px_rgba(255,255,255,0.15)]"
          )}
          style={{ background: hex }}
        >
          <div className="absolute inset-x-0 bottom-0 px-2.5 py-2 font-mono text-[0.625rem] font-semibold text-white" style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}>
            {hex}
          </div>
        </button>
        {onRemove && (
          <button
            onClick={onRemove}
            title="Remove"
            className="group/rm absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-red-500/60 bg-black shadow-[0_0_6px_rgba(239,68,68,0.3)] transition-all duration-150 hover:border-red-500 hover:bg-red-500 hover:shadow-none"
          >
            <svg width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24" className="text-red-500 drop-shadow-[0_0_4px_rgba(239,68,68,0.9)] transition-all duration-150 group-hover/rm:text-white group-hover/rm:drop-shadow-none">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      {open && <ColorPickerPopup hex={hex} onChange={onChange} onClose={() => setOpen(false)} />}
    </div>
  );
}

export function HarmonyPanel({ copy }: { copy: (text: string, label: string) => void }) {
  const [primaryHex,   setPrimaryHex]   = useState("#6366f1");
  const [secondaryHex, setSecondaryHex] = useState("#f97316");
  const [hasSecondary, setHasSecondary] = useState(false);
  const [selectedKey,  setSelectedKey]  = useState<HarmonyKey | null>(null);
  const [liveDark,     setLiveDark]     = useState(false);

  const [h,  s,  l]  = useMemo(() => hexToHSL(primaryHex),   [primaryHex]);
  const [h2, s2, l2] = useMemo(() => hexToHSL(secondaryHex), [secondaryHex]);
  const harmonies  = useMemo(() => buildHarmonies(h,  s,  l),  [h, s, l]);
  const harmonies2 = useMemo(() => buildHarmonies(h2, s2, l2), [h2, s2, l2]);

  const relationship = useMemo(() => {
    if (!hasSecondary) return null;
    return detectRelationship(h, h2);
  }, [h, h2, hasSecondary]);

  const previewAccent = useMemo(() => {
    if (!selectedKey) return primaryHex;
    if (selectedKey === "neutral") return harmonies.neutral[4];
    if (selectedKey === "monochromatic") return harmonies.monochromatic[2];
    return harmonies[selectedKey][0];
  }, [selectedKey, harmonies, primaryHex]);

  const previewSecond = useMemo(() => {
    if (hasSecondary) return secondaryHex;
    if (!selectedKey) return primaryHex;
    if (selectedKey === "neutral") return harmonies.neutral[3];
    if (selectedKey === "monochromatic") return harmonies.monochromatic[1];
    return harmonies[selectedKey][1] ?? harmonies[selectedKey][0];
  }, [selectedKey, harmonies, hasSecondary, secondaryHex, primaryHex]);

  const previewThird = useMemo(() => {
    if (!selectedKey) return null;
    if (selectedKey === "neutral") return harmonies.neutral[2];
    if (selectedKey === "monochromatic") return harmonies.monochromatic[3];
    return harmonies[selectedKey][2] ?? null;
  }, [selectedKey, harmonies]);

  const modeAccent = useMemo(() => adaptForMode(previewAccent, liveDark), [previewAccent, liveDark]);
  const modeSecond = useMemo(() => adaptForMode(previewSecond, liveDark), [previewSecond, liveDark]);
  const modeThird  = useMemo(() => previewThird ? adaptForMode(previewThird, liveDark) : null, [previewThird, liveDark]);
  const modeTextOnAccent = useMemo(() => contrastColor(modeAccent), [modeAccent]);
  const modeTextOnSecond = useMemo(() => contrastColor(modeSecond), [modeSecond]);
  const modeTextOnThird  = useMemo(() => modeThird ? contrastColor(modeThird) : "#fff", [modeThird]);

  const neutralBg   = liveDark ? harmonies.neutral[4] : harmonies.neutral[0];
  const neutralText = luminance(neutralBg) > 0.179 ? harmonies.neutral[4] : harmonies.neutral[1];

  return (
    <div>
      <p className="mb-8 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
        Pick your main brand color — or two. Seven harmony palettes are generated live using color theory math. Click any swatch to copy its hex.
      </p>

      <div className="mb-8 flex flex-wrap items-start gap-5">
        <PickerBlock label="Primary color" hex={primaryHex} onChange={setPrimaryHex} />
        {hasSecondary ? (
          <PickerBlock label="Second color" hex={secondaryHex} onChange={setSecondaryHex} onRemove={() => setHasSecondary(false)} />
        ) : (
          <div className="flex flex-col gap-2.5">
            <label className="select-none text-xs font-semibold uppercase tracking-widest text-transparent">·</label>
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

      {relationship && (
        <div className="mb-8 flex w-fit items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm text-muted-foreground">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: relationship.dot }} />
          <strong className="text-foreground">{relationship.name}</strong>
          <span className="hidden sm:inline">— {relationship.desc}</span>
        </div>
      )}

      <SectionLabel>Generated harmonies</SectionLabel>
      <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HARMONY_DEFS.map(def => (
          <HarmonyCard
            key={def.key}
            def={def}
            harmonies={harmonies}
            harmonies2={hasSecondary ? harmonies2 : undefined}
            hasSecondary={hasSecondary}
            isSelected={selectedKey === def.key}
            onSelect={() => setSelectedKey(k => k === def.key ? null : def.key)}
            copy={copy}
          />
        ))}
      </div>

      <div className="mb-3 flex items-center justify-between">
        <SectionLabel>Live UI preview</SectionLabel>
        <div className="flex items-center gap-3">
          {selectedKey && (
            <span className="text-[0.6875rem] text-muted-foreground/60">
              Using <strong className="text-muted-foreground">{HARMONY_DEFS.find(d => d.key === selectedKey)?.title}</strong> · click card to deselect
            </span>
          )}
          <button
            onClick={() => setLiveDark(d => !d)}
            className="flex items-center gap-1.5 rounded-lg border border-border/60 px-2.5 py-1 text-[0.625rem] font-medium text-muted-foreground transition-colors hover:border-border hover:bg-muted hover:text-foreground"
            title="Toggle light / dark preview"
          >
            {liveDark
              ? <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              : <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            }
            {liveDark ? "Light" : "Dark"}
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border/60 transition-all duration-500" style={{ background: neutralBg }}>
        <div className="flex h-9 items-center justify-between px-4 transition-colors duration-500" style={{ background: modeAccent }}>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[modeAccent, modeSecond, modeThird ?? neutralBg].map((c, i) => (
                <div key={i} className="h-2 w-2 rounded-full border border-white/20" style={{ background: `${modeTextOnAccent}30` }} />
              ))}
            </div>
            <span className="text-[0.4375rem] font-bold uppercase tracking-widest" style={{ color: modeTextOnAccent, opacity: 0.6 }}>Dashboard</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="rounded-full px-2 py-0.5 text-[0.4rem] font-bold uppercase tracking-wider" style={{ background: modeSecond, color: modeTextOnSecond }}>Pro</span>
            <div className="h-4 w-4 rounded-full border border-white/30" style={{ background: `${modeTextOnAccent}20` }} />
          </div>
        </div>

        <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[130px_1fr]">
          <div className="border-r p-3 transition-colors duration-500" style={{ borderColor: `${neutralText}12`, background: neutralBg }}>
            <p className="mb-2 px-1 text-[0.375rem] font-bold uppercase tracking-widest" style={{ color: neutralText, opacity: 0.35 }}>Menu</p>
            {[{ label: "Overview", active: true }, { label: "Projects", active: false }, { label: "Analytics", active: false }, { label: "Settings", active: false }].map(({ label, active }) => (
              <div
                key={label}
                className="relative mb-0.5 flex items-center gap-1.5 overflow-hidden rounded-lg px-2 py-1.5 text-[0.5625rem] font-medium transition-colors duration-300"
                style={active ? { background: `${modeAccent}20`, color: modeAccent } : { color: neutralText, opacity: 0.5 }}
              >
                {active && <div className="absolute inset-y-1.5 left-0 w-[2px] rounded-full transition-colors duration-500" style={{ background: modeAccent }} />}
                <div className="h-1.5 w-1.5 shrink-0 rounded-sm transition-colors duration-500" style={{ background: active ? modeAccent : `${neutralText}40` }} />
                {label}
              </div>
            ))}
            <div className="mt-3 rounded-xl p-2.5 transition-colors duration-500" style={{ background: `${modeSecond}20`, border: `1px solid ${modeSecond}35` }}>
              <p className="mb-0.5 text-[0.4375rem] font-bold uppercase tracking-widest transition-colors duration-500" style={{ color: modeSecond }}>Upgrade</p>
              <p className="mb-1.5 text-[0.5rem] leading-tight" style={{ color: neutralText, opacity: 0.6 }}>Unlock all features</p>
              <div className="rounded-md px-2 py-1 text-center text-[0.4375rem] font-bold transition-colors duration-500" style={{ background: modeSecond, color: modeTextOnSecond }}>Go Pro</div>
            </div>
          </div>

          <div className="p-4 transition-colors duration-500">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-[0.6875rem] font-semibold" style={{ color: neutralText }}>Good morning, Alex</p>
                <p className="text-[0.5rem]" style={{ color: neutralText, opacity: 0.45 }}>3 tasks pending this week</p>
              </div>
              <button className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-[0.5625rem] font-bold transition-all duration-500 active:scale-95" style={{ background: modeAccent, color: modeTextOnAccent, boxShadow: `0 4px 16px ${modeAccent}60, 0 1px 3px ${modeAccent}40` }}>
                <svg width="7" height="7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
                New task
              </button>
            </div>

            <div className="mb-4 grid grid-cols-3 gap-2">
              {[
                { value: "47", label: "Done",    color: modeAccent, text: modeTextOnAccent },
                { value: "12", label: "Review",  color: modeSecond, text: modeTextOnSecond },
                { value: "8",  label: "Blocked", color: modeThird ?? `${neutralText}20`, text: modeThird ? modeTextOnThird : neutralText },
              ].map(({ value, label, color }) => (
                <div key={label} className="rounded-xl p-2.5 transition-colors duration-500" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                  <p className="font-mono text-[0.875rem] font-bold leading-none transition-colors duration-500" style={{ color }}>{value}</p>
                  <p className="mt-0.5 text-[0.375rem] font-bold uppercase tracking-wider" style={{ color: neutralText, opacity: 0.45 }}>{label}</p>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-[0.4375rem] font-bold uppercase tracking-widest" style={{ color: neutralText, opacity: 0.4 }}>Sprint progress</p>
                <p className="font-mono text-[0.5rem] font-semibold" style={{ color: neutralText, opacity: 0.6 }}>68%</p>
              </div>
              <div className="h-2 overflow-hidden rounded-full transition-colors duration-500" style={{ background: `${neutralText}12` }}>
                <div className="flex h-full transition-all duration-700">
                  <div className="transition-colors duration-500" style={{ width: "48%", background: modeAccent, borderRadius: "9999px 0 0 9999px" }} />
                  <div className="transition-colors duration-500" style={{ width: "20%", background: modeSecond }} />
                  {modeThird && <div className="transition-colors duration-500" style={{ width: "8%", background: modeThird, borderRadius: "0 9999px 9999px 0" }} />}
                </div>
              </div>
              <div className="mt-1.5 flex items-center gap-3">
                {[{ label: "Primary", color: modeAccent }, { label: "Secondary", color: modeSecond }, ...(modeThird ? [{ label: "Tertiary", color: modeThird }] : [])].map(({ label, color }) => (
                  <div key={label} className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-500" style={{ background: color }} />
                    <span className="text-[0.375rem] font-medium" style={{ color: neutralText, opacity: 0.5 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex-1 rounded-xl py-2 text-[0.5625rem] font-bold transition-all duration-500 active:scale-[0.97]" style={{ background: modeAccent, color: modeTextOnAccent, boxShadow: `0 4px 14px ${modeAccent}55` }}>Confirm</button>
              <button className="flex-1 rounded-xl py-2 text-[0.5625rem] font-semibold transition-all duration-500" style={{ color: modeSecond, border: `1.5px solid ${modeSecond}`, background: "transparent" }}>Cancel</button>
              {modeThird && (
                <button className="rounded-xl px-3 py-2 text-[0.5625rem] font-semibold transition-all duration-500" style={{ background: `${modeThird}20`, color: modeThird, border: `1px solid ${modeThird}40` }}>More</button>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t px-4 py-2 transition-colors duration-500" style={{ borderColor: `${neutralText}10`, background: `${neutralText}06` }}>
          <span className="text-[0.375rem] font-bold uppercase tracking-widest" style={{ color: neutralText, opacity: 0.3 }}>Neutral scale</span>
          <div className="flex flex-1 gap-[2px]">
            {harmonies.neutral.map((c, i) => (
              <button key={i} onClick={() => copy(c, `Copied ${c}`)} title={c} className="h-3 flex-1 rounded-sm transition-[flex] duration-200 hover:flex-[1.6]" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
