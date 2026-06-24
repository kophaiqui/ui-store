import type { ComboboxStyleConfig } from "./default";
export type { ComboboxStyleConfig } from "./default";

export const terminalStyle: ComboboxStyleConfig = {
  trigger: "flex min-h-9 w-full items-center justify-between rounded-sm border border-[#16A34A] bg-white px-3 py-1.5 text-sm font-mono transition-all duration-100 hover:bg-[#16A34A]/5 focus-within:ring-2 focus-within:ring-[#16A34A]/40 focus-within:border-[#16A34A] dark:border-[#22C55E] dark:bg-transparent dark:focus-within:ring-[#22C55E]/40 dark:focus-within:border-[#22C55E] dark:hover:bg-[#22C55E]/5 disabled:cursor-not-allowed disabled:opacity-40",
  inputGroup: "flex flex-1 flex-wrap items-center gap-1 min-w-0",
  input: "flex-1 min-w-[60px] bg-transparent text-sm font-mono text-[#065F46] placeholder:text-[#047857]/50 dark:text-[#22C55E] dark:placeholder:text-[#86EFAC]/50 outline-none",
  icon: "shrink-0 text-[#047857] dark:text-[#86EFAC] transition-transform duration-150 data-[popup-open]:rotate-180",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-sm border border-[#16A34A] bg-white dark:border-[#22C55E] dark:bg-[#0F0F0F] py-1 shadow-sm dark:shadow-[0_0_12px_rgba(34,197,94,0.15)] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  item: "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm font-mono text-[#065F46] dark:text-[#22C55E] transition-colors duration-100 select-none data-[highlighted]:bg-[#16A34A] data-[highlighted]:text-white dark:data-[highlighted]:bg-[#22C55E] dark:data-[highlighted]:text-black data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed",
  itemIndicator: "ml-auto shrink-0 text-[#16A34A] dark:text-[#22C55E]",
  empty: "px-3 py-6 text-center text-sm font-mono text-[#047857] dark:text-[#86EFAC]",
  chip: "flex items-center gap-1 rounded-sm border border-[#16A34A] bg-[#16A34A]/10 px-1.5 py-0.5 text-xs font-mono text-[#065F46] dark:border-[#22C55E] dark:bg-[#22C55E]/10 dark:text-[#22C55E]",
  chipRemove: "text-[#047857] hover:text-[#065F46] dark:text-[#86EFAC] dark:hover:text-[#22C55E] transition-colors cursor-pointer leading-none",
  clear: "shrink-0 text-[#047857] hover:text-[#065F46] dark:text-[#86EFAC] dark:hover:text-[#22C55E] transition-colors cursor-pointer",
  placeholder: "text-[#047857]/60 dark:text-[#86EFAC]/50 font-mono",
  label: "font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] leading-none uppercase tracking-wide",
  description: "font-mono text-xs text-[#047857] dark:text-[#86EFAC] leading-relaxed",
  error: "font-mono text-xs text-red-600 dark:text-red-500 font-bold",
};
