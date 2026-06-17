import type { Metadata } from "next";
import data from "./licenses.json";

export const metadata: Metadata = {
  title: "Open-Source Licenses",
  description: "Third-party open-source software bundled with this product.",
};

export default function LicensesPage() {
  const { generated, count, summary, packages } = data;

  return (
    <div className="px-8 py-10 max-w-3xl">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-semibold tracking-tight">
          Open-Source Licenses
        </h1>
        <p className="text-muted-foreground">
          This product is built on open-source software. We&rsquo;re grateful to
          the maintainers of the {count} packages below. Full license texts are
          available in{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-[0.8125rem]">
            THIRD_PARTY_LICENSES.md
          </code>
          .
        </p>
        <p className="mt-1 text-xs text-muted-foreground/70">
          Generated {generated}.
        </p>
      </div>

      {/* License summary */}
      <div className="mb-10 flex flex-wrap gap-2">
        {summary.map(([license, n]) => (
          <span
            key={license}
            className="rounded-full border border-border bg-muted/30 px-3 py-1 text-xs font-medium"
          >
            {license}
            <span className="ml-1.5 tabular-nums text-muted-foreground">{n}</span>
          </span>
        ))}
      </div>

      {/* Package list */}
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30 text-left">
              <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                Package
              </th>
              <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                Version
              </th>
              <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                License
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {packages.map((p) => (
              <tr key={`${p.name}@${p.version}`} className="hover:bg-muted/20">
                <td className="px-4 py-2.5 font-medium">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-violet-400"
                    >
                      {p.name}
                    </a>
                  ) : (
                    p.name
                  )}
                </td>
                <td className="px-4 py-2.5 font-mono text-xs tabular-nums text-muted-foreground">
                  {p.version}
                </td>
                <td className="px-4 py-2.5">
                  <code className="rounded bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-violet-400">
                    {p.license}
                  </code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
