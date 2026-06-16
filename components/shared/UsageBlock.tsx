"use client";

import { useState } from "react";

type Props = { label: string; code: string };

export function UsageBlock({ label, code }: Props) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border/60">
      {/* Header row */}
      <div className="flex items-center justify-between border-b border-border/60 bg-muted/30 px-4 py-2">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 rounded-md border border-border/60 bg-background px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
        >
          {copied ? (
            <>
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto bg-muted/10 px-5 py-4 text-[13px] leading-relaxed">
        <code className="font-mono text-foreground/85">{code}</code>
      </pre>
    </div>
  );
}
