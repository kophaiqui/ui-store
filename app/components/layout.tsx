import { getAllDesigns, getAllCategories } from "@/lib/registry";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { Sidebar, type SidebarSection } from "@/components/layout/Sidebar";

export default function UILayout({ children }: { children: React.ReactNode }) {
  const designs = getAllDesigns();
  const categories = getAllCategories();

  const sections: SidebarSection[] = categories.map((cat) => ({
    title: cat,
    items: Object.entries(designs)
      .filter(([, meta]) => meta.category === cat)
      .map(([slug, meta]) => ({
        label: meta.name,
        href: `/components/${slug}`,
        new: meta.new,
      })),
  }));

  return (
    <SectionLayout sidebar={<Sidebar sections={sections} />}>
      {children}
    </SectionLayout>
  );
}
