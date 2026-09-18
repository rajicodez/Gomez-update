import type { Metadata } from "next";
import { Inter, Noto_Sans_Sinhala } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";
import { createPageMetadata, defaultTitle, defaultDescription, siteUrl } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const notoSansSinhala = Noto_Sans_Sinhala({
  variable: "--font-sinhala",
  subsets: ["sinhala"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  ...createPageMetadata({
    title: defaultTitle,
    description: defaultDescription,
    path: "/",
  }),
  title: { default: defaultTitle, template: "%s | Gomez Hospital Avissawella" },
  applicationName: "Gomez Hospital",
  keywords: [
    "Gomez Hospital",
    "Gomez Hospital Avissawella",
    "private hospital Avissawella",
    "healthcare Sri Lanka",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const hospitalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  "@id": `${site.url}/#hospital`,
  name: site.name,
  url: site.url,
  logo: new URL(site.logo, site.url).toString(),
  image: new URL("/images/2021-05-11.jpg", site.url).toString(),
  description:
    "Private hospital in Avissawella providing specialist consultations, laboratory, pharmacy, emergency, diagnostic and inpatient services.",
  foundingDate: site.established,
  email: site.email,
  telephone: site.phones[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.63, Colombo Road",
    addressLocality: "Avissawella",
    addressCountry: "LK",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.ambulancePhone,
      contactType: "emergency",
    },
    ...site.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "customer service",
    })),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansSinhala.variable}`}>
      <body
        className="min-h-screen flex flex-col bg-white text-foreground pb-14 md:pb-0"
        suppressHydrationWarning
      >
        <JsonLd data={{
          "@context": "https://schema.org",
          "@graph": [hospitalJsonLd, {
            "@type": "WebSite", "@id": site.url + "/#website",
            url: site.url, name: site.name, inLanguage: "en",
            publisher: { "@id": hospitalJsonLd["@id"] },
          }],
        }} />
        <StickyHeader />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileBottomBar />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
