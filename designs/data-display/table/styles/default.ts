export type TableStyleConfig = {
  wrapper: string;
  table: string;
  caption: string;
  thead: string;
  th: string;
  tbody: string;
  tr: string;
  trClickable: string;
  trSelected: string;
  td: string;
  emptyRow: string;
  loadingCell: string;
  checkboxCell: string;
  sortIcon: string;
  sortIconActive: string;
};

export const defaultStyle: TableStyleConfig = {
  wrapper: "w-full overflow-x-auto rounded-xl border border-border",
  table: "w-full border-collapse text-sm",
  caption: "mb-2 text-left text-xs text-muted-foreground",
  thead: "border-b border-border bg-muted/30",
  th: "px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground whitespace-nowrap",
  tbody: "divide-y divide-border",
  tr: "transition-colors duration-100",
  trClickable: "cursor-pointer hover:bg-accent/50",
  trSelected: "bg-emerald-500/5",
  td: "px-4 py-3 text-foreground/90",
  emptyRow: "px-4 py-10 text-center text-sm text-muted-foreground",
  loadingCell: "h-4 rounded bg-muted/60 animate-pulse",
  checkboxCell: "w-10 px-3",
  sortIcon: "ml-1.5 inline-block opacity-30",
  sortIconActive: "opacity-100 text-emerald-500",
};
