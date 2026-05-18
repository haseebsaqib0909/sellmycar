import Image from "next/image";
import Link from "next/link";

export default function BillboardCTA() {
  return (
    <section className="relative overflow-hidden bg-brand">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/95 to-brand/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-5">
            Why drivers switched
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 text-balance">
            It&apos;s not a dealer trick.
            <br />
            It&apos;s a fairer way to sell.
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
            No haggling, no part-exchange games, no dealer markups eating your money.
            Just one fair offer, paid in full, the same day we collect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#lookup"
              className="inline-flex items-center justify-center px-7 py-4 bg-white hover:bg-slate-100 text-brand font-bold rounded-md transition-colors duration-200 shadow-lg shadow-black/20"
            >
              Get my free valuation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center px-7 py-4 bg-transparent text-white font-semibold rounded-md border-2 border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            >
              See how it works
            </Link>
          </div>

          {/* Stat strip */}
          <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl pt-10 border-t border-white/15">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-white leading-none">£0</p>
              <p className="text-sm text-white/70 mt-2 leading-tight">Hidden fees</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-white leading-none">24h</p>
              <p className="text-sm text-white/70 mt-2 leading-tight">Avg. payout time</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-white leading-none">250k+</p>
              <p className="text-sm text-white/70 mt-2 leading-tight">Cars bought to date</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
