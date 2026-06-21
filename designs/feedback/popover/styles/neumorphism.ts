import type { PopoverStyleConfig } from "./default";
export type { PopoverStyleConfig };

export const neumorphismStyle: PopoverStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-2xl bg-[#e8ecf1] px-4 text-sm font-semibold text-slate-700 shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.7)] transition-all duration-200 hover:shadow-[2px_2px_5px_rgba(163,177,198,0.4),-2px_-2px_5px_rgba(255,255,255,0.6)] active:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] focus-visible:outline-none",
  popup: "z-50 w-72 rounded-3xl bg-[#e8ecf1] p-5 shadow-[8px_8px_16px_rgba(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.7)]",
  title: "text-sm font-semibold tracking-tight text-slate-800",
  description: "text-xs leading-relaxed text-slate-500",
  close: "flex size-5 items-center justify-center rounded-full bg-[#e8ecf1] text-slate-400 shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.6)] hover:text-slate-600 transition-all duration-150 focus-visible:outline-none",
};
