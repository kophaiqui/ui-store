"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

type Props = { sections: SidebarSection[] };

export function Sidebar({ sections }: Props) {
  const pathname = usePathname();

  return (
    <nav className="px-4 pb-10">
      {sections.map((section) => (
        <div key={section.title} className="mb-6">
          <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
            {section.title}
          </div>
          <ul className="space-y-0.5">
            {section.items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors",
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
        </div>
      ))}
    </nav>
  );
}
