import type { PaginationStyleConfig } from "./default";
export type { PaginationStyleConfig };

export const neobrutalismStyle: PaginationStyleConfig = {
  nav: "flex items-center",
  list: "flex items-center gap-1",
  item: "",
  btn: "flex items-center justify-center rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] font-bold text-zinc-950 dark:text-white transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40",
  sizes: {
    sm: "h-7 min-w-[28px] px-2 text-xs",
    md: "h-8 min-w-[32px] px-2.5 text-sm",
    lg: "h-9 min-w-[36px] px-3 text-sm",
  },
  active: "bg-yellow-300 border-zinc-950 text-zinc-950 translate-x-[2px] translate-y-[2px] shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
  disabled: "opacity-40 cursor-not-allowed pointer-events-none",
  ellipsis: "flex items-end justify-center pb-0.5 text-zinc-700 dark:text-[#D1D5DB] font-bold select-none",
  prevNext: "",
  firstLast: "",
};
