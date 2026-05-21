import Image from "next/image";
import PageHero from "./PageHero";
import CTABand from "./CTABand";
import HowItWorks from "./HowItWorks";

export interface LocationData {
  name: string;
  slug: string;
  region: string;
  description: string;
  collectionAreas: string[];
  averagePrice: string;
  carsBoughtThisYear: string;
  carImage: string;
  testimonial: {
    quote: string;
    name: string;
    sold: string;
  };
}

export default function LocationPage({
  location,
}: {
  location: LocationData;
}) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://sellmycar.co.uk";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Sell My Car — ${location.name}`,
    description: `We buy cars from sellers across ${location.name} and ${location.region}. Free home collection and same day payment.`,
    url: `${siteUrl}/sell-my-car-${location.slug}`,
    areaServed: { "@type": "City", name: location.name },
    serviceType: "Car buying",
    priceRange: "££",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <PageHero
        eyebrow={`Sell my car ${location.name}`}
        title={`Sell your car in ${location.name} — same day collection`}
        subtitle={`We've collected over ${location.carsBoughtThisYear} cars from ${location.name} drivers this year. Free valuation, free pickup from your address, money in your account the same day.`}
        breadcrumbs={[
          { label: "Locations", href: "/sell-my-car" },
          {
            label: `Sell My Car ${location.name}`,
            href: `/sell-my-car-${location.slug}`,
          },
        ]}
        showPlate
      />

      {/* Why local */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">
                {location.name} car buyers
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 tracking-tight">
                The fastest way to sell your car in {location.name}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {location.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Avg. sale price
                  </p>
                  <p className="text-xl font-extrabold text-brand">
                    {location.averagePrice}
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Collected this year
                  </p>
                  <p className="text-xl font-extrabold text-brand">
                    {location.carsBoughtThisYear}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/5 order-first md:order-last">
              <Image
                src={location.carImage}
                alt={`Car being collected from a seller in ${location.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collection areas */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">
              Where we collect
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Free collection across {location.name} and surrounding areas
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our drivers cover every postcode in and around {location.name}.
              Wherever you are, collection is always free.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {location.collectionAreas.map((area) => (
              <div
                key={area}
                className="bg-white rounded-lg px-4 py-3 text-center text-sm font-medium text-slate-700 ring-1 ring-slate-200/60 hover:ring-brand/30 hover:text-brand transition-all"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Testimonial */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 ring-1 ring-slate-200/60">
            <p className="text-lg sm:text-xl text-slate-800 leading-relaxed mb-6">
              &ldquo;{location.testimonial.quote}&rdquo;
            </p>
            <div className="pt-5 border-t border-slate-200">
              <p className="font-bold text-slate-900">
                {location.testimonial.name}
              </p>
              <p className="text-sm text-slate-500">
                {location.name} &middot; sold {location.testimonial.sold}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title={`Sell your car in ${location.name} today`}
        subtitle="Enter your reg for a free instant valuation. Free collection, same day payment."
      />
    </>
  );
}
