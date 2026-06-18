import type { Metadata } from "next";

export const metadata: Metadata = { title: "Templates" };

export default function TemplatePage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center px-6">
      <div className="rounded-full border border-border/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
        Coming soon
      </div>
      <h1 className="text-4xl font-bold tracking-tight">Templates</h1>
      <p className="max-w-sm text-[0.9375rem] text-muted-foreground">
        Full-page layouts — dashboards, landing pages, auth flows — built from the component library.
      </p>
    </div>
  );
}
