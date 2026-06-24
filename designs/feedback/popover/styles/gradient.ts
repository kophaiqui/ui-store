import type { PopoverStyleConfig } from "./default";
export type { PopoverStyleConfig };

export const gradientStyle: PopoverStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-xl border border-[#FCE7F3] bg-white px-4 text-sm font-medium text-[#0F172A] shadow-sm transition-all duration-150 hover:border-[#7C3AED]/30 hover:bg-[#FDF2F8] active:scale-[0.97] focus-visible:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:hover:border-zinc-600 dark:hover:bg-zinc-700",
  popup: "z-50 w-72 rounded-2xl border border-[#FCE7F3] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_16px_48px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]",
  title: "text-sm font-semibold tracking-tight text-[#0F172A] dark:text-zinc-100",
  description: "text-xs leading-relaxed text-[#64748B] dark:text-zinc-400",
  close: "flex size-5 items-center justify-center rounded text-[#64748B] hover:text-[#7C3AED] transition-colors duration-150 focus-visible:outline-none dark:text-zinc-500 dark:hover:text-zinc-300",
};
