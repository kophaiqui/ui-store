import type { PopoverStyleConfig } from "./default";
export type { PopoverStyleConfig } from "./default";

export const pixelStyle: PopoverStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] px-4 font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-wide transition-all hover:bg-[#06d6a0]/10 focus-visible:outline-none",
  popup: "z-50 w-72 rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] p-4 shadow-[4px_4px_0_0_#000]",
  title: "font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-widest",
  description: "font-mono text-xs leading-relaxed text-[#06d6a0]/60",
  close: "flex size-5 items-center justify-center rounded-none border border-[#06d6a0]/50 text-[#06d6a0] hover:bg-[#06d6a0]/10 transition-colors duration-100 focus-visible:outline-none",
};
