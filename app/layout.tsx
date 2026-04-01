import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "McLaughlin Contracting LLC | Roofing & Siding | Hawley, PA",
  description:
    "Family-owned roofing contractor serving The Poconos since 1957. 68+ years of excellence. Roof replacement, repair, siding, gutters. Lifetime warranty. Free estimates. PA Lic #025665.",
  keywords: [
    "roofing contractor Hawley PA",
    "Poconos roofer",
    "roof replacement Poconos",
    "roof repair Hawley PA",
    "McLaughlin Contracting",
    "siding contractor PA",
    "gutter installation Poconos",
    "skylight installation PA",
    "licensed roofer Pennsylvania",
  ],
  openGraph: {
    title: "McLaughlin Contracting LLC | Trusted Poconos Roofers Since 1957",
    description:
      "68+ years of roofing excellence. Family-owned & operated. Lifetime shingle warranty. 10-year workmanship guarantee. Free estimates.",
    type: "website",
    locale: "en_US",
    url: "https://www.mclaughlincontractingllc.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.mclaughlincontractingllc.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              name: "McLaughlin Contracting LLC",
              image: "https://www.mclaughlincontractingllc.com/og-image.jpg",
              telephone: "+15702032754",
              email: "rick5040@yahoo.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "110 Hummingbird Lane",
                addressLocality: "Tafton",
                addressRegion: "PA",
                postalCode: "18464",
                addressCountry: "US",
              },
              url: "https://www.mclaughlincontractingllc.com",
              foundingDate: "1957",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 41.417,
                  longitude: -75.263,
                },
                geoRadius: "50000",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "06:00",
                closes: "18:00",
              },
              priceRange: "$$",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "What are my options if I decide to re-roof?", acceptedAnswer: { "@type": "Answer", text: "We offer various shingle types, colors, and warranty options from top brands like GAF, CertainTeed, TAMKO, and Owens Corning. We'll inspect your roof and develop a tailored plan that meets your specific needs, preferences, and budget." } },
                { "@type": "Question", name: "What types of roofing materials should I choose?", acceptedAnswer: { "@type": "Answer", text: "The ideal material depends on your home's architecture, local climate, and personal preferences. We install fiberglass, metal, wood shake, and slate roofing systems." } },
                { "@type": "Question", name: "How can I tell if my roof has problems?", acceptedAnswer: { "@type": "Answer", text: "Look for curling, cracked, or missing shingles, granule loss, bald spots, and wear around chimneys and vents. Roofs over 20 years old should be evaluated for replacement." } },
                { "@type": "Question", name: "How much will a new roof cost?", acceptedAnswer: { "@type": "Answer", text: "Pricing depends on your roof's size, pitch, and chosen shingle type. Contact us at (570) 203-2754 for a free, comprehensive quote — we beat any reasonable written estimate." } },
                { "@type": "Question", name: "How can I tell from the ground if I have hail damage?", acceptedAnswer: { "@type": "Answer", text: "Identifying hail damage from ground level is challenging. We offer complimentary inspections and can thoroughly evaluate potential hail damage and help with insurance claims." } },
                { "@type": "Question", name: "If my siding looks like it's rotting, do I need to replace it?", acceptedAnswer: { "@type": "Answer", text: "Deteriorating siding should be addressed promptly. Our team specializes in both roofing and siding services using premium brands like James Hardie, Everlast, and Mastic." } },
                { "@type": "Question", name: "What types of roofing do you do?", acceptedAnswer: { "@type": "Answer", text: "We offer installation and repair services for fiberglass, metal, wood shake, and slate roofing systems — both residential and commercial." } },
                { "@type": "Question", name: "What roofing damage is covered under a warranty?", acceptedAnswer: { "@type": "Answer", text: "Coverage varies by manufacturer, but typically includes defects like excessive granule loss or improperly sealed shingles. We offer a lifetime shingle warranty and a 10-year workmanship guarantee." } },
                { "@type": "Question", name: "Can a heavy snowstorm damage my roof?", acceptedAnswer: { "@type": "Answer", text: "Heavy snow may not directly damage a well-maintained roof, but it can lead to leaks caused by ice damming — a common issue in The Poconos." } },
                { "@type": "Question", name: "What is the longest lasting roofing material?", acceptedAnswer: { "@type": "Answer", text: "Metal roofing typically offers the longest lifespan — 50 years or more with proper maintenance. Metal roofs are also highly sustainable, with nearly 100% recyclability." } },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ScrollProgress className="fixed top-0 z-50 h-[2px] bg-primary" />
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "oklch(0.14 0.008 260)",
                border: "1px solid oklch(0.25 0.005 260)",
                color: "oklch(0.94 0.005 80)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
