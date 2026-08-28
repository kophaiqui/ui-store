export type { ComboboxStyleConfig } from "./default";
import type { ComboboxStyleConfig } from "./default";

export const auroraStyle: ComboboxStyleConfig = {
  trigger:
    "flex min-h-9 w-full items-center justify-between rounded-lg border border-indigo-400/20 bg-indigo-950/50 px-3 py-1.5 text-sm transition-colors duration-150 hover:border-teal-400/30 focus-within:ring-2 focus-within:ring-teal-400/40 focus-within:border-teal-400/40 disabled:cursor-not-allowed disabled:opacity-40",
  inputGroup: "flex flex-1 flex-wrap items-center gap-1 min-w-0",
  input:
    "flex-1 min-w-[60px] bg-transparent text-sm text-teal-50 placeholder:text-indigo-300/40 outline-none",
  icon: "shrink-0 text-indigo-300/50 transition-transform duration-150 data-[popup-open]:rotate-180",
  popup:
    "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-lg border border-indigo-400/20 bg-[#0b1022]/95 backdrop-blur-xl shadow-[0_0_32px_rgba(99,102,241,0.15),0_8px_32px_rgba(0,0,0,0.5)] py-1 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  item: "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-indigo-200/80 transition-colors duration-100 select-none data-[highlighted]:bg-teal-400/10 data-[highlighted]:text-teal-100 data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed",
  itemIndicator: "ml-auto shrink-0 text-teal-400",
  empty: "px-3 py-6 text-center text-sm text-indigo-300/40",
  chip: "flex items-center gap-1 rounded border border-indigo-400/20 bg-indigo-900/40 px-1.5 py-0.5 text-xs text-teal-100",
  chipRemove:
    "text-indigo-300/50 hover:text-teal-200 transition-colors cursor-pointer leading-none",
  clear:
    "shrink-0 text-indigo-300/50 hover:text-teal-200 transition-colors cursor-pointer",
  placeholder: "text-indigo-300/40",
  label: "text-sm font-medium text-indigo-200 leading-none",
  description: "text-xs text-indigo-300/50 leading-relaxed",
  error: "text-xs text-rose-300",
};
