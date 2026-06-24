import type { FieldStyleConfig } from "./default";
export type { FieldStyleConfig } from "./default";

export const terminalStyle: FieldStyleConfig = {
  root: "flex flex-col gap-1.5",
  label: "font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] leading-none uppercase tracking-wide",
  description: "font-mono text-xs text-[#047857] dark:text-[#86EFAC] leading-relaxed",
  error: "font-mono text-xs text-red-600 dark:text-red-500 font-bold",
  control: "w-full",
  horizontal: "flex flex-row items-start gap-4",
};
