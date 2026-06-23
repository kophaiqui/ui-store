"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = { token: string; label: string; description: string };

export function ColorSwatch({ token, label, description }: Props) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(`var(${token})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      onClick={copy}
      className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card p-3 text-left transition-colors hover:border-border"
    >
      {/* Swatch */}
      <div
        className="h-10 w-10 shrink-0 rounded-lg border border-black/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
        style={{ backgroundColor: `var(${token})` }}
      />

      {/* Labels */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-medium text-foreground">{label}</span>
          <span
            className={cn(
              "text-[0.6875rem] font-medium transition-colors duration-150",
              copied ? "text-emerald-400" : "text-muted-foreground/40 group-hover:text-muted-foreground/70"
            )}
          >
            {copied ? "copied!" : "copy"}
          </span>
        </div>
        <code className="block truncate font-mono text-[0.7rem] text-muted-foreground/60">
          var({token})
        </code>
        <span className="text-[0.7rem] text-muted-foreground/50">{description}</span>
      </div>
    </button>
  );
}
