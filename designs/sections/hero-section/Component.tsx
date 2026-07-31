import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { HeroSectionStyleConfig, HeroAlign, HeroBackground } from "./styles/default";

export type { HeroSectionStyleConfig, HeroAlign, HeroBackground };

export type HeroCta = { label: string; href?: string; onClick?: () => void };

type Props = {
  styleConfig?: HeroSectionStyleConfig;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  align?: HeroAlign;
  background?: HeroBackground;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  className?: string;
};

export function UIHeroSection({
  styleConfig = defaultStyle,
  eyebrow = "Now available",
  title = "Build your next idea, faster",
  description = "Ship a polished product without wiring up design decisions from scratch. Every piece composes with every other piece.",
  align = "center",
  background = "gradient",
  primaryCta = { label: "Get started" },
  secondaryCta = { label: "Learn more" },
  className,
}: Props) {
  return (
    <section className={cn(styleConfig.section, styleConfig.backgrounds[background], className)}>
      <div className={styleConfig.aligns[align]}>
        {eyebrow && <span className={styleConfig.eyebrow}>{eyebrow}</span>}
        <h1 className={styleConfig.title}>{title}</h1>
        {description && <p className={styleConfig.description}>{description}</p>}
        <div className={cn(styleConfig.ctas, align === "center" && "justify-center")}>
          {primaryCta && (
            <a href={primaryCta.href ?? "#"} onClick={primaryCta.onClick} className={styleConfig.primaryCta}>
              {primaryCta.label}
            </a>
          )}
          {secondaryCta && (
            <a href={secondaryCta.href ?? "#"} onClick={secondaryCta.onClick} className={styleConfig.secondaryCta}>
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export { UIHeroSection as default };
