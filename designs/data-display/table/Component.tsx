"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { TableStyleConfig } from "./styles/default";

export type { TableStyleConfig };

type Column<T = Record<string, unknown>> = {
  key: string;
  header: string;
  accessor?: (row: T) => React.ReactNode;
  sortable?: boolean;
  width?: string;
};

type Props<T = Record<string, unknown>> = {
  styleConfig?: TableStyleConfig;
  columns?: Column<T>[];
  data?: T[];
  caption?: string;
  sortable?: boolean;
  selectable?: boolean;
  loading?: boolean;
  emptyState?: React.ReactNode;
  onRowClick?: (row: T) => void;
  rowKey?: (row: T) => string;
  className?: string;
};

type SortState = { key: string; direction: "asc" | "desc" } | null;

function SortIcon({ direction }: { direction?: "asc" | "desc" }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d={direction === "asc" ? "M2 7L5 3L8 7" : direction === "desc" ? "M2 3L5 7L8 3" : "M2 4L5 2L8 4M2 6L5 8L8 6"} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const DEFAULT_COLUMNS: Column[] = [
  { key: "name", header: "Name", sortable: true },
  { key: "role", header: "Role", sortable: true },
  { key: "status", header: "Status" },
];

const DEFAULT_DATA = [
  { name: "Alice Kim", role: "Designer", status: "Active" },
  { name: "Bob Chen", role: "Engineer", status: "Active" },
  { name: "Carol Lane", role: "Manager", status: "Inactive" },
];

export function UITable<T = Record<string, unknown>>({
  styleConfig = defaultStyle,
  columns = DEFAULT_COLUMNS as Column<T>[],
  data = DEFAULT_DATA as T[],
  caption,
  sortable = false,
  selectable = false,
  loading = false,
  emptyState,
  onRowClick,
  rowKey,
  className,
}: Props<T>) {
  const [sort, setSort] = useState<SortState>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const getKey = (row: T, i: number) => rowKey ? rowKey(row) : String(i);

  const toggleSort = (key: string) => {
    setSort((prev) => {
      if (!prev || prev.key !== key) return { key, direction: "asc" };
      if (prev.direction === "asc") return { key, direction: "desc" };
      return null;
    });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sort) return 0;
    const av = String((a as Record<string, unknown>)[sort.key] ?? "");
    const bv = String((b as Record<string, unknown>)[sort.key] ?? "");
    return sort.direction === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
  });

  const allKeys = sortedData.map((r, i) => getKey(r, i));
  const allSelected = allKeys.length > 0 && allKeys.every((k) => selected.has(k));

  const toggleRow = (key: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const toggleAll = () => {
    setSelected(allSelected ? new Set() : new Set(allKeys));
  };

  return (
    <div className={cn(styleConfig.wrapper, className)}>
      {caption && <p className={styleConfig.caption}>{caption}</p>}
      <table className={styleConfig.table}>
        <thead className={styleConfig.thead}>
          <tr>
            {selectable && (
              <th className={cn(styleConfig.th, styleConfig.checkboxCell)}>
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAll}
                  aria-label="Select all"
                  className="cursor-pointer accent-emerald-500"
                />
              </th>
            )}
            {columns.map((col) => {
              const isSortable = sortable || col.sortable;
              const isActive = sort?.key === col.key;
              return (
                <th
                  key={col.key}
                  className={cn(styleConfig.th, isSortable && "cursor-pointer select-none hover:text-foreground")}
                  style={col.width ? { width: col.width } : undefined}
                  onClick={isSortable ? () => toggleSort(col.key) : undefined}
                  aria-sort={isActive ? (sort?.direction === "asc" ? "ascending" : "descending") : undefined}
                >
                  {col.header}
                  {isSortable && (
                    <span className={cn(styleConfig.sortIcon, isActive && styleConfig.sortIconActive)}>
                      <SortIcon direction={isActive ? sort?.direction : undefined} />
                    </span>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={styleConfig.tbody}>
          {loading ? (
            Array.from({ length: 3 }).map((_, ri) => (
              <tr key={ri} className={styleConfig.tr}>
                {selectable && <td className={cn(styleConfig.td, styleConfig.checkboxCell)} />}
                {columns.map((col) => (
                  <td key={col.key} className={styleConfig.td}>
                    <div className={styleConfig.loadingCell} style={{ width: `${50 + Math.random() * 40}%` }} />
                  </td>
                ))}
              </tr>
            ))
          ) : sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className={styleConfig.emptyRow}>
                {emptyState ?? "No data"}
              </td>
            </tr>
          ) : (
            sortedData.map((row, i) => {
              const key = getKey(row, i);
              const isSelected = selected.has(key);
              return (
                <tr
                  key={key}
                  className={cn(
                    styleConfig.tr,
                    onRowClick && styleConfig.trClickable,
                    isSelected && styleConfig.trSelected,
                  )}
                  onClick={() => onRowClick?.(row)}
                >
                  {selectable && (
                    <td className={cn(styleConfig.td, styleConfig.checkboxCell)} onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleRow(key)}
                        aria-label="Select row"
                        className="cursor-pointer accent-emerald-500"
                      />
                    </td>
                  )}
                  {columns.map((col) => (
                    <td key={col.key} className={styleConfig.td}>
                      {col.accessor
                        ? col.accessor(row)
                        : String((row as Record<string, unknown>)[col.key] ?? "")}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export { UITable as default };
