import Link from "next/link";
import { getAllDesigns, getAllCategories } from "@/lib/registry";
import { DesignCardPreview } from "@/components/shared/DesignCardPreview";

const SHOWCASE_SLUGS = ["button", "select", "tabs", "accordion", "card", "badge", "toast", "checkbox"];

const PILLARS = [
  {
    title: "Copy and paste",
    body: "Every component is a single self-contained file. Pick one, drop it in your project, done.",
  },
  {
    title: "Style it your way",
    body: "Each component ships with a styleConfig — swap the whole visual layer without touching logic or props.",
  },
  {
    title: "All props, no limits",
    body: "Nothing is hardcoded. Every string, color, and behavior is a prop with a sensible default you can override.",
  },
];

export default function HomePage() {
  const designs = getAllDesigns();
  const total = Object.keys(designs).length;
  const showcase = SHOWCASE_SLUGS.flatMap((slug) => {
    const meta = designs[slug];
    return meta ? [[slug, meta] as const] : [];
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40 px-6 py-28 sm:py-40">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-violet-500/8 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {total} components · 11 styles · open source
          </div>

          <h1 className="mb-5 text-[3.25rem] font-bold leading-[1.1] tracking-tight sm:text-7xl">
            The UI library you
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
              keep coming back to
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-md text-[1.0625rem] leading-relaxed text-muted-foreground">
            Accessible components built on Base UI. Each one ships with a styleConfig so you can change the look without touching the logic.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/components"
              className="rounded-lg bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-80"
            >
              Browse components
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-border/60 px-6 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="border-b border-border/40 px-6 py-16">
        <div className="mx-auto max-w-5xl grid gap-px rounded-xl border border-border/60 overflow-hidden sm:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="bg-card px-7 py-8">
              <p className="mb-2 text-sm font-semibold text-foreground">{p.title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Component showcase */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-3 flex items-end justify-between">
            <div>
              <p className="mb-1 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">Library</p>
              <h2 className="text-2xl font-semibold tracking-tight">Built and ready</h2>
            </div>
            <Link href="/components" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              All {total} components →
            </Link>
          </div>
          <p className="mb-10 max-w-md text-sm text-muted-foreground">
            Each component works out of the box. Hover any card to see its name and category.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {showcase.map(([slug, meta]) => (
              <DesignCardPreview key={slug} slug={slug} meta={meta} />
            ))}
          </div>
        </div>
      </section>

      {/* Style system teaser */}
      <section className="border-t border-border/40 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-border/60 bg-card px-10 py-14 text-center">
            <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">Style system</p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              11 styles.{" "}
              <span className="text-muted-foreground/60">One component.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-sm text-[0.9375rem] text-muted-foreground">
              Every component supports a <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-violet-400">styleConfig</code> prop. Swap from default to glass, neobrutalism, terminal, or 7 others — same component, different character.
            </p>
            <Link
              href="/style"
              className="inline-flex rounded-lg border border-border/60 px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
            >
              Explore styles →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-3 text-2xl font-semibold tracking-tight">Start building</h2>
          <p className="mb-7 text-[0.9375rem] text-muted-foreground">
            New components added regularly. Everything is open source.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/components"
              className="rounded-lg bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-80"
            >
              Browse the library
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-border/60 px-6 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
            >
              Documentation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
