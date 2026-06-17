"use client";
import { UICard } from "./Component";

export default function Preview() {
  return (
    <UICard className="max-w-xs">
      <div className="mb-2 text-sm font-semibold text-foreground">Card title</div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        A flexible container for grouping related content. Supports glass, bordered, and hoverable variants.
      </p>
    </UICard>
  );
}
