import { SectionLayout } from "@/components/layout/SectionLayout";
import { ColorSidebarNav } from "@/components/shared/ColorSidebarNav";

export default function ColorsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SectionLayout sidebar={<ColorSidebarNav />}>
      {children}
    </SectionLayout>
  );
}
