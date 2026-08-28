import type { AlertDialogStyleConfig } from "./default";
export type { AlertDialogStyleConfig } from "./default";

export const pixelStyle: AlertDialogStyleConfig = {
  backdrop:
    "fixed inset-0 bg-black/70 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  popup:
    "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-none border-4 border-[#ef476f] bg-[#0d0d12] shadow-[8px_8px_0_0_#000] p-6 focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-150",
  sizes: {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  },
  title: "font-mono text-base font-bold text-[#06d6a0] uppercase tracking-widest",
  description: "mt-2 mb-5 font-mono text-sm text-[#06d6a0]/60 leading-relaxed",
  footer: "flex items-center justify-end gap-2",
  cancelBtn:
    "rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] px-4 py-2 font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-wide transition-all hover:bg-[#06d6a0]/10 focus-visible:outline-none",
  confirmBtn:
    "rounded-none border-2 border-black bg-[#06d6a0] px-4 py-2 font-mono text-sm font-bold text-black uppercase tracking-wide shadow-[3px_3px_0_0_#000] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
  confirmBtnDestructive:
    "rounded-none border-2 border-black bg-[#ef476f] px-4 py-2 font-mono text-sm font-bold text-black uppercase tracking-wide shadow-[3px_3px_0_0_#000] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
  trigger:
    "rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] px-4 py-2 font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-wide transition-all hover:bg-[#06d6a0]/10 focus-visible:outline-none",
};
