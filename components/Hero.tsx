import Image from "next/image";
import RegPlateInput from "./RegPlateInput";

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? "text-amber-400" : "text-slate-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative background accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-br from-brand-light/40 to-transparent rounded-bl-[100px]"></div>
        <svg
          className="absolute -bottom-10 -left-10 w-72 h-72 text-brand-light/30"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <circle cx="100" cy="100" r="100" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left column: copy + reg input */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-brand-light border border-brand/10 text-xs font-semibold text-brand uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              UK&apos;s most trusted car buyers
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-5 text-balance">
              Sell your car for{" "}
              <span className="text-brand">more</span>, today.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl lg:mx-0 mx-auto leading-relaxed">
              Get a free instant valuation, free home collection, and the money in your account
              the same day. No fees, no haggling.
            </p>

            {/* Reg plate input */}
            <div id="lookup" className="scroll-mt-24">
              <RegPlateInput size="large" />
            </div>

            {/* Trust line */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="flex">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <span className="font-bold text-slate-900">4.8 / 5</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-300"></div>
              <span className="text-slate-600">
                Rated <span className="font-semibold text-slate-900">Excellent</span> from{" "}
                <span className="font-semibold text-slate-900">18,432</span> reviews
              </span>
            </div>
          </div>

          {/* Right column: hero car image */}
          <div className="relative">
            <div className="relative aspect-[5/4] w-full max-w-xl mx-auto">
              {/* Backdrop card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand to-brand-hover rounded-3xl rotate-2 opacity-10"></div>
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-brand/10 ring-1 ring-slate-900/5">
                <Image
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80"
                  alt="Premium car ready to be sold for cash"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-white rounded-2xl shadow-xl ring-1 ring-slate-900/5 p-4 sm:p-5 max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 leading-tight">Avg. payout time</p>
                    <p className="text-lg font-extrabold text-slate-900 leading-tight">
                      Same day
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating price card */}
              <div className="absolute -top-4 -right-2 sm:-right-6 bg-white rounded-2xl shadow-xl ring-1 ring-slate-900/5 p-4 sm:p-5 max-w-[220px]">
                <p className="text-xs text-slate-500 leading-tight mb-1">Latest sale</p>
                <p className="text-base font-bold text-slate-900 leading-tight">2022 BMW 3 Series</p>
                <p className="text-2xl font-extrabold text-brand mt-1">£24,850</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
