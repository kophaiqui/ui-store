"use client";

import { TiltCard } from "./Component";

export default function TiltCardPreview() {
  return (
    <div className="flex flex-wrap items-start gap-6">
      <TiltCard />
      <TiltCard
        title="No Glare"
        description="Tilt without the glare effect."
        glare={false}
        icon="🟦"
      />
      <TiltCard
        title="Static"
        description="The same card without any interaction."
        disabled
        icon="⬜"
      />
    </div>
  );
}
