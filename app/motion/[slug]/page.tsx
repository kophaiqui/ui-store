import { notFound } from "next/navigation";
import Link from "next/link";
import { getMotion, getAllMotion } from "@/lib/registry";
import { getMotionCode } from "@/lib/getMotionCode";
import { MotionViewer } from "@/components/shared/MotionViewer";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(getAllMotion()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = getMotion(slug);
  if (!meta) return {};
  return { title: meta.title, description: meta.description };
}

export default async function MotionDetailPage({ params }: Props) {
  const { slug } = await params;
  const meta = getMotion(slug);
  if (!meta) notFound();

  const code = getMotionCode(slug);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <nav className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
        <Slash />
        <Link href="/motion" className="transition-colors hover:text-foreground">Motion</Link>
        <Slash />
        <span className="text-foreground">{meta.title}</span>
      </nav>

      <div className="mb-2 text-sm capitalize text-muted-foreground">{meta.category}</div>
      <h1 className="mb-2 text-3xl font-semibold tracking-tight">{meta.title}</h1>
      <p className="mb-8 max-w-xl text-muted-foreground">{meta.description}</p>

      <Section label="Preview">
        <MotionViewer slug={slug} meta={meta} code={code} />
      </Section>

      {meta.props && meta.props.length > 0 && (
        <Section label="Props">
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/30 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-2 font-medium">Prop</th>
                  <th className="px-4 py-2 font-medium">Type</th>
                  <th className="px-4 py-2 font-medium">Default</th>
                  <th className="px-4 py-2 font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                {meta.props.map((p) => (
                  <tr key={p.name} className="border-t border-border/60">
                    <td className="px-4 py-2 font-mono text-[0.8125rem]">{p.name}</td>
                    <td className="px-4 py-2 font-mono text-[0.8125rem] text-muted-foreground">{p.type}</td>
                    <td className="px-4 py-2 font-mono text-[0.8125rem] text-muted-foreground">{p.default}</td>
                    <td className="px-4 py-2 text-muted-foreground">{p.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      {meta.usage && meta.usage.length > 0 && (
        <Section label="Usage">
          <div className="space-y-4">
            {meta.usage.map((u) => (
              <div key={u.label}>
                <div className="mb-1.5 text-xs font-medium text-muted-foreground">{u.label}</div>
                <pre className="overflow-auto rounded-lg border border-border bg-muted/20 p-4 text-[0.8125rem] leading-relaxed">
                  <code className="font-mono">{u.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section label="Tags">
        <div className="flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Slash() {
  return <span className="text-border">/</span>;
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
        {label}
      </h2>
      {children}
    </section>
  );
}
