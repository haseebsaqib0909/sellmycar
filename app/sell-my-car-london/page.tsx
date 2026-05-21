import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Sell My Car London | Same Day Collection",
  description:
    "Sell your car in London — free instant valuation, free collection from every London borough, paid the same day. ULEZ-friendly transporter collection available.",
  alternates: { canonical: "/sell-my-car-london" },
};

export default function SellMyCarLondonPage() {
  return (
    <LocationPage
      location={{
        name: "London",
        slug: "london",
        region: "Greater London",
        description:
          "London drivers face the toughest selling conditions in the country — ULEZ, parking restrictions, congestion charges and a market flooded with private listings. We make it easy. Every London postcode is covered by our free collection service, and we use transporters where ULEZ compliance matters, so an old diesel costs you nothing extra to sell.",
        collectionAreas: [
          "Camden", "Westminster", "Hackney", "Islington",
          "Lambeth", "Southwark", "Tower Hamlets", "Newham",
          "Greenwich", "Lewisham", "Wandsworth", "Hammersmith",
          "Kensington", "Chelsea", "Brent", "Ealing",
          "Harrow", "Barnet", "Enfield", "Haringey",
          "Croydon", "Bromley", "Bexley", "Havering",
        ],
        averagePrice: "£18,200",
        carsBoughtThisYear: "14,800",
        carImage:
          "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
        testimonial: {
          quote:
            "I live in a flat in Hackney with no off-street parking and a non-ULEZ-compliant diesel. They sent a transporter, paid me cash on the spot via bank transfer, and saved me a £12.50-a-day ULEZ bill the moment they drove off.",
          name: "Olivia Bennett",
          sold: "2014 Audi A4 2.0 TDI",
        },
      }}
    />
  );
}
