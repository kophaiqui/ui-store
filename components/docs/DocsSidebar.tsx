"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavItem = { label: string; href: string; soon?: boolean };
type NavSection = { title: string; items: NavItem[] };

const NAV: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction",  href: "/documents" },
      { label: "What's New",   href: "/documents/whats-new" },
      { label: "Installation",  href: "/documents/installation" },
      { label: "Principles",   href: "/documents/principles" },
      { label: "Theming",      href: "/documents/theming",       soon: true },
    ],
  },
  {
    title: "Foundations",
    items: [
      { label: "Colors",      href: "/documents/colors",      soon: true },
      { label: "Typography",  href: "/documents/typography",  soon: true },
      { label: "Spacing",     href: "/documents/spacing",     soon: true },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Button",          href: "/documents/button",          soon: true },
      { label: "Input",           href: "/documents/input",           soon: true },
      { label: "Select",          href: "/documents/select",          soon: true },
      { label: "Checkbox",        href: "/documents/checkbox",        soon: true },
      { label: "Switch",          href: "/documents/switch",          soon: true },
      { label: "Slider",          href: "/documents/slider",          soon: true },
      { label: "Textarea",        href: "/documents/textarea",        soon: true },
      { label: "Badge",           href: "/documents/badge",           soon: true },
      { label: "Card",            href: "/documents/card",            soon: true },
      { label: "Avatar",          href: "/documents/avatar",          soon: true },
      { label: "Tabs",            href: "/documents/tabs",            soon: true },
      { label: "Accordion",       href: "/documents/accordion",       soon: true },
      { label: "Dialog",          href: "/documents/dialog",          soon: true },
      { label: "Popover",         href: "/documents/popover",         soon: true },
      { label: "Tooltip",         href: "/documents/tooltip",         soon: true },
      { label: "Toast",           href: "/documents/toast",           soon: true },
      { label: "Alert",           href: "/documents/alert",           soon: true },
      { label: "Progress",        href: "/documents/progress",        soon: true },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="px-3 pb-10 pt-2">
      {NAV.map(section => (
        <div key={section.title} className="mb-5">
          <p className="mb-1 px-2 py-1 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">
            {section.title}
          </p>
          <ul className="space-y-0.5">
            {section.items.map(item => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative flex items-center justify-between rounded-md px-2 py-1.5 text-[0.875rem] font-medium transition-colors duration-100",
                      isActive
                        ? "bg-violet-500/[0.08] text-foreground before:absolute before:inset-y-1.5 before:left-0 before:w-[2px] before:rounded-full before:bg-violet-500"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                    )}
                  >
                    {item.label}
                    {item.soon && (
                      <span className="rounded px-1.5 py-0.5 text-[0.5rem] font-bold uppercase tracking-widest text-muted-foreground/30 border border-border/40">
                        soon
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
