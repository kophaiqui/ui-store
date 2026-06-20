"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { BreadcrumbStyleConfig } from "./styles/default";

export type { BreadcrumbStyleConfig };

type BreadcrumbItem = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
};

type Props = {
  styleConfig?: BreadcrumbStyleConfig;
  items?: BreadcrumbItem[];
  separator?: React.ReactNode;
  maxItems?: number;
  collapsed?: boolean;
  onItemClick?: (item: BreadcrumbItem, index: number) => void;
  className?: string;
};

const DEFAULT_ITEMS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "Breadcrumb" },
];

export function UIBreadcrumb({
  styleConfig = defaultStyle,
  items = DEFAULT_ITEMS,
  separator = "/",
  maxItems,
  onItemClick,
  className,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldCollapse = maxItems !== undefined && items.length > maxItems && !isExpanded;

  let visibleItems: (BreadcrumbItem | null)[];
  if (shouldCollapse && maxItems !== undefined) {
    const keep = Math.max(1, maxItems - 1);
    visibleItems = [
      items[0],
      null,
      ...items.slice(items.length - keep),
    ];
  } else {
    visibleItems = items;
  }

  return (
    <nav aria-label="Breadcrumb" className={cn(styleConfig.nav, className)}>
      <ol className={styleConfig.list}>
        {visibleItems.map((item, i) => {
          const isLast = i === visibleItems.length - 1;

          if (item === null) {
            return (
              <li key="ellipsis" className={styleConfig.item}>
                <button
                  type="button"
                  onClick={() => setIsExpanded(true)}
                  className={styleConfig.ellipsis}
                  aria-label="Show more breadcrumbs"
                >
                  …
                </button>
                {!isLast && <span className={styleConfig.separator} aria-hidden>{separator}</span>}
              </li>
            );
          }

          const realIndex = shouldCollapse && i > 0
            ? items.length - (visibleItems.length - 1 - i)
            : i;

          return (
            <li key={i} className={styleConfig.item}>
              {isLast ? (
                <span className={styleConfig.current} aria-current="page">
                  {item.icon && <span className="mr-1 inline-flex">{item.icon}</span>}
                  {item.label}
                </span>
              ) : item.href ? (
                <a
                  href={item.href}
                  className={styleConfig.link}
                  onClick={(e) => { if (onItemClick) { e.preventDefault(); onItemClick(item, realIndex); } }}
                >
                  {item.icon && <span className="mr-1 inline-flex">{item.icon}</span>}
                  {item.label}
                </a>
              ) : (
                <button
                  type="button"
                  className={styleConfig.link}
                  onClick={() => onItemClick?.(item, realIndex)}
                >
                  {item.icon && <span className="mr-1 inline-flex">{item.icon}</span>}
                  {item.label}
                </button>
              )}
              {!isLast && <span className={styleConfig.separator} aria-hidden>{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export { UIBreadcrumb as default };
