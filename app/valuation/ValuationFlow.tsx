"use client";

import { useEffect, useState, FormEvent, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import RegPlateInput from "@/components/RegPlateInput";

interface VehicleData {
  registrationNumber: string;
  make: string;
  yearOfManufacture?: number;
  colour?: string;
  fuelType?: string;
  engineCapacity?: number;
  co2Emissions?: number;
  taxStatus?: string;
  motStatus?: string;
}

type Stage = "idle" | "looking-up" | "ready" | "submitting" | "done";

function Spinner({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={`${className} animate-spin`}
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeOpacity="0.25"
      />
      <path
        d="M22 12a10 10 0 0 0-10-10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Plate({ reg }: { reg: string }) {
  return (
    <div className="inline-flex items-stretch border-2 border-black rounded-md overflow-hidden bg-plate-yellow shadow-sm">
      <div className="bg-[#003399] flex flex-col items-center justify-center px-2 py-1.5 min-w-[28px]">
        <div className="text-white font-extrabold text-[9px] leading-none tracking-wider">
          GB
        </div>
      </div>
      <div className="bg-plate-yellow text-black font-black uppercase text-xl sm:text-2xl tracking-[0.15em] px-4 py-1.5">
        {reg}
      </div>
    </div>
  );
}

function VehicleRow({ label, value }: { label: string; value?: string | number }) {
  if (!value) return null;
  return (
    <div className="flex items-start justify-between gap-4 py-2.5 border-b border-slate-100 last:border-0">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-sm font-bold text-slate-900 text-right">
        {value}
      </span>
    </div>
  );
}

function InnerFlow() {
  const params = useSearchParams();
  const router = useRouter();
  const reg = (params.get("reg") || "").toUpperCase().replace(/[^A-Z0-9]/g, "");

  const [stage, setStage] = useState<Stage>("idle");
  const [vehicle, setVehicle] = useState<VehicleData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [mileage, setMileage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [condition, setCondition] = useState("Good");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!reg) {
      setStage("idle");
      return;
    }
    let cancelled = false;
    setStage("looking-up");
    setError(null);
    fetch("/api/vehicle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reg }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (cancelled) return;
        if (!res.ok) {
          setError(data.error || "Lookup failed.");
          setStage("idle");
          return;
        }
        setVehicle(data.vehicle);
        setStage("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setError("Couldn't reach the lookup service. Please try again.");
        setStage("idle");
      });
    return () => {
      cancelled = true;
    };
  }, [reg]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!vehicle) return;
    setStage("submitting");
    setError(null);

    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vehicle,
        mileage: Number(mileage.replace(/\D/g, "")),
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        postcode: postcode.trim().toUpperCase(),
        condition,
        notes: notes.trim(),
      }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(data.error || "Couldn't submit your enquiry.");
      setStage("ready");
      return;
    }
    setStage("done");
  }

  // ─── Idle state: no reg, ask for one ───────────────────────────────────────
  if (stage === "idle" && !reg) {
    return (
      <div className="bg-slate-50 min-h-[60vh] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Enter your reg to start your valuation
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mb-8">
            We&apos;ll pull your vehicle details from the DVLA and a buyer will
            call you with a firm offer.
          </p>
          <RegPlateInput
            size="large"
            onSubmit={(value) => router.push(`/valuation?reg=${value}`)}
          />
          {error && (
            <p className="mt-4 text-sm text-red-600 font-medium">{error}</p>
          )}
        </div>
      </div>
    );
  }

  // ─── Looking up ─────────────────────────────────────────────────────────────
  if (stage === "looking-up") {
    return (
      <div className="bg-slate-50 min-h-[60vh] flex flex-col items-center justify-center px-4 py-20">
        <Plate reg={reg} />
        <div className="mt-8 flex items-center gap-3 text-brand">
          <Spinner />
          <span className="font-semibold">Looking up your vehicle…</span>
        </div>
      </div>
    );
  }

  // ─── Done ───────────────────────────────────────────────────────────────────
  if (stage === "done") {
    return (
      <div className="bg-slate-50 min-h-[70vh] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm ring-1 ring-slate-200/60 p-8 sm:p-12 text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-emerald-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Thanks, {name.split(" ")[0] || "there"} — we&apos;ve got it.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-md mx-auto">
            Your enquiry for{" "}
            <span className="font-bold text-slate-900">
              {vehicle?.registrationNumber}
            </span>{" "}
            is with our buying team. One of our buyers will call you within
            the hour.
          </p>
          <div className="bg-slate-50 rounded-xl p-5 mb-8 text-left max-w-md mx-auto">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
              We&apos;ll call
            </p>
            <p className="font-bold text-slate-900 text-lg">{phone}</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-3 mb-1">
              Confirmation sent to
            </p>
            <p className="font-bold text-slate-900">{email}</p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  // ─── Ready / Submitting (form view) ─────────────────────────────────────────
  const carName = vehicle
    ? `${vehicle.yearOfManufacture || ""} ${vehicle.make} ${
        vehicle.colour ? `(${vehicle.colour.toLowerCase()})` : ""
      }`.trim()
    : "";

  return (
    <div className="bg-slate-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 sm:mb-10 text-center">
          <p className="text-xs sm:text-sm font-semibold text-brand uppercase tracking-widest mb-3">
            Step 2 of 3
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Is this your car?
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Confirm the details below and tell us a bit more — we&apos;ll call
            you with an offer.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-8 items-start">
          {/* Vehicle card */}
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200/60 p-6 sm:p-7 lg:sticky lg:top-24">
            <div className="flex items-center justify-between mb-5">
              <Plate reg={vehicle?.registrationNumber || reg} />
              <Link
                href="/"
                className="text-xs font-semibold text-slate-500 hover:text-brand"
              >
                Change
              </Link>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
              Your vehicle
            </p>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-5 leading-tight">
              {carName}
            </h2>

            <div>
              <VehicleRow label="Make" value={vehicle?.make} />
              <VehicleRow
                label="Year"
                value={vehicle?.yearOfManufacture}
              />
              <VehicleRow label="Colour" value={vehicle?.colour} />
              <VehicleRow label="Fuel type" value={vehicle?.fuelType} />
              <VehicleRow
                label="Engine"
                value={
                  vehicle?.engineCapacity
                    ? `${vehicle.engineCapacity}cc`
                    : undefined
                }
              />
              <VehicleRow label="MOT" value={vehicle?.motStatus} />
              <VehicleRow label="Tax" value={vehicle?.taxStatus} />
            </div>

            <p className="text-xs text-slate-400 mt-5 leading-relaxed">
              Details supplied by the DVLA. If something doesn&apos;t look
              right, leave it and mention it in the notes — we&apos;ll sort it
              on the call.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200/60 p-6 sm:p-8"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1 tracking-tight">
              Your details
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              We&apos;ll only use these to give you a valuation. No spam.
            </p>

            <div className="space-y-5">
              <Field label="Current mileage" required>
                <input
                  type="text"
                  inputMode="numeric"
                  required
                  value={mileage}
                  onChange={(e) =>
                    setMileage(e.target.value.replace(/[^\d,]/g, ""))
                  }
                  placeholder="e.g. 52,300"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-brand focus:border-brand transition"
                />
              </Field>

              <Field label="Condition" required>
                <select
                  required
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-brand focus:border-brand transition"
                >
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                  <option>Poor</option>
                  <option>Non-runner</option>
                </select>
              </Field>

              <Field label="Your name" required>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-brand focus:border-brand transition"
                />
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Phone" required>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="07700 900000"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-brand focus:border-brand transition"
                  />
                </Field>
                <Field label="Postcode" required>
                  <input
                    type="text"
                    required
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                    placeholder="SW1A 1AA"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-brand focus:border-brand transition uppercase"
                  />
                </Field>
              </div>

              <Field label="Email" required>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-brand focus:border-brand transition"
                />
              </Field>

              <Field label="Anything else we should know?">
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Service history, damage, outstanding finance, urgency…"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-brand focus:border-brand transition resize-none"
                />
              </Field>
            </div>

            {error && (
              <div className="mt-5 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={stage === "submitting"}
              className="mt-6 w-full px-6 py-4 bg-brand hover:bg-brand-hover disabled:bg-slate-400 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand/20"
            >
              {stage === "submitting" ? (
                <>
                  <Spinner /> Sending…
                </>
              ) : (
                <>Get my offer</>
              )}
            </button>

            <p className="mt-4 text-xs text-slate-500 text-center leading-relaxed">
              By submitting, you agree to our{" "}
              <Link href="/privacy" className="text-brand hover:underline">
                privacy policy
              </Link>
              . Free, no obligation, no fees.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-slate-700 mb-1.5">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      {children}
    </label>
  );
}

export default function ValuationFlow() {
  return (
    <Suspense
      fallback={
        <div className="bg-slate-50 min-h-[60vh] flex items-center justify-center">
          <Spinner className="w-8 h-8 text-brand" />
        </div>
      }
    >
      <InnerFlow />
    </Suspense>
  );
}
