import { BasePanel } from "@/components/colors/panels/BasePanel";

export default function BaseTokensPage() {
  return (
    <div className="px-8 py-10">
      <div className="mb-10">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">Base tokens</h1>
        <p className="text-[0.9375rem] text-muted-foreground">
          21 semantic CSS custom properties that resolve across light and dark mode automatically.
        </p>
      </div>
      <BasePanel />
    </div>
  );
}
