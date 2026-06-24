import type { PopoverStyleConfig } from "./default";
export type { PopoverStyleConfig } from "./default";

export const retroStyle: PopoverStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] px-4 text-sm font-bold text-[#2c1a0e] shadow-[3px_3px_0px_0px_#3d2410] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#3d2410] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8743b]/40",
  popup: "z-50 w-72 rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] p-4 shadow-[5px_5px_0px_0px_#3d2410]",
  title: "text-sm font-black text-[#2c1a0e] uppercase tracking-wide",
  description: "text-xs font-medium leading-relaxed text-[#7a5230]",
  close: "flex size-5 items-center justify-center rounded-none border border-[#3d2410] text-[#7a5230] hover:text-[#2c1a0e] hover:bg-amber-100 transition-colors duration-100 focus-visible:outline-none",
};
