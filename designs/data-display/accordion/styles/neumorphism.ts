import type { AccordionStyleConfig } from "./default";
export type { AccordionStyleConfig };

export const neumorphismStyle: AccordionStyleConfig = {
  root: "w-full space-y-2",
  trigger: "group flex w-full items-center justify-between rounded-2xl px-5 py-4 text-sm font-semibold text-slate-600 dark:text-[#94A3B8] bg-[#e8ecf1] dark:bg-[#1E293B] shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.7)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.5),-4px_-4px_8px_rgba(255,255,255,0.03)] transition-all duration-200 hover:shadow-[2px_2px_5px_rgba(163,177,198,0.4),-2px_-2px_5px_rgba(255,255,255,0.6)] dark:hover:shadow-[2px_2px_5px_rgba(0,0,0,0.4),-2px_-2px_5px_rgba(255,255,255,0.02)] focus-visible:outline-none cursor-default select-none",
  panel: "px-5 pb-4 pt-2 text-sm text-slate-500 dark:text-[#94A3B8] leading-relaxed",
};
