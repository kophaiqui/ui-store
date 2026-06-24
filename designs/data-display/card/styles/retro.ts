import type { CardStyleConfig } from "./default";
export type { CardStyleConfig, CardVariant, CardPadding, CardRadius } from "./default";

export const retroStyle: CardStyleConfig = {
  base: "w-full",
  variants: {
    default:  "bg-[#fdf6e3] border-2 border-[#3d2410] shadow-[4px_4px_0px_0px_#3d2410]",
    bordered: "bg-transparent border-2 border-[#3d2410]",
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
  shadow:    "shadow-[4px_4px_0px_0px_#3d2410]",
  hoverable: "transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#3d2410]",
  interactive: "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8743b]/50",
};
