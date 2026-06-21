import type { PaginationStyleConfig } from "./default";
export type { PaginationStyleConfig };

export const gradientStyle: PaginationStyleConfig = {
  nav: "flex items-center",
  list: "flex items-center gap-1",
  item: "",
  btn: "flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 font-medium text-zinc-400 transition-all duration-150 hover:border-zinc-600 hover:text-zinc-300 hover:bg-zinc-800 active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/40 disabled:cursor-not-allowed disabled:opacity-40",
  sizes: {
    sm: "h-7 min-w-[28px] px-2 text-xs",
    md: "h-8 min-w-[32px] px-2.5 text-sm",
    lg: "h-9 min-w-[36px] px-3 text-sm",
  },
  active: "bg-gradient-to-r from-fuchsia-600 to-pink-500 border-transparent text-white hover:from-fuchsia-500 hover:to-pink-400 hover:border-transparent hover:bg-none shadow-[0_2px_10px_rgba(217,70,239,0.2)]",
  disabled: "opacity-40 cursor-not-allowed pointer-events-none",
  ellipsis: "flex items-end justify-center pb-0.5 text-zinc-600 select-none",
  prevNext: "",
  firstLast: "",
};
