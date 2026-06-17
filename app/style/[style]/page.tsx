import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getAllStyles,
  getStyle,
  getDesignsByStyle,
  getAllCategories,
} from "@/lib/registry";
import { StyleComponentCard } from "@/components/shared/StyleComponentCard";
import { StyleDemo } from "@/components/shared/StyleDemo";

type Props = { params: Promise<{ style: string }> };

export function generateStaticParams() {
  return Object.keys(getAllStyles()).map((style) => ({ style }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { style } = await params;
  const meta = getStyle(style);
  if (!meta) return {};
  return { title: `${meta.name} style`, description: meta.description };
}

export default async function StyleDetailPage({ params }: Props) {
  const { style } = await params;
  const meta = getStyle(style);
  if (!meta) notFound();

  if (meta.status !== "available") {
    return <ComingSoon id={style} name={meta.name} description={meta.description} />;
  }

  const designs = getDesignsByStyle(style);
  const categories = getAllCategories().filter((cat) =>
    Object.values(designs).some((d) => d.category === cat)
  );
  const total = Object.keys(designs).length;

  return (
    <div className="px-8 py-10">
      <Breadcrumb name={meta.name} />

      <div className="mb-12 max-w-2xl">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">{meta.name}</h1>
        <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">{meta.description}</p>
        <p className="mt-3 text-sm text-muted-foreground">
          {total} component{total === 1 ? "" : "s"} in this style.
        </p>
      </div>

      {categories.map((cat) => {
        const items = Object.entries(designs).filter(([, m]) => m.category === cat);
        return (
          <section key={cat} id={cat} className="mb-14 scroll-mt-24">
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {cat}
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {items.map(([slug, m]) => (
                <div key={slug} id={slug} className="scroll-mt-24">
                  <StyleComponentCard slug={slug} meta={m} href={`/style/${style}/${slug}`} />
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function ComingSoon({ id, name, description }: { id: string; name: string; description: string }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Breadcrumb name={name} />

      <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
        <div className="relative h-[260px] border-b border-border/60">
          <StyleDemo style={id} />
        </div>
        <div className="px-8 py-10 text-center">
          <div className="mb-4 inline-block rounded-full border border-border/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
            Coming soon
          </div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight">{name}</h1>
          <p className="mx-auto mb-8 max-w-md text-[0.9375rem] leading-relaxed text-muted-foreground">
            {description}
          </p>
          <Link
            href="/style"
            className="inline-block rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            ← Back to styles
          </Link>
        </div>
      </div>
    </div>
  );
}

function Breadcrumb({ name }: { name: string }) {
  return (
    <nav className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
      <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
      <span className="text-border">/</span>
      <Link href="/style" className="transition-colors hover:text-foreground">Styles</Link>
      <span className="text-border">/</span>
      <span className="text-foreground">{name}</span>
    </nav>
  );
}
