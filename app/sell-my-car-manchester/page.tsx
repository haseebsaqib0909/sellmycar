import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Sell My Car Manchester | Free Collection",
  description:
    "Sell your car in Manchester — free instant valuation, free collection across Greater Manchester, same day payment. Trusted local car buyers.",
  alternates: { canonical: "/sell-my-car-manchester" },
};

export default function SellMyCarManchesterPage() {
  return (
    <LocationPage
      location={{
        name: "Manchester",
        slug: "manchester",
        region: "Greater Manchester",
        description:
          "Manchester is one of our busiest pickup areas in the North West. From Salford to Stockport, Trafford to Tameside, we collect across the whole Greater Manchester footprint. The Clean Air Zone proposals make selling older diesels timely — we collect on a transporter where needed so there's no charge to you.",
        collectionAreas: [
          "City Centre", "Salford", "Trafford", "Stockport",
          "Oldham", "Rochdale", "Bury", "Bolton",
          "Wigan", "Tameside", "Didsbury", "Chorlton",
          "Altrincham", "Sale", "Bramhall", "Cheadle",
        ],
        averagePrice: "£14,800",
        carsBoughtThisYear: "9,200",
        carImage:
          "https://images.unsplash.com/photo-1626888384127-fb6c1b0f3f54?auto=format&fit=crop&w=1200&q=80",
        testimonial: {
          quote:
            "I sold a 2019 Qashqai I'd had since new. Got the offer in under an hour, accepted, collected from my drive in Sale the next day. The whole thing was easier than the school run.",
          name: "Alex Thornton",
          sold: "2019 Nissan Qashqai",
        },
      }}
    />
  );
}
