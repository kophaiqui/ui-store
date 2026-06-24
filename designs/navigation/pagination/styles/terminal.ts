import type { PaginationStyleConfig } from "./default";
export type { PaginationStyleConfig } from "./default";

export const terminalStyle: PaginationStyleConfig = {
  nav: "flex items-center",
  list: "flex items-center gap-1",
  item: "",
  btn: "flex items-center justify-center rounded-sm border border-[#16A34A] bg-transparent font-mono font-bold text-[#065F46] uppercase tracking-wide dark:border-[#22C55E] dark:text-[#22C55E] transition-all duration-100 hover:bg-[#16A34A]/10 dark:hover:bg-[#22C55E]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/50 dark:focus-visible:ring-[#22C55E]/50 disabled:cursor-not-allowed disabled:opacity-40",
  sizes: {
    sm: "h-7 min-w-[28px] px-2 text-xs",
    md: "h-8 min-w-[32px] px-2.5 text-sm",
    lg: "h-9 min-w-[36px] px-3 text-sm",
  },
  active: "bg-[#16A34A] border-[#16A34A] text-white dark:bg-[#22C55E] dark:border-[#22C55E] dark:text-black hover:bg-[#15803D] dark:hover:bg-[#16A34A]",
  disabled: "opacity-40 cursor-not-allowed pointer-events-none",
  ellipsis: "flex items-end justify-center pb-0.5 font-mono text-[#047857] dark:text-[#86EFAC] font-bold select-none",
  prevNext: "",
  firstLast: "",
};
