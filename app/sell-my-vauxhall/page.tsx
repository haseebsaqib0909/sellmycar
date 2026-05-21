import type { Metadata } from "next";
import MakePage from "@/components/MakePage";

export const metadata: Metadata = {
  title: "Sell My Vauxhall | Free Online Valuation",
  description:
    "Sell your Vauxhall today. Corsa, Astra, Mokka, Insignia — we buy every model. Free instant valuation, free collection, paid same day.",
  alternates: { canonical: "/sell-my-vauxhall" },
};

export default function SellMyVauxhallPage() {
  return (
    <MakePage
      make={{
        name: "Vauxhall",
        slug: "vauxhall",
        description:
          "Vauxhalls are everywhere on UK roads — and we buy thousands of them every year. Corsas, Astras and Mokkas in particular are easy sells and we pay competitive prices. Even older, high-mileage Vauxhalls have buyers waiting.",
        models: [
          { name: "Corsa SRi 1.4", year: "2018", price: "£6,500" },
          { name: "Corsa-e Elite Nav 100kW", year: "2021", price: "£14,800" },
          { name: "Astra Sports Tourer 1.2", year: "2020", price: "£11,400" },
          { name: "Mokka 1.2T Ultimate", year: "2021", price: "£15,200" },
          { name: "Crossland Elite Nav", year: "2020", price: "£10,600" },
          { name: "Insignia Grand Sport 1.5", year: "2019", price: "£9,800" },
        ],
        averagePrice: "£10,400",
        pricesPaidPerYear: "£38m",
        carImage:
          "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?auto=format&fit=crop&w=1200&q=80",
        testimonial: {
          quote:
            "My Corsa had a failed MOT and a leaky head gasket. I assumed I'd have to scrap it. They gave me £1,900 for it as-is, collected on a transporter, and didn't reduce the price.",
          name: "Lauren Davies",
          location: "Cardiff",
          sold: "2016 Vauxhall Corsa 1.4",
        },
      }}
    />
  );
}
