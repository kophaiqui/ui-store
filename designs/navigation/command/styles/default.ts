export type CommandStyleConfig = {
  backdrop: string;
  popup: string;
  sizes: Record<"sm" | "md" | "lg", string>;
  search: string;
  searchInput: string;
  list: string;
  groupHeading: string;
  item: string;
  itemSelected: string;
  itemDisabled: string;
  itemIcon: string;
  itemLabel: string;
  itemDescription: string;
  itemShortcut: string;
  empty: string;
  trigger: string;
};

export const defaultStyle: CommandStyleConfig = {
  backdrop:
    "fixed inset-0 bg-black/50 backdrop-blur-[2px] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  popup:
    "fixed left-1/2 top-[20%] -translate-x-1/2 w-full overflow-hidden rounded-xl border border-border bg-card/95 backdrop-blur-md shadow-2xl shadow-black/30 focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:-translate-x-1/2 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-150",
  sizes: {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
  },
  search: "flex items-center gap-3 border-b border-border px-4 py-3",
  searchInput:
    "flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none",
  list: "max-h-[320px] overflow-y-auto p-1.5",
  groupHeading: "px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-muted-foreground/60",
  item: "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-100 select-none",
  itemSelected: "bg-accent text-foreground",
  itemDisabled: "opacity-40 cursor-not-allowed",
  itemIcon: "shrink-0 text-muted-foreground",
  itemLabel: "flex-1 font-medium text-foreground/90",
  itemDescription: "text-xs text-muted-foreground",
  itemShortcut: "ml-auto shrink-0 font-mono text-[0.6875rem] text-muted-foreground/60 bg-muted rounded px-1.5 py-0.5",
  empty: "py-10 text-center text-sm text-muted-foreground",
  trigger:
    "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40",
};
