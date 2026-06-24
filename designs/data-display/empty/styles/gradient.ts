import type { EmptyStyleConfig } from "./default";
export type { EmptyStyleConfig };

export const gradientStyle: EmptyStyleConfig = {
  wrapper: "flex flex-col items-center justify-center gap-4 py-12 text-center",
  icon: "text-[#7C3AED]/30 dark:text-fuchsia-500/40",
  title: "text-base font-semibold text-[#0F172A] dark:text-zinc-200",
  description: "max-w-xs text-sm text-[#64748B] dark:text-zinc-500",
  actions: "flex items-center gap-3",
};
