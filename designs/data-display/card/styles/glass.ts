export type { CardStyleConfig, CardVariant, CardPadding, CardRadius } from "./default";
import type { CardStyleConfig } from "./default";

export const glassStyle: CardStyleConfig = {
  base: "w-full backdrop-blur-xl",
  variants: {
    default:  "bg-black/4 border border-black/8 dark:bg-white/5 dark:border-white/10",
    bordered: "bg-transparent border-2 border-black/12 dark:border-white/15",
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
  shadow:    "shadow-lg shadow-black/8 dark:shadow-2xl dark:shadow-black/40",
  hoverable: "transition-all duration-200 hover:border-black/15 hover:bg-black/6 hover:-translate-y-0.5 dark:hover:border-white/20 dark:hover:bg-white/8",
  interactive: "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 dark:focus-visible:ring-sky-400/40",
};
