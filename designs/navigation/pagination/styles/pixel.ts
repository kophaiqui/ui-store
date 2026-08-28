import type { PaginationStyleConfig } from "./default";
export type { PaginationStyleConfig } from "./default";

export const pixelStyle: PaginationStyleConfig = {
  nav: "flex items-center",
  list: "flex items-center gap-1",
  item: "",
  btn: "flex items-center justify-center rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] font-mono font-bold text-[#06d6a0] uppercase transition-all duration-100 hover:bg-[#06d6a0]/10 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40",
  sizes: {
    sm: "h-7 min-w-[28px] px-2 text-xs",
    md: "h-8 min-w-[32px] px-2.5 text-sm",
    lg: "h-9 min-w-[36px] px-3 text-sm",
  },
  active: "bg-[#ef476f] border-black text-black hover:bg-[#ef476f]",
  disabled: "opacity-40 cursor-not-allowed pointer-events-none",
  ellipsis: "flex items-end justify-center pb-0.5 text-[#06d6a0]/50 font-mono font-bold select-none",
  prevNext: "",
  firstLast: "",
};
