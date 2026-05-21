import { Resend } from "resend";
import type { VehicleData } from "./dvla";

export interface EnquiryPayload {
  vehicle: VehicleData;
  mileage: number;
  name: string;
  email: string;
  phone: string;
  postcode: string;
  condition: string;
  notes?: string;
}

const ENABLED = Boolean(process.env.RESEND_API_KEY);
const resend = ENABLED ? new Resend(process.env.RESEND_API_KEY) : null;

const FROM =
  process.env.EMAIL_FROM || "SellMyCar <onboarding@resend.dev>";
const TO = process.env.EMAIL_TO || "enquiries@sellmycar.co.uk";

function fmtNumber(n: number): string {
  return n.toLocaleString("en-GB");
}

function buildClientEmail(payload: EnquiryPayload): {
  subject: string;
  html: string;
  text: string;
} {
  const { vehicle, mileage, name, email, phone, postcode, condition, notes } =
    payload;
  const carLabel = `${vehicle.yearOfManufacture || ""} ${
    vehicle.make
  } ${vehicle.colour || ""}`.trim();

  const subject = `New enquiry: ${vehicle.registrationNumber} — ${carLabel}`;

  const html = `
<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f1f5f9;padding:24px;color:#0f172a;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.05);">
    <div style="background:#0D2B4E;color:#ffffff;padding:24px 28px;">
      <p style="margin:0;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;opacity:0.7;">New enquiry</p>
      <h1 style="margin:6px 0 0;font-size:22px;font-weight:800;">${vehicle.registrationNumber} &middot; ${carLabel}</h1>
    </div>
    <div style="padding:28px;">
      <h2 style="font-size:16px;margin:0 0 12px;color:#0D2B4E;">Vehicle</h2>
      <table style="width:100%;font-size:14px;border-collapse:collapse;">
        ${row("Reg plate", vehicle.registrationNumber)}
        ${row("Make", vehicle.make || "—")}
        ${row("Year", vehicle.yearOfManufacture?.toString() || "—")}
        ${row("Colour", vehicle.colour || "—")}
        ${row("Fuel", vehicle.fuelType || "—")}
        ${row("Engine", vehicle.engineCapacity ? `${vehicle.engineCapacity}cc` : "—")}
        ${row("Mileage", fmtNumber(mileage) + " miles")}
        ${row("MOT", vehicle.motStatus || "—")}
        ${row("Tax", vehicle.taxStatus || "—")}
        ${row("Condition", condition)}
      </table>
      <h2 style="font-size:16px;margin:24px 0 12px;color:#0D2B4E;">Seller</h2>
      <table style="width:100%;font-size:14px;border-collapse:collapse;">
        ${row("Name", name)}
        ${row("Email", `<a href="mailto:${email}" style="color:#0D2B4E;">${email}</a>`)}
        ${row("Phone", `<a href="tel:${phone}" style="color:#0D2B4E;">${phone}</a>`)}
        ${row("Postcode", postcode)}
      </table>
      ${
        notes
          ? `<h2 style="font-size:16px;margin:24px 0 12px;color:#0D2B4E;">Notes</h2><p style="font-size:14px;line-height:1.6;margin:0;background:#f8fafc;padding:12px 14px;border-radius:8px;">${notes}</p>`
          : ""
      }
    </div>
  </div>
</body></html>
  `.trim();

  const text = `New enquiry: ${vehicle.registrationNumber} (${carLabel})

VEHICLE
Reg: ${vehicle.registrationNumber}
Make: ${vehicle.make}
Year: ${vehicle.yearOfManufacture || "—"}
Colour: ${vehicle.colour || "—"}
Fuel: ${vehicle.fuelType || "—"}
Mileage: ${fmtNumber(mileage)} miles
MOT: ${vehicle.motStatus || "—"}
Tax: ${vehicle.taxStatus || "—"}
Condition: ${condition}

SELLER
Name: ${name}
Email: ${email}
Phone: ${phone}
Postcode: ${postcode}
${notes ? `\nNotes:\n${notes}` : ""}
`;

  return { subject, html, text };
}

function row(label: string, value: string): string {
  return `<tr><td style="padding:6px 0;color:#64748B;width:90px;">${label}</td><td style="padding:6px 0;font-weight:600;">${value}</td></tr>`;
}

function buildCustomerEmail(payload: EnquiryPayload): {
  subject: string;
  html: string;
  text: string;
} {
  const { vehicle, name } = payload;
  const carLabel = `${vehicle.yearOfManufacture || ""} ${vehicle.make}`.trim();

  const subject = `We've got your enquiry for ${vehicle.registrationNumber}`;

  const html = `
<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f1f5f9;padding:24px;color:#0f172a;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.05);">
    <div style="padding:32px 28px;text-align:center;">
      <h1 style="font-size:22px;margin:0 0 8px;color:#0D2B4E;font-weight:800;">Thanks, ${name.split(" ")[0]} — we've got it.</h1>
      <p style="font-size:15px;color:#64748B;margin:0;line-height:1.5;">Your enquiry for your ${carLabel} (${vehicle.registrationNumber}) is with our team.</p>
    </div>
    <div style="padding:0 28px 32px;">
      <div style="background:#f1f5f9;border-radius:10px;padding:18px;text-align:center;">
        <p style="font-size:13px;color:#64748B;margin:0 0 4px;text-transform:uppercase;letter-spacing:1px;">Next step</p>
        <p style="font-size:16px;font-weight:700;margin:0;">One of our buyers will call you within the hour.</p>
      </div>
      <p style="font-size:14px;color:#475569;line-height:1.6;margin:20px 0 0;">If anything's wrong or you've changed your mind, just reply to this email and we'll take care of it.</p>
      <p style="font-size:14px;color:#475569;line-height:1.6;margin:16px 0 0;">— The SellMyCar team</p>
    </div>
  </div>
</body></html>
  `.trim();

  const text = `Thanks, ${name.split(" ")[0]} — we've got your enquiry for your ${carLabel} (${vehicle.registrationNumber}).

One of our buyers will call you within the hour.

If anything's wrong or you've changed your mind, just reply to this email.

— The SellMyCar team`;

  return { subject, html, text };
}

export async function sendEnquiryEmails(
  payload: EnquiryPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!ENABLED || !resend) {
    console.log(
      "[email] No RESEND_API_KEY set — would have sent enquiry:",
      JSON.stringify(payload, null, 2)
    );
    return { ok: true };
  }

  try {
    const clientEmail = buildClientEmail(payload);
    const customerEmail = buildCustomerEmail(payload);

    await Promise.all([
      resend.emails.send({
        from: FROM,
        to: TO,
        replyTo: payload.email,
        subject: clientEmail.subject,
        html: clientEmail.html,
        text: clientEmail.text,
      }),
      resend.emails.send({
        from: FROM,
        to: payload.email,
        subject: customerEmail.subject,
        html: customerEmail.html,
        text: customerEmail.text,
      }),
    ]);

    return { ok: true };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown email error";
    console.error("[email] send failed:", message);
    return { ok: false, error: message };
  }
}
