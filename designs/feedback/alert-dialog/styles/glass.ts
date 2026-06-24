export type { AlertDialogStyleConfig } from "./default";
import type { AlertDialogStyleConfig } from "./default";

export const glassStyle: AlertDialogStyleConfig = {
  backdrop: "fixed inset-0 bg-black/60 backdrop-blur-sm data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-200",
  popup: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-2xl border border-black/10 bg-white/80 backdrop-blur-2xl shadow-[0_24px_64px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] dark:border-white/10 dark:bg-black/40 dark:shadow-[0_24px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)] p-6 focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-200",
  sizes: { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg" },
  title: "text-base font-semibold text-foreground",
  description: "mt-2 mb-5 text-sm text-foreground/60 leading-relaxed",
  footer: "flex items-center justify-end gap-2",
  cancelBtn: "rounded-lg border border-black/10 bg-black/5 px-4 py-2 text-sm font-medium text-foreground/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:border-white/10 dark:bg-white/8 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-150 hover:bg-black/8 dark:hover:bg-white/12 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 dark:focus-visible:ring-sky-400/40",
  confirmBtn: "rounded-lg bg-sky-500/80 dark:bg-sky-400/75 px-4 py-2 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-150 hover:bg-sky-500/90 dark:hover:bg-sky-400/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 dark:focus-visible:ring-sky-400/60 disabled:opacity-60 disabled:cursor-not-allowed",
  confirmBtnDestructive: "rounded-lg bg-red-500/15 border border-red-500/25 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-400/20 dark:border-red-400/30 dark:text-red-300 transition-all duration-150 hover:bg-red-500/25 dark:hover:bg-red-400/30 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/40 dark:focus-visible:ring-red-400/40 disabled:opacity-60 disabled:cursor-not-allowed",
  trigger: "rounded-lg border border-black/10 bg-black/5 px-4 py-2 text-sm font-medium text-foreground/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:border-white/10 dark:bg-white/8 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-150 hover:bg-black/8 dark:hover:bg-white/12 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 dark:focus-visible:ring-sky-400/40",
};
