import type { Metadata } from "next";
import MakePage from "@/components/MakePage";

export const metadata: Metadata = {
  title: "Sell My Ford | Fast Valuation & Same Day Payment",
  description:
    "Sell your Ford fast. Fiesta, Focus, Kuga, Puma, Ranger — every model bought. Free instant valuation, free home collection, same day bank transfer.",
  alternates: { canonical: "/sell-my-ford" },
};

export default function SellMyFordPage() {
  return (
    <MakePage
      make={{
        name: "Ford",
        slug: "ford",
        description:
          "Ford has been Britain's bestselling brand for decades, and we buy more Fords than any other make. From a five-year-old Fiesta to a brand-new Ranger pickup, we have ready buyers and competitive prices. ST and Vignale trims attract premium offers.",
        models: [
          { name: "Fiesta ST-Line 1.0 EcoBoost", year: "2019", price: "£9,850" },
          { name: "Focus ST-Line X 1.5", year: "2020", price: "£13,600" },
          { name: "Puma ST-Line 1.0", year: "2021", price: "£17,200" },
          { name: "Kuga ST-Line PHEV", year: "2021", price: "£22,400" },
          { name: "Mustang 5.0 GT Coupe", year: "2019", price: "£34,500" },
          { name: "Ranger Wildtrak 3.2", year: "2020", price: "£28,800" },
        ],
        averagePrice: "£14,200",
        pricesPaidPerYear: "£71m",
        carImage:
          "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
        testimonial: {
          quote:
            "I tried WBAC first and they undercut me by nearly £1,400 on a five-year-old Focus. These guys offered the WBAC quote plus more, picked it up on a Saturday and paid by 11am.",
          name: "Marcus Cole",
          location: "Sheffield",
          sold: "2019 Ford Focus ST-Line",
        },
      }}
    />
  );
}
