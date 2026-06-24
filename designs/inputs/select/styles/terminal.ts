import type { SelectStyleConfig } from "./default";
export type { SelectStyleConfig } from "./default";

export const terminalStyle: SelectStyleConfig = {
  trigger: "flex h-9 w-full items-center justify-between gap-2 rounded-sm border border-[#16A34A] bg-white px-3 font-mono text-sm text-[#065F46] dark:border-[#22C55E] dark:bg-transparent dark:text-[#22C55E] transition-all duration-100 hover:bg-[#16A34A]/5 dark:hover:bg-[#22C55E]/5 focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40 dark:focus:ring-[#22C55E]/40 disabled:pointer-events-none disabled:opacity-40",
  icon: "shrink-0 text-[#047857] dark:text-[#86EFAC]",
  placeholder: "text-[#047857]/60 dark:text-[#86EFAC]/50 font-mono",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-sm border border-[#16A34A] bg-white dark:border-[#22C55E] dark:bg-[#0F0F0F] py-1 shadow-sm dark:shadow-[0_0_12px_rgba(34,197,94,0.15)]",
  item: "flex h-8 cursor-default select-none items-center px-3 font-mono text-sm text-[#065F46] dark:text-[#22C55E] transition-colors duration-100 data-[highlighted]:bg-[#16A34A] data-[highlighted]:text-white dark:data-[highlighted]:bg-[#22C55E] dark:data-[highlighted]:text-black data-[selected]:text-[#16A34A] dark:data-[selected]:text-[#86EFAC] data-[selected]:font-bold",
};
