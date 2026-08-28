import type { BadgeStyleConfig } from "./default";
export type { BadgeStyleConfig, BadgeVariant, BadgeColor, BadgeSize } from "./default";

export const pixelStyle: BadgeStyleConfig = {
  base: "inline-flex items-center font-mono font-bold leading-none uppercase tracking-widest border-2 border-black shadow-[2px_2px_0_0_#000]",
  sizes: {
    sm: "h-4 px-1.5 text-[9px] gap-1",
    md: "h-5 px-2 text-[10px] gap-1",
    lg: "h-6 px-2.5 text-[11px] gap-1.5",
  },
  rounded: "rounded-none",
  square:  "rounded-none",
  colors: {
    default: {
      solid:   "bg-zinc-300 text-black",
      soft:    "bg-zinc-800 text-zinc-200",
      outline: "bg-[#0d0d12] text-zinc-300",
    },
    emerald: {
      solid:   "bg-[#06d6a0] text-black",
      soft:    "bg-[#06d6a0]/20 text-[#06d6a0]",
      outline: "bg-[#0d0d12] text-[#06d6a0]",
    },
    red: {
      solid:   "bg-[#ef476f] text-black",
      soft:    "bg-[#ef476f]/20 text-[#ef476f]",
      outline: "bg-[#0d0d12] text-[#ef476f]",
    },
    amber: {
      solid:   "bg-[#ffd166] text-black",
      soft:    "bg-[#ffd166]/20 text-[#ffd166]",
      outline: "bg-[#0d0d12] text-[#ffd166]",
    },
    blue: {
      solid:   "bg-[#118ab2] text-black",
      soft:    "bg-[#118ab2]/20 text-[#118ab2]",
      outline: "bg-[#0d0d12] text-[#118ab2]",
    },
    violet: {
      solid:   "bg-fuchsia-500 text-black",
      soft:    "bg-fuchsia-500/20 text-fuchsia-400",
      outline: "bg-[#0d0d12] text-fuchsia-400",
    },
  },
  dotColors: {
    default: "bg-zinc-400",
    emerald: "bg-[#06d6a0]",
    red:     "bg-[#ef476f]",
    amber:   "bg-[#ffd166]",
    blue:    "bg-[#118ab2]",
    violet:  "bg-fuchsia-500",
  },
};
