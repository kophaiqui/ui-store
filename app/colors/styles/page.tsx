import { StylesPanel } from "@/components/colors/panels/StylesPanel";

export default function StylesPalettesPage() {
  return (
    <div className="px-8 py-10">
      <div className="mb-10">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">Style palettes</h1>
        <p className="text-[0.9375rem] text-muted-foreground">
          Eight complete color personalities — swap one in and every component updates automatically.
        </p>
      </div>
      <StylesPanel />
    </div>
  );
}
