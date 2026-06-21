"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import type { DesignMeta } from "@/lib/registry";

type Props = { slug: string; meta: DesignMeta; href?: string; styleConfig?: Record<string, unknown> };

/**
 * A live, interactive component card for the style gallery.
 * Unlike DesignCardPreview it is NOT wrapped in a link, so the component
 * inside stays fully interactive (open the accordion, drag the slider, …)
 * without routing away. A subtle "Open" link still leads to the full page.
 */
export function StyleComponentCard({ slug, meta, href = `/components/${slug}`, styleConfig }: Props) {
  const Preview = dynamic<Record<string, unknown>>(
    () =>
      import(`@/designs/${meta.category}/${slug}/Component`)
        .then((m) => m.default ?? (() => null))
        .catch(() => () => null),
    { ssr: false, loading: () => <div className="h-16 w-32 animate-pulse rounded bg-muted/50" /> }
  );

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-colors hover:border-border">
      {/* Live preview with grid background — fixed height keeps every card aligned */}
      <div className="relative h-[240px] overflow-auto border-b border-border/60 bg-background">
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        {/* Edge vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, rgba(0,0,0,0.32) 100%)" }}
        />
        <div className="relative flex min-h-full items-center justify-center px-6 py-8">
          <Preview {...(styleConfig ? { styleConfig } : {})} />
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between border-t border-border/60 px-4 py-3">
        <div>
          <div className="text-sm font-medium">{meta.name}</div>
          <div className="text-xs capitalize text-muted-foreground">{meta.category}</div>
        </div>
        <Link
          href={href}
          className="rounded-md border border-border/60 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
        >
          Open →
        </Link>
      </div>
    </div>
  );
}
