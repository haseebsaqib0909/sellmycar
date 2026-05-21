import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About Us | UK Car Buyers You Can Trust",
  description:
    "Find out who we are. A UK car buying service built by drivers, for drivers — no fees, no haggling, just a fair offer and same day payment.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "No haggling",
    body: "The price we quote is the price you receive. No surprise deductions when our driver arrives.",
  },
  {
    title: "No hidden fees",
    body: "We don't charge for valuations, collection or paperwork. Ever.",
  },
  {
    title: "Real humans",
    body: "Every offer is reviewed by a real buyer, not just an algorithm. Call us — we'll pick up.",
  },
  {
    title: "Fast payment",
    body: "Same day bank transfer on collection. The money is in your account before our driver leaves your driveway.",
  },
];

const milestones = [
  { year: "2019", text: "Founded by a small team of ex-dealership buyers fed up with the industry standard" },
  { year: "2021", text: "10,000 cars bought and £100m paid out to UK sellers" },
  { year: "2023", text: "Free home collection rolled out to every UK mainland postcode" },
  { year: "2025", text: "250,000+ cars bought, rated 4.8 / 5 across 18,000+ reviews" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built by drivers, for drivers"
        subtitle="We started because selling a car in the UK is broken. Dealers lowball you. Online classifieds attract time wasters and scammers. So we built the alternative — and 250,000 sellers have used it since."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Story */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Our story
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              SellMyCar was founded in 2019 by a small team of former dealership
              buyers who&apos;d watched too many drivers get a bad deal. Trade-in
              prices were systematically below market. Private sale was painful
              and risky. The big online buyers were quick — but their final
              offers often arrived with the driver, not over the phone.
            </p>
            <p>
              We built the service we&apos;d want to use ourselves. A clean reg
              plate lookup. A real human on the phone within the hour. A firm,
              fair offer with no last-minute deductions. Free collection from
              your door. Same-day payment by bank transfer.
            </p>
            <p>
              Six years later, more than 250,000 UK drivers have sold their car
              with us. Our average rating across Trustpilot, Google and AutoTrader
              is 4.8 / 5. Around 80% of new sellers come from word-of-mouth.
            </p>
            <p>
              We&apos;re still a small team — under 50 buyers, support staff and
              drivers — and we like it that way. It means you talk to the same
              person from offer to collection, and our average response time
              stays measured in minutes, not days.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">
              What we stand for
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Four promises we never break
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-6 ring-1 ring-slate-200/60"
              >
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">
              Our journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              From day one to 250,000 cars
            </h2>
          </div>
          <div className="space-y-6">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="flex gap-5 sm:gap-8 items-start pb-6 border-b border-slate-100 last:border-0"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-brand min-w-[80px]">
                  {m.year}
                </div>
                <p className="text-slate-700 leading-relaxed pt-1">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Want to sell your car the right way?" />
    </>
  );
}
