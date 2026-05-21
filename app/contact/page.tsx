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
