import type { DialogStyleConfig } from "./default";
export type { DialogStyleConfig } from "./default";

export const pixelStyle: DialogStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] px-4 font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-wide transition-all hover:bg-[#06d6a0]/10 focus-visible:outline-none",
  backdrop: "fixed inset-0 z-40 bg-black/70",
  popup: "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-none border-4 border-[#ef476f] bg-[#0d0d12] p-6 shadow-[8px_8px_0_0_#000]",
  title: "mb-2 font-mono text-base font-bold uppercase tracking-widest text-[#06d6a0]",
  description: "mb-6 font-mono text-sm leading-relaxed text-[#06d6a0]/60",
  cancelBtn: "inline-flex h-8 items-center rounded-none border-2 border-[#06d6a0] px-3 font-mono text-sm font-bold text-[#06d6a0] uppercase hover:bg-[#06d6a0]/10 transition-all focus-visible:outline-none",
  confirmBtn: "inline-flex h-8 items-center rounded-none border-2 border-black bg-[#06d6a0] px-3 font-mono text-sm font-bold text-black uppercase shadow-[2px_2px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] transition-all focus-visible:outline-none",
};
