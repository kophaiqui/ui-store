export type { PaginationStyleConfig } from "./default";
import type { PaginationStyleConfig } from "./default";

export const glassStyle: PaginationStyleConfig = {
  nav: "flex items-center",
  list: "flex items-center gap-1",
  item: "",
  btn: "flex items-center justify-center rounded-lg border border-black/10 bg-black/5 backdrop-blur-sm font-medium text-foreground/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:border-white/10 dark:bg-white/8 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-100 hover:bg-black/8 dark:hover:bg-white/12 hover:text-foreground active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 dark:focus-visible:ring-sky-400/40 disabled:cursor-not-allowed disabled:opacity-40",
  sizes: {
    sm: "h-7 min-w-[28px] px-2 text-xs",
    md: "h-8 min-w-[32px] px-2.5 text-sm",
    lg: "h-9 min-w-[36px] px-3 text-sm",
  },
  active: "bg-sky-400/65 border-sky-400/45 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-sky-400/75",
  disabled: "opacity-40 cursor-not-allowed pointer-events-none",
  ellipsis: "flex items-end justify-center pb-0.5 text-foreground/40 select-none",
  prevNext: "",
  firstLast: "",
};
