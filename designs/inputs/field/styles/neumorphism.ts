import type { FieldStyleConfig } from "./default";
export type { FieldStyleConfig };

export const neumorphismStyle: FieldStyleConfig = {
  root: "flex flex-col gap-2",
  label: "text-sm font-semibold text-slate-700 leading-none",
  description: "text-xs text-slate-500 leading-relaxed",
  error: "text-xs text-red-500",
  control: "w-full",
  horizontal: "flex flex-row items-start gap-4",
};
