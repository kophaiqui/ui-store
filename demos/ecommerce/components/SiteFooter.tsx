import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-center text-xs text-muted-foreground">
      <p>© {new Date().getFullYear()} Ember Audio - a fictional store, demoing That One UI in Glass.</p>
      <Link href="/demo" className="mt-2 inline-block text-muted-foreground/70 underline-offset-4 hover:text-foreground hover:underline">
        ← Back to demo gallery
      </Link>
    </footer>
  );
}
