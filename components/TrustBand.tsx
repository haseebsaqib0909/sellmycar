const platforms = [
  { name: "Trustpilot", logo: "Trustpilot" },
  { name: "Google", logo: "Google" },
  { name: "AutoTrader", logo: "AutoTrader" },
  { name: "Reviews.io", logo: "Reviews.io" },
  { name: "Feefo", logo: "Feefo" },
];

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-emerald-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

export default function TrustBand() {
  return (
    <section className="bg-slate-50 border-y border-slate-200/60 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-3">
            <StarRow />
            <span className="text-sm font-bold text-slate-900">
              Rated Excellent
            </span>
          </div>
          <p className="text-sm text-slate-600 mb-8">
            Over <span className="font-bold text-slate-900">18,432</span> five-star reviews
            from sellers across the UK
          </p>

          {/* Platform logos */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="text-slate-400 font-bold text-base sm:text-lg tracking-tight grayscale opacity-70 hover:opacity-100 hover:text-slate-600 transition-all"
              >
                {p.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
