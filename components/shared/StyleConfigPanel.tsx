"use client";

import { useState, useMemo } from "react";
import hljs from "highlight.js/lib/core";
import ts from "highlight.js/lib/languages/typescript";
import { cn } from "@/lib/utils";

hljs.registerLanguage("typescript", ts);

function highlight(code: string): string {
  return hljs.highlight(code, { language: "typescript" }).value;
}

type Props = {
  code: string;
  variant?: string;
};

export function StyleConfigPanel({ code, variant = "default" }: Props) {
  const [copied, setCopied] = useState(false);

  const highlighted = useMemo(() => highlight(code), [code]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-2">
        <span className="text-[0.6875rem] font-medium text-muted-foreground/60 uppercase tracking-widest">
          styles/{variant}.ts
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5 rounded px-2 py-0.5 text-[0.6875rem] font-medium transition-colors",
            copied
              ? "text-emerald-400"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {copied ? (
            <>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M1.5 6L4.5 9L10.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
                <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
                <path d="M8 4V2.5A1.5 1.5 0 0 0 6.5 1H2.5A1.5 1.5 0 0 0 1 2.5v4A1.5 1.5 0 0 0 2.5 8H4" stroke="currentColor" strokeWidth="1.25" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="relative max-h-[480px] overflow-auto bg-background">
        <pre className="p-5 text-[0.8125rem] leading-relaxed">
          <code
            className="hljs font-mono"
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        </pre>
      </div>

      {/* How-to hint */}
      <div className="border-t border-border/60 bg-muted/20 px-4 py-3">
        <p className="text-[0.75rem] text-muted-foreground leading-relaxed">
          Copy this config, modify the values, then pass it as{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.7rem] text-foreground/80">
            styleConfig
          </code>{" "}
          to the component. Every token is a plain Tailwind string — no build step needed.
        </p>
      </div>
    </div>
  );
}
