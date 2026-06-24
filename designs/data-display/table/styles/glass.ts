export type { TableStyleConfig } from "./default";
import type { TableStyleConfig } from "./default";

export const glassStyle: TableStyleConfig = {
  wrapper: "w-full overflow-x-auto rounded-xl border border-black/8 backdrop-blur-xl bg-black/3 dark:border-white/10 dark:bg-white/3",
  table: "w-full border-collapse text-sm",
  caption: "mb-2 text-left text-xs text-foreground/50",
  thead: "border-b border-black/8 bg-black/4 dark:border-white/10 dark:bg-white/5",
  th: "px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-foreground/50 whitespace-nowrap",
  tbody: "divide-y divide-black/5 dark:divide-white/8",
  tr: "transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-black/3 dark:hover:bg-white/5",
  trSelected: "bg-sky-500/6 dark:bg-sky-400/8",
  td: "px-4 py-3 text-foreground/80",
  emptyRow: "px-4 py-10 text-center text-sm text-foreground/40",
  loadingCell: "h-4 rounded-full bg-black/8 dark:bg-white/10 animate-pulse",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-30",
  sortIconActive: "opacity-100 text-sky-600 dark:text-sky-400",
};
