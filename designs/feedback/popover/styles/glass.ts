export type { PopoverStyleConfig } from "./default";
import type { PopoverStyleConfig } from "./default";

export const glassStyle: PopoverStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/8 backdrop-blur-sm px-4 text-sm font-medium text-foreground/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-150 hover:bg-white/12 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40",
  popup: "z-50 w-72 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-2xl p-4 shadow-[0_16px_48px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.07)]",
  title: "text-sm font-semibold tracking-tight text-foreground",
  description: "text-xs leading-relaxed text-foreground/60",
  close: "flex size-5 items-center justify-center rounded-lg text-foreground/50 hover:text-foreground transition-colors duration-150 focus-visible:outline-none",
};
