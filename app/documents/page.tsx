import type { Metadata } from "next";

export const metadata: Metadata = { title: "Documents" };

export default function DocsPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/40">
        Documentation
      </p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight">Coming soon</h1>
      <p className="max-w-[36ch] text-sm leading-relaxed text-muted-foreground">
        The docs are being written. Check back soon.
      </p>
    </div>
  );
}
