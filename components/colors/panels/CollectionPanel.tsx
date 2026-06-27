"use client";

import { useState } from "react";
import { BRANDS, type CollFilter, type Brand } from "@/lib/colors/utils";
import { FilterPills } from "@/components/colors/shared/FilterPills";

const COLL_FILTERS: { value: CollFilter; label: string }[] = [
  { value: "all",        label: "All"        },
  { value: "ai",         label: "AI & LLM"   },
  { value: "developer",  label: "Developer"  },
  { value: "design",     label: "Design"     },
  { value: "fintech",    label: "Fintech"    },
  { value: "consumer",   label: "Consumer"   },
  { value: "automotive", label: "Automotive" },
  { value: "saas",       label: "SaaS"       },
];

function BrandCard({ brand: b, copy }: { brand: Brand; copy: (t: string, l: string) => void }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { copy(b.hexes.join(", "), "Brand palette copied"); setCopied(true); setTimeout(() => setCopied(false), 1400); }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card text-left transition-all duration-200 hover:border-border hover:-translate-y-0.5 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]"
    >
      <div className="flex h-16">
        {b.swatches.map((hex, i) => (
          <div key={i} className="flex-1 transition-[flex] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[&:hover]:flex-[2]" style={{ background: hex }} />
        ))}
      </div>
      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[0.9375rem] font-bold">{copied ? "Copied!" : b.name}</span>
          <span className="rounded-full bg-muted px-2 py-0.5 text-[0.5rem] font-bold uppercase tracking-widest text-muted-foreground">{b.catLabel}</span>
        </div>
        <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{b.principle}</p>
        <div className="flex flex-wrap gap-1">
          {b.hexes.map(hex => (
            <span key={hex} className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.5625rem] text-muted-foreground">{hex}</span>
          ))}
        </div>
      </div>
    </button>
  );
}

export function CollectionPanel({ copy }: { copy: (t: string, l: string) => void }) {
  const [filter, setFilter] = useState<CollFilter>("all");
  const visible = filter === "all" ? BRANDS : BRANDS.filter(b => b.cat.includes(filter));
  return (
    <div>
      <p className="mb-6 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
        Real color systems from{" "}
        <a href="https://github.com/voltagent/awesome-design-md" target="_blank" rel="noopener noreferrer" className="underline underline-offset-[3px] decoration-muted-foreground/40 hover:decoration-foreground/60 transition-colors">
          awesome-design-md
        </a>{" "}
        — 15 brands across AI, developer tools, design, fintech, consumer, and automotive.
      </p>
      <FilterPills options={COLL_FILTERS} active={filter} setActive={setFilter} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map(b => <BrandCard key={b.name} brand={b} copy={copy} />)}
      </div>
    </div>
  );
}
