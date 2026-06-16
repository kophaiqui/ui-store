import { getAllFonts } from "@/lib/registry";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { Sidebar, type SidebarSection } from "@/components/layout/Sidebar";

export default function FontsLayout({ children }: { children: React.ReactNode }) {
  const fonts = getAllFonts();

  const byCategory = Object.entries(fonts).reduce<Record<string, { slug: string; name: string }[]>>(
    (acc, [slug, meta]) => {
      const cat = meta.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push({ slug, name: meta.name });
      return acc;
    },
    {}
  );

  const sections: SidebarSection[] = Object.entries(byCategory).map(([cat, items]) => ({
    title: cat,
    items: items.map(({ slug, name }) => ({ label: name, href: `/fonts/${slug}` })),
  }));

  return (
    <SectionLayout sidebar={<Sidebar sections={sections} />}>
      {children}
    </SectionLayout>
  );
}
