import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import HowItWorks from "@/components/HowItWorks";

export const metadata: Metadata = {
  title: "Sell My Car | Free Valuation, Free Collection, Paid Today",
  description:
    "Sell your car online with the UK's most trusted car buyers. Any make, any model, any condition. Free valuation, free collection, same day payment.",
  alternates: { canonical: "/sell-my-car" },
  openGraph: {
    title: "Sell My Car | Free Valuation & Same Day Payment",
    description:
      "Sell your car online — any make, any model, any condition. Free collection across the UK.",
    url: "/sell-my-car",
  },
};

const makes = [
  { name: "BMW", slug: "bmw" },
  { name: "Audi", slug: "audi" },
  { name: "Ford", slug: "ford" },
  { name: "Vauxhall", slug: "vauxhall" },
  { name: "Mercedes", slug: "mercedes" },
];

const cities = [
  { name: "London", slug: "london" },
  { name: "Manchester", slug: "manchester" },
  { name: "Birmingham", slug: "birmingham" },
  { name: "Leeds", slug: "leeds" },
  { name: "Glasgow", slug: "glasgow" },
];

const conditions = [
  {
    title: "Cars with high mileage",
    body: "Six-figure mileage doesn't put us off. Plenty of buyers are looking for reliable workhorses, and we'll give you a fair price based on real market demand.",
  },
  {
    title: "Cars without MOT",
    body: "Expired or failed MOT? No problem. We arrange a transporter rather than a driver so the car can be legally moved without an MOT.",
  },
  {
    title: "Non-runners and damaged cars",
    body: "Engine failures, gearbox issues, accident damage, flood damage — we have specialist buyers for cars that other dealers turn away.",
  },
  {
    title: "Cars with outstanding finance",
    body: "We'll settle your finance balance directly with the lender and pay you the difference — all on the same day.",
  },
  {
    title: "Scrap and end-of-life vehicles",
    body: "If your car is genuinely beyond economical repair, we work with ATF-licensed partners and arrange free collection.",
  },
  {
    title: "Premium and prestige cars",
    body: "From sports cars to executive saloons, we have prestige buyers who pay strong prices for cars in excellent condition.",
  },
];

export default function SellMyCarPage() {
  return (
    <>
      <PageHero
        eyebrow="Sell my car"
        title="Sell your car online — any make, any model, any condition"
        subtitle="Skip the awkward dealer haggle and the time wasters on classified sites. Get a free instant valuation, free home collection across the UK, and the money in your account the same day."
        breadcrumbs={[{ label: "Sell My Car", href: "/sell-my-car" }]}
        showPlate
      />

      {/* What we buy */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">
              What we buy
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              We buy every kind of car
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              From pristine prestige cars to high-mileage workhorses, MOT
              failures, and cars with outstanding finance. If you can drive it
              onto a transporter, we&apos;ll buy it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {conditions.map((c) => (
              <div
                key={c.title}
                className="bg-slate-50 rounded-xl p-6 ring-1 ring-slate-200/60"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* By make */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">
              Sell by make
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Popular makes we buy
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              See typical prices we pay for the most-sold makes in the UK.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {makes.map((m) => (
              <Link
                key={m.slug}
                href={`/sell-my-${m.slug}`}
                className="bg-slate-50 rounded-xl px-5 py-4 text-center font-bold text-slate-900 ring-1 ring-slate-200/60 hover:ring-brand/30 hover:bg-white hover:text-brand transition-all"
              >
                Sell my {m.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* By city */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">
              Sell by city
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Free collection in every major UK city
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Wherever you are, we collect for free.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/sell-my-car-${c.slug}`}
                className="bg-white rounded-xl px-5 py-4 text-center font-bold text-slate-900 ring-1 ring-slate-200/60 hover:ring-brand/30 hover:text-brand transition-all"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
