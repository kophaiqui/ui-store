export type { TableStyleConfig } from "./default";
import type { TableStyleConfig } from "./default";

export const materialStyle: TableStyleConfig = {
  wrapper: "w-full overflow-x-auto rounded-2xl border border-violet-200/40 dark:border-violet-800/30",
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
};
