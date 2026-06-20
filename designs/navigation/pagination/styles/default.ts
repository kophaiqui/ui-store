export type PaginationStyleConfig = {
  nav: string;
  list: string;
  item: string;
  btn: string;
  sizes: Record<"sm" | "md" | "lg", string>;
  active: string;
  disabled: string;
  ellipsis: string;
  prevNext: string;
  firstLast: string;
};

export const defaultStyle: PaginationStyleConfig = {
  nav: "flex items-center",
  list: "flex items-center gap-1",
  item: "",
  btn: "flex items-center justify-center rounded-lg border border-border bg-card font-medium text-foreground/90 transition-colors duration-100 hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-40",
  sizes: {
    sm: "h-7 min-w-[28px] px-2 text-xs",
    md: "h-8 min-w-[32px] px-2.5 text-sm",
    lg: "h-9 min-w-[36px] px-3 text-sm",
  },
  active: "bg-emerald-500 border-emerald-500 text-zinc-950 hover:bg-emerald-400",
  disabled: "opacity-40 cursor-not-allowed pointer-events-none",
  ellipsis: "flex items-end justify-center pb-0.5 text-muted-foreground select-none",
  prevNext: "",
  firstLast: "",
};
