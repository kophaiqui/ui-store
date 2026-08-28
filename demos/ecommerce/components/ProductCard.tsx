"use client";
import Link from "next/link";
import { UICard } from "@/designs/data-display/card/Component";
import { UIBadge } from "@/designs/data-display/badge/Component";
import { UIButton } from "@/designs/inputs/button/Component";
import { ProductImage } from "./ProductImage";
import { useCart } from "../state";
import type { Product, ProductBadge } from "../data";
import { cardStyle, badgeStyle, buttonStyle } from "../styles";

const BADGE_LABEL: Record<ProductBadge, string> = { new: "New", bestseller: "Bestseller", sale: "Sale" };
const BADGE_COLOR: Record<ProductBadge, "emerald" | "violet" | "red"> = { new: "violet", bestseller: "emerald", sale: "red" };

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7L10 1.5Z" />
    </svg>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <Link href={`/demo/ecommerce/product/${product.slug}`} className="group block">
      <UICard styleConfig={cardStyle} padding="none" hoverable className="overflow-hidden">
        <div className="relative">
          <ProductImage product={product} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="aspect-square w-full transition-transform duration-300 group-hover:scale-[1.03]" />
          {product.badges.length > 0 && (
            <div className="absolute left-2 top-2 flex gap-1.5">
              {product.badges.map((b) => (
                <UIBadge key={b} styleConfig={badgeStyle} color={BADGE_COLOR[b]} size="sm">
                  {BADGE_LABEL[b]}
                </UIBadge>
              ))}
            </div>
          )}
        </div>

        <div className="p-3.5">
          <p className="text-[0.6875rem] font-medium uppercase tracking-wide text-muted-foreground">{product.brand}</p>
          <p className="mb-1 truncate text-sm font-semibold text-foreground">{product.name}</p>

          <div className="mb-2 flex items-center gap-1 text-xs text-muted-foreground">
            <StarIcon />
            <span>{product.rating.toFixed(1)}</span>
            <span className="text-muted-foreground/60">({product.reviewCount})</span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-semibold text-foreground">${product.price.toFixed(2)}</span>
              {product.compareAtPrice && (
                <span className="text-xs text-muted-foreground line-through">${product.compareAtPrice.toFixed(2)}</span>
              )}
            </div>
            <UIButton
              styleConfig={buttonStyle}
              size="sm"
              variant="soft"
              onClick={(e) => {
                e.preventDefault();
                add(product.id, product.colors[0], 1);
              }}
            >
              Add
            </UIButton>
          </div>
        </div>
      </UICard>
    </Link>
  );
}
