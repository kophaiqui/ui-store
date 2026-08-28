import type { AlertStyleConfig } from "./default";
export type { AlertStyleConfig, AlertVariant } from "./default";

export const pixelStyle: AlertStyleConfig = {
  base: "relative overflow-hidden flex items-start gap-3 rounded-none border-2 px-4 py-3 bg-[#0d0d12] shadow-[3px_3px_0_0_#000]",
  variants: {
    info: {
      bg:            "bg-[#118ab2]/10",
      border:        "border-[#118ab2]",
      titleColor:    "font-mono font-bold uppercase tracking-widest text-[#118ab2]",
      descColor:     "font-mono text-[#118ab2]/70",
      iconColor:     "text-[#118ab2]",
      progressColor: "bg-[#118ab2]",
    },
    success: {
      bg:            "bg-[#06d6a0]/10",
      border:        "border-[#06d6a0]",
      titleColor:    "font-mono font-bold uppercase tracking-widest text-[#06d6a0]",
      descColor:     "font-mono text-[#06d6a0]/70",
      iconColor:     "text-[#06d6a0]",
      progressColor: "bg-[#06d6a0]",
    },
    warning: {
      bg:            "bg-[#ffd166]/10",
      border:        "border-[#ffd166]",
      titleColor:    "font-mono font-bold uppercase tracking-widest text-[#ffd166]",
      descColor:     "font-mono text-[#ffd166]/70",
      iconColor:     "text-[#ffd166]",
      progressColor: "bg-[#ffd166]",
    },
    error: {
      bg:            "bg-[#ef476f]/10",
      border:        "border-[#ef476f]",
      titleColor:    "font-mono font-bold uppercase tracking-widest text-[#ef476f]",
      descColor:     "font-mono text-[#ef476f]/70",
      iconColor:     "text-[#ef476f]",
      progressColor: "bg-[#ef476f]",
    },
  },
  closeBtn: "shrink-0 flex items-center justify-center size-5 rounded-none border border-current opacity-70 hover:opacity-100 transition-opacity duration-100 focus:outline-none",
};
