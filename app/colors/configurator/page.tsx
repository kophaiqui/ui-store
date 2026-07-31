import type { Metadata } from "next";
import { ConfiguratorPanel } from "@/components/colors/panels/ConfiguratorPanel";

export const metadata: Metadata = {
  title: "Theme Configurator",
  description: "Pick a brand color, see it on real components, copy a ready-to-paste CSS variable block.",
};

export default function ConfiguratorPage() {
  return (
    <div className="px-8 py-10">
      <div className="mb-10">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">Theme Configurator</h1>
        <p className="text-[0.9375rem] text-muted-foreground">
          Your colors, in your project, on your components — in one sitting.
        </p>
      </div>
      <ConfiguratorPanel />
    </div>
  );
}
