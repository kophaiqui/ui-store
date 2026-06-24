import type { FieldStyleConfig } from "./default";
export type { FieldStyleConfig };

export const gradientStyle: FieldStyleConfig = {
  root: "flex flex-col gap-1.5",
  label: "text-sm font-medium text-[#0F172A] leading-none dark:text-zinc-300",
  description: "text-xs text-[#64748B] leading-relaxed dark:text-zinc-500",
  error: "text-xs text-red-600 dark:text-red-400",
  control: "w-full",
  horizontal: "flex flex-row items-start gap-4",
};
