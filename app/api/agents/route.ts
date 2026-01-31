import { NextResponse } from "next/server";
import { listAgentIds } from "@/lib/vibeprompt";

// GitHub Pages(static export) 빌드를 위해 명시적으로 static 처리
export const dynamic = "force-static";

export async function GET() {
  try {
    const agents = await listAgentIds();
    return NextResponse.json({ agents });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

