import type { CardVariant, CardPadding, CardRadius } from "../Component";

export type CardStyleConfig = {
  base: string;
  variants: Record<CardVariant, string>;
  padding: Record<CardPadding, string>;
  radius: Record<CardRadius, string>;
  shadow: string;
  hoverable: string;
  interactive: string;
};

export const defaultStyle: CardStyleConfig = {
  base: "w-full",
  variants: {
    default:  "bg-card border border-border/60",
    bordered: "bg-transparent border-2 border-border",
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
  shadow:    "shadow-[0_4px_24px_rgba(0,0,0,0.3)]",
  hoverable: "transition-all duration-200 hover:border-border hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-0.5",
  interactive: "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40",
};
