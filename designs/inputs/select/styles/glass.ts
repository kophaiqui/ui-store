export type { SelectStyleConfig } from "./default";
import type { SelectStyleConfig } from "./default";

export const glassStyle: SelectStyleConfig = {
  trigger: "flex h-9 w-full items-center justify-between gap-2 rounded-lg border border-black/12 bg-black/5 backdrop-blur-sm px-3 text-sm text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.70)] transition-all duration-150 hover:border-black/20 hover:bg-black/7 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20 active:scale-[0.98] dark:border-white/15 dark:bg-white/8 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:hover:border-white/25 dark:hover:bg-white/10 dark:focus:border-sky-400/50 dark:focus:ring-sky-400/20 disabled:pointer-events-none disabled:opacity-40",
  icon: "shrink-0 text-foreground/40",
  placeholder: "text-foreground/40",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-xl border border-black/8 bg-white/95 backdrop-blur-2xl py-1 shadow-[0_24px_48px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-black/55 dark:shadow-[0_24px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]",
  item: "flex h-8 cursor-default select-none items-center px-3 text-sm text-foreground/80 transition-colors duration-100 data-[highlighted]:bg-black/5 data-[highlighted]:text-foreground dark:data-[highlighted]:bg-white/10 data-[selected]:text-sky-600 dark:data-[selected]:text-sky-300",
};
