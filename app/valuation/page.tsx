import type { Metadata } from "next";
import ValuationFlow from "./ValuationFlow";

export const metadata: Metadata = {
  title: "Your Free Valuation",
  description:
    "Confirm your vehicle details and we'll call you with a firm offer within the hour. Free, no obligation, no fees.",
  alternates: { canonical: "/valuation" },
  robots: { index: false, follow: true },
};

export default function ValuationPage() {
  return <ValuationFlow />;
}
