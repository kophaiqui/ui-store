import fs from "fs";
import path from "path";
import { getAllDesigns, getAllCategories, getAllStyles } from "@/lib/registry";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { Sidebar, type SidebarSection } from "@/components/layout/Sidebar";
import { TableOfContents } from "@/components/layout/TableOfContents";

function getStylesForSlug(slug: string, category: string): string[] {
  const stylesDir = path.join(process.cwd(), "designs", category, slug, "styles");
  try {
    return fs
      .readdirSync(stylesDir)
      .filter((f) => f.endsWith(".ts"))
      .map((f) => f.replace(".ts", ""));
  } catch {
    return ["default"];
  }
}

export default function UILayout({ children }: { children: React.ReactNode }) {
  const designs = getAllDesigns();
  const categories = getAllCategories();
  const allStyles = getAllStyles();

  const sections: SidebarSection[] = categories.map((cat) => ({
    title: cat,
    items: Object.entries(designs)
      .filter(([, meta]) => meta.category === cat)
      .map(([slug, meta]) => {
        const styleIds = getStylesForSlug(slug, meta.category);
        return {
          label: meta.name,
          href: `/components/${slug}`,
          new: meta.new,
          variants: styleIds.map((id) => ({
            label: allStyles[id]?.name ?? id.charAt(0).toUpperCase() + id.slice(1),
            href: `/components/${slug}/${id}`,
          })),
        };
      }),
  }));

  return (
    <SectionLayout sidebar={<Sidebar sections={sections} />} toc={<TableOfContents />}>
      {children}
    </SectionLayout>
  );
}
