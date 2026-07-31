import type { Metadata } from "next";
import { getAllMotion } from "@/lib/registry";
import { MotionPanel } from "@/components/shared/MotionPanel";

export const metadata: Metadata = { title: "Motion" };

export default function MotionPage() {
  const motion = getAllMotion();
  const categories = [...new Set(Object.values(motion).map((m) => m.category))];

  return (
    <div className="px-8 py-10">
      <div className="mb-10">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">Motion</h1>
        <p className="text-[0.9375rem] text-muted-foreground">
          {Object.keys(motion).length} copy-paste animation patterns, built on{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-[0.8125rem]">motion</code> — click any to see the code.
        </p>
      </div>

      {categories.map((cat) => {
        const items = Object.entries(motion).filter(([, m]) => m.category === cat);
        return (
          <section key={cat} id={cat} className="mb-14 scroll-mt-20">
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {cat}
            </h2>
            <div className="space-y-4">
              {items.map(([slug, meta]) => (
                <div key={slug} id={slug} className="scroll-mt-20">
                  <MotionPanel slug={slug} meta={meta} />
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
