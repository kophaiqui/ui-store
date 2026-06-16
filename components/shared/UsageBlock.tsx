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
  bracket:  "text-zinc-500",
  tagName:  "text-sky-400",
  propName: "text-violet-400",
  eq:       "text-zinc-500",
  strVal:   "text-amber-400",
  exprVal:  "text-orange-400",
  boolProp: "text-emerald-400",
  text:     "text-zinc-300",
  space:    "",
};
// ─────────────────────────────────────────────────────────────────────────────

type ParsedProps = Record<string, unknown>;

function parseAttrs(attrStr: string): ParsedProps | null {
  const props: ParsedProps = {};
  const tokens = attrStr.match(/[\w-]+=(?:"[^"]*"|{[^}]*})|[\w-]+/g);
  if (!tokens) return props;

  for (const token of tokens) {
    const eqIdx = token.indexOf("=");
    if (eqIdx === -1) {
      props[token] = true;
    } else {
      const name = token.slice(0, eqIdx);
      const valStr = token.slice(eqIdx + 1);
      if (valStr.startsWith('"')) {
        props[name] = valStr.slice(1, -1);
      } else if (valStr.startsWith("{")) {
        const expr = valStr.slice(1, -1).trim();
        if (expr === "true") props[name] = true;
        else if (expr === "false") props[name] = false;
        else if (/^\d+(\.\d+)?$/.test(expr)) props[name] = Number(expr);
        else return null;
      }
    }
  }
  return props;
}

function parseInstances(code: string): ParsedProps[] | null {
  const RE = /<UI\w+([^>]*?)(?:>([\s\S]*?)<\/UI\w+>|\s*\/>)/g;
  const results: ParsedProps[] = [];
  let m: RegExpExecArray | null;

  while ((m = RE.exec(code)) !== null) {
    const attrs = parseAttrs(m[1]);
    if (attrs === null) return null;
    const children = m[2]?.trim();
    if (children) attrs.children = children;
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
        <span className="inline-block h-8 w-16 animate-pulse rounded-md bg-zinc-800" />
      ),
    }
  );

  return (
    <div className="relative overflow-hidden bg-zinc-950 px-6 py-8">
      {/* Grid with radial fade — visible at center, transparent at edges */}
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
      {/* Edge vignette to blend grid into background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(9,9,11,0.85) 100%)",
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
    <div className="overflow-hidden rounded-xl border border-zinc-800">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-2.5">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-zinc-400">{label}</span>
          {showTabs && (
            <div className="flex items-center rounded-md border border-zinc-700 bg-zinc-800 p-0.5">
              {(["preview", "code"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded px-2.5 py-0.5 text-[11px] font-medium capitalize transition-colors ${
                    tab === t
                      ? "bg-zinc-600 text-zinc-100"
                      : "text-zinc-500 hover:text-zinc-300"
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
          className="flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200"
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
        <pre className="overflow-x-auto bg-zinc-950 px-5 py-4 text-[13px] leading-relaxed">
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
