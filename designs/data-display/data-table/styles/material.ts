export type { DataTableStyleConfig } from "./default";
import type { DataTableStyleConfig } from "./default";

export const materialStyle: DataTableStyleConfig = {
  wrapper: "flex w-full flex-col gap-3",
  table: "w-full border-collapse text-sm",
  caption: "mb-2 text-left text-xs text-foreground/50",
  thead: "border-b border-violet-200/40 bg-violet-50/60 dark:border-violet-800/30 dark:bg-violet-950/20",
  th: "px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-foreground/50 whitespace-nowrap",
  tbody: "divide-y divide-violet-100/60 dark:divide-violet-900/30",
  tr: "transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-violet-50 dark:hover:bg-violet-950/30",
  trSelected: "bg-violet-100/50 dark:bg-violet-500/10",
  td: "px-4 py-3 text-foreground/80",
  emptyRow: "px-4 py-10 text-center text-sm text-foreground/40",
  loadingCell: "h-4 rounded-full bg-violet-100 dark:bg-violet-900/30 animate-pulse",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-30",
  sortIconActive: "opacity-100 text-violet-600 dark:text-violet-400",
  toolbar: "flex items-center justify-between gap-3",
  searchInput:
    "h-8 rounded-lg border border-violet-200/50 bg-violet-50 px-3 text-sm text-foreground placeholder:text-foreground/40 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 dark:border-violet-800/30 dark:bg-violet-950/20 dark:focus:ring-violet-400/30 dark:focus:border-violet-400",
  columnToggle:
    "flex h-8 items-center gap-1.5 rounded-full border border-violet-200/50 bg-violet-50 px-3 text-xs text-foreground/60 transition-colors hover:bg-violet-100 hover:text-foreground dark:border-violet-800/30 dark:bg-violet-950/20 dark:hover:bg-violet-900/30 focus-visible:outline-none",
  columnTogglePopup:
    "z-50 min-w-[160px] rounded-2xl border border-violet-200/40 bg-white p-2 shadow-[0_2px_8px_rgba(103,80,164,0.16),0_1px_3px_rgba(103,80,164,0.10)] dark:border-violet-800/30 dark:bg-[#1d1b20] dark:shadow-[0_2px_8px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.3)]",
  pagination: "flex items-center justify-between gap-2",
  pageBtn:
    "flex h-7 min-w-[28px] items-center justify-center rounded-full border border-violet-200/50 bg-violet-50 px-2 text-xs text-foreground/80 transition-colors hover:bg-violet-100 hover:text-foreground dark:border-violet-800/30 dark:bg-violet-950/20 dark:hover:bg-violet-900/30 disabled:cursor-not-allowed disabled:opacity-40 data-[active]:bg-violet-600 data-[active]:text-white data-[active]:border-violet-600 dark:data-[active]:bg-violet-500 dark:data-[active]:border-violet-500",
  pageInfo: "text-xs text-foreground/50",
};
