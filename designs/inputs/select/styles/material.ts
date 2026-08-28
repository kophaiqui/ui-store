export type { SelectStyleConfig } from "./default";
import type { SelectStyleConfig } from "./default";

export const materialStyle: SelectStyleConfig = {
  trigger: "flex h-9 w-full items-center justify-between gap-2 rounded-lg border border-violet-200/50 bg-white px-3 text-sm text-foreground shadow-[0_1px_2px_rgba(103,80,164,0.06)] transition-all duration-150 hover:border-violet-300 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-violet-800/30 dark:bg-violet-950/20 dark:hover:border-violet-700 dark:focus:border-violet-400 dark:focus:ring-violet-400/20 disabled:pointer-events-none disabled:opacity-40",
  icon: "shrink-0 text-foreground/40",
  placeholder: "text-foreground/40",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-2xl border border-violet-200/40 bg-white dark:border-violet-800/30 dark:bg-[#1d1b20] py-1 shadow-[0_8px_24px_rgba(103,80,164,0.18)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.5)]",
  item: "flex h-8 cursor-default select-none items-center px-3 text-sm text-foreground/80 transition-colors duration-100 data-[highlighted]:bg-violet-100 dark:data-[highlighted]:bg-violet-500/15 data-[highlighted]:text-foreground data-[selected]:text-violet-600 dark:data-[selected]:text-violet-400",
};
