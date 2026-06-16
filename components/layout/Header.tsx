import Link from "next/link";

const NAV = [
  { label: "Components", href: "/components" },
  { label: "Fonts", href: "/fonts" },
  { label: "Motion", href: "/motion" },
  { label: "Docs", href: "/docs" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          ui-store
        </Link>
        <nav className="flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
