import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Sell My Car Leeds | Free Valuation & Collection",
  description:
    "Sell your car in Leeds with the UK's most trusted car buyers. Free DVLA-verified valuation, free collection from across West Yorkshire, same day payment.",
  alternates: { canonical: "/sell-my-car-leeds" },
};

export default function SellMyCarLeedsPage() {
  return (
    <LocationPage
      location={{
        name: "Leeds",
        slug: "leeds",
        region: "West Yorkshire",
        description:
          "Leeds is the commercial heart of West Yorkshire and we collect from every corner of the city and surrounding towns. From the suburbs of Roundhay and Headingley to Wakefield and Bradford, our drivers are out every day. Most Leeds sellers see collection within 24 hours of accepting their offer.",
        collectionAreas: [
          "City Centre", "Headingley", "Roundhay", "Chapel Allerton",
          "Horsforth", "Pudsey", "Wetherby", "Garforth",
          "Morley", "Otley", "Bradford", "Wakefield",
          "Castleford", "Pontefract", "Halifax", "Huddersfield",
        ],
        averagePrice: "£12,900",
        carsBoughtThisYear: "6,800",
        carImage:
          "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
        testimonial: {
          quote:
            "I needed to sell quickly because I'd been offered a job overseas. They valued the car at 9am, collected at 4pm the same day, and the money was waiting for me when I got home. Brilliant.",
          name: "Sophie Carter",
          sold: "2020 Mini Cooper S",
        },
      }}
    />
  );
}
