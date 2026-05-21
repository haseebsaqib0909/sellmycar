import Link from "next/link";

interface Crumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://sellmycar.co.uk";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        item: `${siteUrl}${item.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center text-sm text-slate-500"
      >
        <Link href="/" className="hover:text-brand transition-colors">
          Home
        </Link>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={item.href} className="flex items-center">
              <svg
                className="w-4 h-4 mx-2 text-slate-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              {isLast ? (
                <span className="text-slate-700 font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-brand transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
