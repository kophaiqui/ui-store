import type { Metadata } from "next";
import { getAllStyles, getDesignsByStyle, DEFAULT_STYLE } from "@/lib/registry";
import { StyleCard } from "@/components/shared/StyleCard";

export const metadata: Metadata = {
  title: "Styles",
  description: "Browse the visual styles every component can wear — Default, Glass, Minimal, and more.",
};

export default function StylePage() {
  const styles = getAllStyles();

  // Default always first, then the rest in registry order.
  const entries = Object.entries(styles).sort(([a], [b]) =>
    a === DEFAULT_STYLE ? -1 : b === DEFAULT_STYLE ? 1 : 0
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Styles</h1>
        <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
          Every component can wear a different skin. Pick a style to see the components built in it.
          More styles are on the way.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(([id, meta]) => (
          <StyleCard
            key={id}
            id={id}
            meta={meta}
            count={Object.keys(getDesignsByStyle(id)).length}
          />
        ))}
      </div>
    </div>
  );
}
