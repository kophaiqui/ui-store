import type { CardStyleConfig } from "./default";
export type { CardStyleConfig, CardVariant, CardPadding, CardRadius } from "./default";

export const terminalStyle: CardStyleConfig = {
  base: "w-full",
  variants: {
    default:  "bg-white border border-[#16A34A] dark:bg-[#0F0F0F] dark:border-[#22C55E]",
    bordered: "bg-transparent border border-[#16A34A] dark:border-[#22C55E]",
  },
  padding: {
    none: "",
    sm:   "p-3",
    md:   "p-5",
    lg:   "p-7",
  },
  radius: {
    none: "rounded-none",
    sm:   "rounded-sm",
    md:   "rounded-sm",
    lg:   "rounded",
  },
  shadow:    "",
  hoverable: "transition-all duration-150 hover:shadow-[0_0_12px_rgba(22,163,74,0.2)] dark:hover:shadow-[0_0_12px_rgba(34,197,94,0.2)]",
  interactive: "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/50 dark:focus-visible:ring-[#22C55E]/50",
};
