"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";

// ── JSX syntax highlighter ────────────────────────────────────────────────────
type TT = "bracket" | "tagName" | "propName" | "eq" | "strVal" | "exprVal" | "boolProp" | "text" | "space";
type Tok = { t: TT; v: string };

function tokenizeJSX(code: string): Tok[] {
  const out: Tok[] = [];
  let i = 0;
  let inTag = false;

  while (i < code.length) {
    if (code[i] === "<") {
      inTag = true;
      const closing = code[i + 1] === "/";
      out.push({ t: "bracket", v: closing ? "</" : "<" });
      i += closing ? 2 : 1;
      const m = code.slice(i).match(/^[\w.:-]+/);
      if (m) { out.push({ t: "tagName", v: m[0] }); i += m[0].length; }
      continue;
    }
    if (inTag && code[i] === ">" ) { out.push({ t: "bracket", v: ">" }); inTag = false; i++; continue; }
    if (inTag && code[i] === "/" && code[i + 1] === ">") { out.push({ t: "bracket", v: "/>" }); inTag = false; i += 2; continue; }

    if (inTag && /\s/.test(code[i])) {
      const ws = code.slice(i).match(/^\s+/)![0];
      out.push({ t: "space", v: ws });
      i += ws.length;
      const nm = code.slice(i).match(/^[\w.:-]+/);
      if (nm) {
        const name = nm[0];
        if (code[i + name.length] === "=") {
          out.push({ t: "propName", v: name }); i += name.length;
          out.push({ t: "eq", v: "=" }); i++;
          if (code[i] === '"') {
            const end = code.indexOf('"', i + 1);
            if (end !== -1) { out.push({ t: "strVal", v: code.slice(i, end + 1) }); i = end + 1; }
          } else if (code[i] === "{") {
            let depth = 0, j = i;
            while (j < code.length) { if (code[j] === "{") depth++; else if (code[j] === "}") { if (--depth === 0) { j++; break; } } j++; }
            out.push({ t: "exprVal", v: code.slice(i, j) }); i = j;
          }
        } else {
          out.push({ t: "boolProp", v: name }); i += name.length;
        }
      }
      continue;
    }

    if (!inTag) {
      const next = code.indexOf("<", i);
      const end = next === -1 ? code.length : next;
      if (end > i) { out.push({ t: "text", v: code.slice(i, end) }); i = end; } else i++;
      continue;
    }
    out.push({ t: "space", v: code[i] }); i++;
  }
  return out;
}

const TT_CLS: Record<TT, string> = {
  bracket:  "text-muted-foreground",
  tagName:  "text-sky-600 dark:text-sky-400",
  propName: "text-violet-600 dark:text-violet-400",
  eq:       "text-muted-foreground",
  strVal:   "text-amber-600 dark:text-amber-400",
  exprVal:  "text-orange-600 dark:text-orange-400",
  boolProp: "text-emerald-600 dark:text-emerald-400",
  text:     "text-foreground/90",
  space:    "",
};
// ─────────────────────────────────────────────────────────────────────────────

type ParsedProps = Record<string, unknown>;

// Sentinel returned when an expression can't be safely turned into a value.
const BAIL = Symbol("bail");

// Evaluates a JSX expression value (`{ … }`) into a concrete value, but ONLY
// for inert data: primitives and plain array/object literals (e.g. an `options`
// array of `{ label, value }`). Anything that could execute or render — JSX
// (`<svg/>`), function calls, identifiers, template strings — is rejected via a
// strict character whitelist, so we never evaluate arbitrary code. Usage strings
// come from the first-party registry, the same trust level as the modules we
// already `import()`; the whitelist is defense-in-depth on top of that.
function parseExpr(expr: string): unknown {
  if (expr === "true") return true;
  if (expr === "false") return false;
  if (expr === "undefined") return undefined;
  if (/^-?\d+(\.\d+)?$/.test(expr)) return Number(expr);
  if (/^(["']).*\1$/.test(expr)) return expr.slice(1, -1);

  // Data literals only: letters/digits, quotes, whitespace, and the structural
  // characters of arrays/objects/numbers. No `<`, `(`, `=`, `;`, backtick, etc.
  if (/^[\w$\s'"{}[\]:,.+-]+$/.test(expr)) {
    try {
      return Function(`"use strict";return (${expr});`)();
    } catch {
      return BAIL;
    }
  }
  return BAIL;
}

// Brace/quote-aware attribute parser. Reconstructs primitive and inert-data prop
// values into real props. Any expression that can't be safely evaluated — most
// importantly a JSX/ReactNode like `icon={<svg .../>}` — makes the parser bail
// (return null) so the caller falls back to the code view. Bailing is what
// prevents leaking garbage props (e.g. a bare `svg`/`width`) onto the real DOM
// element and rendering leftover markup as literal text.
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

    // Boolean shorthand: `disabled`, `loading`, …
    if (attrStr[i] !== "=") {
      props[name] = true;
      continue;
    }
    i++; // consume "="
    while (i < n && /\s/.test(attrStr[i])) i++;

    const ch = attrStr[i];
    if (ch === '"' || ch === "'") {
      const end = attrStr.indexOf(ch, i + 1);
      if (end === -1) return null;
      props[name] = attrStr.slice(i + 1, end);
      i = end + 1;
    } else if (ch === "{") {
      // Walk balanced braces so a JSX value's inner `{}` doesn't terminate early.
      let depth = 0, j = i;
      for (; j < n; j++) {
        if (attrStr[j] === "{") depth++;
        else if (attrStr[j] === "}" && --depth === 0) { j++; break; }
      }
      if (depth !== 0) return null;
      const expr = attrStr.slice(i + 1, j - 1).trim();
      const val = parseExpr(expr);
      if (val === BAIL) return null; // JSX/ReactNode or unsafe expr → bail to code view
      props[name] = val;
      i = j;
    } else {
      return null;
    }
  }
  return props;
}

// Scans `<UIxxx …>children</UIxxx>` / `<UIxxx … />` instances. The opening tag
// is walked char-by-char tracking quote and brace nesting so a `>` *inside* a
// prop value (e.g. inside `icon={<svg …>}`) doesn't prematurely end the tag.
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
      // Only plain-text children are safe to inject; nested JSX → bail.
      if (children.includes("<")) return null;
      if (children) attrs.children = children;
      i = ci + close.length;
    }

    results.push(attrs);
  }

  return results.length > 0 ? results : null;
}

function LivePreview({
  slug,
  category,
  instances,
}: {
  slug: string;
  category: string;
  instances: ParsedProps[];
}) {
  const Comp = dynamic(
    () =>
      import(`@/designs/${category}/${slug}/Component`).then((m) => ({
        default: m.default as React.ComponentType<ParsedProps>,
      })),
    {
      ssr: false,
      loading: () => (
        <span className="inline-block h-8 w-16 animate-pulse rounded-md bg-muted" />
      ),
    }
  );

  return (
    <div className="relative overflow-hidden bg-background px-6 py-8">
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
      {/* Content */}
      <div className="relative flex flex-wrap items-center justify-center gap-x-6 gap-y-5">
        {instances.map((props, i) => (
          <Comp key={i} {...props} />
        ))}
      </div>
    </div>
  );
}

type Props = {
  label: string;
  code: string;
  slug?: string;
  category?: string;
};

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
      {/* Header */}
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
                    tab === t
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:text-foreground/90"
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
              <svg
                width="11"
                height="11"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg
                width="11"
                height="11"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Content */}
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
