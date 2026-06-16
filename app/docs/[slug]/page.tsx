import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

const DOCS_DIR = path.join(process.cwd(), "content/docs");

export async function generateStaticParams() {
  const files = fs.readdirSync(DOCS_DIR);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: slug.charAt(0).toUpperCase() + slug.slice(1) };
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(DOCS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) notFound();

  const { default: MDXContent } = await import(
    `@/content/docs/${slug}.mdx`
  ).catch(() => {
    notFound();
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <MDXContent />
      </article>
    </div>
  );
}
