import type { EmptyStyleConfig } from "./default";
export type { EmptyStyleConfig };

export const neumorphismStyle: EmptyStyleConfig = {
  wrapper: "flex flex-col items-center justify-center gap-4 py-12 text-center rounded-3xl bg-[#e8ecf1] dark:bg-[#1E293B] shadow-[inset_4px_4px_10px_rgba(163,177,198,0.5),inset_-4px_-4px_10px_rgba(255,255,255,0.7)] dark:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.5),inset_-4px_-4px_10px_rgba(255,255,255,0.03)]",
  icon: "text-slate-400 dark:text-slate-500",
  title: "text-base font-semibold text-slate-700 dark:text-[#E2E8F0]",
  description: "max-w-xs text-sm text-slate-500 dark:text-[#94A3B8]",
  actions: "flex items-center gap-3",
};
