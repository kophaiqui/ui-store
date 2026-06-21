export type { CardStyleConfig, CardVariant, CardPadding, CardRadius } from "./default";
import type { CardStyleConfig } from "./default";

export const minimalStyle: CardStyleConfig = {
  base: "w-full",
  variants: {
    default:  "bg-transparent border border-border",
    bordered: "bg-transparent border-2 border-foreground/20",
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
  shadow:    "",
  hoverable: "transition-colors duration-150 hover:border-foreground/30",
  interactive: "cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/20",
};
