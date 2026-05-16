import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sellmycar.co.uk";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sell My Car | Free Instant Valuation — Get Paid Today",
    template: "%s | Sell My Car",
  },
  description:
    "Sell your car fast and get paid the same day. Enter your reg plate for a free instant valuation. Trusted UK car buyers — no fees, free collection.",
  keywords: [
    "sell my car",
    "car valuation",
    "sell car online",
    "we buy any car",
    "car buyers UK",
    "instant car valuation",
    "sell my car fast",
    "sell my car for cash",
  ],
  authors: [{ name: "Sell My Car" }],
  creator: "Sell My Car",
  publisher: "Sell My Car",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Sell My Car",
    title: "Sell My Car | Free Instant Valuation — Get Paid Today",
    description:
      "Sell your car fast and get paid the same day. Enter your reg plate for a free instant valuation. No fees, free collection.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sell My Car — Free Instant Valuation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell My Car | Free Instant Valuation — Get Paid Today",
    description:
      "Sell your car fast and get paid the same day. Free instant valuation, no fees.",
    images: ["/og-image.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sell My Car",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "UK car buying service — sell your car fast and get paid the same day.",
  areaServed: "GB",
  serviceType: "Car buying",
  sameAs: [
    "https://www.facebook.com/sellmycar",
    "https://twitter.com/sellmycar",
    "https://www.instagram.com/sellmycar",
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sell My Car",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?reg={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
