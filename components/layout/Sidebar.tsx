"use client";

import React from "react";
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

type IconProps = { className?: string };

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

function GridIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function ButtonIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="2" y="7" width="20" height="10" rx="3" />
      <line x1="8" y1="12" x2="16" y2="12" strokeWidth="1.5" />
    </svg>
  );
}

function CheckboxIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <polyline points="7.5 12 10.5 15 16.5 9" />
    </svg>
  );
}

function InputIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <line x1="6" y1="12" x2="12" y2="12" strokeWidth="1.5" />
      <line x1="12" y1="9" x2="12" y2="15" strokeWidth="1.5" />
    </svg>
  );
}

function RadioGroupIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SelectIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <polyline points="8 11 12 15 16 11" strokeWidth="1.8" />
    </svg>
  );
}

function SliderIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <line x1="2" y1="12" x2="22" y2="12" />
      <circle cx="15" cy="12" r="3.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SwitchIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="2" y="7" width="20" height="10" rx="5" />
      <circle cx="16" cy="12" r="3.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function AvatarIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="9.5" r="2.8" />
      <path d="M6.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    </svg>
  );
}

function SeparatorIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="2" y1="7" x2="22" y2="7" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2 2" />
      <line x1="2" y1="17" x2="22" y2="17" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2 2" />
    </svg>
  );
}

function TabsIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="2" y="10" width="20" height="12" rx="1.5" />
      <rect x="2" y="6" width="7" height="5" rx="1.5 1.5 0 0" />
      <rect x="10" y="6" width="7" height="5" rx="1.5 1.5 0 0" />
    </svg>
  );
}

function ProgressIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="2" y="9" width="20" height="6" rx="3" />
      <rect x="2" y="9" width="13" height="6" rx="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function AccordionIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="2" y="3" width="20" height="5" rx="1.5" />
      <rect x="2" y="10" width="20" height="5" rx="1.5" />
      <polyline points="8 18 12 22 16 18" strokeWidth="1.8" />
      <rect x="2" y="17" width="20" height="4" rx="1.5" />
    </svg>
  );
}

function CardIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="7" y1="14" x2="17" y2="14" strokeWidth="1.5" />
    </svg>
  );
}

function BadgeIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="4" y="8" width="16" height="8" rx="4" />
      <circle cx="9" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ChipIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="2" y="7" width="20" height="10" rx="5" />
      <line x1="16" y1="10.5" x2="18" y2="13.5" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="10.5" x2="16" y2="13.5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function AlertIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <path d="M12 4L21.5 20H2.5L12 4z" strokeLinejoin="round" />
      <line x1="12" y1="10" x2="12" y2="14" strokeLinecap="round" />
      <circle cx="12" cy="17" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ToastIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="3" y="7" width="18" height="11" rx="2" />
      <circle cx="7.5" cy="12.5" r="1.5" fill="currentColor" stroke="none" />
      <line x1="10.5" y1="11" x2="17" y2="11" strokeWidth="1.5" />
      <line x1="10.5" y1="14" x2="15" y2="14" strokeWidth="1.5" />
    </svg>
  );
}

function DropdownMenuIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="3" y="3" width="18" height="6" rx="1.5" />
      <polyline points="8 9 12 13 16 9" strokeWidth="1.8" />
      <rect x="3" y="13" width="18" height="8" rx="1.5" />
      <line x1="7" y1="17" x2="17" y2="17" strokeWidth="1.5" />
    </svg>
  );
}

function TooltipIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <path d="M5 3h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function DialogIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="3" x2="9" y2="9" />
    </svg>
  );
}

function PopoverIcon({ className }: IconProps) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="5" y="7" width="14" height="11" rx="2" />
      <path d="M9 7 L12 3 L15 7" />
    </svg>
  );
}

const SLUG_ICONS: Record<string, (props: IconProps) => React.ReactElement> = {
  button: ButtonIcon,
  checkbox: CheckboxIcon,
  input: InputIcon,
  "radio-group": RadioGroupIcon,
  select: SelectIcon,
  slider: SliderIcon,
  switch: SwitchIcon,
  avatar: AvatarIcon,
  separator: SeparatorIcon,
  tabs: TabsIcon,
  progress: ProgressIcon,
  accordion: AccordionIcon,
  card: CardIcon,
  badge: BadgeIcon,
  chip: ChipIcon,
  tooltip: TooltipIcon,
  dialog: DialogIcon,
  popover: PopoverIcon,
  alert: AlertIcon,
  toast: ToastIcon,
  "dropdown-menu": DropdownMenuIcon,
};

function getSlug(href: string) {
  return href.split("/").pop() ?? "";
}

function ComponentItem({
  item,
  pathname,
}: {
  item: SidebarItem;
  pathname: string;
}) {
  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
  const [open, setOpen] = useState(isActive);

  const variants: SidebarVariant[] = item.variants?.length
    ? item.variants
    : [{ label: "Default", href: `${item.href}/default` }];

  const slug = getSlug(item.href);
  const Icon = SLUG_ICONS[slug];

  return (
    <li>
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "group relative flex w-full items-center justify-between rounded-md px-2 py-1.5 text-[0.875rem] font-medium transition-all duration-150",
          isActive
            ? "bg-violet-500/[0.08] font-medium text-foreground before:absolute before:inset-y-1 before:left-0 before:w-[2px] before:rounded-full before:bg-violet-500"
            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
        )}
      >
        <span className="flex items-center gap-2">
          {Icon && (
            <Icon
              className={cn(
                "shrink-0 transition-colors",
                isActive ? "text-violet-400" : "text-muted-foreground/50 group-hover:text-muted-foreground"
              )}
            />
          )}
          {item.label}
        </span>
        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-violet-500/10 px-1.5 py-0.5 text-[0.6875rem] font-medium tabular-nums text-violet-400">
            {variants.length}
          </span>
          <Chevron open={open} />
        </div>
      </button>

      {open && (
        <ul className="mb-1 mt-0.5 ml-2 space-y-0.5 border-l border-border/50 pl-3">
          {variants.map((v) => {
            const isVariantActive = pathname === v.href;
            return (
              <li key={v.href}>
                <Link
                  href={v.href}
                  className={cn(
                    "flex items-center gap-1.5 rounded-md px-2 py-1 text-[0.8125rem] font-medium transition-colors",
                    isVariantActive
                      ? "font-medium text-violet-400"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "h-1 w-1 shrink-0 rounded-full transition-colors",
                      isVariantActive ? "bg-violet-500" : "bg-muted-foreground/30"
                    )}
                  />
                  {v.label}
                </Link>
              </li>
            );
          })}
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
      <p className="mb-1 px-2 py-1 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">
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
      <Link
        href="/components"
        className={cn(
          "relative mb-4 flex items-center gap-2 rounded-md px-2 py-2 text-[0.875rem] font-medium transition-all duration-150",
          isOverview
            ? "bg-violet-500/[0.08] text-foreground before:absolute before:inset-y-1.5 before:left-0 before:w-[2px] before:rounded-full before:bg-violet-500"
            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
        )}
      >
        <GridIcon className={cn(isOverview ? "text-violet-400" : "text-muted-foreground/50")} />
        Overview
      </Link>

      {sections.map((section) => (
        <Category key={section.title} section={section} pathname={pathname} />
      ))}
    </nav>
  );
}
