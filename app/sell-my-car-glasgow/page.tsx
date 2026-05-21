import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Sell My Car Glasgow | Scotland's Top Car Buyers",
  description:
    "Sell your car in Glasgow — free instant valuation, free collection across the Central Belt, paid the same day. LEZ-compliant transporter collection available.",
  alternates: { canonical: "/sell-my-car-glasgow" },
};

export default function SellMyCarGlasgowPage() {
  return (
    <LocationPage
      location={{
        name: "Glasgow",
        slug: "glasgow",
        region: "Central Belt, Scotland",
        description:
          "We've built one of the most active car-buying operations north of the border, with collection drivers based across the Central Belt. Glasgow's Low Emission Zone has made selling older cars urgent for many drivers — we collect on a transporter where required, so the LEZ is not your problem.",
        collectionAreas: [
          "City Centre", "Merchant City", "Southside", "West End",
          "Shawlands", "Bearsden", "Milngavie", "Bishopbriggs",
          "Cambuslang", "Rutherglen", "East Kilbride", "Hamilton",
          "Paisley", "Renfrew", "Clydebank", "Falkirk",
        ],
        averagePrice: "£11,800",
        carsBoughtThisYear: "5,600",
        carImage:
          "https://images.unsplash.com/photo-1639411539988-3e957bf5d56b?auto=format&fit=crop&w=1200&q=80",
        testimonial: {
          quote:
            "I had a 2012 BMW 1 Series that couldn't enter the LEZ. Took me ten seconds to type in the reg, ten minutes to get a call back, and the transporter arrived two days later from Edinburgh. Excellent.",
          name: "Eilidh MacKenzie",
          sold: "2012 BMW 1 Series 116d",
        },
      }}
    />
  );
}
