import Breadcrumbs from "./Breadcrumbs";
import RegPlateInput from "./RegPlateInput";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href: string }[];
  showPlate?: boolean;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  showPlate = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/40 to-white border-b border-slate-100">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-light/30 to-transparent"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
        <div className="mb-6 sm:mb-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className="text-center sm:text-left max-w-3xl">
          {eyebrow && (
            <p className="text-xs sm:text-sm font-semibold text-brand uppercase tracking-widest mb-3 sm:mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-4 sm:mb-5 text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          )}

          {showPlate && (
            <div id="lookup" className="mt-8 sm:mt-10 scroll-mt-24">
              <RegPlateInput size="default" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
