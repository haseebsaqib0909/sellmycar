import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import FAQContent, { type FAQCategory } from "./FAQContent";

export const metadata: Metadata = {
  title: "FAQ | Common Questions About Selling Your Car",
  description:
    "Answers to the most common questions about selling your car with us. Valuations, fees, paperwork, payment, collection — all covered.",
  alternates: { canonical: "/faq" },
};

const faqCategories: FAQCategory[] = [
  {
    title: "Getting a valuation",
    faqs: [
      {
        q: "How does the valuation work?",
        a: "You enter your reg plate, we pull your vehicle details from the DVLA in seconds, and one of our buyers reviews your enquiry and calls you with a firm offer — usually within the hour during business hours.",
      },
      {
        q: "Is the valuation really free?",
        a: "Yes. There is no charge for the valuation, no obligation to accept the offer, and we don't share your details with anyone outside our buying team.",
      },
      {
        q: "How accurate is the initial estimate?",
        a: "We base it on live market data, recent auction results and the condition you describe. The price we quote on the call is the price you'll receive — there are no surprise deductions when our driver arrives.",
      },
    ],
  },
  {
    title: "Fees and payment",
    faqs: [
      {
        q: "Is there a fee to sell my car?",
        a: "No. There are no fees of any kind. The price we agree is the price that lands in your account.",
      },
      {
        q: "When do I get paid?",
        a: "Payment is sent by Faster Payments bank transfer the moment our driver completes the collection inspection. The money typically clears in your account within minutes.",
      },
      {
        q: "How do you pay — bank transfer, cash, cheque?",
        a: "Bank transfer only. This is the safest payment method for both sides and means there's a clear paper trail for HMRC if you need one.",
      },
    ],
  },
  {
    title: "Paperwork and documents",
    faqs: [
      {
        q: "What documents do I need?",
        a: "Your V5C (logbook) in your name, both sets of keys if available, any service history records, and a photo ID (driving licence or passport) for anti-money-laundering checks.",
      },
      {
        q: "What if I've lost the V5C?",
        a: "You'll need to apply for a replacement from the DVLA before we can buy the car. It costs £25 and takes around 5 days. Let us know and we'll hold your offer.",
      },
      {
        q: "Do you handle the DVLA notification?",
        a: "Yes. Our driver completes the V5C transfer paperwork on the spot and we notify the DVLA on your behalf — you'll receive confirmation in the post within a few weeks.",
      },
    ],
  },
  {
    title: "Collection",
    faqs: [
      {
        q: "How quickly can you collect?",
        a: "In most cases within 24–48 hours of accepting the offer, anywhere in mainland UK.",
      },
      {
        q: "Is collection really free?",
        a: "Yes — collection is always included in the price. There is no separate fee or deduction for it.",
      },
      {
        q: "Will the driver inspect the car?",
        a: "Yes, briefly. The inspection confirms the description matches what you told us. As long as the car is as described, there are no price reductions.",
      },
    ],
  },
  {
    title: "Special situations",
    faqs: [
      {
        q: "Will you buy my car if it has finance on it?",
        a: "Yes. We routinely buy cars with outstanding finance. We'll settle your finance balance directly with your lender and pay you the difference, all on the same day.",
      },
      {
        q: "Do you buy non-runners or cars with damage?",
        a: "Yes — non-runners, MOT failures, accident damage, high-mileage cars and end-of-life vehicles. Be honest about the condition on the call and the price won't change at collection.",
      },
      {
        q: "Can I sell a car that isn't registered to me?",
        a: "Only if you have written permission from the registered keeper and they're available to sign the paperwork. If you've inherited the car, contact us first — there are extra steps but we can usually help.",
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = faqCategories.flatMap((c) => c.faqs);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="Frequently asked questions"
        title="Everything you need to know before you sell"
        subtitle="Straight answers to the questions sellers ask us most often. Can't see your question? Drop us a message — we usually reply within an hour."
        breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
      />

      <FAQContent categories={faqCategories} />

      <CTABand />
    </>
  );
}
