import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

function verify(secret: string, rawBody: string, signature: string): boolean {
  const expected = createHmac("sha1", secret).update(rawBody).digest("hex");
  return expected === signature;
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-vercel-signature") ?? "";

  if (!verify(process.env.VERCEL_WEBHOOK_SECRET!, rawBody, signature)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = JSON.parse(rawBody);
  const type = body.type;
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
