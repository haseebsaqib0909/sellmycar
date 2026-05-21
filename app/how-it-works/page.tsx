import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "How It Works | Sell Your Car in 3 Steps",
  description:
    "Find out how selling your car with us works. Free valuation, free collection, same day payment — in three simple steps from reg plate to bank transfer.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | Sell Your Car in 3 Steps",
    description:
      "From reg plate to bank transfer in under 24 hours. See exactly how we buy your car.",
    url: "/how-it-works",
  },
};

const detailedSteps = [
  {
    number: "01",
    title: "Enter your reg plate",
    summary: "Get an instant DVLA-verified vehicle lookup.",
    body: "Type your number plate into the box on the homepage and we pull your car's make, model, fuel type, engine size and registration year directly from the DVLA in seconds. There's no signup, no obligation, and no waiting for a call back.",
    bullets: [
      "Instant DVLA-verified lookup",
      "No signup or password required",
      "Works on mobile, tablet and desktop",
    ],
  },
  {
    number: "02",
    title: "Tell us about your car",
    summary: "Add your mileage and a couple of quick condition details.",
    body: "We'll ask you a few short questions: your current mileage, the number of previous owners, whether it has full service history, and an honest description of any damage or mechanical issues. Be upfront — our offer is based on what you tell us, and an accurate description means an accurate price.",
    bullets: [
      "Takes under a minute",
      "Honest is better than optimistic",
      "Any condition accepted — even non-runners",
    ],
  },
  {
    number: "03",
    title: "Get your offer",
    summary: "Our team reviews your enquiry and calls you with a firm price.",
    body: "Within the hour during business hours, one of our buyers will phone you with a clear, fixed offer. There's no haggling. No part-exchange games. No dealer markup eating your money. The number we agree is the number that lands in your account.",
    bullets: [
      "Real human review, not just an algorithm",
      "Offer usually within the hour",
      "No fees, no deductions, no surprises",
    ],
  },
  {
    number: "04",
    title: "We collect, you get paid",
    summary: "Free collection from your door — money the same day.",
    body: "If you accept, we book a free collection at a time that suits you, anywhere in mainland UK. Our driver completes a quick on-the-spot inspection, handles all the paperwork (including the DVLA V5C transfer), and pays you by faster payments bank transfer before they leave your driveway.",
    bullets: [
      "Collection within 24–48 hours",
      "Free collection anywhere in mainland UK",
      "Money in your account the same day",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From reg plate to bank transfer in under 24 hours"
        subtitle="Selling your car with us is built around four simple steps. No paperwork. No back-and-forth. No surprise deductions when the driver arrives."
        breadcrumbs={[{ label: "How It Works", href: "/how-it-works" }]}
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {detailedSteps.map((step) => (
            <article
              key={step.number}
              className="grid sm:grid-cols-[100px_1fr] gap-6 sm:gap-10 items-start"
            >
              <div className="flex items-center sm:flex-col gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand text-white flex items-center justify-center text-2xl sm:text-3xl font-extrabold shadow-lg shadow-brand/20">
                  {step.number}
                </div>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
                  {step.title}
                </h2>
                <p className="text-base sm:text-lg text-brand font-medium mb-4">
                  {step.summary}
                </p>
                <p className="text-slate-600 leading-relaxed mb-5">
                  {step.body}
                </p>
                <ul className="space-y-2">
                  {step.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-slate-700"
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
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* What you'll need */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">
              Before collection day
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              What you&apos;ll need on the day
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We&apos;ll handle the paperwork — but please have these ready when
              our driver arrives.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "V5C log book",
                desc: "The full document, in your name. If it's missing, let us know in advance — we can still buy your car.",
              },
              {
                title: "Both sets of keys",
                desc: "If you only have one set, that's fine — but mention it on the call.",
              },
              {
                title: "Service history",
                desc: "Paper book, digital records or main dealer printouts — anything we can use to verify the history.",
              },
              {
                title: "Photo ID",
                desc: "Driving licence or passport — required to comply with anti-money-laundering checks.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-5 ring-1 ring-slate-200/60"
              >
                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Ready to start? Get your free valuation." />
    </>
  );
}
