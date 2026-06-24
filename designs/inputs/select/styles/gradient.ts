import type { SelectStyleConfig } from "./default";
export type { SelectStyleConfig };

export const gradientStyle: SelectStyleConfig = {
  trigger: "flex h-9 w-full items-center justify-between gap-2 rounded-xl border border-[#FCE7F3] bg-white px-3 text-sm text-[#0F172A] shadow-sm transition-all duration-150 hover:border-[#7C3AED]/30 focus:outline-none focus:border-[#7C3AED]/60 focus:ring-2 focus:ring-[#7C3AED]/20 disabled:pointer-events-none disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_2px_4px_rgba(0,0,0,0.2)] dark:hover:border-zinc-600 dark:focus:border-fuchsia-500/60 dark:focus:ring-fuchsia-500/20",
  icon: "shrink-0 text-[#64748B] dark:text-zinc-500",
  placeholder: "text-[#64748B] dark:text-zinc-600",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-xl border border-[#FCE7F3] bg-white py-1 shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_24px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]",
  item: "flex h-8 cursor-default select-none items-center px-3 text-sm text-[#0F172A] transition-colors duration-100 data-[highlighted]:bg-[#7C3AED]/8 data-[highlighted]:text-[#7C3AED] data-[selected]:text-[#7C3AED] dark:text-zinc-300 dark:data-[highlighted]:bg-fuchsia-500/10 dark:data-[highlighted]:text-fuchsia-200 dark:data-[selected]:text-fuchsia-400",
};
