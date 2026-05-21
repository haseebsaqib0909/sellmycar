import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { blogPosts, getAllSlugs, getPostBySlug } from "@/lib/blog-posts";

interface BlogPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://sellmycar.co.uk";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "SellMyCar",
      url: siteUrl,
    },
    datePublished: post.date,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      {/* Article meta strip */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
          <span>By {post.author}</span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300"></span>
          <span>{post.date}</span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300"></span>
          <span>{post.readTime}</span>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-2 mt-4">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <svg
                          className="w-5 h-5 text-brand shrink-0 mt-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Keep reading
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedPosts.map((p) => (
              <article
                key={p.slug}
                className="bg-white rounded-2xl p-6 ring-1 ring-slate-200/60 hover:ring-brand/30 hover:shadow-md transition-all"
              >
                <span className="inline-block px-2.5 py-1 bg-brand-light text-brand text-xs font-bold uppercase tracking-wider rounded mb-3">
                  {p.category}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 leading-tight">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="hover:text-brand transition-colors"
                  >
                    {p.title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                  {p.excerpt}
                </p>
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-sm font-semibold text-brand hover:text-brand-hover"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Stop reading. Start selling."
        subtitle="Get a free valuation for your car in 60 seconds."
      />
    </>
  );
}
