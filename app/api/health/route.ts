import { NextRequest } from "next/server";
import { timingSafeEqual } from "crypto";
import { getAllDesigns } from "@/lib/registry";

// Never cache or prerender — a monitor must always hit a live response.
export const dynamic = "force-dynamic";

const noStore = { "Cache-Control": "no-store" };

// --- Access control ----------------------------------------------------------
// Only my laptop should reach this. A request must carry the secret in
// `Authorization: Bearer <HEALTH_TOKEN>` (or the `x-health-token` header).
// Missing config => deny, so the endpoint is never accidentally left open.

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip")?.trim() ?? "";
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

function tokenOk(req: NextRequest): boolean {
  const secret = process.env.HEALTH_TOKEN;
  if (!secret) return false; // not configured => deny
  const bearer = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const header = req.headers.get("x-health-token");
  const provided = bearer || header || "";
  return provided.length > 0 && safeEqual(provided, secret);
}

// --- Rate limiting (anti-spam) ----------------------------------------------
// Best-effort in-memory sliding window, keyed by IP. Serverless instances are
// ephemeral, but this is enough to blunt a request flood per warm instance.
const WINDOW_MS = 60_000;
const MAX_HITS = 10;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const key = ip || "unknown";
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  // Opportunistic cleanup so the map can't grow unbounded.
  if (hits.size > 1000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }
  return recent.length > MAX_HITS;
}

function guard(req: NextRequest): Response | null {
  const ip = clientIp(req);
  // Throttle first so unauthorized floods are cheap and can't spam.
  if (rateLimited(ip)) {
    return new Response(null, {
      status: 429,
      headers: { ...noStore, "Retry-After": String(WINDOW_MS / 1000) },
    });
  }
  // Wrong/absent token => opaque 404 so probes can't tell the route exists.
  if (!tokenOk(req)) {
    return new Response(null, { status: 404, headers: noStore });
  }
  return null;
}

/**
 * Health check, restricted by secret token and rate limited.
 * Liveness: the handler responds. Readiness: the design registry loads.
 * 200 when healthy, 503 when the data layer can't be read.
 */
export async function GET(req: NextRequest) {
  const blocked = guard(req);
  if (blocked) return blocked;

  try {
    const designs = getAllDesigns();
    return Response.json(
      {
        status: "ok",
        timestamp: new Date().toISOString(),
        uptime: Math.round(process.uptime()),
        designs: Object.keys(designs).length,
      },
      { status: 200, headers: noStore },
    );
  } catch (err) {
    return Response.json(
      {
        status: "error",
        timestamp: new Date().toISOString(),
        error: err instanceof Error ? err.message : "unknown error",
      },
      { status: 503, headers: noStore },
    );
  }
}

// Lightweight ping for monitors that only need a status code — same guard.
export function HEAD(req: NextRequest) {
  const blocked = guard(req);
  if (blocked) return blocked;
  return new Response(null, { status: 200, headers: noStore });
}
