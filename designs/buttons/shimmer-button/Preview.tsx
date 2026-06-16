"use client";

import { ShimmerButton } from "./Component";

export default function ShimmerButtonPreview() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <ShimmerButton>Deploy Now</ShimmerButton>
      <ShimmerButton variant="light">Light</ShimmerButton>
      <ShimmerButton loading>Loading</ShimmerButton>
      <ShimmerButton disabled>Disabled</ShimmerButton>
    </div>
  );
}
