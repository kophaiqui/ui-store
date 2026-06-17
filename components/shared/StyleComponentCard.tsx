"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import type { DesignMeta } from "@/lib/registry";

type Props = { slug: string; meta: DesignMeta };

/**
 * A live, interactive component card for the style gallery.
 * Unlike DesignCardPreview it is NOT wrapped in a link, so the component
 * inside stays fully interactive (open the accordion, drag the slider, …)
 * without routing away. A subtle "Open" link still leads to the full page.
 */
export function StyleComponentCard({ slug, meta }: Props) {
  const Preview = dynamic(
    () => import(`@/designs/${meta.category}/${slug}/Preview`).catch(() => () => null),
    { ssr: false, loading: () => <div className="h-16 w-32 animate-pulse rounded bg-muted/50" /> }
  );

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-colors hover:border-border">
      {/* Live preview with grid background — fixed height keeps every card aligned */}
      <div className="relative h-[240px] overflow-auto border-b border-border/60 bg-background">
        {/* Grid with radial fade */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
          }}
        />
        {/* Edge vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, var(--background) 100%)",
          }}
        />
        <div className="relative flex min-h-full items-center justify-center px-6 py-8">
          <Preview />
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between border-t border-border/60 px-4 py-3">
        <div>
          <div className="text-sm font-medium">{meta.name}</div>
          <div className="text-xs capitalize text-muted-foreground">{meta.category}</div>
        </div>
        <Link
          href={`/components/${slug}`}
          className="rounded-md border border-border/60 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
        >
          Open →
        </Link>
      </div>
    </div>
  );
}
