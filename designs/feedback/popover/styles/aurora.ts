export type { PopoverStyleConfig } from "./default";
import type { PopoverStyleConfig } from "./default";

export const auroraStyle: PopoverStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-md border border-indigo-400/20 bg-indigo-950/50 px-4 text-sm font-medium text-indigo-200 transition-all duration-150 hover:bg-indigo-900/50 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40",
  popup: "z-50 w-72 rounded-xl border border-indigo-400/20 bg-[#0b1022]/95 backdrop-blur-xl p-4 shadow-[0_0_40px_rgba(99,102,241,0.15),0_8px_40px_rgba(0,0,0,0.5)]",
  title: "text-sm font-semibold tracking-tight text-teal-50",
  description: "text-xs leading-relaxed text-indigo-300/60",
  close: "flex size-5 items-center justify-center rounded text-indigo-300/60 hover:text-teal-200 transition-colors duration-150 focus-visible:outline-none",
};
