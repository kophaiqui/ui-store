"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutGrid, Braces, Pipette, Palette, Lightbulb, Bookmark } from "lucide-react";

const TABS = [
  { label: "Overview",       href: "/colors",             Icon: LayoutGrid },
  { label: "Base tokens",    href: "/colors/base",        Icon: Braces     },
  { label: "Your colors",    href: "/colors/maincolor",   Icon: Pipette    },
  { label: "Style palettes", href: "/colors/styles",      Icon: Palette    },
  { label: "Inspiration",    href: "/colors/inspiration", Icon: Lightbulb  },
  { label: "Collection",     href: "/colors/collection",  Icon: Bookmark   },
] as const;

export function ColorSidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="px-3 pb-10 pt-2">
      <p className="mb-1 px-2 py-1 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">
        Colors
      </p>
      <ul className="space-y-0.5">
        {TABS.map((tab) => {
          const isActive = tab.href === "/colors"
            ? pathname === "/colors"
            : pathname.startsWith(tab.href);
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                className={cn(
                  "group relative flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-[0.875rem] font-medium transition-all duration-150",
                  isActive
                    ? "bg-violet-500/[0.08] text-foreground before:absolute before:inset-y-1 before:left-0 before:w-[2px] before:rounded-full before:bg-violet-500"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                <tab.Icon size={14} className="shrink-0 opacity-70" />
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
