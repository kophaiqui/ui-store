import { getAllDesigns, getAllCategories } from "@/lib/registry";
import { DesignCardPreview } from "@/components/shared/DesignCardPreview";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "UI" };

export default function UIPage() {
  const designs = getAllDesigns();
  const categories = getAllCategories();

  return (
    <div className="px-8 py-10">
      <div className="mb-8">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">UI Designs</h1>
        <p className="text-muted-foreground">
          {Object.keys(designs).length} designs across {categories.length} categories
        </p>
      </div>

      {categories.map((cat) => {
        const items = Object.entries(designs).filter(([, m]) => m.category === cat);
        return (
          <section key={cat} className="mb-12">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {cat}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {items.map(([slug, meta]) => (
                <DesignCardPreview key={slug} slug={slug} meta={meta} linkBase="/ui" />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
