export type { CardStyleConfig, CardVariant, CardPadding, CardRadius } from "./default";
import type { CardStyleConfig } from "./default";

export const glassStyle: CardStyleConfig = {
  base: "w-full backdrop-blur-xl",
  variants: {
    default:  "bg-white/5 border border-white/10",
    bordered: "bg-transparent border-2 border-white/15",
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
  shadow:    "shadow-2xl shadow-black/40",
  hoverable: "transition-all duration-200 hover:border-white/20 hover:bg-white/8 hover:-translate-y-0.5",
  interactive: "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40",
};
