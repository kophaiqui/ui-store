import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-6 text-center text-xs text-muted-foreground">
        <span>ui-store — open-source UI resources</span>
        <span className="text-muted-foreground/40">·</span>
        <Link href="/licenses" className="transition-colors hover:text-foreground">
          Licenses
        </Link>
      </div>
    </footer>
  );
}
