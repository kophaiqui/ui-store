export type { CardStyleConfig, CardVariant, CardPadding, CardRadius } from "./default";
import type { CardStyleConfig } from "./default";

export const auroraStyle: CardStyleConfig = {
  base: "w-full",
  variants: {
    default:  "bg-indigo-950/40 border border-indigo-400/15 backdrop-blur-sm",
    bordered: "bg-transparent border-2 border-violet-400/20",
  },
  padding: {
    none: "",
    sm:   "p-3",
    md:   "p-5",
    lg:   "p-7",
  },
  radius: {
    none: "rounded-none",
    sm:   "rounded-md",
    md:   "rounded-xl",
    lg:   "rounded-2xl",
  },
  shadow:    "shadow-[0_0_30px_rgba(45,212,191,0.08),0_8px_32px_rgba(0,0,0,0.5)]",
  hoverable: "transition-all duration-200 hover:border-teal-400/30 hover:shadow-[0_0_40px_rgba(45,212,191,0.15),0_12px_40px_rgba(0,0,0,0.5)] hover:-translate-y-0.5",
  interactive: "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40",
};
