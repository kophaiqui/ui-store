export type { TooltipStyleConfig } from "./default";
import type { TooltipStyleConfig } from "./default";

export const glassStyle: TooltipStyleConfig = {
  trigger: "inline-flex items-center gap-1 text-sm text-foreground/80 underline underline-offset-[3px] decoration-dashed decoration-black/20 dark:decoration-white/30 hover:text-foreground hover:decoration-black/40 dark:hover:decoration-white/60 transition-colors duration-150 cursor-default select-none focus-visible:outline-none",
  popup: "rounded-lg border border-black/10 bg-white/90 dark:border-white/10 dark:bg-black/60 backdrop-blur-2xl px-2.5 py-1.5 text-xs text-slate-800 dark:text-foreground leading-snug shadow-lg shadow-black/10 dark:shadow-2xl dark:shadow-black/40",
};
