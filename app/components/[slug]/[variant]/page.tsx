import { notFound } from "next/navigation";
import Link from "next/link";
import { getDesign, getAllDesigns } from "@/lib/registry";
import { getDesignCode } from "@/lib/getDesignCode";
import { DesignViewer } from "@/components/shared/DesignViewer";
import { PropExplorer } from "@/components/shared/PropExplorer";
import { UsageBlock } from "@/components/shared/UsageBlock";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string; variant: string }> };

export async function generateStaticParams() {
  return Object.keys(getAllDesigns()).flatMap((slug) => [
    { slug, variant: "default" },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, variant } = await params;
  const meta = getDesign(slug);
  if (!meta) return {};
  const label = variant === "default" ? meta.name : `${meta.name} · ${variant}`;
  return { title: label, description: meta.description };
}

export default async function ComponentVariantPage({ params }: Props) {
  const { slug, variant } = await params;
  const meta = getDesign(slug);
  if (!meta) notFound();

  const code = getDesignCode(slug, meta);

  return (
    <div className="px-8 py-10 max-w-4xl">

      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
        <Slash />
        <Link href="/components" className="transition-colors hover:text-foreground">Components</Link>
        <Slash />
        <Link
          href={`/components?category=${meta.category}`}
          className="capitalize transition-colors hover:text-foreground"
        >
          {meta.category}
        </Link>
        <Slash />
        <Link href={`/components/${slug}/default`} className="transition-colors hover:text-foreground">
          {meta.name}
        </Link>
        {variant !== "default" && (
          <>
            <Slash />
            <span className="capitalize text-foreground">{variant}</span>
          </>
        )}
      </nav>

      {/* Header */}
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <h1 className="text-4xl font-bold tracking-tight">{meta.name}</h1>
        <span className="rounded-full border border-border/60 px-2.5 py-0.5 text-xs capitalize text-muted-foreground">
          {meta.category}
        </span>
        {meta.new && (
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-500">
            New
          </span>
        )}
      </div>
      <p className="mb-10 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
        {meta.description}
      </p>

      {/* Preview + Code viewer */}
      <Section label="Preview">
        <DesignViewer slug={slug} meta={meta} code={code} />
      </Section>

      {/* Props table with live explorer */}
      {meta.props && meta.props.length > 0 && (
        <Section label="Props">
          <PropExplorer slug={slug} category={meta.category} props={meta.props} />
        </Section>
      )}

      {/* Usage examples */}
      {meta.usage && meta.usage.length > 0 && (
        <Section label="Usage">
          <div className="space-y-3">
            {meta.usage.map((ex) => (
              <UsageBlock key={ex.label} label={ex.label} code={ex.code} slug={slug} category={meta.category} />
            ))}
          </div>
        </Section>
      )}

      {/* Tags */}
      <Section label="Tags">
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
      </Section>

    </div>
  );
}

function Slash() {
  return <span className="text-border">/</span>;
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section id={label.toLowerCase()} className="mb-12 scroll-mt-20">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
        {label}
      </h2>
      {children}
    </section>
  );
}
