export type { PaginationStyleConfig } from "./default";
import type { PaginationStyleConfig } from "./default";

export const auroraStyle: PaginationStyleConfig = {
  nav: "flex items-center",
  list: "flex items-center gap-1",
  item: "",
  btn: "flex items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-950/50 font-medium text-indigo-200/90 transition-colors duration-100 hover:bg-indigo-900/50 hover:text-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40 disabled:cursor-not-allowed disabled:opacity-40",
  sizes: {
    sm: "h-7 min-w-[28px] px-2 text-xs",
    md: "h-8 min-w-[32px] px-2.5 text-sm",
    lg: "h-9 min-w-[36px] px-3 text-sm",
  },
  active: "bg-gradient-to-r from-teal-500 to-violet-500 border-teal-400/40 text-white shadow-[0_0_10px_rgba(45,212,191,0.35)] hover:shadow-[0_0_14px_rgba(45,212,191,0.5)]",
  disabled: "opacity-40 cursor-not-allowed pointer-events-none",
  ellipsis: "flex items-end justify-center pb-0.5 text-indigo-300/40 select-none",
  prevNext: "",
  firstLast: "",
};
