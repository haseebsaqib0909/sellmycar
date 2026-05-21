import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Blog | Car Selling Guides & Tips",
  description:
    "Practical guides for UK drivers thinking about selling — valuation tips, paperwork checklists, finance settlement explainers and more.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "how-much-is-my-car-worth",
    title: "How much is my car worth in 2026?",
    excerpt:
      "A plain-English guide to how UK car valuations actually work — what affects price, why dealers and online buyers differ, and how to read a market estimate.",
    category: "Valuation",
    readTime: "6 min read",
  },
  {
    slug: "sell-or-trade-in",
    title: "Sell my car or trade it in — which is better?",
    excerpt:
      "Trade-in is fast but usually costs you money. We break down when part-exchange is the right call and when a private sale or buying service wins.",
    category: "Selling tips",
    readTime: "5 min read",
  },
  {
    slug: "documents-to-sell-a-car",
    title: "What documents do I need to sell my car?",
    excerpt:
      "V5C, service history, ID, finance settlement letters — exactly which papers you need, and what to do if any are missing.",
    category: "Paperwork",
    readTime: "4 min read",
  },
  {
    slug: "selling-with-outstanding-finance",
    title: "How to sell a car with outstanding finance",
    excerpt:
      "PCP, HP, lease — what the rules are, how to settle early, and how a buying service can handle the lender call for you.",
    category: "Finance",
    readTime: "7 min read",
  },
  {
    slug: "private-vs-dealer-vs-buying-service",
    title: "Sell my car privately, to a dealer, or to a buying service?",
    excerpt:
      "An honest comparison of the three routes — what you'll get paid, how long it'll take, and which way carries the most risk.",
    category: "Selling tips",
    readTime: "8 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides & advice"
        title="Car selling guides for UK drivers"
        subtitle="Honest, practical guides written by our team of car buyers. No fluff, no SEO filler — just the answers we'd give our own family."
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl ring-1 ring-slate-200/60 hover:ring-brand/30 hover:shadow-md transition-all"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-2.5 py-1 bg-brand-light text-brand text-xs font-bold uppercase tracking-wider rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-brand transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-hover"
                  >
                    Read the guide
                    <svg
                      className="w-4 h-4 ml-1.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <CTABand title="Ready to skip ahead? Get your valuation." />
    </>
  );
}
