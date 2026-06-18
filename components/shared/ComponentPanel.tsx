"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import type { DesignMeta } from "@/lib/registry";

type Props = { slug: string; meta: DesignMeta };

export function ComponentPanel({ slug, meta }: Props) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const Preview = dynamic(
    () =>
      import(`@/designs/${meta.category}/${slug}/Component`)
        .then((m) => m.default ?? (() => null))
        .catch(() => () => null),
    { ssr: false, loading: () => <div className="h-16 w-32 animate-pulse rounded bg-muted/50" /> }
  );

  async function copyCode() {
    try {
      const res = await fetch(`/api/design-code?slug=${slug}&category=${meta.category}`);
      const { code } = await res.json();
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border/60 bg-card">
      {/* Panel header */}
      <div className="flex items-center justify-between border-b border-border/60 bg-muted/20 px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
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
          <div className="h-3.5 w-px bg-border/60" />
          <span className="text-[0.8125rem] font-medium">{meta.name}</span>
          {meta.new && (
            <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[0.625rem] font-medium text-emerald-500">
              New
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {tab === "code" && (
            <button
              onClick={copyCode}
              className="flex items-center gap-1.5 rounded-md border border-border/60 bg-background px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
            >
              {copied ? (
                <><CopyCheckIcon /> Copied</>
              ) : (
                <><CopyIcon /> Copy</>
              )}
            </button>
          )}
          <Link
            href={`/components/${slug}`}
            className="rounded-md border border-border/60 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
          >
            View →
          </Link>
        </div>
      </div>

      {/* Panel body */}
      {tab === "preview" ? (
        <div className="relative flex min-h-[180px] items-center justify-center overflow-hidden bg-background px-8 py-10">
          {/* Grid with radial fade — visible at center, transparent at edges */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
            }}
          />
          {/* Edge vignette to blend grid into background */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, var(--background) 100%)",
            }}
          />
          <div className="relative">
            <Preview />
          </div>
        </div>
      ) : (
        <CodeView slug={slug} category={meta.category} />
      )}
    </div>
  );
}

function CodeView({ slug, category }: { slug: string; category: string }) {
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/design-code?slug=${slug}&category=${category}`)
      .then((r) => r.json())
      .then((d) => setCode(d.code))
      .catch(() => setCode("// Could not load source"));
  }, [slug, category]);

  return (
    <div className="max-h-[400px] overflow-auto bg-muted/5">
      <pre className="p-5 text-[0.78125rem] leading-relaxed">
        <code className="font-mono text-foreground/85">
          {code ?? "Loading…"}
        </code>
      </pre>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CopyCheckIcon() {
  return (
    <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
