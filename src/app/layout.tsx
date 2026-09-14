import type { Metadata } from "next";
import { Inter, Noto_Sans_Sinhala } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { site } from "@/data/site";
import { createPageMetadata, siteUrl } from "@/lib/seo";

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
    title: "Gomez Hospital Avissawella | Private Healthcare & Medical Services",
    description:
      "Gomez Hospital in Avissawella provides trusted private healthcare, specialist consultations, laboratory, pharmacy, emergency, diagnostic and inpatient services.",
    path: "/",
  }),
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
  openingHours: "Mo-Su 00:00-23:59",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.ambulancePhone,
      contactType: "emergency",
      availableLanguage: ["English", "Sinhala"],
    },
    ...site.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "customer service",
      availableLanguage: ["English", "Sinhala"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(hospitalJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <div className="sticky top-0 z-50 flex flex-col w-full">
          <TopBar />
          <Header />
        </div>
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
