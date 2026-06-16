"use client";

import { MagneticButton } from "./Component";

export default function MagneticButtonPreview() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <MagneticButton>Default</MagneticButton>
      <MagneticButton variant="outline">Outline</MagneticButton>
      <MagneticButton variant="ghost">Ghost</MagneticButton>
      <MagneticButton strength={0.6}>Strong</MagneticButton>
      <MagneticButton disabled>Disabled</MagneticButton>
    </div>
  );
}
