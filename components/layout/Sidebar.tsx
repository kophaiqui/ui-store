"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type SidebarItem = {
  label: string;
  href: string;
  new?: boolean;
};

export type SidebarSection = {
  title: string;
  items: SidebarItem[];
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={cn("shrink-0 transition-transform duration-200", open && "rotate-180")}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function Category({
  section,
  pathname,
}: {
  section: SidebarSection;
  pathname: string;
}) {
  const hasActive = section.items.some((i) => pathname === i.href);
  const [open, setOpen] = useState<boolean>(hasActive || true);

  return (
    <div className="mb-1">
      {/* Level 1 — category header (clickable) */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 transition-colors hover:text-muted-foreground"
      >
        <span>{section.title}</span>
        <Chevron open={open} />
      </button>

      {/* Level 2 — designs inside category */}
      {open && (
        <ul className="mb-3 mt-0.5 ml-2 space-y-0.5 border-l border-border/50 pl-3">
          {section.items.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between rounded-md px-2 py-1.5 text-[13px] transition-colors",
                    active
                      ? "bg-muted font-medium text-foreground"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  )}
                >
                  <span>{item.label}</span>
                  {item.new && (
                    <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-500">
                      New
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

type Props = { sections: SidebarSection[] };

export function Sidebar({ sections }: Props) {
  const pathname = usePathname();

  return (
    <nav className="px-3 pb-10 pt-2">
      {sections.map((section) => (
        <Category key={section.title} section={section} pathname={pathname} />
      ))}
    </nav>
  );
}
