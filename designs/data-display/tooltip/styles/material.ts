export type { TooltipStyleConfig } from "./default";
import type { TooltipStyleConfig } from "./default";

export const materialStyle: TooltipStyleConfig = {
  trigger: "inline-flex items-center gap-1 text-sm text-foreground/80 underline underline-offset-[3px] decoration-dashed decoration-violet-300 dark:decoration-violet-700 hover:text-foreground hover:decoration-violet-500 dark:hover:decoration-violet-500 transition-colors duration-150 cursor-default select-none focus-visible:outline-none",
  popup: "rounded-xl border border-violet-200/40 bg-white px-2.5 py-1.5 text-xs text-zinc-800 leading-snug shadow-[0_2px_8px_rgba(103,80,164,0.16),0_1px_3px_rgba(103,80,164,0.10)] dark:border-violet-800/30 dark:bg-[#1d1b20] dark:text-foreground dark:shadow-[0_2px_8px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.3)]",
};
