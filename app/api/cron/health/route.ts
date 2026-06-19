import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  // Vercel signs cron requests with CRON_SECRET
  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Call own health endpoint
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "https://that-one-ui.vercel.app";
  const res  = await fetch(`${base}/api/health`, { cache: "no-store" });
  const data = await res.json();

  const ok   = res.status === 200;
  const text = ok
    ? `✅ *that-one-ui* is healthy\n🕐 ${data.timestamp}\n📦 ${data.designs} components`
    : `❌ *that-one-ui* health check failed\n${data.error ?? "unknown error"}`;

  await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    }
  );

  return NextResponse.json({ ok });
}
