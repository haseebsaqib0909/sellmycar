function StepIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center text-brand mb-6 mx-auto shadow-sm ring-1 ring-brand/10">
      {children}
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: "Enter your reg",
    description:
      "Type your number plate and we pull your vehicle details from the DVLA in seconds — no forms, no waiting.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Confirm your car",
    description:
      "Tell us your mileage and a few quick details, then leave your contact info. The whole thing takes under a minute.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Get paid the same day",
    description:
      "Accept our offer, we collect your car for free from your driveway, and the money is in your bank by sundown.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 text-balance tracking-tight">
            Sell your car in three simple steps
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From reg plate to bank transfer in under 24 hours. No paperwork, no surprise fees,
            no time wasters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Dotted connector line between steps (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px border-t-2 border-dashed border-slate-200"
          ></div>

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white text-center"
            >
              <StepIcon>{step.icon}</StepIcon>
              <span className="inline-block text-xs font-bold tracking-widest text-brand/70 uppercase mb-2">
                Step {step.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
