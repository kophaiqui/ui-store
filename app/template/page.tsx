import type { Metadata } from "next";

export const metadata: Metadata = { title: "Templates" };

export default function TemplatePage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/40">
        Templates
      </p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight">Coming soon</h1>
      <p className="max-w-[36ch] text-sm leading-relaxed text-muted-foreground">
        Ready-made page templates built with the component library. Check back soon.
      </p>
    </div>
  );
}
