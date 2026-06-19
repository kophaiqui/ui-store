import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

const DOCS_DIR = path.join(process.cwd(), "content/docs");

export async function generateStaticParams() {
  if (!fs.existsSync(DOCS_DIR)) return [];
  return fs
    .readdirSync(DOCS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const label = slug.replace(/-/g, " ");
  return { title: label.charAt(0).toUpperCase() + label.slice(1) };
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(DOCS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return (
      <div className="px-8 py-16 max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          In progress
        </div>
        <h1 className="mb-3 text-3xl font-bold capitalize tracking-tight">
          {slug.replace(/-/g, " ")}
        </h1>
        <p className="mb-8 text-muted-foreground">
          This page is being written. Check back soon.
        </p>
        <Link
          href="/docs"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to docs
        </Link>
      </div>
    );
  }

  const { default: MDXContent } = await import(`@/content/docs/${slug}.mdx`).catch(() => {
    return { default: () => null };
  });

  return (
    <div className="px-8 py-10 max-w-3xl">
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <MDXContent />
      </article>
    </div>
  );
}
