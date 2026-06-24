import type { PopoverStyleConfig } from "./default";
export type { PopoverStyleConfig };

export const neobrutalismStyle: PopoverStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] px-4 text-sm font-bold text-zinc-950 dark:text-white shadow-[3px_3px_0px_0px_#09090b] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#09090b] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none focus-visible:outline-none",
  popup: "z-50 w-72 rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] p-4 shadow-[5px_5px_0px_0px_#09090b] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.7)]",
  title: "text-sm font-black text-zinc-950 dark:text-white uppercase tracking-wide",
  description: "text-xs font-medium leading-relaxed text-zinc-700 dark:text-[#D1D5DB]",
  close: "flex size-5 items-center justify-center rounded-none border border-zinc-950 dark:border-white text-zinc-950 dark:text-white hover:bg-yellow-300 hover:border-zinc-950 hover:text-zinc-950 transition-colors duration-100 focus-visible:outline-none",
};
