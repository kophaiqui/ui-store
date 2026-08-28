import type { TextareaStyleConfig } from "./default";
export type { TextareaStyleConfig, TextareaResize } from "./default";

export const pixelStyle: TextareaStyleConfig = {
  textarea:
    "w-full rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] font-mono text-[#06d6a0] placeholder:text-[#06d6a0]/40 shadow-[3px_3px_0_0_#000] transition-all duration-100 focus:outline-none focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-[2px_2px_0_0_#000] disabled:cursor-not-allowed disabled:opacity-40 read-only:bg-[#06d6a0]/5",
  sizes: {
    sm: "px-3 py-2 text-xs",
    md: "px-3.5 py-2.5 text-sm",
    lg: "px-4 py-3 text-base",
  },
  resizes: {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize",
  },
  errorState: "border-[#ef476f] shadow-[3px_3px_0_0_rgba(239,71,111,0.5)]",
  label: "font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-widest leading-none",
  description: "font-mono text-xs text-[#06d6a0]/60 leading-relaxed",
  error: "font-mono text-xs font-bold text-[#ef476f]",
  helper: "font-mono text-xs text-[#06d6a0]/50",
  loadingOverlay:
    "absolute inset-0 flex items-center justify-center rounded-none bg-[#0d0d12]/80",
};
