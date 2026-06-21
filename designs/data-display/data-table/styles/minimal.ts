export type { DataTableStyleConfig } from "./default";
import type { DataTableStyleConfig } from "./default";

export const minimalStyle: DataTableStyleConfig = {
  wrapper: "flex w-full flex-col gap-3",
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
  loadingCell: "h-px rounded-none bg-border animate-pulse",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-30",
  sortIconActive: "opacity-100 text-foreground",
  toolbar: "flex items-center justify-between gap-3",
  searchInput:
    "h-8 rounded-none border-0 border-b border-border bg-transparent px-0 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:border-foreground",
  columnToggle:
    "flex h-8 items-center gap-1.5 rounded-none border-0 border-b border-border bg-transparent px-0 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none",
  columnTogglePopup:
    "z-50 min-w-[160px] rounded-none border border-border bg-background p-2 shadow-none",
  pagination: "flex items-center justify-between gap-2",
  pageBtn:
    "flex h-7 min-w-[28px] items-center justify-center rounded-none border-0 border-b border-transparent px-2 text-xs text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40 data-[active]:border-foreground data-[active]:text-foreground data-[active]:font-semibold",
  pageInfo: "text-xs text-muted-foreground",
};
