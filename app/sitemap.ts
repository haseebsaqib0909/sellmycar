import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sellmycar.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1.0, frequency: "weekly" as const },
    { path: "/how-it-works", priority: 0.8, frequency: "monthly" as const },
    { path: "/sell-my-car", priority: 0.9, frequency: "monthly" as const },
    { path: "/faq", priority: 0.7, frequency: "monthly" as const },
    { path: "/about", priority: 0.6, frequency: "monthly" as const },
    { path: "/contact", priority: 0.6, frequency: "monthly" as const },
    { path: "/blog", priority: 0.7, frequency: "weekly" as const },
    { path: "/privacy", priority: 0.3, frequency: "yearly" as const },
    { path: "/terms", priority: 0.3, frequency: "yearly" as const },
    { path: "/cookies", priority: 0.3, frequency: "yearly" as const },
  ];

  const carMakePages = [
    "bmw",
    "audi",
    "ford",
    "vauxhall",
    "mercedes",
  ].map((make) => ({
    path: `/sell-my-${make}`,
    priority: 0.7,
    frequency: "monthly" as const,
  }));

  const locationPages = [
    "london",
    "manchester",
    "birmingham",
    "leeds",
    "glasgow",
  ].map((city) => ({
    path: `/sell-my-car-${city}`,
    priority: 0.7,
    frequency: "monthly" as const,
  }));

  return [...staticPages, ...carMakePages, ...locationPages].map(
    ({ path, priority, frequency }) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: frequency,
      priority,
    })
  );
}
