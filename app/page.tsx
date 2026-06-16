import Link from "next/link";
import { getAllDesigns, getAllCategories } from "@/lib/registry";
import { DesignCardPreview } from "@/components/shared/DesignCardPreview";

export default function HomePage() {
  const designs = getAllDesigns();
  const categories = getAllCategories();
  const featured = Object.entries(designs).slice(0, 6);
  const total = Object.keys(designs).length;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40 px-6 py-24 sm:py-36">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-violet-500/10 blur-[120px] dark:bg-violet-500/5" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {total} designs available
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl">
            The UI library you
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              keep coming back to
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-lg text-lg text-muted-foreground">
            Beautiful, motion-ready UI designs. Each one is a different take on a familiar element.
            Pick a style, copy the code, ship it.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/library"
              className="rounded-lg bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Browse Library
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </section>

      {/* Categories strip */}
      <section className="border-b border-border/40 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
          <span className="shrink-0 text-xs text-muted-foreground">Browse by:</span>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/library?category=${cat}`}
              className="shrink-0 rounded-full border border-border/60 px-3 py-1 text-xs capitalize text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured grid */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-xl font-semibold">Featured designs</h2>
            <Link href="/library" className="text-sm text-muted-foreground hover:text-foreground">
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map(([slug, meta]) => (
              <DesignCardPreview key={slug} slug={slug} meta={meta} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-border/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-3 text-2xl font-semibold">More designs every week</h2>
          <p className="mb-6 text-muted-foreground">
            New buttons, cards, inputs, and motion patterns added regularly.
          </p>
          <Link
            href="/library"
            className="rounded-lg bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Explore the library
          </Link>
        </div>
      </section>
    </>
  );
}
