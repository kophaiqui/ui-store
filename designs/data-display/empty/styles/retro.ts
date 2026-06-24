import type { EmptyStyleConfig } from "./default";
export type { EmptyStyleConfig } from "./default";

export const retroStyle: EmptyStyleConfig = {
  wrapper: "flex flex-col items-center justify-center gap-4 py-12 text-center",
  icon: "text-[#7a5230] dark:text-[#A1A1AA]",
  title: "text-base font-black text-[#2c1a0e] uppercase tracking-wide dark:text-[#F5F3FF]",
  description: "max-w-xs text-sm text-[#7a5230] font-medium dark:text-[#A1A1AA]",
  actions: "flex items-center gap-3",
};
