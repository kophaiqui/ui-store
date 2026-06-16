"use client";

import { GlassCard } from "./Component";

export default function GlassCardPreview() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <GlassCard />
      <GlassCard
        size="sm"
        name="Sam Rivera"
        role="Engineer"
        quote="Shipping is a feature."
        blur="sm"
      />
      <GlassCard
        size="lg"
        name="Mia Chen"
        role="Founder"
        quote="The best design is invisible."
        blur="lg"
      />
    </div>
  );
}
