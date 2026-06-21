import type { TooltipStyleConfig } from "./default";
export type { TooltipStyleConfig };

export const neumorphismStyle: TooltipStyleConfig = {
  trigger: "inline-flex items-center gap-1 text-sm font-semibold text-slate-700 underline underline-offset-[3px] decoration-dashed decoration-slate-400 hover:text-slate-900 transition-colors duration-150 cursor-default select-none focus-visible:outline-none",
  popup: "rounded-2xl bg-[#e8ecf1] px-3 py-2 text-xs font-medium text-slate-700 shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.7)]",
};
