import type { ComboboxStyleConfig } from "./default";
export type { ComboboxStyleConfig };

export const gradientStyle: ComboboxStyleConfig = {
  trigger: "flex min-h-9 w-full items-center justify-between rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-150 hover:border-zinc-600 focus-within:border-fuchsia-500/60 focus-within:ring-2 focus-within:ring-fuchsia-500/20 focus-within:outline-none disabled:cursor-not-allowed disabled:opacity-40",
  inputGroup: "flex flex-1 flex-wrap items-center gap-1 min-w-0",
  input: "flex-1 min-w-[60px] bg-transparent text-sm text-zinc-200 placeholder:text-zinc-600 outline-none",
  icon: "shrink-0 text-zinc-500 transition-transform duration-150 data-[popup-open]:rotate-180",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-[0_24px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] py-1 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  item: "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-zinc-300 transition-colors duration-100 select-none data-[highlighted]:bg-fuchsia-500/10 data-[highlighted]:text-fuchsia-200 data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed",
  itemIndicator: "ml-auto shrink-0 text-fuchsia-400",
  empty: "px-3 py-6 text-center text-sm text-zinc-500",
  chip: "flex items-center gap-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-2 py-0.5 text-xs font-medium text-fuchsia-300 shadow-[inset_0_1px_0_rgba(232,121,249,0.1)]",
  chipRemove: "text-fuchsia-400/60 hover:text-fuchsia-300 transition-colors cursor-pointer leading-none",
  clear: "shrink-0 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer",
  placeholder: "text-zinc-600",
  label: "text-sm font-medium text-zinc-300 leading-none",
  description: "text-xs text-zinc-500 leading-relaxed",
  error: "text-xs text-red-400",
};
