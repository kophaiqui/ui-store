import { getAllDesigns, getAllCategories } from "@/lib/registry";
import { DesignCardPreview } from "@/components/shared/DesignCardPreview";
import { LibraryTabs } from "@/components/shared/LibraryTabs";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Library" };

type Props = { searchParams: Promise<{ category?: string }> };

export default async function LibraryPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const allDesigns = getAllDesigns();
  const categories = getAllCategories();

  const filtered = category
    ? Object.entries(allDesigns).filter(([, meta]) => meta.category === category)
    : Object.entries(allDesigns);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">Library</h1>
        <p className="text-muted-foreground">
          {filtered.length} design{filtered.length !== 1 ? "s" : ""}
          {category ? ` in ${category}` : ""}
        </p>
      </div>

      <LibraryTabs categories={categories} active={category} />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map(([slug, meta]) => (
          <DesignCardPreview key={slug} slug={slug} meta={meta} />
        ))}
      </div>
    </div>
  );
}
