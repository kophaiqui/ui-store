export type DataTableStyleConfig = {
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
  toolbar: string;
  searchInput: string;
  columnToggle: string;
  columnTogglePopup: string;
  pagination: string;
  pageBtn: string;
  pageInfo: string;
};

export const defaultStyle: DataTableStyleConfig = {
  wrapper: "flex w-full flex-col gap-3",
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
  toolbar: "flex items-center justify-between gap-3",
  searchInput:
    "h-8 rounded-lg border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500",
  columnToggle:
    "flex h-8 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none",
  columnTogglePopup:
    "z-50 min-w-[160px] rounded-lg border border-border bg-card/95 backdrop-blur-md p-2 shadow-xl shadow-black/20",
  pagination: "flex items-center justify-between gap-2",
  pageBtn:
    "flex h-7 min-w-[28px] items-center justify-center rounded-md border border-border bg-card px-2 text-xs text-foreground/90 transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40 data-[active]:bg-emerald-500 data-[active]:text-zinc-950 data-[active]:border-emerald-500",
  pageInfo: "text-xs text-muted-foreground",
};
