"use client";
import { useState } from "react";
import Link from "next/link";
import { UIButton } from "@/designs/inputs/button/Component";
import { UIChip } from "@/designs/data-display/chip/Component";
import { UIBadge } from "@/designs/data-display/badge/Component";
import { UITabs } from "@/designs/data-display/tabs/Component";
import { UIAvatar } from "@/designs/data-display/avatar/Component";
import { UIBreadcrumb } from "@/designs/navigation/breadcrumb/Component";
import { ProductImage } from "./ProductImage";
import { ProductCard } from "./ProductCard";
import { useCart } from "../state";
import { getRelatedProducts, type Product, type Review, type ProductBadge } from "../data";
import { chipStyle, badgeStyle, tabsStyle, avatarStyle, breadcrumbStyle, buttonStyle } from "../styles";

const BADGE_LABEL: Record<ProductBadge, string> = { new: "New", bestseller: "Bestseller", sale: "Sale" };
const BADGE_COLOR: Record<ProductBadge, "emerald" | "violet" | "red"> = { new: "violet", bestseller: "emerald", sale: "red" };

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
}

function ReviewRow({ review }: { review: Review }) {
  return (
    <div className="flex gap-3 border-b border-white/10 py-4 last:border-0">
      <UIAvatar styleConfig={avatarStyle} fallback={initials(review.author)} size="sm" />
      <div className="min-w-0 flex-1">
        <div className="mb-0.5 flex items-center gap-2">
          <p className="text-sm font-medium text-white">{review.author}</p>
          {review.verified && <span className="text-[0.6875rem] text-emerald-300/80">Verified buyer</span>}
        </div>
        <p className="mb-1 text-xs text-white/50">{review.rating.toFixed(0)} / 5 · {review.date}</p>
        <p className="text-sm leading-relaxed text-white/70">{review.text}</p>
      </div>
    </div>
  );
}

export function ProductDetail({ product, reviews }: { product: Product; reviews: Review[] }) {
  const { add } = useCart();
  const [color, setColor] = useState(product.colors[0]);
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  function handleAdd() {
    add(product.id, color, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  }

  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-8">
      <UIBreadcrumb
        styleConfig={breadcrumbStyle}
        className="mb-6"
        items={[
          { label: "Home", href: "/demo/ecommerce" },
          { label: "Shop", href: "/demo/ecommerce/shop" },
          { label: product.name },
        ]}
      />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <ProductImage product={product} sizes="(min-width: 640px) 50vw, 100vw" className="aspect-square w-full" />
          {product.badges.length > 0 && (
            <div className="absolute left-3 top-3 flex gap-1.5">
              {product.badges.map((b) => (
                <UIBadge key={b} styleConfig={badgeStyle} color={BADGE_COLOR[b]}>{BADGE_LABEL[b]}</UIBadge>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-white/50">{product.brand}</p>
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-white">{product.name}</h1>
          <div className="mb-4 flex items-baseline gap-2">
            <span className="text-xl font-semibold text-white">${product.price.toFixed(2)}</span>
            {product.compareAtPrice && (
              <span className="text-sm text-white/40 line-through">${product.compareAtPrice.toFixed(2)}</span>
            )}
          </div>
          <p className="mb-6 text-sm leading-relaxed text-white/70">{product.description}</p>

          <div className="mb-6">
            <p className="mb-2 text-xs font-medium text-white/70">Color: {color}</p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <UIChip key={c} styleConfig={chipStyle} selected={color === c} onClick={() => setColor(c)}>{c}</UIChip>
              ))}
            </div>
          </div>

          <div className="mb-6 flex items-center gap-4">
            <div className="flex items-center gap-1 rounded-lg border border-white/15 p-1">
              <UIButton styleConfig={buttonStyle} variant="ghost" size="sm" className="w-7 px-0" onClick={() => setQty((q) => Math.max(1, q - 1))}>-</UIButton>
              <span className="w-6 text-center text-sm text-white">{qty}</span>
              <UIButton styleConfig={buttonStyle} variant="ghost" size="sm" className="w-7 px-0" onClick={() => setQty((q) => q + 1)}>+</UIButton>
            </div>
            <UIButton styleConfig={buttonStyle} size="lg" className="flex-1" onClick={handleAdd}>
              {justAdded ? "Added ✓" : "Add to cart"}
            </UIButton>
          </div>

          <Link href="/demo/ecommerce/cart" className="text-sm text-white/60 underline-offset-4 hover:text-white hover:underline">
            View cart →
          </Link>
        </div>
      </div>

      <div className="mt-14">
        <UITabs
          styleConfig={tabsStyle}
          defaultValue="description"
          tabs={[
            { label: "Description", value: "description", content: <p className="py-4 text-sm leading-relaxed text-white/70">{product.description}</p> },
            {
              label: "Specs",
              value: "specs",
              content: (
                <dl className="grid grid-cols-1 gap-x-8 gap-y-3 py-4 sm:grid-cols-2">
                  {Object.entries(product.specs).map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-white/10 pb-2 text-sm">
                      <dt className="text-white/50">{k}</dt>
                      <dd className="text-white">{v}</dd>
                    </div>
                  ))}
                </dl>
              ),
            },
            {
              label: `Reviews (${reviews.length})`,
              value: "reviews",
              content: (
                <div className="py-2">
                  {reviews.length === 0 ? (
                    <p className="py-4 text-sm text-white/50">No reviews yet for this one.</p>
                  ) : (
                    reviews.map((r) => <ReviewRow key={r.id} review={r} />)
                  )}
                </div>
              ),
            },
          ]}
        />
      </div>

      <div className="mt-14">
        <h2 className="mb-5 text-lg font-bold tracking-tight text-white">You might also like</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {getRelatedProducts(product).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
