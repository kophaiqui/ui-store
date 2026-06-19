import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 font-mono text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/40">
        404
      </p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mb-8 max-w-[36ch] text-sm leading-relaxed text-muted-foreground">
        This page doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-lg border border-border/70 px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
      >
        Back to home
      </Link>
    </div>
  );
}
