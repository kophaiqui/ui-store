import type { PaginationStyleConfig } from "./default";
export type { PaginationStyleConfig };

export const neumorphismStyle: PaginationStyleConfig = {
  nav: "flex items-center",
  list: "flex items-center gap-1.5",
  item: "",
  btn: "flex items-center justify-center rounded-xl bg-[#e8ecf1] font-medium text-slate-600 transition-all duration-200 shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.7)] hover:shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/30 disabled:cursor-not-allowed disabled:opacity-40",
  sizes: {
    sm: "h-7 min-w-[28px] px-2 text-xs",
    md: "h-8 min-w-[32px] px-2.5 text-sm",
    lg: "h-9 min-w-[36px] px-3 text-sm",
  },
  active: "shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] text-blue-600 font-semibold hover:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)]",
  disabled: "opacity-40 cursor-not-allowed pointer-events-none",
  ellipsis: "flex items-end justify-center pb-0.5 text-slate-400 select-none",
  prevNext: "",
  firstLast: "",
};
