import { Logo } from "@/components/shared/Logo";
import { Mail, ArrowUpRight } from "lucide-react";

function GithubIcon() {
  return (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const CONNECTIONS = [
  {
    label: "GitHub",
    href: "https://github.com/kophaiqui",
    icon: GithubIcon,
    hint: "kophaiqui",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kophaiqui",
    icon: LinkedinIcon,
    hint: "kophaiqui",
  },
  {
    label: "Email",
    href: "mailto:quiatwork@gmail.com",
    icon: Mail,
    hint: "quiatwork@gmail.com",
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-10">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr_1fr]">

          {/* Col 1 — brand */}
          <div className="flex flex-col gap-4 items-start">
            <div className="flex items-center gap-3">
              <Logo size={34} />
              <span className="text-xl font-bold tracking-tight">that one ui</span>
            </div>
            <p className="max-w-[36ch] text-sm leading-[1.75] text-muted-foreground">
              One component. Multiple visual worlds.
              <br />
              Change the style, not the code.
            </p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground/40">
              <span>&copy; {year} that one ui</span>
              <span className="select-none">·</span>
              <span className="rounded border border-border/30 px-1.5 py-0.5 font-mono text-[0.6rem] tracking-wide">
                v1.0.0
              </span>
            </div>
          </div>

          {/* Col 2 — author */}
          <div className="flex flex-col gap-2 items-center text-center">
            <p className="text-[0.6875rem] uppercase tracking-[0.12em] text-muted-foreground/40">
              Author
            </p>
            <p className="text-base font-semibold tracking-tight">kophaiqui</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Built this because I was tired of the other ones.
              <br />
              Ships components. Ignores the hype.{" "}
              <span className="inline-flex items-center gap-1.5 align-middle">
                <span>Vietnam</span>
                <svg width="18" height="12" viewBox="0 0 18 12" aria-label="Vietnam flag" className="inline-block rounded-[2px]">
                  <rect width="18" height="12" fill="#DA251D" />
                  <polygon
                    points="9,2 10.12,5.45 13.71,5.45 10.8,7.55 11.92,11 9,8.9 6.08,11 7.2,7.55 4.29,5.45 7.88,5.45"
                    fill="#FFFF00"
                  />
                </svg>
              </span>
            </p>
          </div>

          {/* Col 3 — connect */}
          <div className="flex flex-col gap-2 md:pl-20">
            <p className="text-[0.6875rem] uppercase tracking-[0.12em] text-muted-foreground/40">
              Connect
            </p>
            <nav className="flex w-fit flex-col gap-0.5">
              {CONNECTIONS.map(({ label, href, icon: Icon, hint }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group -mx-2 flex items-center justify-between rounded-md px-2 py-2 text-sm text-muted-foreground/70 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-muted/50 hover:text-foreground"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="shrink-0 text-muted-foreground/40 transition-colors duration-200 group-hover:text-foreground/60">
                      <Icon size={14} />
                    </span>
                    <span className="font-medium">{label}</span>
                    <span className="text-xs text-muted-foreground/30 transition-colors duration-200 group-hover:text-muted-foreground/50">
                      {hint}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={12}
                    className="shrink-0 -translate-y-0.5 translate-x-0.5 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-40"
                  />
                </a>
              ))}
            </nav>
          </div>

        </div>
      </div>
    </footer>
  );
}
