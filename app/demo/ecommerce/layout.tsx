import type { Metadata } from "next";
import { CartProvider } from "@/demos/ecommerce/state";
import { SiteNav } from "@/demos/ecommerce/components/SiteNav";
import { SiteFooter } from "@/demos/ecommerce/components/SiteFooter";

export const metadata: Metadata = {
  title: { default: "Ember Audio", template: "%s — Ember Audio" },
  description: "A fictional premium audio store, demoing That One UI end to end in the Glass style.",
};

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="relative min-h-[calc(100vh-57px)] overflow-hidden bg-slate-950 text-foreground">
        {/* two quiet, contained blobs (same proportions as the site's own
            Glass reference demo, components/shared/StyleDemo.tsx) - not a
            page-wide glow, just enough color for the glass panels to catch */}
        <div className="pointer-events-none fixed -left-32 top-10 -z-10 h-72 w-72 rounded-full bg-sky-500/20 blur-[90px]" />
        <div className="pointer-events-none fixed -right-24 top-1/2 -z-10 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-[100px]" />

        <SiteNav />
        {children}
        <SiteFooter />
      </div>
    </CartProvider>
  );
}
