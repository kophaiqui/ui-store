import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDesign, getAllDesigns, getDesignStyle, getStyle } from "@/lib/registry";
import { getDesignCode } from "@/lib/getDesignCode";
import { DesignViewer } from "@/components/shared/DesignViewer";
import { PropExplorer } from "@/components/shared/PropExplorer";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string; variant: string }> };

export async function generateStaticParams() {
  const designs = getAllDesigns();
  return Object.entries(designs).flatMap(([slug, meta]) => {
    const stylesDir = path.join(process.cwd(), "designs", meta.category, slug, "styles");
    let styleIds = ["default"];
    try {
      styleIds = fs
        .readdirSync(stylesDir)
        .filter((f) => f.endsWith(".ts"))
        .map((f) => f.replace(".ts", ""));
    } catch {}
    return styleIds.map((variant) => ({ slug, variant }));
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, variant } = await params;
  const meta = getDesign(slug);
  if (!meta) return {};
  const label = variant === "default" ? meta.name : `${meta.name} · ${variant}`;
  return { title: label, description: meta.description };
}

async function loadStyleConfig(category: string, slug: string, variant: string) {
  try {
    const mod = await import(`@/designs/${category}/${slug}/styles/${variant}`);
    return Object.values(mod).find((v) => typeof v === "object" && v !== null && !Array.isArray(v)) as Record<string, unknown> | undefined;
  } catch {
    return undefined;
  }
}

export default async function ComponentVariantPage({ params }: Props) {
  const { slug, variant } = await params;
  const meta = getDesign(slug);
  if (!meta) notFound();

  const code = getDesignCode(slug, meta);
  const styleId = variant;
  const styleMeta = getStyle(styleId);
  const styleConfig = await loadStyleConfig(meta.category, slug, variant);

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
        {styleMeta && (
          <Link
            href={`/style/${styleId}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-2.5 py-0.5 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: styleMeta.accent }}
            />
            {styleMeta.name}
          </Link>
        )}
        {meta.new && (
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-500">
            New
          </span>
        )}
      </div>
      <p className="mb-10 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
        {meta.description}
      </p>

      {/* Preview + Code viewer */}
      <Section label="Preview">
        <DesignViewer slug={slug} meta={meta} code={code} styleConfig={styleConfig} />
      </Section>

      {/* Props table with live explorer */}
      {meta.props && meta.props.length > 0 && (
        <Section label="Props">
          <PropExplorer
            slug={slug}
            category={meta.category}
            props={meta.props}
            componentName={"UI" + meta.name.replace(/\s+/g, "")}
            styleConfig={styleConfig}
          />
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
