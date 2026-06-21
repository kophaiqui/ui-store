import type { EmptyStyleConfig } from "./default";
export type { EmptyStyleConfig };

export const neobrutalismStyle: EmptyStyleConfig = {
  wrapper: "flex flex-col items-center justify-center gap-4 py-12 text-center border-2 border-dashed border-zinc-950",
  icon: "text-zinc-400",
  title: "text-base font-black text-zinc-950 uppercase tracking-wide",
  description: "max-w-xs text-sm font-medium text-zinc-600",
  actions: "flex items-center gap-3",
};
