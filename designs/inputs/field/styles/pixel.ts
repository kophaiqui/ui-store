import type { FieldStyleConfig } from "./default";
export type { FieldStyleConfig } from "./default";

export const pixelStyle: FieldStyleConfig = {
  root: "flex flex-col gap-1.5",
  label: "font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-widest leading-none",
  description: "font-mono text-xs text-[#06d6a0]/60 leading-relaxed",
  error: "font-mono text-xs font-bold text-[#ef476f]",
  control: "w-full",
  horizontal: "flex flex-row items-start gap-4",
};
