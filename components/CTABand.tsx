import RegPlateInput from "./RegPlateInput";

interface CTABandProps {
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
}

export default function CTABand({
  title = "Ready to sell your car?",
  subtitle = "Enter your reg for a free instant valuation. No fees, free collection, same day payment.",
  variant = "light",
}: CTABandProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`${
        isDark ? "bg-brand" : "bg-slate-50"
      } py-16 sm:py-20 lg:py-24`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-5 leading-tight tracking-tight text-balance ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed ${
            isDark ? "text-white/80" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>

        <RegPlateInput size="default" />

        <div
          className={`mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm ${
            isDark ? "text-white/70" : "text-slate-600"
          }`}
        >
          <span className="flex items-center gap-1.5">
            <svg
              className={`w-4 h-4 ${
                isDark ? "text-white" : "text-emerald-500"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            No fees
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className={`w-4 h-4 ${
                isDark ? "text-white" : "text-emerald-500"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Free collection
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className={`w-4 h-4 ${
                isDark ? "text-white" : "text-emerald-500"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Same day payment
          </span>
        </div>
      </div>
    </section>
  );
}
