import type { TooltipStyleConfig } from "./default";
export type { TooltipStyleConfig };

export const gradientStyle: TooltipStyleConfig = {
  trigger: "inline-flex items-center gap-1 text-sm text-[#0F172A] underline underline-offset-[3px] decoration-dashed decoration-[#7C3AED]/40 hover:text-[#7C3AED] transition-colors duration-150 cursor-default select-none focus-visible:outline-none dark:text-zinc-300 dark:decoration-fuchsia-500/60 dark:hover:text-fuchsia-300",
  popup: "rounded-lg border border-[#FCE7F3] bg-white px-2.5 py-1.5 text-xs text-[#0F172A] shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:border-fuchsia-500/20 dark:bg-zinc-900 dark:text-zinc-200 dark:shadow-[0_8px_24px_rgba(0,0,0,0.5)]",
};
