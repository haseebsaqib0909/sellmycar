import { NextResponse } from "next/server";
import { lookupVehicle, DvlaError } from "@/lib/dvla";

export const runtime = "nodejs";

export async function POST(request: Request) {
  console.log("[api/vehicle] received request");

  try {
    const body = await request.json().catch(() => ({}));
    const reg = typeof body.reg === "string" ? body.reg : "";

    if (!reg.trim()) {
      return NextResponse.json(
        { error: "Please enter a registration plate." },
        { status: 400 }
      );
    }

    const vehicle = await lookupVehicle(reg);

    console.log(
      `[api/vehicle] lookup ok for ${vehicle.registrationNumber} (${vehicle.make})`
    );

    return NextResponse.json({ vehicle }, { status: 200 });
  } catch (e) {
    if (e instanceof DvlaError) {
      console.warn(`[api/vehicle] DVLA error: ${e.status} ${e.message}`);
      return NextResponse.json({ error: e.message }, { status: e.status });
    }
    const message = e instanceof Error ? e.message : "Unknown error";
    console.error("[api/vehicle] unexpected:", message);
    return NextResponse.json(
      { error: "Sorry, something went wrong looking up your reg." },
      { status: 500 }
    );
  } finally {
    console.log("[api/vehicle] request complete");
  }
}
