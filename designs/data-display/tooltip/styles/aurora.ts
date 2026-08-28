export type { TooltipStyleConfig } from "./default";
import type { TooltipStyleConfig } from "./default";

export const auroraStyle: TooltipStyleConfig = {
  trigger: "inline-flex items-center gap-1 text-sm text-teal-100/80 underline underline-offset-[3px] decoration-dashed decoration-indigo-400/40 hover:text-teal-200 hover:decoration-teal-400/60 transition-colors duration-150 cursor-default select-none focus-visible:outline-none",
  popup: "rounded-md border border-teal-400/20 bg-[#0b1022]/95 backdrop-blur-md px-2.5 py-1.5 text-xs text-teal-100 leading-snug shadow-[0_0_16px_rgba(45,212,191,0.2),0_4px_20px_rgba(0,0,0,0.5)]",
};
