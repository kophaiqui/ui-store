import { notFound } from "next/navigation";
import { getFont, getAllFonts } from "@/lib/registry";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(getAllFonts()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = getFont(slug);
  if (!meta) return {};
  return { title: meta.name, description: meta.description };
}

export default async function FontPage({ params }: Props) {
  const { slug } = await params;
  const meta = getFont(slug);
  if (!meta) notFound();

  return (
    <div className="px-8 py-10 max-w-2xl">
      <div className="mb-2 text-sm text-muted-foreground">
        {meta.category} · {meta.license}
      </div>
      <h1 className="mb-2 text-3xl font-semibold tracking-tight">{meta.name}</h1>
      <p className="mb-2 text-muted-foreground">by {meta.designer}</p>
      <p className="mb-10 text-muted-foreground">{meta.description}</p>

      <section className="mb-10 rounded-xl border border-border bg-muted/20 p-8">
        <p className="text-2xl leading-relaxed">{meta.preview}</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Weights
        </h2>
        <div className="flex flex-wrap gap-2">
          {meta.weights.map((w) => (
            <span
              key={w}
              className="rounded-md border border-border px-3 py-1 text-sm"
            >
              {w}
            </span>
          ))}
        </div>
      </section>

      <a
        href={meta.source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
      >
        Download from {meta.source.provider} →
      </a>
    </div>
  );
}
