import type { TooltipStyleConfig } from "./default";
export type { TooltipStyleConfig };

export const neobrutalismStyle: TooltipStyleConfig = {
  trigger: "inline-flex items-center gap-1 text-sm font-bold text-zinc-950 dark:text-white underline underline-offset-[3px] decoration-[2px] decoration-zinc-950 dark:decoration-white hover:text-zinc-700 dark:hover:text-[#D1D5DB] transition-colors duration-100 cursor-default select-none focus-visible:outline-none",
  popup: "rounded-none border-2 border-zinc-950 dark:border-white bg-yellow-300 px-3 py-1.5 text-xs font-bold text-zinc-950 shadow-[3px_3px_0px_0px_#09090b] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)]",
};
