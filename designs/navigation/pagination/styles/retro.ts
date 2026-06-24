import type { PaginationStyleConfig } from "./default";
export type { PaginationStyleConfig } from "./default";

export const retroStyle: PaginationStyleConfig = {
  nav: "flex items-center",
  list: "flex items-center gap-1",
  item: "",
  btn: "flex items-center justify-center rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] font-black text-[#2c1a0e] uppercase tracking-wide transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-amber-100 shadow-[2px_2px_0px_0px_#3d2410] hover:shadow-[1px_1px_0px_0px_#3d2410] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8743b]/50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#A78BFA] dark:bg-[#161324] dark:text-[#F5F3FF] dark:shadow-[2px_2px_0px_0px_#A78BFA] dark:hover:bg-[#A78BFA]/20 dark:hover:shadow-[1px_1px_0px_0px_#A78BFA] dark:focus-visible:ring-[#A78BFA]/50",
  sizes: {
    sm: "h-7 min-w-[28px] px-2 text-xs",
    md: "h-8 min-w-[32px] px-2.5 text-sm",
    lg: "h-9 min-w-[36px] px-3 text-sm",
  },
  active: "bg-[#e8743b] border-[#3d2410] text-[#2c1a0e] shadow-[3px_3px_0px_0px_#3d2410] hover:bg-[#d4612a] hover:translate-x-0 hover:translate-y-0 hover:shadow-[3px_3px_0px_0px_#3d2410] dark:bg-[#A78BFA] dark:border-[#A78BFA] dark:text-[#F5F3FF] dark:shadow-[3px_3px_0px_0px_#A78BFA] dark:hover:bg-[#c4b5fd] dark:hover:shadow-[3px_3px_0px_0px_#A78BFA]",
  disabled: "opacity-40 cursor-not-allowed pointer-events-none",
  ellipsis: "flex items-end justify-center pb-0.5 text-[#7a5230] font-black select-none dark:text-[#A1A1AA]",
  prevNext: "",
  firstLast: "",
};
