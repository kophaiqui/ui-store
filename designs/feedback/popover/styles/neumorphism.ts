import type { PopoverStyleConfig } from "./default";
export type { PopoverStyleConfig };

export const neumorphismStyle: PopoverStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-2xl bg-[#e8ecf1] dark:bg-[#1E293B] px-4 text-sm font-semibold text-slate-700 dark:text-[#E2E8F0] shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.7)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.5),-4px_-4px_8px_rgba(255,255,255,0.03)] transition-all duration-200 hover:shadow-[2px_2px_5px_rgba(163,177,198,0.4),-2px_-2px_5px_rgba(255,255,255,0.6)] dark:hover:shadow-[2px_2px_5px_rgba(0,0,0,0.4),-2px_-2px_5px_rgba(255,255,255,0.02)] active:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] dark:active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.03)] focus-visible:outline-none",
  popup: "z-50 w-72 rounded-3xl bg-[#e8ecf1] dark:bg-[#1E293B] p-5 shadow-[8px_8px_16px_rgba(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.7)] dark:shadow-[8px_8px_16px_rgba(0,0,0,0.5),-8px_-8px_16px_rgba(255,255,255,0.03)]",
  title: "text-sm font-semibold tracking-tight text-slate-800 dark:text-[#E2E8F0]",
  description: "text-xs leading-relaxed text-slate-500 dark:text-[#94A3B8]",
  close: "flex size-5 items-center justify-center rounded-full bg-[#e8ecf1] dark:bg-[#1E293B] text-slate-400 dark:text-slate-500 shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.6)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.02)] hover:text-slate-600 dark:hover:text-[#E2E8F0] transition-all duration-150 focus-visible:outline-none",
};
