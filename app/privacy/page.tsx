import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How we collect, use and protect your personal data when you use SellMyCar.co.uk.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How we collect, use and protect your personal data. Last updated: January 2026."
        breadcrumbs={[{ label: "Privacy", href: "/privacy" }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-styles">
          <div className="space-y-8 text-slate-700 leading-relaxed">
            <p className="text-sm text-slate-500 italic">
              Template policy — please review with a UK-qualified solicitor
              before going live.
            </p>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                1. Who we are
              </h2>
              <p>
                SellMyCar.co.uk (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;)
                is the data controller of any personal information you provide
                through this website. Our registered office is in the United
                Kingdom.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                2. What we collect
              </h2>
              <p className="mb-3">
                When you request a valuation we collect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your vehicle registration plate</li>
                <li>Vehicle details returned by the DVLA</li>
                <li>Your name, phone number and email address</li>
                <li>Information about your car&apos;s mileage and condition</li>
                <li>Your postcode (for collection purposes)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                3. How we use your data
              </h2>
              <p className="mb-3">We use the information you provide to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Generate a valuation for your vehicle</li>
                <li>Contact you with our offer</li>
                <li>Arrange collection if you accept</li>
                <li>
                  Comply with our legal obligations (anti-money-laundering, DVLA
                  reporting)
                </li>
              </ul>
              <p className="mt-3">
                We do not sell, rent or trade your personal data to any third
                party for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                4. How long we keep it
              </h2>
              <p>
                We keep enquiry data for 12 months from your last interaction.
                Transaction records (where we&apos;ve bought your car) are kept
                for 7 years to meet our HMRC and DVLA obligations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                5. Your rights
              </h2>
              <p>
                Under UK GDPR you have the right to access, correct, delete or
                restrict our use of your personal data. To exercise any of these
                rights, email us at{" "}
                <a href="/contact" className="text-brand font-semibold">
                  our contact page
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                6. Cookies
              </h2>
              <p>
                See our{" "}
                <a href="/cookies" className="text-brand font-semibold">
                  Cookie Policy
                </a>{" "}
                for details on the cookies we use and how to control them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                7. Contact
              </h2>
              <p>
                Any questions about this policy or how we handle your data,
                please{" "}
                <a href="/contact" className="text-brand font-semibold">
                  contact us
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
