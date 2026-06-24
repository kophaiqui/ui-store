import type { CardStyleConfig } from "./default";
export type { CardStyleConfig };

export const neobrutalismStyle: CardStyleConfig = {
  base: "w-full",
  variants: {
    default:  "bg-white dark:bg-[#111111] border-2 border-zinc-950 dark:border-white shadow-[4px_4px_0px_0px_#09090b] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.7)]",
    bordered: "bg-transparent border-[3px] border-zinc-950 dark:border-white",
  },
  padding: {
    none: "",
    sm:   "p-3",
    md:   "p-5",
    lg:   "p-7",
  },
  radius: {
    none: "rounded-none",
    sm:   "rounded-none",
    md:   "rounded-none",
    lg:   "rounded-none",
  },
  shadow:    "shadow-[4px_4px_0px_0px_#09090b] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.7)]",
  hoverable: "transition-all duration-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#09090b] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)]",
  interactive: "cursor-pointer focus-visible:outline-2 focus-visible:outline-zinc-950 dark:focus-visible:outline-white",
};
