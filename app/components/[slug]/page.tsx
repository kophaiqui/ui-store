import { notFound } from "next/navigation";
import Link from "next/link";
import { getDesign, getAllDesigns } from "@/lib/registry";
import { getDesignCode } from "@/lib/getDesignCode";
import { DesignViewer } from "@/components/shared/DesignViewer";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(getAllDesigns()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = getDesign(slug);
  if (!meta) return {};
  return { title: meta.name, description: meta.description };
}

export default async function UIDesignPage({ params }: Props) {
  const { slug } = await params;
  const meta = getDesign(slug);
  if (!meta) notFound();

  const code = getDesignCode(slug, meta);

  return (
    <div className="px-8 py-10">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
        <Link href="/components" className="hover:text-foreground">UI</Link>
        <span>/</span>
        <Link href={`/ui?category=${meta.category}`} className="capitalize hover:text-foreground">
          {meta.category}
        </Link>
        <span>/</span>
        <span className="text-foreground">{meta.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-2 flex items-center gap-3">
        <h1 className="text-3xl font-bold tracking-tight">{meta.name}</h1>
        {meta.new && (
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-500">
            New
          </span>
        )}
      </div>
      <p className="mb-8 text-muted-foreground">{meta.description}</p>

      {/* Preview / Code viewer */}
      <div className="mb-8">
        <DesignViewer slug={slug} meta={meta} code={code} />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {meta.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
