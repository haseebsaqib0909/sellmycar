/**
 * DVLA Vehicle Enquiry Service (VES) wrapper.
 * Apply for a free key at: https://register-for-ves.driver-vehicle-licensing.api.gov.uk
 * UAT environment available for testing: https://uat.driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles
 */

export interface VehicleData {
  registrationNumber: string;
  make: string;
  yearOfManufacture?: number;
  monthOfFirstRegistration?: string;
  colour?: string;
  fuelType?: string;
  engineCapacity?: number;
  co2Emissions?: number;
  taxStatus?: string;
  taxDueDate?: string;
  motStatus?: string;
  motExpiryDate?: string;
  markedForExport?: boolean;
  typeApproval?: string;
  revenueWeight?: number;
  euroStatus?: string;
  realDrivingEmissions?: string;
  wheelplan?: string;
  artEndDate?: string;
  dateOfLastV5CIssued?: string;
}

export class DvlaError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = "DvlaError";
  }
}

const cleanReg = (reg: string): string =>
  reg.toUpperCase().replace(/[^A-Z0-9]/g, "");

/**
 * Look up a UK vehicle by registration plate.
 * Falls back to mock data if no DVLA_API_KEY is set (so the UI flow
 * stays demonstrable on preview environments without a real key).
 */
export async function lookupVehicle(reg: string): Promise<VehicleData> {
  const registration = cleanReg(reg);
  if (!registration || registration.length < 2 || registration.length > 8) {
    throw new DvlaError("Please enter a valid UK reg plate.", 400);
  }

  const apiKey = process.env.DVLA_API_KEY;
  const apiUrl =
    process.env.DVLA_API_URL ||
    "https://uat.driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles";

  // No key configured — return a clearly-labelled mock so the flow demos end-to-end.
  if (!apiKey) {
    console.log(
      `[dvla] No DVLA_API_KEY set — returning mock data for ${registration}`
    );
    return buildMockVehicle(registration);
  }

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify({ registrationNumber: registration }),
    cache: "no-store",
  });

  if (res.status === 404) {
    throw new DvlaError(
      "We couldn't find that registration in the DVLA database. Check the spelling and try again.",
      404
    );
  }
  if (res.status === 429) {
    throw new DvlaError(
      "Too many lookups right now — please try again in a moment.",
      429
    );
  }
  if (!res.ok) {
    const errBody = await res.text().catch(() => "");
    console.error(`[dvla] API ${res.status}: ${errBody}`);
    throw new DvlaError(
      "Sorry, the DVLA service is unavailable right now.",
      res.status
    );
  }

  const data = (await res.json()) as VehicleData;
  return data;
}

function buildMockVehicle(reg: string): VehicleData {
  const seed = reg.charCodeAt(0) + reg.length;
  const samples = [
    { make: "FORD", colour: "BLUE", fuelType: "PETROL", year: 2020, cc: 1499 },
    { make: "BMW", colour: "BLACK", fuelType: "DIESEL", year: 2021, cc: 1995 },
    {
      make: "VOLKSWAGEN",
      colour: "WHITE",
      fuelType: "PETROL",
      year: 2019,
      cc: 1395,
    },
    {
      make: "AUDI",
      colour: "GREY",
      fuelType: "DIESEL",
      year: 2022,
      cc: 1968,
    },
    { make: "TOYOTA", colour: "SILVER", fuelType: "HYBRID", year: 2021, cc: 1798 },
  ];
  const s = samples[seed % samples.length];
  return {
    registrationNumber: reg,
    make: s.make,
    colour: s.colour,
    fuelType: s.fuelType,
    yearOfManufacture: s.year,
    engineCapacity: s.cc,
    taxStatus: "Taxed",
    motStatus: "Valid",
    co2Emissions: 132,
    monthOfFirstRegistration: `${s.year}-03`,
  };
}
