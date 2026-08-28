export type { CardStyleConfig, CardVariant, CardPadding, CardRadius } from "./default";
import type { CardStyleConfig } from "./default";

export const materialStyle: CardStyleConfig = {
  base: "w-full",
  variants: {
    default:  "bg-violet-50 border border-violet-200/50 dark:bg-violet-950/30 dark:border-violet-800/30",
    bordered: "bg-transparent border-2 border-violet-300/60 dark:border-violet-700/40",
  },
  padding: {
    none: "",
    sm:   "p-3",
    md:   "p-5",
    lg:   "p-7",
  },
  radius: {
    none: "rounded-none",
    sm:   "rounded-lg",
    md:   "rounded-2xl",
    lg:   "rounded-3xl",
  },
  shadow:    "shadow-[0_1px_3px_rgba(103,80,164,0.12),0_1px_2px_rgba(103,80,164,0.08)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.24)]",
  hoverable: "transition-all duration-200 hover:border-violet-300 hover:shadow-[0_2px_8px_rgba(103,80,164,0.16),0_1px_3px_rgba(103,80,164,0.10)] hover:-translate-y-0.5 dark:hover:border-violet-700/60 dark:hover:shadow-[0_2px_8px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.3)]",
  interactive: "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 dark:focus-visible:ring-violet-400/40",
};
