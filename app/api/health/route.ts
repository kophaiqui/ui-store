import { getAllDesigns } from "@/lib/registry";

// Never cache or prerender — a monitor must always hit a live response.
export const dynamic = "force-dynamic";

const noStore = { "Cache-Control": "no-store" };

/**
 * Health check for uptime monitors.
 * Liveness: the handler responds. Readiness: the design registry loads.
 * 200 when healthy, 503 when the data layer can't be read.
 */
export async function GET() {
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

// Lightweight ping for monitors that only need a status code.
export function HEAD() {
  return new Response(null, { status: 200, headers: noStore });
}
