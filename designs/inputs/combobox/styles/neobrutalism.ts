import type { ComboboxStyleConfig } from "./default";
export type { ComboboxStyleConfig };

export const neobrutalismStyle: ComboboxStyleConfig = {
  trigger: "flex min-h-9 w-full items-center justify-between rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] px-3 py-1.5 text-sm font-medium text-zinc-950 dark:text-white shadow-[3px_3px_0px_0px_#09090b] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#09090b] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] focus-within:translate-x-[2px] focus-within:translate-y-[2px] focus-within:shadow-[1px_1px_0px_0px_#09090b] dark:focus-within:shadow-[1px_1px_0px_0px_rgba(255,255,255,0.7)] focus-within:outline-none disabled:cursor-not-allowed disabled:opacity-40",
  inputGroup: "flex flex-1 flex-wrap items-center gap-1 min-w-0",
  input: "flex-1 min-w-[60px] bg-transparent text-sm text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none font-medium",
  icon: "shrink-0 text-zinc-700 dark:text-[#D1D5DB] transition-transform duration-100 data-[popup-open]:rotate-180",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-none border-2 border-zinc-950 dark:border-white bg-white dark:bg-[#111111] shadow-[5px_5px_0px_0px_#09090b] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.7)] py-1 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  item: "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-800 dark:text-[#D1D5DB] transition-colors duration-100 select-none data-[highlighted]:bg-yellow-300 data-[highlighted]:text-zinc-950 data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed",
  itemIndicator: "ml-auto shrink-0 text-zinc-950 dark:text-white",
  empty: "px-3 py-6 text-center text-sm font-bold text-zinc-400 dark:text-zinc-600 uppercase",
  chip: "flex items-center gap-1 rounded-none border-2 border-zinc-950 dark:border-white bg-yellow-300 px-1.5 py-0.5 text-xs font-bold text-zinc-950",
  chipRemove: "text-zinc-700 hover:text-zinc-950 transition-colors cursor-pointer leading-none",
  clear: "shrink-0 text-zinc-500 dark:text-[#9CA3AF] hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer",
  placeholder: "text-zinc-400 dark:text-zinc-600",
  label: "text-sm font-black text-zinc-950 dark:text-white uppercase tracking-wide leading-none",
  description: "text-xs font-medium text-zinc-600 dark:text-[#9CA3AF] leading-relaxed",
  error: "text-xs font-bold text-red-600 dark:text-red-400",
};
