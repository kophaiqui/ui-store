import type { CardStyleConfig } from "./default";
export type { CardStyleConfig };

export const neumorphismStyle: CardStyleConfig = {
  base: "w-full bg-[#e8ecf1] dark:bg-[#1E293B]",
  variants: {
    default:  "shadow-[6px_6px_12px_rgba(163,177,198,0.5),-6px_-6px_12px_rgba(255,255,255,0.7)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.5),-6px_-6px_12px_rgba(255,255,255,0.03)]",
    bordered: "shadow-[inset_3px_3px_7px_rgba(163,177,198,0.4),inset_-3px_-3px_7px_rgba(255,255,255,0.6)] dark:shadow-[inset_3px_3px_7px_rgba(0,0,0,0.4),inset_-3px_-3px_7px_rgba(255,255,255,0.02)]",
  },
  padding: {
    none: "",
    sm:   "p-3",
    md:   "p-5",
    lg:   "p-7",
  },
  radius: {
    none: "rounded-none",
    sm:   "rounded-xl",
    md:   "rounded-2xl",
    lg:   "rounded-[2rem]",
  },
  shadow:    "shadow-[6px_6px_12px_rgba(163,177,198,0.5),-6px_-6px_12px_rgba(255,255,255,0.7)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.5),-6px_-6px_12px_rgba(255,255,255,0.03)]",
  hoverable: "transition-all duration-200 hover:shadow-[4px_4px_8px_rgba(163,177,198,0.4),-4px_-4px_8px_rgba(255,255,255,0.6)] dark:hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.02)]",
  interactive: "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 dark:focus-visible:ring-[#818CF8]/40",
};
