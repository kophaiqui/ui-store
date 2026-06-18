import { SectionLayout } from "@/components/layout/SectionLayout";
import { Sidebar, type SidebarSection } from "@/components/layout/Sidebar";
import { getAllDesigns, getAllCategories } from "@/lib/registry";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const designs = getAllDesigns();
  const categories = getAllCategories();

  const componentSections: SidebarSection[] = categories.map((cat) => ({
    title: cat,
    items: Object.entries(designs)
      .filter(([, meta]) => meta.category === cat)
      .map(([slug, meta]) => ({
        label: meta.name,
        href: `/components/${slug}`,
      })),
  }));

  const DOC_SECTIONS: SidebarSection[] = [
    {
      title: "Getting Started",
      items: [
        { label: "Introduction", href: "/docs/introduction" },
        { label: "Quick Start", href: "/docs/quick-start" },
        { label: "Installation", href: "/docs/installation" },
      ],
    },
    {
      title: "Foundations",
      items: [
        { label: "Design Tokens", href: "/docs/design-tokens" },
        { label: "Colors", href: "/docs/colors" },
        { label: "Typography", href: "/docs/typography" },
        { label: "Dark Mode", href: "/docs/dark-mode" },
        { label: "Accessibility", href: "/docs/accessibility" },
      ],
    },
    ...componentSections,
  ];

  return (
    <SectionLayout sidebar={<Sidebar sections={DOC_SECTIONS} />}>
      {children}
    </SectionLayout>
  );
}
