import type { Metadata } from "next";
import { ColorExplorer } from "@/components/shared/ColorExplorer";

export const metadata: Metadata = {
  title: "Colors",
  description: "Semantic design tokens, style palettes, color harmony tool, and a curated collection from 15 real design systems.",
};

export default function ColorsPage() {
  return <ColorExplorer />;
}
