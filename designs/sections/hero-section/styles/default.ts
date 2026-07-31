export type HeroAlign = "left" | "center";
export type HeroBackground = "none" | "gradient" | "grid";

export type HeroSectionStyleConfig = {
  section: string;
  backgrounds: Record<HeroBackground, string>;
  aligns: Record<HeroAlign, string>;
  eyebrow: string;
  title: string;
  description: string;
  ctas: string;
  primaryCta: string;
  secondaryCta: string;
};

export const defaultStyle: HeroSectionStyleConfig = {
  section: "relative overflow-hidden px-6 py-24",
  backgrounds: {
    none: "",
    gradient: "bg-gradient-to-b from-primary/10 via-transparent to-transparent",
    grid: "bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]",
  },
  aligns: {
    left: "mx-auto max-w-3xl text-left",
    center: "mx-auto max-w-2xl text-center",
  },
  eyebrow: "mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground",
  title: "mb-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
  description: "mb-8 text-lg leading-relaxed text-muted-foreground",
  ctas: "flex flex-wrap items-center gap-3",
  primaryCta: "rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90",
  secondaryCta: "rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted",
};
