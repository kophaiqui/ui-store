import type { AlertDialogStyleConfig } from "./default";
export type { AlertDialogStyleConfig };

export const gradientStyle: AlertDialogStyleConfig = {
  backdrop: "fixed inset-0 bg-black/40 backdrop-blur-sm data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-200 dark:bg-black/70",
  popup: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-2xl border border-[#FCE7F3] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.12)] p-6 focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-200 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_24px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]",
  sizes: {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  },
  title: "text-base font-semibold text-[#0F172A] dark:text-zinc-100",
  description: "mt-2 mb-5 text-sm text-[#64748B] leading-relaxed dark:text-zinc-400",
  footer: "flex items-center justify-end gap-2",
  cancelBtn: "rounded-xl border border-[#FCE7F3] bg-transparent px-4 py-2 text-sm font-medium text-[#0F172A] transition-colors duration-150 hover:bg-[#FDF2F8] active:scale-[0.97] focus-visible:outline-none dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
  confirmBtn: "rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] px-4 py-2 text-sm font-medium text-white shadow-[0_4px_15px_rgba(124,58,237,0.2)] transition-all duration-150 hover:from-[#6D28D9] hover:to-[#DB2777] active:scale-[0.97] focus-visible:outline-none disabled:opacity-60 dark:from-fuchsia-600 dark:to-pink-500 dark:shadow-[0_4px_15px_rgba(217,70,239,0.25)] dark:hover:from-fuchsia-500 dark:hover:to-pink-400",
  confirmBtnDestructive: "rounded-xl bg-gradient-to-r from-red-600 to-rose-500 px-4 py-2 text-sm font-medium text-white shadow-[0_4px_15px_rgba(239,68,68,0.2)] transition-all duration-150 hover:from-red-500 hover:to-rose-400 active:scale-[0.97] focus-visible:outline-none disabled:opacity-60",
  trigger: "rounded-xl border border-[#FCE7F3] bg-white px-4 py-2 text-sm font-medium text-[#0F172A] transition-colors duration-150 hover:border-[#7C3AED]/30 hover:bg-[#FDF2F8] active:scale-[0.97] focus-visible:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-700",
};
