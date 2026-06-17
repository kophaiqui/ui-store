import Link from "next/link";
import { StyleDemo } from "@/components/shared/StyleDemo";
import type { StyleMeta } from "@/lib/registry";

type Props = { id: string; meta: StyleMeta; count: number };

export function StyleCard({ id, meta, count }: Props) {
  const available = meta.status === "available";

  return (
    <Link
      href={`/style/${id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:border-border hover:shadow-md"
    >
      {/* Demo */}
      <div className="relative h-[180px] border-b border-border/60">
        <StyleDemo style={id} />
      </div>

      {/* Meta */}
      <div className="flex flex-1 flex-col px-4 py-3.5">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-sm font-semibold">{meta.name}</span>
          {available ? (
            <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[0.625rem] font-medium text-emerald-500">
              {count} component{count === 1 ? "" : "s"}
            </span>
          ) : (
            <span className="rounded-full border border-border/60 px-1.5 py-0.5 text-[0.625rem] font-medium uppercase tracking-wide text-muted-foreground/70">
              Coming soon
            </span>
          )}
        </div>
        <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{meta.tagline}</p>
        <span className="mt-auto text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
          {available ? "Browse components →" : "Preview →"}
        </span>
      </div>
    </Link>
  );
}
