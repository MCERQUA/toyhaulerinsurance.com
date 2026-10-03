import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { CoverageBreakdown } from "@/components/sections/CoverageBreakdown";
import { Stats } from "@/components/sections/Stats";
import { BlogCards } from "@/components/sections/BlogCards";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { Footer } from "@/components/sections/Footer";
import { SITE, FAQS } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} | RV & Trailer Coverage | Free Quote | ${SITE.phone}`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} | RV & Trailer Coverage | Free Quote | ${SITE.phone}`,
    description: SITE.description,
    url: SITE.url,
    images: [{ url: `${SITE.url}/images/og-image.jpg`, width: 1024, height: 1024 }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <ProblemSection />
        <WhyChooseUs />
        <Process />
        <CoverageBreakdown />
        <Stats />
        <BlogCards />
        <FAQ />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
