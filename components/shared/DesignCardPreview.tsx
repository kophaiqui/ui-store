"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import type { DesignMeta } from "@/lib/registry";

type Props = { slug: string; meta: DesignMeta; linkBase?: string };

export function DesignCardPreview({ slug, meta, linkBase = "/ui" }: Props) {
  const Preview = dynamic(
    () =>
      import(`@/designs/${meta.category}/${slug}/Preview`).catch(
        () => () => null
      ),
    { ssr: false, loading: () => <div className="h-24 animate-pulse rounded bg-muted/50" /> }
  );

  return (
    <Link
      href={`${linkBase}/${slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:border-border hover:shadow-md"
    >
      {/* Preview area */}
      <div className="flex min-h-[160px] items-center justify-center bg-muted/20 px-6 py-8 dark:bg-muted/10">
        <Preview />
      </div>

      {/* Meta */}
      <div className="border-t border-border/60 px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{meta.name}</span>
              {meta.new && (
                <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-500">
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
