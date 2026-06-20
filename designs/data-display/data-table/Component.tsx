"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { DataTableStyleConfig } from "./styles/default";

export type { DataTableStyleConfig };

type Column<T = Record<string, unknown>> = {
  key: string;
  header: string;
  accessor?: (row: T) => React.ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  visible?: boolean;
  width?: string;
};

type SortState = { key: string; direction: "asc" | "desc" } | null;
type FilterState = Record<string, string>;

type Props<T = Record<string, unknown>> = {
  styleConfig?: DataTableStyleConfig;
  columns?: Column<T>[];
  data?: T[];
  pagination?: boolean;
  sorting?: boolean;
  filtering?: boolean;
  search?: boolean;
  selection?: boolean;
  columnVisibility?: boolean;
  loading?: boolean;
  emptyState?: React.ReactNode;
  rowActions?: (row: T) => React.ReactNode;
  pageSize?: number;
  onSortChange?: (sort: SortState) => void;
  onFilterChange?: (filters: FilterState) => void;
  onSelectionChange?: (selected: T[]) => void;
  rowKey?: (row: T) => string;
  className?: string;
};

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
  { key: "email", header: "Email" },
];

const DEFAULT_DATA = [
  { name: "Alice Kim", role: "Designer", status: "Active", email: "alice@example.com" },
  { name: "Bob Chen", role: "Engineer", status: "Active", email: "bob@example.com" },
  { name: "Carol Lane", role: "Manager", status: "Inactive", email: "carol@example.com" },
  { name: "David Park", role: "Engineer", status: "Active", email: "david@example.com" },
  { name: "Eva Morales", role: "Designer", status: "Active", email: "eva@example.com" },
];

export function UIDataTable<T = Record<string, unknown>>({
  styleConfig = defaultStyle,
  columns = DEFAULT_COLUMNS as Column<T>[],
  data = DEFAULT_DATA as T[],
  pagination = true,
  sorting = true,
  search = true,
  selection = false,
  columnVisibility = false,
  loading = false,
  emptyState,
  rowActions,
  pageSize: pageSizeProp = 10,
  onSortChange,
  onFilterChange,
  onSelectionChange,
  rowKey,
  className,
}: Props<T>) {
  const [sort, setSort] = useState<SortState>(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [colVis, setColVis] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(columns.map((c) => [c.key, c.visible !== false]))
  );
  const [showColMenu, setShowColMenu] = useState(false);
  const colMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (colMenuRef.current && !colMenuRef.current.contains(e.target as Node)) setShowColMenu(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const getKey = (row: T, i: number) => rowKey ? rowKey(row) : String(i);

  const visibleColumns = columns.filter((c) => colVis[c.key] !== false);

  const toggleSort = (key: string) => {
    const next: SortState = sort?.key !== key ? { key, direction: "asc" }
      : sort.direction === "asc" ? { key, direction: "desc" } : null;
    setSort(next);
    onSortChange?.(next);
    setPage(1);
  };

  const filtered = useMemo(() => {
    if (!query.trim()) return data;
    const q = query.toLowerCase();
    return data.filter((row) =>
      Object.values(row as Record<string, unknown>).some((v) => String(v ?? "").toLowerCase().includes(q))
    );
  }, [data, query]);

  const sorted = useMemo(() => {
    if (!sort) return filtered;
    return [...filtered].sort((a, b) => {
      const av = String((a as Record<string, unknown>)[sort.key] ?? "");
      const bv = String((b as Record<string, unknown>)[sort.key] ?? "");
      return sort.direction === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
    });
  }, [filtered, sort]);

  const pageSize = pageSizeProp;
  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const pageData = pagination ? sorted.slice((page - 1) * pageSize, page * pageSize) : sorted;

  const allPageKeys = pageData.map((r, i) => getKey(r, i));
  const allSelected = allPageKeys.length > 0 && allPageKeys.every((k) => selected.has(k));

  const toggleRow = (key: string, row: T) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      onSelectionChange?.(data.filter((r, i) => next.has(getKey(r, i))));
      return next;
    });
  };

  const toggleAll = () => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (allSelected) allPageKeys.forEach((k) => next.delete(k));
      else allPageKeys.forEach((k) => next.add(k));
      return next;
    });
  };

  return (
    <div className={cn(styleConfig.wrapper, className)}>
      {(search || columnVisibility) && (
        <div className={styleConfig.toolbar}>
          {search && (
            <input
              type="search"
              placeholder="Search…"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
              className={styleConfig.searchInput}
            />
          )}
          {columnVisibility && (
            <div className="relative" ref={colMenuRef}>
              <button type="button" onClick={() => setShowColMenu((v) => !v)} className={styleConfig.columnToggle}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><rect x="1" y="1" width="3.5" height="10" rx="1" stroke="currentColor" strokeWidth="1.3" /><rect x="7.5" y="1" width="3.5" height="10" rx="1" stroke="currentColor" strokeWidth="1.3" /></svg>
                Columns
              </button>
              {showColMenu && (
                <div className={cn(styleConfig.columnTogglePopup, "absolute right-0 top-9")}>
                  {columns.map((col) => (
                    <label key={col.key} className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-xs text-foreground/90 hover:bg-accent">
                      <input
                        type="checkbox"
                        checked={colVis[col.key] !== false}
                        onChange={() => setColVis((v) => ({ ...v, [col.key]: !v[col.key] }))}
                        className="accent-emerald-500"
                      />
                      {col.header}
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className={styleConfig.table}>
          <thead className={styleConfig.thead}>
            <tr>
              {selection && (
                <th className={cn(styleConfig.th, styleConfig.checkboxCell)}>
                  <input type="checkbox" checked={allSelected} onChange={toggleAll} aria-label="Select all" className="cursor-pointer accent-emerald-500" />
                </th>
              )}
              {visibleColumns.map((col) => {
                const isSortable = sorting && col.sortable !== false;
                const isActive = sort?.key === col.key;
                return (
                  <th
                    key={col.key}
                    className={cn(styleConfig.th, isSortable && "cursor-pointer select-none hover:text-foreground")}
                    style={col.width ? { width: col.width } : undefined}
                    onClick={isSortable ? () => toggleSort(col.key) : undefined}
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
              {rowActions && <th className={styleConfig.th} />}
            </tr>
          </thead>
          <tbody className={styleConfig.tbody}>
            {loading ? (
              Array.from({ length: 3 }).map((_, ri) => (
                <tr key={ri} className={styleConfig.tr}>
                  {selection && <td className={cn(styleConfig.td, styleConfig.checkboxCell)} />}
                  {visibleColumns.map((col) => (
                    <td key={col.key} className={styleConfig.td}>
                      <div className={styleConfig.loadingCell} />
                    </td>
                  ))}
                </tr>
              ))
            ) : pageData.length === 0 ? (
              <tr>
                <td colSpan={visibleColumns.length + (selection ? 1 : 0) + (rowActions ? 1 : 0)} className={styleConfig.emptyRow}>
                  {emptyState ?? "No results"}
                </td>
              </tr>
            ) : (
              pageData.map((row, i) => {
                const key = getKey(row, i);
                const isSel = selected.has(key);
                return (
                  <tr key={key} className={cn(styleConfig.tr, isSel && styleConfig.trSelected)}>
                    {selection && (
                      <td className={cn(styleConfig.td, styleConfig.checkboxCell)}>
                        <input type="checkbox" checked={isSel} onChange={() => toggleRow(key, row)} aria-label="Select row" className="cursor-pointer accent-emerald-500" />
                      </td>
                    )}
                    {visibleColumns.map((col) => (
                      <td key={col.key} className={styleConfig.td}>
                        {col.accessor ? col.accessor(row) : String((row as Record<string, unknown>)[col.key] ?? "")}
                      </td>
                    ))}
                    {rowActions && <td className={styleConfig.td}>{rowActions(row)}</td>}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {pagination && (
        <div className={styleConfig.pagination}>
          <span className={styleConfig.pageInfo}>
            {sorted.length} result{sorted.length !== 1 ? "s" : ""}
          </span>
          <div className="flex items-center gap-1">
            <button type="button" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className={styleConfig.pageBtn} aria-label="Previous page">‹</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                className={styleConfig.pageBtn}
                data-active={p === page ? "" : undefined}
                aria-current={p === page ? "page" : undefined}
              >
                {p}
              </button>
            ))}
            <button type="button" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className={styleConfig.pageBtn} aria-label="Next page">›</button>
          </div>
        </div>
      )}
    </div>
  );
}

export { UIDataTable as default };
