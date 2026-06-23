import type { Metadata } from "next";
import { ColorSwatch } from "@/components/shared/ColorSwatch";

export const metadata: Metadata = { title: "Colors" };

type Token = { var: string; label: string; description: string };
type Group = { title: string; tokens: Token[] };

const GROUPS: Group[] = [
  {
    title: "Surface",
    tokens: [
      { var: "--background",        label: "Background",        description: "Page background" },
      { var: "--foreground",        label: "Foreground",        description: "Primary text" },
      { var: "--card",              label: "Card",              description: "Card / elevated surface" },
      { var: "--card-foreground",   label: "Card Foreground",   description: "Text on cards" },
      { var: "--popover",           label: "Popover",           description: "Dropdown / popover background" },
      { var: "--popover-foreground",label: "Popover Foreground",description: "Text in popovers" },
    ],
  },
  {
    title: "Interactive",
    tokens: [
      { var: "--primary",             label: "Primary",             description: "Primary action background" },
      { var: "--primary-foreground",  label: "Primary Foreground",  description: "Text on primary" },
      { var: "--secondary",           label: "Secondary",           description: "Secondary action background" },
      { var: "--secondary-foreground",label: "Secondary Foreground",description: "Text on secondary" },
      { var: "--accent",              label: "Accent",              description: "Hover / highlight surface" },
      { var: "--accent-foreground",   label: "Accent Foreground",   description: "Text on accent" },
    ],
  },
  {
    title: "Neutral",
    tokens: [
      { var: "--muted",            label: "Muted",            description: "Subdued background" },
      { var: "--muted-foreground", label: "Muted Foreground", description: "Subdued text / labels" },
      { var: "--border",           label: "Border",           description: "Dividers and outlines" },
      { var: "--input",            label: "Input",            description: "Form input border" },
      { var: "--ring",             label: "Ring",             description: "Focus ring color" },
    ],
  },
  {
    title: "Feedback",
    tokens: [
      { var: "--destructive", label: "Destructive", description: "Error / danger actions" },
    ],
  },
  {
    title: "Charts",
    tokens: [
      { var: "--chart-1", label: "Chart 1", description: "Primary chart series" },
      { var: "--chart-2", label: "Chart 2", description: "Secondary chart series" },
      { var: "--chart-3", label: "Chart 3", description: "Tertiary chart series" },
      { var: "--chart-4", label: "Chart 4", description: "Quaternary chart series" },
      { var: "--chart-5", label: "Chart 5", description: "Quinary chart series" },
    ],
  },
];

export default function ColorsPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 py-10">
      <div className="mb-10">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Colors</h1>
        <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
          Semantic design tokens used across all components. Values adapt automatically between light and dark mode.
        </p>
      </div>

      <div className="space-y-12">
        {GROUPS.map((group) => (
          <section key={group.title}>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
              {group.title}
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.tokens.map((token) => (
                <ColorSwatch key={token.var} token={token.var} label={token.label} description={token.description} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
