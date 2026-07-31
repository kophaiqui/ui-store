import Link from "next/link";
import type { Metadata } from "next";
import { getAllTemplates } from "@/lib/registry";
import { TemplateFrame } from "@/components/shared/TemplateFrame";
import { LandingTemplate } from "@/templates/landing/Template";
import { DashboardTemplate } from "@/templates/dashboard/Template";
import { AuthTemplate } from "@/templates/auth/Template";

export const metadata: Metadata = { title: "Templates" };

const PREVIEWS: Record<string, React.ReactNode> = {
  landing: <LandingTemplate />,
  dashboard: <DashboardTemplate />,
  auth: <AuthTemplate />,
};

export default function TemplatePage() {
  const templates = getAllTemplates();

  return (
    <div className="px-8 py-10">
      <div className="mb-10">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">Templates</h1>
        <p className="text-[0.9375rem] text-muted-foreground">
          Full pages built entirely from this library’s own components — the proof the system composes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(templates).map(([slug, meta]) => (
          <div key={slug} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-colors hover:border-border">
            {/* Overlay link, not a wrapper - the preview below renders real <a> tags (nav links, CTAs), and an <a> can't nest inside another <a> */}
            <Link href={`/template/${slug}`} className="absolute inset-0 z-10" aria-label={`View ${meta.name} template`} />
            <TemplateFrame scale={0.22}>{PREVIEWS[slug]}</TemplateFrame>
            <div className="p-4">
              <p className="mb-1 text-sm font-semibold">{meta.name}</p>
              <p className="text-xs leading-relaxed text-muted-foreground">{meta.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
