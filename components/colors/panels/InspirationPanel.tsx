"use client";

import { useState } from "react";
import { INSPIRATION_PALETTES, type InspFilter, type InspPalette } from "@/lib/colors/utils";
import { FilterPills } from "@/components/colors/shared/FilterPills";

const INSP_FILTERS: { value: InspFilter; label: string }[] = [
  { value: "all",     label: "All"     },
  { value: "dark",    label: "Dark"    },
  { value: "light",   label: "Light"   },
  { value: "vibrant", label: "Vibrant" },
  { value: "minimal", label: "Minimal" },
  { value: "warm",    label: "Warm"    },
  { value: "cool",    label: "Cool"    },
];

function PaletteCard({ palette: p, copy }: { palette: InspPalette; copy: (t: string, l: string) => void }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { copy(p.hexes.join(", "), "Palette copied"); setCopied(true); setTimeout(() => setCopied(false), 1400); }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card text-left transition-all duration-200 hover:border-border hover:-translate-y-0.5 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]"
    >
      <div className="flex h-14">
        {p.swatches.map((hex, i) => (
          <div key={i} className="flex-1 transition-[flex] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[&:hover]:flex-[2.5]" style={{ background: hex }} />
        ))}
      </div>
      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-semibold">{copied ? "Copied!" : p.name}</span>
          <span className="rounded-full bg-muted px-2 py-0.5 text-[0.5rem] font-bold uppercase tracking-widest text-muted-foreground">{p.tag}</span>
        </div>
        <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
        <div className="flex flex-wrap gap-1">
          {p.hexes.map(hex => (
            <span key={hex} className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.5625rem] text-muted-foreground">{hex}</span>
          ))}
        </div>
      </div>
    </button>
  );
}

export function InspirationPanel({ copy }: { copy: (t: string, l: string) => void }) {
  const [filter, setFilter] = useState<InspFilter>("all");
  const visible = filter === "all" ? INSPIRATION_PALETTES : INSPIRATION_PALETTES.filter(p => p.tags.includes(filter));
  return (
    <div>
      <p className="mb-6 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
        Palettes from renowned design systems and developer tools. Click any card to copy all hex values.
      </p>
      <FilterPills options={INSP_FILTERS} active={filter} setActive={setFilter} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map(p => <PaletteCard key={p.name} palette={p} copy={copy} />)}
      </div>
    </div>
  );
}
