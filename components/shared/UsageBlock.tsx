"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { tokenizeJSX, TT_CLS, GRID_BG } from "@/lib/tokenizeJSX";

// ── JSX attribute/instance parser ────────────────────────────────────────────
type ParsedProps = Record<string, unknown>;
const BAIL = Symbol("bail");

function parseExpr(expr: string): unknown {
  if (expr === "true") return true;
  if (expr === "false") return false;
  if (expr === "undefined") return undefined;
  if (/^-?\d+(\.\d+)?$/.test(expr)) return Number(expr);
  if (/^(["']).*\1$/.test(expr)) return expr.slice(1, -1);
  if (/^[\w$\s'"{}[\]:,.+-]+$/.test(expr)) {
    try { return Function(`"use strict";return (${expr});`)(); } catch { return BAIL; }
  }
  return BAIL;
}

function parseAttrs(attrStr: string): ParsedProps | null {
  const props: ParsedProps = {};
  const n = attrStr.length;
  let i = 0;
  while (i < n) {
    if (/\s/.test(attrStr[i])) { i++; continue; }
    const nameMatch = attrStr.slice(i).match(/^[\w-]+/);
    if (!nameMatch) return null;
    const name = nameMatch[0];
    i += name.length;
    while (i < n && /\s/.test(attrStr[i])) i++;
    if (attrStr[i] !== "=") { props[name] = true; continue; }
    i++;
    while (i < n && /\s/.test(attrStr[i])) i++;
    const ch = attrStr[i];
    if (ch === '"' || ch === "'") {
      const end = attrStr.indexOf(ch, i + 1);
      if (end === -1) return null;
      props[name] = attrStr.slice(i + 1, end);
      i = end + 1;
    } else if (ch === "{") {
      let depth = 0, j = i;
      for (; j < n; j++) {
        if (attrStr[j] === "{") depth++;
        else if (attrStr[j] === "}" && --depth === 0) { j++; break; }
      }
      if (depth !== 0) return null;
      const expr = attrStr.slice(i + 1, j - 1).trim();
      const val = parseExpr(expr);
      if (val === BAIL) return null;
      props[name] = val;
      i = j;
    } else {
      return null;
    }
  }
  return props;
}

function parseInstances(code: string): ParsedProps[] | null {
  const results: ParsedProps[] = [];
  const n = code.length;
  let i = 0;
  while (i < n) {
    const lt = code.indexOf("<UI", i);
    if (lt === -1) break;
    const nameMatch = code.slice(lt + 1).match(/^UI\w+/);
    if (!nameMatch) { i = lt + 1; continue; }
    const tagName = nameMatch[0];
    let j = lt + 1 + tagName.length;
    let quote: string | null = null;
    let brace = 0;
    let tagEnd = -1;
    let selfClose = false;
    for (; j < n; j++) {
      const c = code[j];
      if (quote) { if (c === quote) quote = null; continue; }
      if (c === '"' || c === "'") { quote = c; continue; }
      if (c === "{") { brace++; continue; }
      if (c === "}") { if (brace > 0) brace--; continue; }
      if (brace === 0) {
        if (c === "/" && code[j + 1] === ">") { selfClose = true; tagEnd = j + 2; break; }
        if (c === ">") { tagEnd = j + 1; break; }
      }
    }
    if (tagEnd === -1) return null;
    const attrStr = code.slice(lt + 1 + tagName.length, tagEnd - (selfClose ? 2 : 1));
    const attrs = parseAttrs(attrStr);
    if (attrs === null) return null;
    if (selfClose) {
      i = tagEnd;
    } else {
      const close = `</${tagName}>`;
      const ci = code.indexOf(close, tagEnd);
      if (ci === -1) return null;
      const children = code.slice(tagEnd, ci).trim();
      if (children.includes("<")) return null;
      if (children) attrs.children = children;
      i = ci + close.length;
    }
    results.push(attrs);
  }
  return results.length > 0 ? results : null;
}
// ─────────────────────────────────────────────────────────────────────────────

function LivePreview({ slug, category, instances }: { slug: string; category: string; instances: ParsedProps[] }) {
  const Comp = dynamic(
    () => import(`@/designs/${category}/${slug}/Component`).then((m) => ({
      default: m.default as React.ComponentType<ParsedProps>,
    })),
    { ssr: false, loading: () => <span className="inline-block h-8 w-16 animate-pulse rounded-md bg-muted" /> }
  );

  return (
    <div className="relative overflow-hidden bg-background px-6 py-8">
      <div className="pointer-events-none absolute inset-0" style={GRID_BG} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, var(--background) 100%)" }} />
      <div className="relative flex flex-wrap items-center justify-center gap-x-6 gap-y-5">
        {instances.map((props, i) => <Comp key={i} {...props} />)}
      </div>
    </div>
  );
}

type Props = { label: string; code: string; slug?: string; category?: string };

export function UsageBlock({ label, code, slug, category }: Props) {
  const [copied, setCopied] = useState(false);
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const instances = useMemo(
    () => (slug && category ? parseInstances(code) : null),
    [code, slug, category]
  );
  const showTabs = instances !== null && instances.length > 0;

  function copy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div className="flex items-center justify-between border-b border-border bg-card px-4 py-2.5">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-muted-foreground">{label}</span>
          {showTabs && (
            <div className="flex items-center rounded-md border border-border bg-muted p-0.5">
              {(["preview", "code"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded px-2.5 py-0.5 text-[0.6875rem] font-medium capitalize transition-colors ${
                    tab === t ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground/90"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 rounded-md border border-border bg-muted px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-input hover:text-foreground"
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

      {showTabs && tab === "preview" ? (
        <LivePreview slug={slug!} category={category!} instances={instances} />
      ) : (
        <pre className="overflow-x-auto bg-background px-5 py-4 text-[0.8125rem] leading-relaxed">
          <code className="font-mono">
            {tokenizeJSX(code).map((tok, idx) =>
              tok.t === "space" ? tok.v : <span key={idx} className={TT_CLS[tok.t]}>{tok.v}</span>
            )}
          </code>
        </pre>
      )}
    </div>
  );
}
