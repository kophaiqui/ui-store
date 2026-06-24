import type { PaginationStyleConfig } from "./default";
export type { PaginationStyleConfig };

export const neumorphismStyle: PaginationStyleConfig = {
  root: "flex items-center gap-2 flex-wrap select-none",
  item: "flex h-9 w-9 items-center justify-center rounded-2xl text-sm font-medium text-slate-600 dark:text-[#94A3B8] bg-[#e8ecf1] dark:bg-[#1E293B] shadow-[3px_3px_7px_rgba(163,177,198,0.5),-3px_-3px_7px_rgba(255,255,255,0.7)] dark:shadow-[3px_3px_7px_rgba(0,0,0,0.5),-3px_-3px_7px_rgba(255,255,255,0.03)] transition-all duration-200 hover:shadow-[1px_1px_4px_rgba(163,177,198,0.4),-1px_-1px_4px_rgba(255,255,255,0.6)] dark:hover:shadow-[1px_1px_4px_rgba(0,0,0,0.4),-1px_-1px_4px_rgba(255,255,255,0.02)] focus-visible:outline-none cursor-default",
  itemActive: "shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)] dark:shadow-[inset_3px_3px_7px_rgba(0,0,0,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.03)] text-slate-800 dark:text-[#E2E8F0] font-semibold pointer-events-none",
  itemDisabled: "opacity-40 pointer-events-none",
  ellipsis: "flex h-9 w-9 items-center justify-center text-sm text-slate-400 dark:text-slate-500 cursor-default select-none",
};
