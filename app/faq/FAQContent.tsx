"use client";

import { useState } from "react";
import Link from "next/link";

export interface FAQCategory {
  title: string;
  faqs: { q: string; a: string }[];
}

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
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function FAQContent({
  categories,
}: {
  categories: FAQCategory[];
}) {
  const [openId, setOpenId] = useState<string | null>("0-0");

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {categories.map((category, catIdx) => (
          <div key={category.title}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5 tracking-tight">
              {category.title}
            </h2>
            <div className="divide-y divide-slate-200 rounded-2xl ring-1 ring-slate-200/60 bg-white overflow-hidden shadow-sm">
              {category.faqs.map((faq, i) => {
                const id = `${catIdx}-${i}`;
                const isOpen = openId === id;
                return (
                  <div key={faq.q} className="bg-white">
                    <button
                      onClick={() => setOpenId(isOpen ? null : id)}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-7 py-5 hover:bg-slate-50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-bold text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronIcon open={isOpen} />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 sm:px-7 pb-5 text-slate-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="text-center pt-4">
          <p className="text-slate-600 mb-4">Still have a question?</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
