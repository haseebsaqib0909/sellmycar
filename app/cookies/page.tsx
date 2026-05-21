import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How SellMyCar.co.uk uses cookies and similar technologies — and how you can control them.",
  alternates: { canonical: "/cookies" },
};

const cookies = [
  {
    name: "Essential cookies",
    purpose:
      "Make the site work — session management, form submission, security. These cannot be turned off.",
    duration: "Session or up to 1 year",
  },
  {
    name: "Analytics cookies",
    purpose:
      "Help us understand which pages are popular and where visitors come from. Aggregated and anonymous.",
    duration: "Up to 2 years",
  },
  {
    name: "Marketing cookies",
    purpose:
      "Used to measure the effectiveness of our advertising on platforms like Google and Meta. Only set if you consent.",
    duration: "Up to 1 year",
  },
];

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle="How we use cookies and similar technologies, and how you can control them. Last updated: January 2026."
        breadcrumbs={[{ label: "Cookies", href: "/cookies" }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-slate-700 leading-relaxed">
            <p className="text-sm text-slate-500 italic">
              Template policy — please review with a UK-qualified solicitor
              before going live.
            </p>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                What cookies are
              </h2>
              <p>
                Cookies are small text files stored on your device when you
                visit a website. They&apos;re used to remember your preferences,
                keep you signed in, and help website owners understand how
                their site is being used.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                The cookies we use
              </h2>
              <div className="space-y-4">
                {cookies.map((c) => (
                  <div
                    key={c.name}
                    className="bg-slate-50 rounded-xl p-5 ring-1 ring-slate-200/60"
                  >
                    <h3 className="font-bold text-slate-900 mb-1">{c.name}</h3>
                    <p className="text-sm text-slate-600 mb-2">{c.purpose}</p>
                    <p className="text-xs text-slate-500">
                      Duration: {c.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                Managing your cookies
              </h2>
              <p>
                You can control cookies through your browser settings — most
                browsers let you block or delete cookies. Blocking essential
                cookies may stop parts of the site working properly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
