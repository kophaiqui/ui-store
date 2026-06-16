"use client";

import { NeonButton } from "./Component";

export default function NeonButtonPreview() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <NeonButton>Default</NeonButton>
      <NeonButton size="sm">Small</NeonButton>
      <NeonButton size="lg">Large</NeonButton>
      <NeonButton disabled>Disabled</NeonButton>
    </div>
  );
}
