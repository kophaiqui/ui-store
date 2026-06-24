import type { PaginationStyleConfig } from "./default";
export type { PaginationStyleConfig };

export const gradientStyle: PaginationStyleConfig = {
  nav: "flex items-center",
  list: "flex items-center gap-1",
  item: "",
  btn: "flex items-center justify-center rounded-lg border border-[#FCE7F3] bg-white font-medium text-[#64748B] transition-all duration-150 hover:border-[#7C3AED]/30 hover:text-[#7C3AED] hover:bg-[#FDF2F8] active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/40 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-300 dark:hover:bg-zinc-800 dark:focus-visible:ring-fuchsia-500/40",
  sizes: {
    sm: "h-7 min-w-[28px] px-2 text-xs",
    md: "h-8 min-w-[32px] px-2.5 text-sm",
    lg: "h-9 min-w-[36px] px-3 text-sm",
  },
  active: "bg-gradient-to-r from-[#7C3AED] to-[#EC4899] border-transparent text-white hover:from-[#6D28D9] hover:to-[#DB2777] hover:border-transparent shadow-[0_2px_10px_rgba(124,58,237,0.2)] dark:from-fuchsia-600 dark:to-pink-500 dark:hover:from-fuchsia-500 dark:hover:to-pink-400 dark:shadow-[0_2px_10px_rgba(217,70,239,0.2)]",
  disabled: "opacity-40 cursor-not-allowed pointer-events-none",
  ellipsis: "flex items-end justify-center pb-0.5 text-[#64748B] select-none dark:text-zinc-600",
  prevNext: "",
  firstLast: "",
};
