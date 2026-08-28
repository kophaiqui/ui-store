export type { ComboboxStyleConfig } from "./default";
import type { ComboboxStyleConfig } from "./default";

export const materialStyle: ComboboxStyleConfig = {
  trigger:
    "flex min-h-9 w-full items-center justify-between rounded-lg border border-violet-200/50 bg-violet-50/60 px-3 py-1.5 text-sm transition-colors duration-150 hover:border-violet-300 focus-within:ring-2 focus-within:ring-violet-500/30 focus-within:border-violet-500 dark:border-violet-800/30 dark:bg-violet-950/20 dark:hover:border-violet-700 dark:focus-within:ring-violet-400/30 dark:focus-within:border-violet-400 disabled:cursor-not-allowed disabled:opacity-40",
  inputGroup: "flex flex-1 flex-wrap items-center gap-1 min-w-0",
  input:
    "flex-1 min-w-[60px] bg-transparent text-sm text-foreground placeholder:text-foreground/40 outline-none",
  icon: "shrink-0 text-foreground/40 transition-transform duration-150 data-[popup-open]:rotate-180",
  popup:
    "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-2xl border border-violet-200/40 bg-white dark:border-violet-800/30 dark:bg-[#1d1b20] shadow-[0_8px_24px_rgba(103,80,164,0.18)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.5)] py-1 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  item: "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-foreground/80 transition-colors duration-100 select-none data-[highlighted]:bg-violet-100 dark:data-[highlighted]:bg-violet-500/15 data-[highlighted]:text-foreground data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed",
  itemIndicator: "ml-auto shrink-0 text-violet-600 dark:text-violet-400",
  empty: "px-3 py-6 text-center text-sm text-foreground/40",
  chip: "flex items-center gap-1 rounded-full border border-violet-200/50 bg-violet-100 px-1.5 py-0.5 text-xs text-violet-800 dark:border-violet-700/40 dark:bg-violet-500/15 dark:text-violet-200",
  chipRemove:
    "text-foreground/40 hover:text-foreground transition-colors cursor-pointer leading-none",
  clear:
    "shrink-0 text-foreground/40 hover:text-foreground transition-colors cursor-pointer",
  placeholder: "text-foreground/40",
  label: "text-sm font-medium text-foreground/80 leading-none",
  description: "text-xs text-foreground/50 leading-relaxed",
  error: "text-xs text-rose-600 dark:text-rose-300",
};
