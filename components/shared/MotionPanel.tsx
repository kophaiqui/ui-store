"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import type { MotionMeta } from "@/lib/registry";

type Props = { slug: string; meta: MotionMeta };

export function MotionPanel({ slug, meta }: Props) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const Pattern = dynamic(
    () => import(`@/motion/${slug}`).catch(() => () => null),
    { ssr: false, loading: () => <div className="h-16 w-32 animate-pulse rounded bg-muted/50" /> }
  );

  return (
    <div className="overflow-hidden rounded-xl border border-border/60 bg-card">
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
          <span className="text-[0.8125rem] font-medium">{meta.title}</span>
        </div>
        <Link
          href={`/motion/${slug}`}
          className="rounded-md border border-border/60 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
        >
          View →
        </Link>
      </div>

      {tab === "preview" ? (
        <div className="relative flex min-h-[140px] items-center justify-center overflow-hidden bg-muted/40 px-8 py-10">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, var(--preview-dot) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="relative">
            <Pattern />
          </div>
        </div>
      ) : (
        <CodeView slug={slug} />
      )}
    </div>
  );
}

function CodeView({ slug }: { slug: string }) {
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/motion-code?slug=${slug}`)
      .then((r) => r.json())
      .then((d) => setCode(d.code))
      .catch(() => setCode("// Could not load source"));
  }, [slug]);

  return (
    <div className="max-h-[300px] overflow-auto bg-muted/5">
      <pre className="p-5 text-[0.78125rem] leading-relaxed">
        <code className="font-mono text-foreground/85">{code ?? "Loading…"}</code>
      </pre>
    </div>
  );
}
