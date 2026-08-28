import Link from "next/link";
import type { Metadata } from "next";
import { PRODUCTS } from "@/demos/ecommerce/data";
import { ProductImage } from "@/demos/ecommerce/components/ProductImage";

export const metadata: Metadata = {
  title: "Demo",
  description: "Full sites built entirely from this library's own components - not just previews, something you can actually click through.",
};

const SITES = [
  {
    slug: "ecommerce",
    name: "Ember Audio",
    tagline: "Premium audio store",
    description: "Browse, filter, add to cart, and check out - a full storefront in the Glass style.",
    style: "Glass",
    available: true,
  },
  {
    slug: "travel",
    name: "Nightfall Aurora Tours",
    tagline: "Aurora-chasing travel booking",
    description: "Search destinations, pick dates, and book a trip - in the Aurora style.",
    style: "Aurora",
    available: false,
  },
  {
    slug: "social",
    name: "Loud",
    tagline: "Gig-going community feed",
    description: "Post, comment, follow, and message - in the Neobrutalism style.",
    style: "Neobrutalism",
    available: false,
  },
];

export default function DemoPage() {
  return (
    <div className="px-8 py-10">
      <div className="mb-10">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">Demo</h1>
        <p className="text-[0.9375rem] text-muted-foreground">
          Full sites built entirely from this library&apos;s own components — not just previews, something you can actually click through.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SITES.map((site) => {
          const card = (
            <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-colors hover:border-border">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                {site.slug === "ecommerce" ? (
                  <ProductImage product={PRODUCTS[0]} className="h-full w-full transition-transform duration-300 group-hover:scale-105" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-muted/40 text-xs text-muted-foreground">
                    Coming soon
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold">{site.name}</p>
                  <span className="shrink-0 rounded-full border border-border/60 px-2 py-0.5 text-[0.625rem] text-muted-foreground">{site.style}</span>
                </div>
                <p className="mb-1.5 text-xs font-medium text-muted-foreground/80">{site.tagline}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">{site.description}</p>
              </div>
            </div>
          );

          return site.available ? (
            <Link key={site.slug} href={`/demo/${site.slug}`} aria-label={`Open ${site.name}`}>
              {card}
            </Link>
          ) : (
            <div key={site.slug} className="cursor-not-allowed opacity-60" aria-disabled>
              {card}
            </div>
          );
        })}
      </div>
    </div>
  );
}
