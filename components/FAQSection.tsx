"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does the valuation work?",
    answer:
      "You enter your reg plate, we pull your vehicle details from the DVLA in seconds, and our team reviews the information you provide before calling you with a firm offer — usually within the hour during business hours.",
  },
  {
    question: "Is there a fee to sell my car?",
    answer:
      "No. The price we agree is the price you receive. No admin fees, no collection charges, no surprise deductions — that's not how we work.",
  },
  {
    question: "What documents do I need?",
    answer:
      "Your V5C (logbook), service history if you have it, both sets of keys if available, and proof of identity. Don't worry if anything is missing — we'll talk you through it on the call.",
  },
  {
    question: "Will you buy my car if it has finance on it?",
    answer:
      "Yes. We routinely buy cars with outstanding finance. We'll settle the finance balance directly with your lender and pay you the difference, all on the same day.",
  },
  {
    question: "How quickly can you collect the car?",
    answer:
      "In most cases we can collect within 24 to 48 hours of you accepting the offer, anywhere in mainland UK. Collection is always free.",
  },
  {
    question: "When do I get paid?",
    answer:
      "Payment is sent by bank transfer the same day the car is collected. The money typically lands in your account before the driver leaves your driveway.",
  },
  {
    question: "Do you buy cars with MOT failures or damage?",
    answer:
      "Yes — we buy cars in any condition, including non-runners, MOT failures, accident damage and high-mileage cars. Be honest about the condition and we'll give you a fair offer.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-brand transition-transform duration-300 shrink-0 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">
            Got questions?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 text-balance tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Everything you need to know before you sell. Can&apos;t see your question?{" "}
            <a href="/contact" className="text-brand font-semibold hover:underline">
              Drop us a message.
            </a>
          </p>
        </div>

        <div className="divide-y divide-slate-200 rounded-2xl ring-1 ring-slate-200/60 bg-white overflow-hidden shadow-sm">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="bg-white">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 sm:px-8 py-5 sm:py-6 hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 sm:px-8 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
