import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import Providers from "@/components/providers";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Gurumantra Education Consultancy — Best Study Abroad Consultancy in Nepal 2026",
    template: "%s | Gurumantra Education Consultancy",
  },
  description:
    "Nepal's premium study abroad consultancy. 2,000+ students placed in Australia, Canada, UK, USA, Germany, Japan & Ireland. 98% visa success rate. Free consultation in Kathmandu.",
  keywords: [
    "study abroad consultancy Nepal",
    "best consultancy in Kathmandu 2026",
    "study in Australia from Nepal",
    "study in Canada from Nepal",
    "study in UK from Nepal",
    "Nepal education consultancy",
    "IELTS preparation Kathmandu",
    "visa consultancy Nepal",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gurumantra.com.np",
    siteName: "Gurumantra Education Consultancy",
    title: "Gurumantra Education Consultancy — Best Study Abroad Consultancy in Nepal 2026",
    description:
      "Nepal's premium study abroad consultancy. 2,000+ students placed. 98% visa success rate. Free consultation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurumantra Education Consultancy — Best Study Abroad Consultancy Nepal",
    description: "2,000+ students placed. 98% visa success rate. Study in Australia, Canada, UK, USA, Germany, Japan & more.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
