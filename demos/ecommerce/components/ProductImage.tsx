import Image from "next/image";
import type { Product } from "../data";

/** Real, verified Unsplash photography (see demos/ecommerce/images.ts) - one
 * photo is shared across a few products in the same category, same as most
 * real storefronts do for variant listings without a full photoshoot. */
export function ProductImage({ product, className = "", sizes = "25vw" }: { product: Product; className?: string; sizes?: string }) {
  return (
    <div className={`relative overflow-hidden bg-zinc-900 ${className}`}>
      <Image
        src={product.photo.url}
        alt={product.photo.alt}
        fill
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
