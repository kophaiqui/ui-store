import type { ProgressStyleConfig } from "./default";
export type { ProgressStyleConfig } from "./default";

export const terminalStyle: ProgressStyleConfig = {
  track: "relative h-2 w-full overflow-hidden rounded-none border border-[#16A34A]/30 bg-[#16A34A]/10 dark:border-[#22C55E]/20 dark:bg-[#22C55E]/5",
  indicator: "absolute inset-y-0 left-0 rounded-none bg-[#16A34A] dark:bg-[#22C55E] dark:shadow-[0_0_6px_rgba(34,197,94,0.4)] transition-all duration-500 ease-out",
  label: "font-mono text-xs font-bold text-[#065F46] dark:text-[#22C55E] uppercase tracking-wide",
  value: "font-mono text-xs font-bold text-[#065F46] dark:text-[#22C55E]",
};
