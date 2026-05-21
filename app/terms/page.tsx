import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing your use of SellMyCar.co.uk and any car buying transaction with us.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="The terms that govern your use of SellMyCar.co.uk and any sale of a vehicle to us. Last updated: January 2026."
        breadcrumbs={[{ label: "Terms", href: "/terms" }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-slate-700 leading-relaxed">
            <p className="text-sm text-slate-500 italic">
              Template terms — please review with a UK-qualified solicitor
              before going live.
            </p>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                1. About these terms
              </h2>
              <p>
                These terms apply to your use of SellMyCar.co.uk and to any
                transaction in which we agree to purchase a vehicle from you.
                By using this site or submitting an enquiry you agree to be
                bound by them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                2. Valuations
              </h2>
              <p>
                Any valuation we provide is based on the information you give
                us and on current market conditions. It is an offer to buy your
                vehicle subject to a physical inspection at collection and is
                valid for 7 days from the date issued.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                3. Your obligations
              </h2>
              <p className="mb-3">You confirm that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are the registered keeper, or are authorised to sell the vehicle on the registered keeper&apos;s behalf</li>
                <li>The vehicle is not subject to any undisclosed finance, charge or claim</li>
                <li>The description you have provided is accurate and complete</li>
                <li>The vehicle has not been written off, stolen, or had its mileage misrepresented</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                4. Collection and payment
              </h2>
              <p>
                On collection, our driver will inspect the vehicle to confirm
                it matches your description. If material discrepancies are
                identified, we may revise the offer or decline to complete the
                purchase. Payment is made by Faster Payments bank transfer on
                completion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                5. Cancellation
              </h2>
              <p>
                You may cancel a pending collection at any time before our
                driver arrives, free of charge. Once the inspection is complete
                and payment is initiated, the sale is binding.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                6. Liability
              </h2>
              <p>
                Nothing in these terms limits our liability for fraud or for
                death or personal injury caused by our negligence. Subject to
                that, our total liability under any sale is limited to the
                purchase price paid for the vehicle.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                7. Governing law
              </h2>
              <p>
                These terms are governed by the law of England and Wales. Any
                disputes will be subject to the exclusive jurisdiction of the
                English courts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
