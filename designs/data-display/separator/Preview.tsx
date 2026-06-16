"use client";
import { UISeparator } from "./Component";
export default function Preview() {
  return (
    <div className="w-48 space-y-3 text-sm text-zinc-400">
      <p>Above the fold</p>
      <UISeparator />
      <p>Below the fold</p>
    </div>
  );
}
