import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RegPlateInput from "@/components/RegPlateInput";

export const metadata: Metadata = {
  title: "Contact Us | Talk to a Real Person",
  description:
    "Get in touch with our buying team. Free valuation in seconds, real humans on the phone within the hour, no chatbots. Open seven days a week.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Talk to a real person — usually within an hour"
        subtitle="Our buying team is in the office seven days a week, 8am to 8pm. No chatbots, no overseas call centres — just buyers who know the UK used market inside out."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Quick contact methods */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
                The fastest way to reach us
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Type your reg plate, send us your details, and one of our
                buyers will call you back — usually within the hour during
                business hours.
              </p>
              <div id="lookup" className="scroll-mt-24">
                <RegPlateInput size="default" />
              </div>

              {/* WhatsApp shortcut */}
              <a
                href="https://wa.me/447700900000?text=Hi%21%20I%27d%20like%20a%20free%20valuation%20for%20my%20car.%20My%20reg%20plate%20is%3A"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-between gap-4 p-4 sm:p-5 bg-[#25D366]/5 hover:bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl transition-colors group"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-bold text-slate-900">
                      Prefer to chat? Message us on WhatsApp.
                    </p>
                    <p className="text-sm text-slate-600">
                      Usually replied within 15 minutes.
                    </p>
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              <div className="mt-12 space-y-6">
                {[
                  {
                    title: "Opening hours",
                    body: "Monday to Friday: 8am – 8pm\nSaturday: 9am – 6pm\nSunday: 10am – 4pm",
                  },
                  {
                    title: "Response time",
                    body: "We aim to call every new enquiry within the hour during business hours, and within 90 minutes outside them.",
                  },
                  {
                    title: "Where we operate",
                    body: "We buy and collect cars from anywhere in mainland UK — England, Wales and Scotland. Northern Ireland coming soon.",
                  },
                ].map((c) => (
                  <div key={c.title}>
                    <h3 className="font-bold text-slate-900 mb-1">{c.title}</h3>
                    <p className="text-slate-600 whitespace-pre-line leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* General enquiry form placeholder */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 ring-1 ring-slate-200/60">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">
                Not selling? Send us a message
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                For press, partnerships, complaints or general questions.
              </p>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-brand focus:border-brand transition"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-brand focus:border-brand transition"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    What&apos;s this about?
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-brand focus:border-brand transition"
                  >
                    <option>General enquiry</option>
                    <option>Press / media</option>
                    <option>Partnership</option>
                    <option>Complaint</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-brand focus:border-brand transition resize-none"
                    placeholder="Tell us a bit about what you need…"
                  />
                </div>
                <button
                  type="button"
                  className="w-full px-6 py-3.5 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-colors"
                  disabled
                >
                  Send message
                </button>
                <p className="text-xs text-slate-500 text-center">
                  Form submission is wired up in the next release.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
