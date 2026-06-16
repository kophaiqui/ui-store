import { redirect } from "next/navigation";
import { getAllDesigns } from "@/lib/registry";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(getAllDesigns()).map((slug) => ({ slug }));
}

export default async function ComponentSlugRedirect({ params }: Props) {
  const { slug } = await params;
  redirect(`/components/${slug}/default`);
}
