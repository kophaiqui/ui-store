import type { ComboboxStyleConfig } from "./default";
export type { ComboboxStyleConfig };

export const gradientStyle: ComboboxStyleConfig = {
  trigger: "flex min-h-9 w-full items-center justify-between rounded-xl border border-[#FCE7F3] bg-white px-3 py-1.5 text-sm shadow-sm transition-all duration-150 hover:border-[#7C3AED]/30 focus-within:border-[#7C3AED]/60 focus-within:ring-2 focus-within:ring-[#7C3AED]/20 focus-within:outline-none disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:hover:border-zinc-600 dark:focus-within:border-fuchsia-500/60 dark:focus-within:ring-fuchsia-500/20",
  inputGroup: "flex flex-1 flex-wrap items-center gap-1 min-w-0",
  input: "flex-1 min-w-[60px] bg-transparent text-sm text-[#0F172A] placeholder:text-[#64748B] outline-none dark:text-zinc-200 dark:placeholder:text-zinc-600",
  icon: "shrink-0 text-[#64748B] transition-transform duration-150 data-[popup-open]:rotate-180 dark:text-zinc-500",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-xl border border-[#FCE7F3] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] py-1 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_24px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]",
  item: "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-[#0F172A] transition-colors duration-100 select-none data-[highlighted]:bg-[#7C3AED]/8 data-[highlighted]:text-[#7C3AED] data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed dark:text-zinc-300 dark:data-[highlighted]:bg-fuchsia-500/10 dark:data-[highlighted]:text-fuchsia-200",
  itemIndicator: "ml-auto shrink-0 text-[#7C3AED] dark:text-fuchsia-400",
  empty: "px-3 py-6 text-center text-sm text-[#64748B] dark:text-zinc-500",
  chip: "flex items-center gap-1 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/8 px-2 py-0.5 text-xs font-medium text-[#7C3AED] dark:border-fuchsia-500/30 dark:bg-fuchsia-500/10 dark:text-fuchsia-300",
  chipRemove: "text-[#7C3AED]/60 hover:text-[#7C3AED] transition-colors cursor-pointer leading-none dark:text-fuchsia-400/60 dark:hover:text-fuchsia-300",
  clear: "shrink-0 text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer dark:text-zinc-500 dark:hover:text-zinc-300",
  placeholder: "text-[#64748B] dark:text-zinc-600",
  label: "text-sm font-medium text-[#0F172A] leading-none dark:text-zinc-300",
  description: "text-xs text-[#64748B] leading-relaxed dark:text-zinc-500",
  error: "text-xs text-red-600 dark:text-red-400",
};
