import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getAllStyles,
  getStyle,
  getDesign,
  getDesignsByStyle,
} from "@/lib/registry";
import { getDesignCode } from "@/lib/getDesignCode";
import { DesignViewer } from "@/components/shared/DesignViewer";
import { PropExplorer } from "@/components/shared/PropExplorer";

type Props = { params: Promise<{ style: string; slug: string }> };

export function generateStaticParams() {
  const params: { style: string; slug: string }[] = [];
  for (const [style, meta] of Object.entries(getAllStyles())) {
    if (meta.status !== "available") continue;
    for (const slug of Object.keys(getDesignsByStyle(style))) {
      params.push({ style, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { style, slug } = await params;
  const styleMeta = getStyle(style);
  const meta = getDesign(slug);
  if (!styleMeta || !meta) return {};
  return { title: `${meta.name} · ${styleMeta.name}`, description: meta.description };
}

export default async function StyleComponentPage({ params }: Props) {
  const { style, slug } = await params;
  const styleMeta = getStyle(style);
  const meta = getDesign(slug);

  // Only render components that actually belong to this (available) style.
  if (!styleMeta || styleMeta.status !== "available" || !meta || !getDesignsByStyle(style)[slug]) {
    notFound();
  }

  const code = getDesignCode(slug, meta);

  return (
    <div className="max-w-4xl px-8 py-10">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
        <Slash />
        <Link href="/style" className="transition-colors hover:text-foreground">Styles</Link>
        <Slash />
        <Link href={`/style/${style}`} className="transition-colors hover:text-foreground">
          {styleMeta.name}
        </Link>
        <Slash />
        <span className="text-foreground">{meta.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <h1 className="text-4xl font-bold tracking-tight">{meta.name}</h1>
        <span className="rounded-full border border-border/60 px-2.5 py-0.5 text-xs capitalize text-muted-foreground">
          {meta.category}
        </span>
        <Link
          href={`/style/${style}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-2.5 py-0.5 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
        >
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: styleMeta.accent }} />
          {styleMeta.name}
        </Link>
        {meta.new && (
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-500">
            New
          </span>
        )}
      </div>
      <p className="mb-10 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
        {meta.description}
      </p>

      <Section label="Preview">
        <DesignViewer slug={slug} meta={meta} code={code} />
      </Section>

      {meta.props && meta.props.length > 0 && (
        <Section label="Props">
          <PropExplorer
            slug={slug}
            category={meta.category}
            props={meta.props}
            componentName={"UI" + meta.name.replace(/\s+/g, "")}
          />
        </Section>
      )}

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
    <section id={label.toLowerCase()} className="mb-12 scroll-mt-24">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
        {label}
      </h2>
      {children}
    </section>
  );
}
