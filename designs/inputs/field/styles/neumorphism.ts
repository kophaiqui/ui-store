import type { FieldStyleConfig } from "./default";
export type { FieldStyleConfig };

export const neumorphismStyle: FieldStyleConfig = {
  root: "flex flex-col gap-2",
  label: "text-sm font-semibold text-slate-700 dark:text-[#E2E8F0] leading-none",
  description: "text-xs text-slate-500 dark:text-[#94A3B8] leading-relaxed",
  error: "text-xs text-red-500",
  control: "w-full",
  horizontal: "flex flex-row items-start gap-4",
};
