export type { TableStyleConfig } from "./default";
import type { TableStyleConfig } from "./default";

export const minimalStyle: TableStyleConfig = {
  wrapper: "w-full overflow-x-auto border-t border-border",
  table: "w-full border-collapse text-sm",
  caption: "mb-2 text-left text-xs text-muted-foreground",
  thead: "border-b border-border",
  th: "px-4 py-3 text-left text-xs font-medium uppercase tracking-widest text-muted-foreground whitespace-nowrap",
  tbody: "divide-y divide-border",
  tr: "transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-muted/20",
  trSelected: "bg-muted/30",
  td: "px-4 py-3 text-foreground/90",
  emptyRow: "px-4 py-10 text-center text-sm text-muted-foreground",
  loadingCell: "h-px bg-border animate-pulse",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-30",
  sortIconActive: "opacity-100 text-foreground",
};
