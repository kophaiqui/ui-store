"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { SidebarStyleConfig } from "./styles/default";

export type { SidebarStyleConfig };

type SidebarItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  badge?: string | number;
  disabled?: boolean;
  children?: SidebarItem[];
};

type Props = {
  styleConfig?: SidebarStyleConfig;
  items?: SidebarItem[];
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  activeItem?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  collapsible?: boolean;
  onItemChange?: (key: string) => void;
  onCollapseChange?: (collapsed: boolean) => void;
  className?: string;
};

function DashIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden><rect x="2" y="3" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" /><rect x="9" y="3" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" /><rect x="2" y="9" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" /></svg>;
}
function ChartIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden><path d="M2 12L6 8L9 10L14 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 14h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>;
}
function GearIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden><circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3" /><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.42 1.42M11.54 11.54l1.41 1.41M3.05 12.95l1.42-1.42M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>;
}
function UsersIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden><circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.3" /><path d="M1 13c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /><circle cx="12" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.2" /><path d="M14 11c0-1.66-1.34-2-2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>;
}
function ChevronIcon({ expanded }: { expanded: boolean }) {
  return <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden className={cn("transition-transform duration-150", expanded && "rotate-90")}><path d="M3.5 2L6.5 5L3.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function CollapseIcon({ collapsed }: { collapsed: boolean }) {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className={cn("transition-transform duration-150", collapsed && "rotate-180")}><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const DEFAULT_ITEMS: SidebarItem[] = [
  { key: "dashboard", label: "Dashboard", icon: <DashIcon /> },
  { key: "analytics", label: "Analytics", icon: <ChartIcon />, badge: "New" },
  { key: "users", label: "Users", icon: <UsersIcon /> },
  { key: "settings", label: "Settings", icon: <GearIcon /> },
];

export function UISidebar({
  styleConfig = defaultStyle,
  items = DEFAULT_ITEMS,
  collapsed: collapsedProp,
  defaultCollapsed = false,
  activeItem: activeItemProp,
  header,
  footer,
  collapsible = true,
  onItemChange,
  onCollapseChange,
  className,
}: Props) {
  const [collapsed, setCollapsed] = useState(collapsedProp ?? defaultCollapsed);
  const [activeItem, setActiveItem] = useState(activeItemProp ?? "dashboard");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const isCollapsed = collapsedProp !== undefined ? collapsedProp : collapsed;

  const toggleCollapse = () => {
    const next = !isCollapsed;
    setCollapsed(next);
    onCollapseChange?.(next);
  };

  const handleItem = (key: string) => {
    setActiveItem(key);
    onItemChange?.(key);
  };

  const toggleExpand = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const renderItem = (item: SidebarItem, nested = false) => {
    const isActive = activeItem === item.key;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expanded.has(item.key);

    return (
      <li key={item.key}>
        <div
          role="button"
          tabIndex={item.disabled ? -1 : 0}
          onClick={() => {
            if (item.disabled) return;
            if (hasChildren) toggleExpand(item.key);
            else handleItem(item.key);
          }}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") e.currentTarget.click(); }}
          aria-current={isActive ? "page" : undefined}
          className={cn(
            nested ? styleConfig.nestedItem : styleConfig.item,
            isActive && !nested && styleConfig.itemActive,
            item.disabled && styleConfig.itemDisabled,
          )}
          title={isCollapsed ? item.label : undefined}
        >
          {item.icon && <span className={styleConfig.icon}>{item.icon}</span>}
          {!isCollapsed && (
            <>
              <span className={styleConfig.label}>{item.label}</span>
              {item.badge && <span className={styleConfig.badge}>{item.badge}</span>}
              {hasChildren && <ChevronIcon expanded={isExpanded} />}
            </>
          )}
        </div>
        {hasChildren && isExpanded && !isCollapsed && (
          <ul className={styleConfig.nested}>
            {item.children!.map((child) => renderItem(child, true))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav
      className={cn(styleConfig.nav, isCollapsed && "w-14", !isCollapsed && "w-56", className)}
      aria-label="Sidebar navigation"
    >
      {header && <div className={styleConfig.header}>{header}</div>}
      <ul className="flex flex-1 flex-col gap-0.5 p-2">
        {items.map((item) => renderItem(item))}
      </ul>
      {footer && <div className={styleConfig.footer}>{footer}</div>}
      {collapsible && (
        <button
          type="button"
          onClick={toggleCollapse}
          className={styleConfig.collapseBtn}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <CollapseIcon collapsed={isCollapsed} />
          {!isCollapsed && <span>Collapse</span>}
        </button>
      )}
    </nav>
  );
}

export { UISidebar as default };
