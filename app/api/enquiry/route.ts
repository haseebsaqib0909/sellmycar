import { NextResponse } from "next/server";
import { sendEnquiryEmails, type EnquiryPayload } from "@/lib/email";

export const runtime = "nodejs";

function validate(body: unknown): EnquiryPayload | string {
  if (!body || typeof body !== "object") return "Invalid request body.";
  const b = body as Record<string, unknown>;

  const vehicle = b.vehicle as EnquiryPayload["vehicle"] | undefined;
  if (!vehicle || typeof vehicle !== "object" || !vehicle.registrationNumber) {
    return "Vehicle details missing.";
  }

  const mileage = Number(b.mileage);
  if (!Number.isFinite(mileage) || mileage <= 0 || mileage > 999999) {
    return "Please enter a valid mileage.";
  }

  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const phone = typeof b.phone === "string" ? b.phone.trim() : "";
  const postcode = typeof b.postcode === "string" ? b.postcode.trim() : "";
  const condition = typeof b.condition === "string" ? b.condition : "Good";
  const notes = typeof b.notes === "string" ? b.notes.trim() : "";

  if (name.length < 2) return "Please enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(email)) return "Please enter a valid email address.";
  if (phone.replace(/\D/g, "").length < 9)
    return "Please enter a valid UK phone number.";
  if (postcode.length < 5) return "Please enter a valid UK postcode.";

  return { vehicle, mileage, name, email, phone, postcode, condition, notes };
}

export async function POST(request: Request) {
  console.log("[api/enquiry] received request");

  try {
    const body = await request.json().catch(() => ({}));
    const validated = validate(body);
    if (typeof validated === "string") {
      return NextResponse.json({ error: validated }, { status: 400 });
    }

    const result = await sendEnquiryEmails(validated);
    if (!result.ok) {
      return NextResponse.json(
        { error: "We couldn't send your enquiry right now. Please try again." },
        { status: 500 }
      );
    }

    console.log(
      `[api/enquiry] sent for ${validated.vehicle.registrationNumber} from ${validated.email}`
    );

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    console.error("[api/enquiry] unexpected:", message);
    return NextResponse.json(
      { error: "Sorry, something went wrong." },
      { status: 500 }
    );
  } finally {
    console.log("[api/enquiry] request complete");
  }
}
