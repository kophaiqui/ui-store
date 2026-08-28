import Image from "next/image";
import Link from "next/link";
import { UIButton } from "@/designs/inputs/button/Component";
import { PRODUCTS, CATEGORIES } from "@/demos/ecommerce/data";
import { HERO_PHOTOS } from "@/demos/ecommerce/images";
import { ProductCard } from "@/demos/ecommerce/components/ProductCard";
import { ProductImage } from "@/demos/ecommerce/components/ProductImage";
import { buttonStyle } from "@/demos/ecommerce/styles";

const TRENDING = PRODUCTS.filter((p) => p.badges.includes("bestseller")).slice(0, 4);
const hero = HERO_PHOTOS[0];

export default function EcommerceHomePage() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-24">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-violet-300/80">Sound, warmed up</p>
          <h1 className="mb-5 text-4xl font-bold leading-none tracking-tighter text-white sm:text-5xl lg:text-6xl">
            Headphones, speakers, and turntables built to be lived with.
          </h1>
          <p className="mb-8 max-w-md text-sm leading-relaxed text-white/60">
            Ember Audio is a fictional store - every page here runs on That One UI, wearing the Glass style end to end.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/demo/ecommerce/shop">
              <UIButton styleConfig={buttonStyle} size="lg">Shop all gear</UIButton>
            </Link>
            <Link href="/demo/ecommerce/shop?category=headphones">
              <UIButton styleConfig={buttonStyle} size="lg" variant="outline">See headphones</UIButton>
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 lg:aspect-[3/4]">
          <Image src={hero.url} alt={hero.alt} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" priority />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-slate-950 to-transparent p-5 lg:block">
            <p className="text-xs text-white/70">Aria 2 - Obsidian</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              href={`/demo/ecommerce/shop?category=${c.id}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <ProductImage
                product={PRODUCTS.find((p) => p.category === c.id)!}
                sizes="(min-width: 640px) 25vw, 50vw"
                className="aspect-[4/3] w-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-3">
                <span className="text-sm font-semibold text-white">{c.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-xl font-bold tracking-tight text-white">Trending now</h2>
          <Link href="/demo/ecommerce/shop" className="text-sm text-white/60 hover:text-white">View all →</Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRENDING.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
