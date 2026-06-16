"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type SidebarVariant = { label: string; href: string };

export type SidebarItem = {
  label: string;
  href: string;
  new?: boolean;
  variants?: SidebarVariant[];
};

export type SidebarSection = {
  title: string;
  items: SidebarItem[];
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="11"
      height="11"
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

function GridIcon() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function ComponentItem({
  item,
  pathname,
}: {
  item: SidebarItem;
  pathname: string;
}) {
  const isActive = pathname === item.href;
  const [open, setOpen] = useState(isActive);

  const variants: SidebarVariant[] = item.variants?.length
    ? item.variants
    : [{ label: "Default", href: item.href }];

  return (
    <li>
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-[13px] transition-colors",
          isActive
            ? "bg-muted font-medium text-foreground"
            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
        )}
      >
        <span>{item.label}</span>
        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-green-500/10 px-1.5 py-0.5 text-[10px] font-medium tabular-nums text-green-500">{variants.length}</span>
          <Chevron open={open} />
        </div>
      </button>

      {open && (
        <ul className="mb-1 mt-0.5 ml-2 space-y-0.5 border-l border-border/50 pl-3">
          {variants.map((v) => (
            <li key={v.href}>
              <Link
                href={v.href}
                className={cn(
                  "block rounded-md px-2 py-1 text-[12px] transition-colors",
                  pathname === v.href
                    ? "font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {v.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function Category({
  section,
  pathname,
}: {
  section: SidebarSection;
  pathname: string;
}) {
  return (
    <div className="mb-4">
      <p className="mb-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
        {section.title}
      </p>
      <ul className="space-y-0.5">
        {section.items.map((item) => (
          <ComponentItem key={item.href} item={item} pathname={pathname} />
        ))}
      </ul>
    </div>
  );
}

type Props = { sections: SidebarSection[] };

export function Sidebar({ sections }: Props) {
  const pathname = usePathname();
  const isOverview = pathname === "/components";

  return (
    <nav className="px-3 pb-10 pt-2">
      {/* Overview */}
      <Link
        href="/components"
        className={cn(
          "mb-4 flex items-center gap-2 rounded-md px-2 py-2 text-[13px] font-medium transition-colors",
          isOverview
            ? "bg-muted text-foreground"
            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
        )}
      >
        <GridIcon />
        Overview
      </Link>

      {sections.map((section) => (
        <Category key={section.title} section={section} pathname={pathname} />
      ))}
    </nav>
  );
}
