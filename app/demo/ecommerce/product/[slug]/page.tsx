import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, getReviewsForProduct, PRODUCTS } from "@/demos/ecommerce/data";
import { ProductDetail } from "@/demos/ecommerce/components/ProductDetail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetail product={product} reviews={getReviewsForProduct(product.id)} />;
}
