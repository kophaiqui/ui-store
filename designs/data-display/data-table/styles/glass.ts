export type { DataTableStyleConfig } from "./default";
import type { DataTableStyleConfig } from "./default";

export const glassStyle: DataTableStyleConfig = {
  wrapper: "flex w-full flex-col gap-3",
  table: "w-full border-collapse text-sm",
  caption: "mb-2 text-left text-xs text-foreground/50",
  thead: "border-b border-black/8 bg-black/4 backdrop-blur-sm dark:border-white/10 dark:bg-white/5",
  th: "px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-foreground/50 whitespace-nowrap",
  tbody: "divide-y divide-black/6 dark:divide-white/8",
  tr: "transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-black/3 dark:hover:bg-white/5",
  trSelected: "bg-sky-500/6 dark:bg-sky-400/8",
  td: "px-4 py-3 text-foreground/80",
  emptyRow: "px-4 py-10 text-center text-sm text-foreground/40",
  loadingCell: "h-4 rounded-full bg-black/8 dark:bg-white/10 animate-pulse",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-30",
  sortIconActive: "opacity-100 text-sky-600 dark:text-sky-400",
  toolbar: "flex items-center justify-between gap-3",
  searchInput:
    "h-8 rounded-lg border border-black/10 bg-black/5 backdrop-blur-sm px-3 text-sm text-foreground placeholder:text-foreground/40 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-sky-500/40 dark:border-white/10 dark:bg-white/5 dark:focus:ring-sky-400/30 dark:focus:border-sky-400/40",
  columnToggle:
    "flex h-8 items-center gap-1.5 rounded-lg border border-black/10 bg-black/5 backdrop-blur-sm px-3 text-xs text-foreground/60 transition-colors hover:bg-black/8 hover:text-foreground dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 focus-visible:outline-none",
  columnTogglePopup:
    "z-50 min-w-[160px] rounded-lg border border-black/8 bg-white/95 backdrop-blur-2xl p-2 shadow-lg shadow-black/10 dark:border-white/10 dark:bg-black/60 dark:shadow-2xl dark:shadow-black/40",
  pagination: "flex items-center justify-between gap-2",
  pageBtn:
    "flex h-7 min-w-[28px] items-center justify-center rounded-md border border-black/10 bg-black/5 px-2 text-xs text-foreground/80 transition-colors hover:bg-black/8 hover:text-foreground dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 data-[active]:bg-sky-500/80 data-[active]:text-white data-[active]:border-sky-500/50 dark:data-[active]:bg-sky-400/80 dark:data-[active]:border-sky-400/50",
  pageInfo: "text-xs text-foreground/50",
};
