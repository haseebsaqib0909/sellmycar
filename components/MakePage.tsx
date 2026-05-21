import Image from "next/image";
import PageHero from "./PageHero";
import CTABand from "./CTABand";
import HowItWorks from "./HowItWorks";

export interface MakeData {
  name: string;
  slug: string;
  description: string;
  models: { name: string; year: string; price: string }[];
  averagePrice: string;
  pricesPaidPerYear: string;
  carImage: string;
  testimonial: {
    quote: string;
    name: string;
    location: string;
    sold: string;
  };
}

export default function MakePage({ make }: { make: MakeData }) {
  return (
    <>
      <PageHero
        eyebrow={`Sell my ${make.name}`}
        title={`Sell your ${make.name} for the best price`}
        subtitle={`Free instant valuation, free home collection across the UK, and the money in your account the same day. We've paid out over ${make.pricesPaidPerYear} to ${make.name} owners this year alone.`}
        breadcrumbs={[
          { label: "Sell My Car", href: "/sell-my-car" },
          { label: `Sell My ${make.name}`, href: `/sell-my-${make.slug}` },
        ]}
        showPlate
      />

      {/* Why sell with us */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">
                {make.name} buyers you can trust
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 tracking-tight">
                The simplest way to sell your {make.name}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {make.description}
              </p>
              <ul className="space-y-3">
                {[
                  `Average ${make.name} valuation: ${make.averagePrice}`,
                  "Free collection from your door, anywhere in mainland UK",
                  "Same day bank transfer once your car is collected",
                  "No fees, no admin charges, no surprise deductions",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <svg
                      className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/5 order-first md:order-last">
              <Image
                src={make.carImage}
                alt={`${make.name} car ready to be sold`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular models */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">
              Popular models
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              {make.name} models we buy every week
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              From everyday runarounds to performance cars and luxury saloons,
              we buy every {make.name} in any condition.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {make.models.map((model) => (
              <article
                key={model.name}
                className="bg-white rounded-xl p-5 ring-1 ring-slate-200/60 hover:ring-brand/30 hover:shadow-md transition-all"
              >
                <p className="text-xs text-slate-500 mb-1">
                  {make.name} &middot; example
                </p>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {model.name}
                </h3>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-sm text-slate-500">{model.year}</span>
                  <span className="text-lg font-extrabold text-brand">
                    {model.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Testimonial */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 ring-1 ring-slate-200/60">
            <svg
              className="w-10 h-10 text-brand/20 mb-4"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-lg sm:text-xl text-slate-800 leading-relaxed mb-6">
              &ldquo;{make.testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center justify-between pt-5 border-t border-slate-200">
              <div>
                <p className="font-bold text-slate-900">
                  {make.testimonial.name}
                </p>
                <p className="text-sm text-slate-500">
                  {make.testimonial.location} &middot; sold{" "}
                  {make.testimonial.sold}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title={`Get a free valuation for your ${make.name}`}
        subtitle="Enter your reg plate and we'll confirm your vehicle details in seconds."
      />
    </>
  );
}
