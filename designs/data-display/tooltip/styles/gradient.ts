import type { TooltipStyleConfig } from "./default";
export type { TooltipStyleConfig };

export const gradientStyle: TooltipStyleConfig = {
  trigger: "inline-flex items-center gap-1 text-sm text-zinc-300 underline underline-offset-[3px] decoration-dashed decoration-fuchsia-500/60 hover:text-fuchsia-300 transition-colors duration-150 cursor-default select-none focus-visible:outline-none",
  popup: "rounded-lg border border-fuchsia-500/20 bg-zinc-900 px-2.5 py-1.5 text-xs text-zinc-200 shadow-[0_8px_24px_rgba(0,0,0,0.5)]",
};
