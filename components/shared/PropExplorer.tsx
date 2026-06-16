"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import type { PropDef } from "@/lib/registry";

// "\"solid\" | \"outline\"" → ["solid", "outline"]
// "boolean"               → ["false", "true"]
// "string" / "ReactNode"  → null (not explorable)
function parseEnumValues(typeStr: string): string[] | null {
  const t = typeStr.trim();
  if (t === "boolean") return ["false", "true"];
  const matches = t.match(/"([^"]+)"/g);
  if (matches && matches.length >= 2) return matches.map((m) => m.replace(/"/g, ""));
  return null;
}

// "\"solid\"" → "solid" | "false" → false | "62" → 62
function parseDefaultValue(val: string): unknown {
  if (val === "false" || val === "undefined") return val === "false" ? false : undefined;
  if (val === "true") return true;
  const q = val.match(/^"(.+)"$/);
  if (q) return q[1];
  const n = Number(val);
  if (!isNaN(n) && val.trim() !== "") return n;
  return val;
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

type Props = {
  slug: string;
  category: string;
  props: PropDef[];
};

export function PropExplorer({ slug, category, props }: Props) {
  const [activeProp, setActiveProp] = useState<string | null>(null);

  const enriched = props.map((p) => ({ ...p, values: parseEnumValues(p.type) }));

  const defaults = Object.fromEntries(
    props.map((p) => [p.name, parseDefaultValue(p.default)])
  );

  const selected = enriched.find((p) => p.name === activeProp);

  // next/dynamic with a template literal — webpack bundles all matching modules at build time
  const Comp = dynamic(
    () =>
      import(`@/designs/${category}/${slug}/Component`).then((m) => ({
        default: m.default as React.ComponentType<Record<string, unknown>>,
      })),
    {
      ssr: false,
      loading: () => (
        <span className="inline-block h-8 w-16 animate-pulse rounded-md bg-zinc-800" />
      ),
    }
  );

  function toggle(name: string) {
    setActiveProp((prev) => (prev === name ? null : name));
  }

  return (
    <div className="space-y-3">
      {/* Props table — rows with explorable values are clickable */}
      <div className="overflow-hidden rounded-xl border border-border/60">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/60 bg-muted/30">
              {(["Prop", "Type", "Default", "Description"] as const).map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground/70"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40">
            {enriched.map((p) => {
              const isActive = activeProp === p.name;
              const isClickable = p.values !== null;
              return (
                <tr
                  key={p.name}
                  onClick={() => isClickable && toggle(p.name)}
                  className={cn(
                    "transition-colors",
                    isClickable ? "cursor-pointer" : "",
                    isActive ? "bg-emerald-500/[0.05]" : "hover:bg-muted/20"
                  )}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "font-mono text-[13px] font-medium transition-colors",
                          isActive ? "text-emerald-400" : "text-foreground"
                        )}
                      >
                        {p.name}
                      </span>
                      {isClickable && (
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={cn(
                            "shrink-0 transition-all duration-200",
                            isActive ? "rotate-90 text-emerald-500" : "text-muted-foreground/40"
                          )}
                        >
                          <path d="M2.5 1.5 6 4.5 2.5 7.5" />
                        </svg>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <code className="rounded-md bg-muted/60 px-1.5 py-0.5 font-mono text-[12px] text-violet-400 dark:text-violet-300">
                      {p.type}
                    </code>
                  </td>
                  <td className="px-4 py-3">
                    {p.default !== "—" && p.default !== "undefined" ? (
                      <code className="rounded-md bg-muted/60 px-1.5 py-0.5 font-mono text-[12px] text-amber-500 dark:text-amber-400">
                        {p.default}
                      </code>
                    ) : (
                      <span className="text-muted-foreground/40">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-[13px] text-muted-foreground">
                    {p.description}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Live preview panel */}
      {selected?.values && (
        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
          <div className="flex items-center gap-2.5 border-b border-zinc-800/80 px-5 py-3">
            <span className="font-mono text-[12px] font-medium text-emerald-400">
              {selected.name}
            </span>
            <span className="text-[11px] text-zinc-600">
              · all values, others at default
            </span>
          </div>

          <div className="flex flex-wrap items-end justify-center gap-x-8 gap-y-6 px-8 py-8">
            {selected.values.map((val) => {
              const isBool = selected.type.trim() === "boolean";
              const propValue =
                val === "true" ? true : val === "false" ? false : val;

              const overrides: Record<string, unknown> = {
                ...defaults,
                [selected.name]: propValue,
              };

              // For string enum props, use the capitalized value as button label
              // so each item is self-identifying at a glance
              if (!isBool) {
                overrides.children = capitalize(val);
              }

              return (
                <div key={val} className="flex flex-col items-center gap-2.5">
                  <div className="flex items-center justify-center">
                    <Comp {...overrides} />
                  </div>
                  <span className="font-mono text-[11px] text-zinc-600">{val}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
