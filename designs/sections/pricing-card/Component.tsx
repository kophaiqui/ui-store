import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { PricingCardStyleConfig } from "./styles/default";

export type { PricingCardStyleConfig };

type Props = {
  styleConfig?: PricingCardStyleConfig;
  name?: string;
  price?: string;
  period?: string;
  description?: string;
  features?: string[];
  featured?: boolean;
  featuredLabel?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  className?: string;
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M3 8.5l3.5 3.5L13 5" />
    </svg>
  );
}

export function UIPricingCard({
  styleConfig = defaultStyle,
  name = "Pro",
  price = "$19",
  period = "/month",
  description = "For growing teams that need more room to work.",
  features = ["Unlimited projects", "Priority support", "Advanced analytics", "Custom integrations"],
  featured = false,
  featuredLabel = "Most popular",
  ctaLabel = "Choose plan",
  onCtaClick,
  className,
}: Props) {
  return (
    <div className={cn(styleConfig.card, featured && styleConfig.featured, className)}>
      {featured && <span className={styleConfig.badge}>{featuredLabel}</span>}
      <p className={styleConfig.name}>{name}</p>
      <div className={styleConfig.priceRow}>
        <span className={styleConfig.price}>{price}</span>
        {period && <span className={styleConfig.period}>{period}</span>}
      </div>
      <p className={styleConfig.description}>{description}</p>
      <ul className={styleConfig.features}>
        {features.map((feature) => (
          <li key={feature} className={styleConfig.feature}>
            <CheckIcon className={styleConfig.check} />
            {feature}
          </li>
        ))}
      </ul>
      <button onClick={onCtaClick} className={featured ? styleConfig.ctaFeatured : styleConfig.cta}>
        {ctaLabel}
      </button>
    </div>
  );
}

export { UIPricingCard as default };
