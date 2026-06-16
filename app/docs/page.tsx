import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Docs" };

const DOCS = [
  { slug: "button", title: "Button", description: "Usage, props, and variants." },
];

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-10">
        <h1 className="mb-2 text-3xl font-semibold tracking-tight">Docs</h1>
        <p className="text-muted-foreground">
          Guides and API references for every component.
        </p>
      </div>

      <div className="divide-y divide-border">
        {DOCS.map((doc) => (
          <Link
            key={doc.slug}
            href={`/docs/${doc.slug}`}
            className="flex items-center justify-between py-4 transition-colors hover:bg-muted/20"
          >
            <div>
              <div className="font-medium">{doc.title}</div>
              <div className="text-sm text-muted-foreground">{doc.description}</div>
            </div>
            <span className="text-muted-foreground">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
