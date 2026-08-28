import type { SonnerStyleConfig } from "./default";
export type { SonnerStyleConfig, SonnerToastType, SonnerPosition } from "./default";

export const pixelStyle: SonnerStyleConfig = {
  viewport:
    "fixed z-[9999] flex max-h-screen flex-col gap-2 p-4 pointer-events-none",
  positions: {
    "top-left": "top-0 left-0 items-start",
    "top-center": "top-0 left-1/2 -translate-x-1/2 items-center",
    "top-right": "top-0 right-0 items-end",
    "bottom-left": "bottom-0 left-0 items-start",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
    "bottom-right": "bottom-0 right-0 items-end",
  },
  toast:
    "pointer-events-auto flex w-80 items-start gap-3 rounded-none border-2 border-[#ef476f] bg-[#0d0d12] px-4 py-3 shadow-[4px_4px_0_0_#000] data-[starting-style]:opacity-0 data-[starting-style]:translate-y-2 data-[ending-style]:opacity-0 data-[ending-style]:translate-y-2 transition-[opacity,transform] duration-150",
  types: {
    default: "",
    success: "border-[#06d6a0]",
    error: "border-[#ef476f]",
    warning: "border-[#ffd166]",
    info: "border-[#118ab2]",
  },
  title: "font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-widest",
  message: "font-mono text-xs text-[#06d6a0]/60 leading-relaxed",
  action:
    "mt-1 font-mono text-xs font-bold text-[#ffd166] hover:text-[#ffd166]/70 transition-colors cursor-pointer uppercase",
  close:
    "ml-auto shrink-0 text-[#06d6a0]/50 hover:text-[#06d6a0] transition-colors cursor-pointer",
  trigger:
    "rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] px-4 py-2 font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-wide transition-all hover:bg-[#06d6a0]/10 focus-visible:outline-none",
};
