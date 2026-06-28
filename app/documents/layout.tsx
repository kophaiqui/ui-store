import { SectionLayout } from "@/components/layout/SectionLayout";
import { DocsSidebar } from "@/components/docs/DocsSidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SectionLayout sidebar={<DocsSidebar />}>
      {children}
    </SectionLayout>
  );
}
