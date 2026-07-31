"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import hljs from "highlight.js/lib/core";
import tsx from "highlight.js/lib/languages/typescript";
import { Download, Check, RotateCcw, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MotionMeta } from "@/lib/registry";

hljs.registerLanguage("typescript", tsx);

type Props = { slug: string; meta: MotionMeta; code: string };

export function MotionViewer({ slug, meta, code }: Props) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [downloaded, setDownloaded] = useState(false);
  const [copiedForAI, setCopiedForAI] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  const canReplay = meta.category !== "interaction";

  function handleDownload() {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slug}.tsx`;
    a.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  }

  async function handleCopyForAI() {
    try {
      const bundle = [
        `# ${meta.title} (motion pattern)`,
        meta.description,
        "",
        "This is a self-contained motion pattern built on the `motion` (Framer Motion) library.",
        "Every timing/distance value is a prop with a default — override anything, nothing is hardcoded.",
        "",
        `\`\`\`tsx\n// motion/${slug}.tsx\n${code}\`\`\``,
      ].join("\n");
      await navigator.clipboard.writeText(bundle);
      setCopiedForAI(true);
      setTimeout(() => setCopiedForAI(false), 2000);
    } catch {
      setCopiedForAI(false);
    }
  }

  const highlighted = useMemo(
    () => hljs.highlight(code, { language: "typescript" }).value,
    [code]
  );

  const Pattern = dynamic(
    () => import(`@/motion/${slug}`).catch(() => () => null),
    { ssr: false, loading: () => <div className="h-32 animate-pulse rounded bg-muted/50" /> }
  );

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-2">
        <div className="flex items-center gap-1">
          <button
            onClick={handleDownload}
            className={cn(
              "flex items-center gap-1.5 rounded px-2 py-1 text-[0.6875rem] font-medium transition-colors",
              downloaded ? "text-emerald-500" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {downloaded ? <Check size={12} /> : <Download size={12} />}
            {downloaded ? "Downloaded" : "Download"}
          </button>
          <button
            onClick={handleCopyForAI}
            title="Copy the pattern source, ready to paste to an AI agent"
            className={cn(
              "flex items-center gap-1.5 rounded px-2 py-1 text-[0.6875rem] font-medium transition-colors",
              copiedForAI ? "text-emerald-500" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {copiedForAI ? <Check size={12} /> : <Bot size={12} />}
            {copiedForAI ? "Copied" : "Copy for AI"}
          </button>
          {canReplay && tab === "preview" && (
            <button
              onClick={() => setReplayKey((k) => k + 1)}
              className="flex items-center gap-1.5 rounded px-2 py-1 text-[0.6875rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <RotateCcw size={12} />
              Replay
            </button>
          )}
        </div>
        <div className="flex items-center rounded-md border border-border bg-muted p-0.5">
          {(["preview", "code"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "rounded px-2.5 py-0.5 text-[0.6875rem] font-medium capitalize transition-colors",
                tab === t ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground/90"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {tab === "preview" ? (
        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-card px-8 py-12">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, var(--preview-dot) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="relative">
            <Pattern key={replayKey} />
          </div>
        </div>
      ) : (
        <div className="relative max-h-[480px] overflow-auto bg-background">
          <pre className="p-5 text-[0.8125rem] leading-relaxed">
            <code className="hljs font-mono" dangerouslySetInnerHTML={{ __html: highlighted }} />
          </pre>
        </div>
      )}
    </div>
  );
}
