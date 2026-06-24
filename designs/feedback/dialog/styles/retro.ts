import type { DialogStyleConfig } from "./default";
export type { DialogStyleConfig } from "./default";

export const retroStyle: DialogStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] px-4 text-sm font-bold text-[#2c1a0e] shadow-[3px_3px_0px_0px_#3d2410] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#3d2410] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8743b]/40",
  backdrop: "fixed inset-0 z-40 bg-[#2c1a0e]/60",
  popup: "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] p-6 shadow-[8px_8px_0px_0px_#3d2410]",
  title: "mb-2 text-base font-black uppercase tracking-wide text-[#2c1a0e]",
  description: "mb-6 text-sm font-medium leading-relaxed text-[#7a5230]",
  cancelBtn: "inline-flex h-8 items-center rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] px-3 text-sm font-bold text-[#2c1a0e] shadow-[2px_2px_0px_0px_#3d2410] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#3d2410] focus-visible:outline-none",
  confirmBtn: "inline-flex h-8 items-center rounded-sm border-2 border-[#3d2410] bg-[#e8743b] px-3 text-sm font-black text-[#2c1a0e] shadow-[2px_2px_0px_0px_#3d2410] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#3d2410] focus-visible:outline-none",
};
