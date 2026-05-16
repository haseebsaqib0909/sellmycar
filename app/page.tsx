import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sell My Car | Free Instant Valuation — Get Paid Today",
  description:
    "Sell your car fast and get paid the same day. Enter your reg plate for a free instant valuation. Trusted UK car buyers — no fees, free collection.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24 bg-white">
      <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-4">
        Coming soon
      </p>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 max-w-2xl leading-tight">
        Sell your car for more
      </h1>
      <p className="text-lg sm:text-xl text-slate-500 mb-10 max-w-xl">
        Enter your reg plate and get a free instant valuation. No fees, free
        collection, same day payment.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="#lookup"
          className="inline-flex items-center justify-center px-8 py-4 bg-brand hover:bg-brand-hover text-white text-base font-semibold rounded-lg transition-colors duration-200"
        >
          Get a Valuation
        </Link>
        <Link
          href="/how-it-works"
          className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 hover:border-brand text-slate-700 hover:text-brand text-base font-semibold rounded-lg transition-colors duration-200"
        >
          How it works
        </Link>
      </div>
    </div>
  );
}
