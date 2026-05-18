import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import HowItWorks from "@/components/HowItWorks";
import CustomerStories from "@/components/CustomerStories";
import BillboardCTA from "@/components/BillboardCTA";
import SocialProof from "@/components/SocialProof";
import FAQSection from "@/components/FAQSection";
import ClosingCTA from "@/components/ClosingCTA";

export const metadata: Metadata = {
  title: "Sell My Car | Free Instant Valuation — Get Paid Today",
  description:
    "Sell your car fast and get paid the same day. Enter your reg plate for a free instant valuation. Trusted UK car buyers — no fees, free collection.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <HowItWorks />
      <CustomerStories />
      <BillboardCTA />
      <SocialProof />
      <FAQSection />
      <ClosingCTA />
    </>
  );
}
