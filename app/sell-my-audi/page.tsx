import type { Metadata } from "next";
import MakePage from "@/components/MakePage";

export const metadata: Metadata = {
  title: "Sell My Audi | Free Instant Valuation",
  description:
    "Sell your Audi for the best price. Free DVLA-verified valuation, free home collection, paid the same day. A1 to Q8, S and RS, every model bought.",
  alternates: { canonical: "/sell-my-audi" },
};

export default function SellMyAudiPage() {
  return (
    <MakePage
      make={{
        name: "Audi",
        slug: "audi",
        description:
          "From compact A1s and A3s to executive A4s, A6s and the full Q SUV line-up, Audis are some of the most sought-after cars on the UK used market. S Line and Black Edition trims carry a premium, and our buyers know it. We pay strong, fair prices and never deduct on collection.",
        models: [
          { name: "A1 Sportback 30 TFSI", year: "2020", price: "£14,800" },
          { name: "A3 Sportback 35 TFSI S Line", year: "2021", price: "£21,900" },
          { name: "A4 Avant 40 TDI S Line", year: "2021", price: "£24,500" },
          { name: "Q2 35 TFSI Black Edition", year: "2020", price: "£19,200" },
          { name: "Q3 Sportback 35 TDI", year: "2021", price: "£27,800" },
          { name: "Q5 40 TDI S Line", year: "2022", price: "£36,400" },
        ],
        averagePrice: "£23,800",
        pricesPaidPerYear: "£48m",
        carImage:
          "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
        testimonial: {
          quote:
            "I was selling my A3 because we were moving abroad and the timeline was tight. They turned around an offer within forty minutes, collected the next morning and paid me on the spot. Genuinely faultless service.",
          name: "Hannah Wright",
          location: "Bristol",
          sold: "2020 Audi A3 35 TFSI S Line",
        },
      }}
    />
  );
}
