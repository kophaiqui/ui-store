import { UINavbar } from "@/designs/sections/navbar/Component";
import { UIHeroSection } from "@/designs/sections/hero-section/Component";
import { UICard } from "@/designs/data-display/card/Component";
import { UIPricingCard } from "@/designs/sections/pricing-card/Component";

const FEATURES = [
  { title: "Fast by default", body: "Every component ships lean — no runtime style engine, just Tailwind classes." },
  { title: "Yours to change", body: "Swap the styleConfig and the visual layer changes. Logic and props never move." },
  { title: "Built on Base UI", body: "Accessible primitives underneath, so keyboard and screen reader support come free." },
];

export function LandingTemplate() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <UINavbar />
      <UIHeroSection />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <UICard key={f.title}>
              <p className="mb-1.5 text-sm font-semibold text-foreground">{f.title}</p>
              <p className="text-xs leading-relaxed text-muted-foreground">{f.body}</p>
            </UICard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-foreground">Simple pricing</h2>
        <div className="flex flex-col items-stretch justify-center gap-6 sm:flex-row">
          <UIPricingCard name="Starter" price="$0" period="/month" description="For trying things out." features={["1 project", "Community support"]} ctaLabel="Start free" />
          <UIPricingCard featured name="Pro" price="$19" period="/month" ctaLabel="Choose Pro" />
          <UIPricingCard name="Team" price="$49" period="/month" description="For teams that ship together." features={["Unlimited projects", "Priority support", "Team roles", "Audit log"]} ctaLabel="Choose Team" />
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Your product. Built with That One UI.
      </footer>
    </div>
  );
}

export { LandingTemplate as default };
