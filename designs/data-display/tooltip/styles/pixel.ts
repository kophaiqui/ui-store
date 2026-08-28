import type { TooltipStyleConfig } from "./default";
export type { TooltipStyleConfig } from "./default";

export const pixelStyle: TooltipStyleConfig = {
  trigger: "inline-flex items-center gap-1 font-mono text-sm font-bold text-[#06d6a0] underline underline-offset-4 decoration-2 decoration-[#ef476f] hover:text-[#ffd166] transition-colors duration-100 cursor-default select-none focus-visible:outline-none",
  popup: "rounded-none border-2 border-[#ef476f] bg-[#0d0d12] px-3 py-1.5 font-mono text-xs font-bold text-[#06d6a0] uppercase tracking-wide shadow-[3px_3px_0_0_#000]",
};
