import type { Metadata } from "next";
import { OverviewPanel } from "@/components/colors/panels/OverviewPanel";

export const metadata: Metadata = {
  title: "Colors",
  description: "Semantic tokens, style palettes, curated inspiration, a live harmony tool, and a collection from 15 real design systems.",
};

export default function ColorsPage() {
  return (
    <div className="px-8 py-10">
      <div className="mb-10">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">Colors</h1>
        <p className="text-[0.9375rem] text-muted-foreground">
          Semantic tokens, style palettes, harmony generator, and 15 real brand color systems.
        </p>
      </div>
      <OverviewPanel />
    </div>
  );
}
