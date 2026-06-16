"use client";

import dynamic from "next/dynamic";

type Props = { slug: string };

export default function DemoPreview({ slug }: Props) {
  const Demo = dynamic(
    () => import(`@/components/ui/${slug}/Demo`).catch(() => () => null),
    { ssr: false, loading: () => <div className="h-16 animate-pulse rounded bg-muted" /> }
  );

  return <Demo />;
}
