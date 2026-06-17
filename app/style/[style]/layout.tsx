import { getStyle, getDesignsByStyle, getAllCategories } from "@/lib/registry";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { StyleSidebar, StyleToc, type StyleNavSection } from "@/components/shared/StyleNav";

type Props = { children: React.ReactNode; params: Promise<{ style: string }> };

export default async function StyleLayout({ children, params }: Props) {
  const { style } = await params;
  const meta = getStyle(style);

  // Coming-soon / unknown styles render full-width without the rails.
  if (!meta || meta.status !== "available") {
    return <>{children}</>;
  }

  const designs = getDesignsByStyle(style);
  const sections: StyleNavSection[] = getAllCategories()
    .filter((cat) => Object.values(designs).some((d) => d.category === cat))
    .map((cat) => ({
      category: cat,
      items: Object.entries(designs)
        .filter(([, m]) => m.category === cat)
        .map(([slug, m]) => ({ slug, name: m.name })),
    }));

  return (
    <SectionLayout
      sidebar={<StyleSidebar styleId={style} styleName={meta.name} sections={sections} />}
      toc={<StyleToc styleId={style} sections={sections} />}
    >
      {children}
    </SectionLayout>
  );
}
