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
  title: "Gomez Hospital — Excellence in Healthcare Since 1986",
  description:
    "Gomez Hospital Pvt Ltd, the leading private healthcare provider in Avissawella and Seethawakapura. Over 30 years of trusted medical care, 40+ consultants, 24/7 emergency.",
  keywords: ["Gomez Hospital", "Avissawella", "Hanwella", "private hospital Sri Lanka"],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/images/gomez_logo.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
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
