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

  const highlighted = useMemo(
    () => fixJSXHighlight(hljs.highlight(code, { language: "typescript" }).value),
    [code]
  );

  const Preview = dynamic(
    () =>
      import(`@/designs/${meta.category}/${slug}/Component`)
        .then((m) => m.default ?? (() => null))
        .catch(() => () => null),
    { ssr: false, loading: () => <div className="h-32 animate-pulse rounded bg-muted/50" /> }
  );

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      {/* Tab bar — tabs on the right */}
      <div className="flex items-center justify-end border-b border-border bg-muted/30 px-4 py-2">
        <div className="flex items-center rounded-md border border-border bg-muted p-0.5">
          {(["preview", "code"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "rounded px-2.5 py-0.5 text-[0.6875rem] font-medium capitalize transition-colors",
                tab === t
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground hover:text-foreground/90"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Preview — always mounted */}
      {tab === "preview" ? (
        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-background px-8 py-12">
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
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, var(--background) 100%)" }}
          />
          <div className="relative">
            <Preview />
          </div>
        </div>
      ) : (
        <div className="relative max-h-[480px] overflow-auto bg-background">
          <pre className="p-5 text-[0.8125rem] leading-relaxed">
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
