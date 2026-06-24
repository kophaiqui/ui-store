import type { CardStyleConfig } from "./default";
export type { CardStyleConfig };

export const gradientStyle: CardStyleConfig = {
  base: "w-full",
  variants: {
    default:  "bg-white border border-[#FCE7F3] dark:bg-zinc-900 dark:border-zinc-800",
    bordered: "bg-transparent border border-[#7C3AED]/20 dark:border-fuchsia-500/30",
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
  shadow:    "shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
  hoverable: "transition-all duration-200 hover:border-[#7C3AED]/30 hover:shadow-[0_4px_20px_rgba(124,58,237,0.1)] hover:-translate-y-0.5 dark:hover:border-fuchsia-500/40 dark:hover:shadow-[0_12px_40px_rgba(217,70,239,0.12)]",
  interactive: "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/40 dark:focus-visible:ring-fuchsia-500/40",
};
