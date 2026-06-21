import type { ComboboxStyleConfig } from "./default";
export type { ComboboxStyleConfig };

export const neumorphismStyle: ComboboxStyleConfig = {
  trigger: "flex min-h-9 w-full items-center justify-between rounded-2xl bg-[#e8ecf1] px-4 py-1.5 text-sm shadow-[inset_3px_3px_7px_rgba(163,177,198,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.7)] transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-400/30 disabled:cursor-not-allowed disabled:opacity-40",
  inputGroup: "flex flex-1 flex-wrap items-center gap-1 min-w-0",
  input: "flex-1 min-w-[60px] bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none",
  icon: "shrink-0 text-slate-400 transition-transform duration-150 data-[popup-open]:rotate-180",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-2xl bg-[#e8ecf1] shadow-[8px_8px_16px_rgba(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.7)] py-1.5 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  item: "flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-slate-600 transition-all duration-100 select-none mx-1 rounded-xl data-[highlighted]:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.4),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] data-[highlighted]:text-slate-800 data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed",
  itemIndicator: "ml-auto shrink-0 text-blue-500",
  empty: "px-3 py-6 text-center text-sm text-slate-400",
  chip: "flex items-center gap-1 rounded-full bg-[#e8ecf1] px-2.5 py-0.5 text-xs font-medium text-slate-600 shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.6)]",
  chipRemove: "text-slate-400 hover:text-slate-700 transition-colors cursor-pointer leading-none",
  clear: "shrink-0 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer",
  placeholder: "text-slate-400",
  label: "text-sm font-semibold text-slate-700 leading-none",
  description: "text-xs text-slate-500 leading-relaxed",
  error: "text-xs text-red-500",
};
