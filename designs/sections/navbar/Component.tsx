"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { NavbarStyleConfig } from "./styles/default";

export type { NavbarStyleConfig };

export type NavLink = { label: string; href?: string; active?: boolean };

type Props = {
  styleConfig?: NavbarStyleConfig;
  brand?: React.ReactNode;
  links?: NavLink[];
  actions?: React.ReactNode;
  className?: string;
};

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
    </svg>
  );
}

export function UINavbar({
  styleConfig = defaultStyle,
  brand = "Brand",
  links = [
    { label: "Product", active: true },
    { label: "Pricing" },
    { label: "Docs" },
  ],
  actions = (
    <>
      <button className="text-sm text-muted-foreground transition-colors hover:text-foreground">Sign in</button>
      <button className="rounded-md bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
        Get started
      </button>
    </>
  ),
  className,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn(styleConfig.bar, className)}>
      <div className={styleConfig.inner}>
        <div className={styleConfig.brand}>{brand}</div>

        <nav className={styleConfig.links}>
          {links.map((link) => (
            <a key={link.label} href={link.href ?? "#"} className={link.active ? styleConfig.linkActive : styleConfig.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styleConfig.actions}>{actions}</div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={styleConfig.mobileToggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <nav className={styleConfig.mobileMenu}>
          {links.map((link) => (
            <a key={link.label} href={link.href ?? "#"} className={styleConfig.mobileLink}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

export { UINavbar as default };
