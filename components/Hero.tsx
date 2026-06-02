import Image from "next/image";
import RegPlateInput from "./RegPlateInput";

function StarIcon() {
  return (
    <svg
      className="w-5 h-5 text-amber-400"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left column: copy + reg input */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 sm:mb-6 rounded-full bg-brand-light border border-brand/10 text-[11px] sm:text-xs font-semibold text-brand uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              UK&apos;s most trusted car buyers
            </div>

            <h1 className="font-display text-[2.25rem] leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-slate-900 tracking-tight mb-4 sm:mb-5 text-balance">
              Sell your car for{" "}
              <span className="relative inline-block text-brand">
                more
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 100 6"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 4.5C20 1.5 50 1.5 99 4.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              , today.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-7 sm:mb-9 max-w-xl lg:mx-0 mx-auto leading-relaxed">
              Free instant valuation. Free home collection. Money in your bank
              the same day — no fees, no haggling.
            </p>

            {/* Reg plate input */}
            <div id="lookup" className="scroll-mt-24">
              <RegPlateInput size="large" />
            </div>

            {/* Trust line */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-5 text-sm text-slate-600">
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
              <span className="text-slate-600 text-xs sm:text-sm">
                Rated <span className="font-semibold text-slate-900">Excellent</span>{" "}
                from <span className="font-semibold text-slate-900">18,432</span> reviews
              </span>
            </div>
          </div>

          {/* Right column: hero car image */}
          <div className="relative px-2 sm:px-0">
            <div className="relative aspect-[5/4] w-full max-w-xl mx-auto">
              {/* Backdrop card */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-brand to-brand-hover rounded-3xl rotate-2 opacity-10"></div>

              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-card ring-1 ring-slate-900/5">
                <Image
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80"
                  alt="Premium car ready to be sold for cash"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                  priority
                />

                {/* Floating cards — INSIDE the image on mobile to prevent overflow */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 lg:-bottom-6 lg:-left-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-soft ring-1 ring-slate-900/5 p-3 sm:p-4 lg:p-5 max-w-[180px] sm:max-w-[210px]">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs text-slate-500 leading-tight">
                        Avg. payout time
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg font-extrabold text-slate-900 leading-tight">
                        Same day
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:-top-4 lg:-right-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-soft ring-1 ring-slate-900/5 p-3 sm:p-4 lg:p-5 max-w-[170px] sm:max-w-[200px]">
                  <p className="text-[10px] sm:text-xs text-slate-500 leading-tight mb-0.5 sm:mb-1">
                    Latest sale
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    2022 BMW 3 Series
                  </p>
                  <p className="text-base sm:text-xl lg:text-2xl font-extrabold text-brand mt-1 leading-none">
                    £24,850
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
