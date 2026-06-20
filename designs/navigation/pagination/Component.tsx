"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { PaginationStyleConfig } from "./styles/default";

export type { PaginationStyleConfig };

type Props = {
  styleConfig?: PaginationStyleConfig;
  page?: number;
  defaultPage?: number;
  totalPages?: number;
  pageSize?: number;
  totalItems?: number;
  siblingCount?: number;
  showFirstLast?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  onPageChange?: (page: number) => void;
  className?: string;
};

function buildRange(current: number, total: number, siblings: number): (number | "…")[] {
  const delta = siblings + 2;
  const left = current - siblings;
  const right = current + siblings;
  const range: number[] = [];

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= left && i <= right)) {
      range.push(i);
    }
  }

  const result: (number | "…")[] = [];
  let prev: number | null = null;
  for (const i of range) {
    if (prev !== null && i - prev > 1) result.push("…");
    result.push(i);
    prev = i;
  }
  return result;
}

export function UIPagination({
  styleConfig = defaultStyle,
  page: pageProp,
  defaultPage = 1,
  totalPages = 10,
  siblingCount = 1,
  showFirstLast = true,
  disabled = false,
  size = "md",
  onPageChange,
  className,
}: Props) {
  const [pageState, setPageState] = useState(defaultPage);
  const current = pageProp !== undefined ? pageProp : pageState;

  const go = (p: number) => {
    if (p < 1 || p > totalPages || p === current || disabled) return;
    setPageState(p);
    onPageChange?.(p);
  };

  const pages = buildRange(current, totalPages, siblingCount);
  const sizeClass = styleConfig.sizes[size];

  const Btn = ({
    children,
    page,
    label,
    isActive = false,
    isDisabled = false,
  }: {
    children: React.ReactNode;
    page?: number;
    label?: string;
    isActive?: boolean;
    isDisabled?: boolean;
  }) => (
    <button
      type="button"
      aria-label={label}
      aria-current={isActive ? "page" : undefined}
      disabled={isDisabled || disabled}
      onClick={() => page !== undefined && go(page)}
      className={cn(
        styleConfig.btn,
        sizeClass,
        isActive && styleConfig.active,
        (isDisabled || disabled) && styleConfig.disabled,
      )}
    >
      {children}
    </button>
  );

  return (
    <nav aria-label="Pagination" className={cn(styleConfig.nav, className)}>
      <ol className={styleConfig.list}>
        {showFirstLast && (
          <li className={styleConfig.item}>
            <Btn page={1} label="First page" isDisabled={current === 1}>⟪</Btn>
          </li>
        )}
        <li className={styleConfig.item}>
          <Btn page={current - 1} label="Previous page" isDisabled={current === 1}>‹</Btn>
        </li>
        {pages.map((p, i) =>
          p === "…" ? (
            <li key={`ellipsis-${i}`} className={styleConfig.item}>
              <span className={cn(styleConfig.ellipsis, sizeClass)}>…</span>
            </li>
          ) : (
            <li key={p} className={styleConfig.item}>
              <Btn page={p} label={`Page ${p}`} isActive={p === current}>{p}</Btn>
            </li>
          )
        )}
        <li className={styleConfig.item}>
          <Btn page={current + 1} label="Next page" isDisabled={current === totalPages}>›</Btn>
        </li>
        {showFirstLast && (
          <li className={styleConfig.item}>
            <Btn page={totalPages} label="Last page" isDisabled={current === totalPages}>⟫</Btn>
          </li>
        )}
      </ol>
    </nav>
  );
}

export { UIPagination as default };
