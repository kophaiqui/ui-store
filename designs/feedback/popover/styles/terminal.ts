import type { PopoverStyleConfig } from "./default";
export type { PopoverStyleConfig } from "./default";

export const terminalStyle: PopoverStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-sm border border-[#16A34A] bg-transparent px-4 font-mono text-sm font-bold text-[#065F46] dark:border-[#22C55E] dark:text-[#22C55E] transition-all duration-100 hover:bg-[#16A34A]/10 dark:hover:bg-[#22C55E]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/40 dark:focus-visible:ring-[#22C55E]/40",
  popup: "z-50 w-72 rounded-sm border border-[#16A34A] bg-white dark:border-[#22C55E] dark:bg-[#0F0F0F] dark:shadow-[0_0_12px_rgba(34,197,94,0.15)] p-4",
  title: "font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] uppercase tracking-wide",
  description: "font-mono text-xs leading-relaxed text-[#047857] dark:text-[#86EFAC]",
  close: "flex size-5 items-center justify-center rounded-sm border border-[#16A34A]/40 text-[#047857] dark:border-[#22C55E]/30 dark:text-[#86EFAC] hover:text-[#065F46] dark:hover:text-[#22C55E] hover:bg-[#16A34A]/10 dark:hover:bg-[#22C55E]/10 transition-colors duration-100 focus-visible:outline-none",
};
