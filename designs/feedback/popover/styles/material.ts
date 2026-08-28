export type { PopoverStyleConfig } from "./default";
import type { PopoverStyleConfig } from "./default";

export const materialStyle: PopoverStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-full border border-violet-300/60 bg-transparent px-4 text-sm font-medium text-violet-700 dark:border-violet-700/40 dark:text-violet-300 transition-all duration-150 hover:bg-violet-50 dark:hover:bg-violet-500/10 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  popup: "z-50 w-72 rounded-2xl border border-violet-200/40 bg-white dark:border-violet-800/30 dark:bg-[#1d1b20] p-4 shadow-[0_8px_24px_rgba(103,80,164,0.18),0_2px_8px_rgba(103,80,164,0.10)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)]",
  title: "text-sm font-semibold tracking-tight text-foreground",
  description: "text-xs leading-relaxed text-foreground/60",
  close: "flex size-5 items-center justify-center rounded-full text-foreground/50 hover:text-foreground transition-colors duration-150 focus-visible:outline-none",
};
