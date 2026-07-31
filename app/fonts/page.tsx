import type { Metadata } from "next";
import { getAllFonts } from "@/lib/registry";
import { FontExplorer } from "@/components/shared/FontExplorer";

export const metadata: Metadata = {
  title: "Typography",
  description: `Browse ${getAllFonts().length} fonts across serif, sans-serif, display, monospace, and handwriting categories.`,
};

export default function FontsPage() {
  const fonts = getAllFonts();
  return <FontExplorer fonts={fonts} />;
}
