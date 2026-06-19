export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "GitHub",   href: "https://github.com/kophaiqui" },
    { label: "Email",    href: "mailto:quiatwork@gmail.com"   },
    { label: "LinkedIn", href: "https://linkedin.com/in/kophaiqui" },
  ];

  return (
    <footer className="border-t border-border/40 bg-muted/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-end">

          {/* Left — brand */}
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-tight">that one ui</p>
            <p className="max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
              A curated component library.
              <br />
              Beautiful by default, customizable by design.
            </p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground/40">
              <span>&copy; {year} that one ui</span>
              <span className="rounded border border-border/40 px-1.5 py-0.5 font-mono text-[0.625rem]">v1.0.0</span>
            </div>
          </div>

          {/* Right — author + links */}
          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="text-sm text-muted-foreground">
              Built by{" "}
              <span className="font-semibold text-foreground">kophaiqui</span>
            </p>
            <nav className="flex items-center gap-1">
              {links.map((link, i) => (
                <span key={link.href} className="flex items-center gap-1">
                  {i > 0 && <span className="text-border/60 select-none">·</span>}
                  <a
                    href={link.href}
                    className="group relative px-1 text-sm text-muted-foreground/60 transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                    <span className="absolute inset-x-1 -bottom-px h-px scale-x-0 bg-foreground/40 transition-transform duration-200 group-hover:scale-x-100" />
                  </a>
                </span>
              ))}
            </nav>
          </div>

        </div>
      </div>
    </footer>
  );
}
