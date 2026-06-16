import { getAllDesigns, getAllCategories } from "@/lib/registry";
import { ComponentPanel } from "@/components/shared/ComponentPanel";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Components" };

export default function ComponentsPage() {
  const designs = getAllDesigns();
  const categories = getAllCategories();

  return (
    <div className="px-8 py-10">
      <div className="mb-10">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">Components</h1>
        <p className="text-[15px] text-muted-foreground">
          {Object.keys(designs).length} designs across {categories.length} categories — click any to see the code.
        </p>
      </div>

      {categories.map((cat) => {
        const items = Object.entries(designs).filter(([, m]) => m.category === cat);
        return (
          <section key={cat} id={cat} className="mb-14 scroll-mt-20">
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {cat}
            </h2>
            <div className="space-y-4">
              {items.map(([slug, meta]) => (
                <div key={slug} id={slug} className="scroll-mt-20">
                  <ComponentPanel slug={slug} meta={meta} />
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
