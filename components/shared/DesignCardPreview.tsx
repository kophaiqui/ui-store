"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import type { DesignMeta } from "@/lib/registry";

type Props = { slug: string; meta: DesignMeta; linkBase?: string; showNew?: boolean };

export function DesignCardPreview({ slug, meta, linkBase = "/components", showNew: _showNew = false }: Props) {
  const Preview = dynamic(
    () =>
      import(`@/designs/${meta.category}/${slug}/Component`)
        .then((m) => m.default ?? (() => null))
        .catch(() => () => null),
    { ssr: false, loading: () => <div className="h-24 animate-pulse rounded bg-muted/50" /> }
  );

  return (
    <Link
      href={`${linkBase}/${slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-[0_2px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.4)] transition-all hover:border-border hover:shadow-[0_6px_24px_rgba(0,0,0,0.13)] dark:hover:shadow-[0_6px_28px_rgba(0,0,0,0.6)]"
    >
      {/* Preview area */}
      <div className="relative flex h-[160px] shrink-0 items-center justify-center overflow-hidden bg-background px-6 py-8">
        {/* Grid bg — fades from center */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            maskImage: "radial-gradient(ellipse 65% 65% at 50% 50%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 65% 65% at 50% 50%, black 0%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, var(--background) 100%)",
          }}
        />
        <div className={cn("relative pointer-events-none select-none", meta.previewClass)}>
          <Preview />
        </div>
      </div>

      {/* Meta */}
      <div className="border-t border-border/60 px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{meta.name}</span>
            </div>
            <div className="text-xs capitalize text-muted-foreground">{meta.category}</div>
          </div>
          <span className="text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
