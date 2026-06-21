import type { TooltipStyleConfig } from "./default";
export type { TooltipStyleConfig };

export const neobrutalismStyle: TooltipStyleConfig = {
  trigger: "inline-flex items-center gap-1 text-sm font-bold text-zinc-950 underline underline-offset-[3px] decoration-[2px] decoration-zinc-950 hover:text-zinc-700 transition-colors duration-100 cursor-default select-none focus-visible:outline-none",
  popup: "rounded-none border-2 border-zinc-950 bg-yellow-300 px-3 py-1.5 text-xs font-bold text-zinc-950 shadow-[3px_3px_0px_0px_#09090b]",
};
