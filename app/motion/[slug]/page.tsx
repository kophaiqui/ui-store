import { notFound } from "next/navigation";
import { getMotion, getAllMotion } from "@/lib/registry";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(getAllMotion()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = getMotion(slug);
  if (!meta) return {};
  return { title: meta.title, description: meta.description };
}

export default async function MotionDetailPage({ params }: Props) {
  const { slug } = await params;
  const meta = getMotion(slug);
  if (!meta) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-2 text-sm text-muted-foreground">{meta.category}</div>
      <h1 className="mb-2 text-3xl font-semibold tracking-tight">{meta.title}</h1>
      <p className="mb-10 text-muted-foreground">{meta.description}</p>

      <div className="flex flex-wrap gap-2">
        {meta.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
