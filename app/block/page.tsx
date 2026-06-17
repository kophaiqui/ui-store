import type { Metadata } from "next";

export const metadata: Metadata = { title: "Block" };

export default function BlockPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <div className="rounded-full border border-border/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
        Coming soon
      </div>
      <h1 className="text-4xl font-bold tracking-tight">Block</h1>
      <p className="max-w-sm text-[0.9375rem] text-muted-foreground">
        This section is under construction. Check back soon.
      </p>
    </div>
  );
}
