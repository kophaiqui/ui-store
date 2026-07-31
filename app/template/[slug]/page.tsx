import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getTemplate, getAllTemplates, getDesign } from "@/lib/registry";
import { LandingTemplate } from "@/templates/landing/Template";
import { DashboardTemplate } from "@/templates/dashboard/Template";
import { AuthTemplate } from "@/templates/auth/Template";
import { DownloadTemplateButton } from "@/components/shared/DownloadTemplateButton";

type Props = { params: Promise<{ slug: string }> };

const TEMPLATES: Record<string, React.ComponentType> = {
  landing: LandingTemplate,
  dashboard: DashboardTemplate,
  auth: AuthTemplate,
};

export async function generateStaticParams() {
  return Object.keys(getAllTemplates()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = getTemplate(slug);
  if (!meta) return {};
  return { title: meta.name, description: meta.description };
}

export default async function TemplateDetailPage({ params }: Props) {
  const { slug } = await params;
  const meta = getTemplate(slug);
  if (!meta) notFound();

  const Template = TEMPLATES[slug];
  if (!Template) notFound();

  return (
    <div>
      <div className="border-b border-border/60 px-8 py-6">
        <nav className="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
          <span className="text-border">/</span>
          <Link href="/template" className="transition-colors hover:text-foreground">Templates</Link>
          <span className="text-border">/</span>
          <span className="text-foreground">{meta.name}</span>
        </nav>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="mb-1 text-2xl font-bold tracking-tight">{meta.name}</h1>
            <p className="max-w-xl text-sm text-muted-foreground">{meta.description}</p>
          </div>
          <DownloadTemplateButton slug={slug} />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {meta.components.map((c) => {
            const design = getDesign(c);
            return (
              <Link
                key={c}
                href={`/components/${c}/default`}
                className="rounded-full border border-border/60 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
              >
                {design?.name ?? c}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="border-b border-border/60">
        <Template />
      </div>
    </div>
  );
}
