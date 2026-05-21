import type { Metadata } from "next";
import MakePage from "@/components/MakePage";

export const metadata: Metadata = {
  title: "Sell My BMW | Free Valuation, Same Day Payment",
  description:
    "Sell your BMW the easy way. Free instant valuation, free home collection across the UK, paid the same day. Any model, any age, any condition.",
  alternates: { canonical: "/sell-my-bmw" },
};

export default function SellMyBMWPage() {
  return (
    <MakePage
      make={{
        name: "BMW",
        slug: "bmw",
        description:
          "Whether it's a 1 Series runabout, a 3 Series saloon, a 5 Series executive or an X-line SUV, BMWs hold strong residual values and we have buyers ready every day of the week. We pay above book on most well-kept BMWs and we collect free, anywhere in mainland UK.",
        models: [
          { name: "1 Series 118i M Sport", year: "2020", price: "£14,200" },
          { name: "3 Series 320d M Sport", year: "2022", price: "£24,850" },
          { name: "5 Series 530e M Sport", year: "2021", price: "£28,900" },
          { name: "X1 sDrive18d", year: "2020", price: "£17,400" },
          { name: "X3 xDrive20d M Sport", year: "2021", price: "£26,500" },
          { name: "X5 xDrive30d M Sport", year: "2022", price: "£42,800" },
        ],
        averagePrice: "£21,400",
        pricesPaidPerYear: "£62m",
        carImage:
          "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
        testimonial: {
          quote:
            "My 320d had 78,000 miles and a few stone chips. The dealer quoted me £18,500 part-ex. SellMyCar offered £21,800 over the phone, collected on a Wednesday and the money was in my account before they'd driven it off the road.",
          name: "Daniel Roberts",
          location: "Reading",
          sold: "2020 BMW 320d M Sport",
        },
      }}
    />
  );
}
