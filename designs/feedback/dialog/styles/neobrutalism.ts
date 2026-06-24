import type { DialogStyleConfig } from "./default";
export type { DialogStyleConfig };

export const neobrutalismStyle: DialogStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] px-4 text-sm font-bold text-zinc-950 dark:text-white shadow-[3px_3px_0px_0px_#09090b] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#09090b] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none focus-visible:outline-none",
  backdrop: "fixed inset-0 z-40 bg-zinc-950/60",
  popup: "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] p-6 shadow-[8px_8px_0px_0px_#09090b] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.7)]",
  title: "mb-2 text-base font-black text-zinc-950 dark:text-white uppercase tracking-wide",
  description: "mb-6 text-sm font-medium leading-relaxed text-zinc-700 dark:text-[#D1D5DB]",
  cancelBtn: "inline-flex h-8 items-center rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] px-3 text-sm font-bold text-zinc-950 dark:text-white shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#09090b] dark:hover:shadow-[1px_1px_0px_0px_rgba(255,255,255,0.7)] transition-all duration-100 focus-visible:outline-none",
  confirmBtn: "inline-flex h-8 items-center rounded-none border-2 border-zinc-950 dark:border-white bg-yellow-300 px-3 text-sm font-bold text-zinc-950 shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#09090b] dark:hover:shadow-[1px_1px_0px_0px_rgba(255,255,255,0.7)] transition-all duration-100 focus-visible:outline-none",
};
