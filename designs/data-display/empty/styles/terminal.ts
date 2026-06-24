import type { EmptyStyleConfig } from "./default";
export type { EmptyStyleConfig } from "./default";

export const terminalStyle: EmptyStyleConfig = {
  wrapper: "flex flex-col items-center justify-center gap-4 py-12 text-center",
  icon: "text-[#16A34A] dark:text-[#22C55E]",
  title: "font-mono text-base font-bold text-[#065F46] dark:text-[#22C55E] uppercase tracking-wide",
  description: "max-w-xs font-mono text-sm text-[#047857] dark:text-[#86EFAC]",
  actions: "flex items-center gap-3",
};
