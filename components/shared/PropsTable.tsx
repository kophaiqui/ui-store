import type { PropDef } from "@/lib/registry";

type Props = { props: PropDef[] };

export function PropsTable({ props }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-border/60">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/60 bg-muted/30">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
              Prop
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
              Type
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
              Default
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/40">
          {props.map((p) => (
            <tr key={p.name} className="transition-colors hover:bg-muted/20">
              <td className="px-4 py-3 font-mono text-[13px] font-medium text-foreground">
                {p.name}
              </td>
              <td className="px-4 py-3">
                <code className="rounded-md bg-muted/60 px-1.5 py-0.5 font-mono text-[12px] text-violet-400 dark:text-violet-300">
                  {p.type}
                </code>
              </td>
              <td className="px-4 py-3">
                {p.default !== "—" ? (
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
          ))}
        </tbody>
      </table>
    </div>
  );
}
