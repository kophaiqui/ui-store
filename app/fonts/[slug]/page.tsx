import { notFound } from "next/navigation";
import { getFont, getAllFonts } from "@/lib/registry";
import { FontDemo } from "@/components/shared/FontDemo";
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
    <div className="px-8 py-10 max-w-3xl">
      <div className="mb-1 text-sm text-muted-foreground capitalize">
        {meta.category} · {meta.license}
      </div>
      <h1 className="mb-1 text-3xl font-bold tracking-tight">{meta.name}</h1>
      <p className="mb-2 text-[0.9375rem] text-muted-foreground">by {meta.designer}</p>
      <p className="mb-10 text-[0.9375rem] text-muted-foreground">{meta.description}</p>

      <FontDemo
        family={meta.family}
        weights={meta.weights}
        provider={meta.source.provider}
      />

      <div className="mt-10">
        <a
          href={meta.source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Download from {meta.source.provider} →
        </a>
      </div>
    </div>
  );
}
