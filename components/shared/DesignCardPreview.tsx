"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import type { DesignMeta } from "@/lib/registry";

type Props = { slug: string; meta: DesignMeta; linkBase?: string; showNew?: boolean };

export function DesignCardPreview({ slug, meta, linkBase = "/components", showNew = true }: Props) {
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
      className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:border-border hover:shadow-md"
    >
      {/* Preview area */}
      <div className="relative flex min-h-[160px] items-center justify-center overflow-hidden bg-background px-6 py-8">
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
        <div className="relative pointer-events-none select-none">
          <Preview />
        </div>
      </div>

      {/* Meta */}
      <div className="border-t border-border/60 px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{meta.name}</span>
              {showNew && meta.new && (
                <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[0.625rem] font-medium text-emerald-500">
                  New
                </span>
              )}
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
