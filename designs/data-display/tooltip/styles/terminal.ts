import type { TooltipStyleConfig } from "./default";
export type { TooltipStyleConfig } from "./default";

export const terminalStyle: TooltipStyleConfig = {
  trigger: "inline-flex items-center gap-1 font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] underline underline-offset-[3px] decoration-[#16A34A]/50 dark:decoration-[#22C55E]/50 hover:text-[#16A34A] dark:hover:text-[#86EFAC] transition-colors duration-100 cursor-default select-none focus-visible:outline-none",
  popup: "rounded-sm border border-[#16A34A] bg-white px-2.5 py-1.5 font-mono text-xs text-[#065F46] dark:border-[#22C55E] dark:bg-[#0F0F0F] dark:text-[#22C55E] dark:shadow-[0_0_8px_rgba(34,197,94,0.2)] leading-snug uppercase tracking-wide",
};
