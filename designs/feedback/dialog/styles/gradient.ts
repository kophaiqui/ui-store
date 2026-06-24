import type { DialogStyleConfig } from "./default";
export type { DialogStyleConfig };

export const gradientStyle: DialogStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-xl border border-[#FCE7F3] bg-white px-4 text-sm font-medium text-[#0F172A] shadow-sm transition-all duration-150 hover:border-[#7C3AED]/30 hover:bg-[#FDF2F8] active:scale-[0.97] focus-visible:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:hover:border-zinc-600 dark:hover:bg-zinc-700",
  backdrop: "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm dark:bg-black/70",
  popup: "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#FCE7F3] bg-white p-6 shadow-[0_16px_48px_rgba(0,0,0,0.12)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_24px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]",
  title: "mb-2 text-base font-semibold tracking-tight text-[#0F172A] dark:text-zinc-100",
  description: "mb-6 text-sm leading-relaxed text-[#64748B] dark:text-zinc-400",
  cancelBtn: "inline-flex h-8 items-center rounded-lg border border-[#FCE7F3] px-3 text-sm text-[#64748B] hover:bg-[#FDF2F8] hover:text-[#0F172A] active:scale-[0.97] transition-all duration-150 focus-visible:outline-none dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",
  confirmBtn: "inline-flex h-8 items-center rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#EC4899] px-3 text-sm font-medium text-white shadow-[0_4px_12px_rgba(124,58,237,0.15)] hover:from-[#6D28D9] hover:to-[#DB2777] active:scale-[0.97] transition-all duration-150 focus-visible:outline-none dark:from-fuchsia-600 dark:to-pink-500 dark:shadow-[0_4px_12px_rgba(217,70,239,0.2)] dark:hover:from-fuchsia-500 dark:hover:to-pink-400",
};
