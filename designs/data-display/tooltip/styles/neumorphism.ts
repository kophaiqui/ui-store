import type { TooltipStyleConfig } from "./default";
export type { TooltipStyleConfig };

export const neumorphismStyle: TooltipStyleConfig = {
  trigger: "inline-flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-[#E2E8F0] underline underline-offset-[3px] decoration-dashed decoration-slate-400 dark:decoration-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-150 cursor-default select-none focus-visible:outline-none",
  popup: "rounded-2xl bg-[#e8ecf1] dark:bg-[#1E293B] px-3 py-2 text-xs font-medium text-slate-700 dark:text-[#E2E8F0] shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.7)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.5),-4px_-4px_8px_rgba(255,255,255,0.03)]",
};
