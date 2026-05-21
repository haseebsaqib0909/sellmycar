import type { Metadata } from "next";
import MakePage from "@/components/MakePage";

export const metadata: Metadata = {
  title: "Sell My Mercedes-Benz | Premium Car Buyers",
  description:
    "Sell your Mercedes-Benz to specialists. A-Class to S-Class, GLA to GLE — premium prices for AMG Line and Night Edition trims. Same day collection.",
  alternates: { canonical: "/sell-my-mercedes" },
};

export default function SellMyMercedesPage() {
  return (
    <MakePage
      make={{
        name: "Mercedes-Benz",
        slug: "mercedes",
        description:
          "Mercedes-Benz holds value better than most premium brands and we have specialist buyers for every model in the line-up. AMG Line and Night Edition trims, low-mileage examples and approved-used spec cars attract our highest offers.",
        models: [
          { name: "A-Class A200 AMG Line", year: "2021", price: "£21,400" },
          { name: "B-Class B200 AMG Line Premium", year: "2020", price: "£20,800" },
          { name: "C-Class C220d AMG Line", year: "2021", price: "£28,900" },
          { name: "GLA 200 AMG Line Premium Plus", year: "2021", price: "£26,500" },
          { name: "GLC 220d AMG Line", year: "2021", price: "£34,200" },
          { name: "E-Class E220d AMG Line", year: "2022", price: "£38,800" },
        ],
        averagePrice: "£28,400",
        pricesPaidPerYear: "£54m",
        carImage:
          "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1200&q=80",
        testimonial: {
          quote:
            "I had a C-Class on PCP with three months left. They settled the finance directly with Mercedes Finance and paid me the equity. Took less than 24 hours from valuation to bank transfer.",
          name: "Ravi Mehta",
          location: "Leicester",
          sold: "2020 Mercedes-Benz C220d AMG Line",
        },
      }}
    />
  );
}
