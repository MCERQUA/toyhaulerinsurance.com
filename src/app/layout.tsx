import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SITE } from "@/lib/site";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/og-image.jpg", width: 1024, height: 1024 }],
  },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "InsuranceAgency"],
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  foundingDate: SITE.founded.toString(),
  areaServed: "US",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: SITE.address.country,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  identifier: {
    "@type": "PropertyValue",
    name: "NPN",
    value: SITE.npn,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Toy Hauler Insurance Coverage Options",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fifth Wheel Toy Hauler Insurance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Travel Trailer Toy Hauler Insurance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Toy Hauler Contents & Garage Coverage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ATV, UTV & Motorcycle Coverage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full-Timer Toy Hauler Insurance" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
