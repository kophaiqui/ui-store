"use client";
import { usePathname } from "next/navigation";
import { UINavbar, type NavLink } from "@/designs/sections/navbar/Component";
import { UIBadge } from "@/designs/data-display/badge/Component";
import { useCart } from "../state";
import { badgeStyle } from "../styles";

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

const BASE_LINKS: NavLink[] = [
  { label: "Home", href: "/demo/ecommerce" },
  { label: "Shop", href: "/demo/ecommerce/shop" },
];

export function SiteNav() {
  const pathname = usePathname();
  const { count } = useCart();

  const links = BASE_LINKS.map((l) => ({ ...l, active: l.href === pathname }));

  return (
    <UINavbar
      brand={
        <a href="/demo/ecommerce" className="flex items-center gap-2 text-sm font-bold tracking-tight text-foreground">
          <span className="flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-sky-400 text-[0.625rem] text-white">E</span>
          Ember Audio
        </a>
      }
      links={links}
      actions={
        <a
          href="/demo/ecommerce/cart"
          className="relative flex size-9 items-center justify-center rounded-md text-foreground/80 transition-colors hover:bg-white/10 hover:text-foreground"
          aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
        >
          <CartIcon />
          {count > 0 && (
            <span className="absolute -right-1 -top-1">
              <UIBadge styleConfig={badgeStyle} color="violet" size="sm">{count}</UIBadge>
            </span>
          )}
        </a>
      }
    />
  );
}
