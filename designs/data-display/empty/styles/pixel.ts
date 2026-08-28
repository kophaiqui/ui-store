import type { EmptyStyleConfig } from "./default";
export type { EmptyStyleConfig } from "./default";

export const pixelStyle: EmptyStyleConfig = {
  wrapper: "flex flex-col items-center justify-center gap-4 py-12 text-center border-4 border-dashed border-[#ef476f]/50",
  icon: "text-[#ef476f]/60",
  title: "font-mono text-base font-bold text-[#06d6a0] uppercase tracking-widest",
  description: "max-w-xs font-mono text-sm text-[#06d6a0]/60",
  actions: "flex items-center gap-3",
};
