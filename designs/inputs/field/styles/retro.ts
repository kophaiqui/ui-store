import type { FieldStyleConfig } from "./default";
export type { FieldStyleConfig } from "./default";

export const retroStyle: FieldStyleConfig = {
  root: "flex flex-col gap-1.5",
  label: "text-sm font-black text-[#2c1a0e] leading-none uppercase tracking-wide",
  description: "text-xs text-[#7a5230] leading-relaxed",
  error: "text-xs text-red-700 font-bold",
  control: "w-full",
  horizontal: "flex flex-row items-start gap-4",
};
