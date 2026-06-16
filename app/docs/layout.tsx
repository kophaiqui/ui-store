import { SectionLayout } from "@/components/layout/SectionLayout";
import { Sidebar, type SidebarSection } from "@/components/layout/Sidebar";

const DOC_SECTIONS: SidebarSection[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs" },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Button", href: "/docs/button" },
    ],
  },
  {
    title: "Motion",
    items: [
      { label: "Hover", href: "/docs/hover" },
    ],
  },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SectionLayout sidebar={<Sidebar sections={DOC_SECTIONS} />}>
      {children}
    </SectionLayout>
  );
}
