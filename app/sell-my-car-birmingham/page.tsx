import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Sell My Car Birmingham | Free Local Collection",
  description:
    "Sell your car in Birmingham. Free valuation, free home collection across the West Midlands, paid the same day. Clean Air Zone non-compliant cars welcome.",
  alternates: { canonical: "/sell-my-car-birmingham" },
};

export default function SellMyCarBirminghamPage() {
  return (
    <LocationPage
      location={{
        name: "Birmingham",
        slug: "birmingham",
        region: "West Midlands",
        description:
          "Birmingham was one of the first UK cities to introduce a Clean Air Zone, which has made selling older petrol and diesel cars a priority for many drivers. We buy CAZ non-compliant cars at fair prices and use transporter collection so you avoid the daily charge while we move the car.",
        collectionAreas: [
          "City Centre", "Edgbaston", "Selly Oak", "Harborne",
          "Moseley", "Kings Heath", "Erdington", "Sutton Coldfield",
          "Solihull", "West Bromwich", "Dudley", "Wolverhampton",
          "Smethwick", "Halesowen", "Stourbridge", "Coventry",
        ],
        averagePrice: "£13,600",
        carsBoughtThisYear: "8,400",
        carImage:
          "https://images.unsplash.com/photo-1572670169-c6a72bbb2099?auto=format&fit=crop&w=1200&q=80",
        testimonial: {
          quote:
            "My 2013 Golf wasn't CAZ-compliant and was costing me a fortune to drive into work. They quoted £3,800 over the phone and stuck to it. Money in my account within an hour of collection.",
          name: "Imran Hussain",
          sold: "2013 Volkswagen Golf 1.6 TDI",
        },
      }}
    />
  );
}
