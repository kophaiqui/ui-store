import type { FieldStyleConfig } from "./default";
export type { FieldStyleConfig };

export const neobrutalismStyle: FieldStyleConfig = {
  root: "flex flex-col gap-1.5",
  label: "text-sm font-black text-zinc-950 uppercase tracking-wide leading-none",
  description: "text-xs font-medium text-zinc-600 leading-relaxed",
  error: "text-xs font-bold text-red-600",
  control: "w-full",
  horizontal: "flex flex-row items-start gap-4",
};
