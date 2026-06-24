export type { DialogStyleConfig } from "./default";
import type { DialogStyleConfig } from "./default";

export const glassStyle: DialogStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-black/10 bg-black/5 backdrop-blur-sm px-4 text-sm font-medium text-foreground/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:border-white/10 dark:bg-white/8 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-150 hover:bg-black/8 dark:hover:bg-white/12 hover:text-foreground active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 dark:focus-visible:ring-sky-400/40",
  backdrop: "fixed inset-0 z-40 bg-black/30 dark:bg-black/60 backdrop-blur-sm",
  popup: "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-black/10 bg-white/80 backdrop-blur-2xl p-6 shadow-[0_24px_64px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] dark:border-white/10 dark:bg-black/40 dark:shadow-[0_24px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]",
  title: "mb-2 text-base font-semibold tracking-tight text-foreground",
  description: "mb-6 text-sm leading-relaxed text-foreground/60",
  cancelBtn: "inline-flex h-8 items-center rounded-lg border border-black/10 bg-black/5 px-3 text-sm text-foreground/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:border-white/10 dark:bg-white/8 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] hover:bg-black/8 dark:hover:bg-white/12 hover:text-foreground transition-all duration-150 active:scale-[0.97] focus-visible:outline-none",
  confirmBtn: "inline-flex h-8 items-center rounded-lg bg-sky-500/80 dark:bg-sky-400/75 px-3 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-sky-500/90 dark:hover:bg-sky-400/90 transition-all duration-150 active:scale-[0.97] focus-visible:outline-none",
};
