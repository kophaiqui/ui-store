export type { PaginationStyleConfig } from "./default";
import type { PaginationStyleConfig } from "./default";

export const materialStyle: PaginationStyleConfig = {
  nav: "flex items-center",
  list: "flex items-center gap-1",
  item: "",
  btn: "flex items-center justify-center rounded-full border border-violet-200/50 bg-white font-medium text-foreground/80 transition-colors duration-100 hover:bg-violet-100 hover:text-foreground dark:border-violet-800/30 dark:bg-violet-950/20 dark:hover:bg-violet-900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 disabled:cursor-not-allowed disabled:opacity-40",
  sizes: {
    sm: "h-7 min-w-[28px] px-2 text-xs",
    md: "h-8 min-w-[32px] px-2.5 text-sm",
    lg: "h-9 min-w-[36px] px-3 text-sm",
  },
  active: "bg-violet-600 border-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:border-violet-500 dark:hover:bg-violet-400",
  disabled: "opacity-40 cursor-not-allowed pointer-events-none",
  ellipsis: "flex items-end justify-center pb-0.5 text-foreground/40 select-none",
  prevNext: "",
  firstLast: "",
};
