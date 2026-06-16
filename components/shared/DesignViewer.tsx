"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import hljs from "highlight.js/lib/core";
import tsx from "highlight.js/lib/languages/typescript";
import { cn } from "@/lib/utils";
import type { DesignMeta } from "@/lib/registry";

hljs.registerLanguage("typescript", tsx);

// hljs drops syntax highlighting inside JSX expression attributes {…}.
// This pass re-colors all tokens that were left unspanned.
function fixJSXHighlight(html: string): string {
  const parts = html.split(/(<\/?span[^>]*>)/);
  let depth = 0;

  const S = (cls: string, v: string) => `<span class="${cls}">${v}</span>`;

  return parts
    .map((part) => {
      if (/^<span/.test(part)) { depth++; return part; }
      if (/^<\/span/.test(part)) { depth--; return part; }
      if (depth > 0) return part;

      let out = part;

      // 1. JSX/XML tag names: <ComponentName or </ComponentName
      out = out.replace(/(&lt;\/?)([\w.:-]+)/g, (_, bracket, name) =>
        S("hljs-punctuation", bracket) +
        S(/^[A-Z]/.test(name) ? "hljs-title" : "hljs-tag", name)
      );

      // 2. Self-close /> and closing >
      out = out.replace(/\/&gt;/g, S("hljs-punctuation", "/&gt;"));
      out = out.replace(/&gt;/g,   S("hljs-punctuation", "&gt;"));

      // 3. JSX attribute names: word immediately before ={ or ="
      out = out.replace(/\b([\w-]+)(=(?:\{|&quot;))/g, (_, attr, eq) =>
        S("hljs-attr", attr) + eq
      );

      // 4. Operators: === !== && || =>
      out = out.replace(
        /(===|!==|==|!=|&amp;&amp;|\|\||=>)/g,
        S("hljs-operator", "$1")
      );

      // 5. Double-quoted strings (&quot;…&quot;)
      out = out.replace(
        /(&quot;)([^&]*)(&quot;)/g,
        (_, o, mid, c) => S("hljs-string", o + mid + c)
      );

      // 6. Template literals `…`
      out = out.replace(/(`[^`\n]*`)/g, S("hljs-string", "$1"));

      // 7. Line comments
      out = out.replace(/(\/\/[^\n]*)/g, S("hljs-comment", "$1"));

      return out;
    })
    .join("");
}

type Props = { slug: string; meta: DesignMeta; code: string };

export function DesignViewer({ slug, meta, code }: Props) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const highlighted = useMemo(
    () => fixJSXHighlight(hljs.highlight(code, { language: "typescript" }).value),
    [code]
  );

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
        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-zinc-950 px-8 py-12">
          {/* Grid with radial fade */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
            }}
          />
          {/* Edge vignette */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(9,9,11,0.85) 100%)",
            }}
          />
          <div className="relative">
            <Preview />
          </div>
        </div>
      ) : (
        <div className="relative max-h-[480px] overflow-auto bg-zinc-950">
          <pre className="p-5 text-[13px] leading-relaxed">
            <code
              className="hljs font-mono"
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          </pre>
        </div>
      )}
    </div>
  );
}
