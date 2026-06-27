import { getAllFonts } from "@/lib/registry";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { FontSidebarClient } from "@/components/shared/FontSidebarClient";

export default function FontsLayout({ children }: { children: React.ReactNode }) {
  const fonts = getAllFonts();
  return (
    <SectionLayout sidebar={<FontSidebarClient fonts={fonts} />}>
      {children}
    </SectionLayout>
  );
}
