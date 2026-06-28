import { notFound } from "next/navigation";
import { getFont } from "@/lib/registry";
import { FontSpecimenPage } from "@/components/shared/FontSpecimenPage";

type Props = { params: Promise<{ slug: string }> };

export default async function FontPage({ params }: Props) {
  const { slug } = await params;
  const meta = getFont(slug);
  if (!meta) notFound();
  return <FontSpecimenPage slug={slug} meta={meta} />;
}
