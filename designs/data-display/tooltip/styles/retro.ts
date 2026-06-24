import type { TooltipStyleConfig } from "./default";
export type { TooltipStyleConfig } from "./default";

export const retroStyle: TooltipStyleConfig = {
  trigger: "inline-flex items-center gap-1 text-sm font-bold text-[#2c1a0e] underline underline-offset-[3px] decoration-[#e8743b] hover:text-[#e8743b] hover:decoration-[#c4612a] transition-colors duration-100 cursor-default select-none focus-visible:outline-none",
  popup: "rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] px-2.5 py-1.5 text-xs text-[#2c1a0e] font-bold leading-snug shadow-[3px_3px_0px_0px_#3d2410] uppercase tracking-wide",
};
