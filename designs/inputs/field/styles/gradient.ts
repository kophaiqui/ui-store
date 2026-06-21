import type { FieldStyleConfig } from "./default";
export type { FieldStyleConfig };

export const gradientStyle: FieldStyleConfig = {
  root: "flex flex-col gap-1.5",
  label: "text-sm font-medium text-zinc-300 leading-none",
  description: "text-xs text-zinc-500 leading-relaxed",
  error: "text-xs text-red-400",
  control: "w-full",
  horizontal: "flex flex-row items-start gap-4",
};
