import type { CardStyleConfig } from "./default";
export type { CardStyleConfig, CardVariant, CardPadding, CardRadius } from "./default";

export const pixelStyle: CardStyleConfig = {
  base: "w-full",
  variants: {
    default:  "bg-[#0d0d12] border-4 border-[#ef476f] shadow-[6px_6px_0_0_#000,10px_10px_0_0_#06d6a0]",
    bordered: "bg-transparent border-4 border-[#06d6a0]",
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
  shadow:    "shadow-[6px_6px_0_0_#000]",
  hoverable: "transition-all duration-100 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_#000,5px_5px_0_0_#06d6a0]",
  interactive: "cursor-pointer focus-visible:outline-4 focus-visible:outline-[#ef476f]",
};
