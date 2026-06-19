import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const type = body.type;          // "deployment.succeeded" | "deployment.error" etc.
  const url  = body.deployment?.url ?? "";
  const name = body.projectMeta?.name ?? "that-one-ui";

  const messages: Record<string, string> = {
    "deployment.succeeded": `✅ *${name}* deployed successfully\nhttps://${url}`,
    "deployment.error":     `❌ *${name}* deployment failed`,
    "deployment.canceled":  `⚠️ *${name}* deployment canceled`,
  };

  const text = messages[type] ?? `📦 *${name}*: ${type}`;

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

  return NextResponse.json({ ok: true });
}
