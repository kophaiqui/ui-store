"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { hexToHSL, hslToHex, PICKER_PRESETS, THUMB } from "@/lib/colors/utils";

export function ColorPickerPopup({ hex, onChange, onClose }: {
  hex: string;
  onChange: (v: string) => void;
  onClose: () => void;
}) {
  const [localHex, setLocalHex] = useState(hex);
  const ref = useRef<HTMLDivElement>(null);
  const [h, s, l] = useMemo(() => hexToHSL(hex), [hex]);

  useEffect(() => { setLocalHex(hex); }, [hex]);

  useEffect(() => {
    function down(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", down);
    return () => document.removeEventListener("mousedown", down);
  }, [onClose]);

  function applyHex(raw: string) {
    let v = raw.trim();
    if (!v.startsWith("#")) v = "#" + v;
    if (/^#[0-9a-fA-F]{6}$/.test(v)) onChange(v);
    else setLocalHex(hex);
  }

  const hueGrad = `linear-gradient(to right,${Array.from({ length: 13 }, (_, i) => `hsl(${i * 30},${Math.max(s, 50)}%,${Math.min(Math.max(l, 30), 65)}%)`).join(",")})`;
  const satGrad = `linear-gradient(to right,hsl(${h},0%,${l}%),hsl(${h},100%,${l}%))`;
  const litGrad = `linear-gradient(to right,hsl(${h},${s}%,5%),hsl(${h},${s}%,50%),hsl(${h},${s}%,95%))`;

  return (
    <div
      ref={ref}
      className="absolute left-0 top-[calc(100%+8px)] z-50 w-60 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-black/30"
    >
      <div className="h-10 w-full transition-colors duration-75" style={{ background: hex }} />

      <div className="space-y-3 p-4 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="w-3 shrink-0 text-[0.5625rem] font-bold uppercase tracking-widest text-muted-foreground/40">H</span>
          <input type="range" min="0" max="359" value={h}
            onChange={e => onChange(hslToHex(+e.target.value, s, l))}
            className={cn("h-2 flex-1 cursor-pointer appearance-none rounded-full", THUMB)}
            style={{ background: hueGrad }}
          />
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-3 shrink-0 text-[0.5625rem] font-bold uppercase tracking-widest text-muted-foreground/40">S</span>
          <input type="range" min="0" max="100" value={s}
            onChange={e => onChange(hslToHex(h, +e.target.value, l))}
            className={cn("h-2 flex-1 cursor-pointer appearance-none rounded-full", THUMB)}
            style={{ background: satGrad }}
          />
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-3 shrink-0 text-[0.5625rem] font-bold uppercase tracking-widest text-muted-foreground/40">L</span>
          <input type="range" min="0" max="100" value={l}
            onChange={e => onChange(hslToHex(h, s, +e.target.value))}
            className={cn("h-2 flex-1 cursor-pointer appearance-none rounded-full", THUMB)}
            style={{ background: litGrad }}
          />
        </div>
        <input
          type="text"
          value={localHex}
          onChange={e => setLocalHex(e.target.value)}
          onBlur={() => applyHex(localHex)}
          onKeyDown={e => e.key === "Enter" && applyHex(localHex)}
          maxLength={7}
          className="mt-1 w-full rounded-xl border border-border/60 bg-background px-3 py-1.5 font-mono text-sm text-foreground outline-none transition-colors focus:border-foreground/30"
        />
      </div>

      <div className="border-t border-border/40 px-4 pb-4 pt-3">
        <p className="mb-2 text-[0.5rem] font-bold uppercase tracking-widest text-muted-foreground/40">Presets</p>
        <div className="grid grid-cols-8 gap-1">
          {PICKER_PRESETS.map(c => (
            <button
              key={c}
              onClick={() => onChange(c)}
              title={c}
              className="h-6 w-6 rounded-md transition-transform hover:scale-110 active:scale-95"
              style={{
                background: c,
                boxShadow: hex.toLowerCase() === c.toLowerCase()
                  ? "0 0 0 2px var(--background), 0 0 0 3.5px var(--foreground)"
                  : "inset 0 0 0 1px rgba(128,128,128,0.22)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
