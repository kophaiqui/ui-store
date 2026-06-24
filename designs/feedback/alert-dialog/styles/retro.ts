import type { AlertDialogStyleConfig } from "./default";
export type { AlertDialogStyleConfig } from "./default";

export const retroStyle: AlertDialogStyleConfig = {
  backdrop: "fixed inset-0 bg-[#2c1a0e]/50 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-200",
  popup: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] shadow-[8px_8px_0px_0px_#3d2410] p-6 focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-200",
  sizes: { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg" },
  title: "text-base font-black text-[#2c1a0e] uppercase tracking-wide",
  description: "mt-2 mb-5 text-sm font-medium text-[#7a5230] leading-relaxed",
  footer: "flex items-center justify-end gap-2",
  cancelBtn: "rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] px-4 py-2 text-sm font-bold text-[#2c1a0e] shadow-[2px_2px_0px_0px_#3d2410] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#3d2410] focus-visible:outline-none",
  confirmBtn: "rounded-sm border-2 border-[#3d2410] bg-[#e8743b] px-4 py-2 text-sm font-black text-[#2c1a0e] shadow-[2px_2px_0px_0px_#3d2410] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#3d2410] focus-visible:outline-none disabled:opacity-60",
  confirmBtnDestructive: "rounded-sm border-2 border-red-800 bg-red-600 px-4 py-2 text-sm font-black text-white shadow-[2px_2px_0px_0px_#7f1d1d] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#7f1d1d] focus-visible:outline-none disabled:opacity-60",
  trigger: "rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] px-4 py-2 text-sm font-bold text-[#2c1a0e] shadow-[3px_3px_0px_0px_#3d2410] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#3d2410] focus-visible:outline-none",
};
