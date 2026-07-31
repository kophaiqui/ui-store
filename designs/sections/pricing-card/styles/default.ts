export type PricingCardStyleConfig = {
  card: string;
  featured: string;
  badge: string;
  name: string;
  priceRow: string;
  price: string;
  period: string;
  description: string;
  features: string;
  feature: string;
  check: string;
  cta: string;
  ctaFeatured: string;
};

export const defaultStyle: PricingCardStyleConfig = {
  card: "flex w-full max-w-sm flex-col rounded-2xl border border-border bg-card p-6",
  featured: "border-primary shadow-[0_0_0_1px_var(--color-primary)]",
  badge: "mb-3 inline-block w-fit rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground",
  name: "text-sm font-semibold uppercase tracking-wide text-muted-foreground",
  priceRow: "mb-1 mt-2 flex items-baseline gap-1",
  price: "text-4xl font-bold tracking-tight text-foreground",
  period: "text-sm text-muted-foreground",
  description: "mb-6 text-sm text-muted-foreground",
  features: "mb-6 flex flex-1 flex-col gap-2.5",
  feature: "flex items-start gap-2 text-sm text-foreground/90",
  check: "mt-0.5 shrink-0 text-primary",
  cta: "w-full rounded-lg border border-border py-2.5 text-center text-sm font-semibold text-foreground transition-colors hover:bg-muted",
  ctaFeatured: "w-full rounded-lg bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90",
};
