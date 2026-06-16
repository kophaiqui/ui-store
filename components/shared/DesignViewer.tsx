"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import type { DesignMeta } from "@/lib/registry";

type Props = { slug: string; meta: DesignMeta; code: string };

export function DesignViewer({ slug, meta, code }: Props) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const Preview = dynamic(
    () =>
      import(`@/designs/${meta.category}/${slug}/Preview`).catch(
        () => () => null
      ),
    { ssr: false, loading: () => <div className="h-32 animate-pulse rounded bg-muted/50" /> }
  );

  function copyCode() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-2">
        <div className="flex gap-1">
          {(["preview", "code"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "rounded-md px-3 py-1 text-xs font-medium capitalize transition-colors",
                tab === t
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "code" && (
          <button
            onClick={copyCode}
            className="flex items-center gap-1.5 rounded-md border border-border/60 bg-background px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
          >
            {copied ? (
              <>
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Copied
              </>
            ) : (
              <>
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copy
              </>
            )}
          </button>
        )}
      </div>

      {/* Content */}
      {tab === "preview" ? (
        <div className="flex min-h-[280px] items-center justify-center bg-muted/10 px-8 py-12 dark:bg-muted/5">
          <Preview />
        </div>
      ) : (
        <div className="relative max-h-[480px] overflow-auto">
          <pre className="p-5 text-[13px] leading-relaxed">
            <code className="font-mono text-foreground/90">{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
