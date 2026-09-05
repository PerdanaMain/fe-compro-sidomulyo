import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { SITE_CONFIG } from "@/lib/config";
import { generateLocalBusinessSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "./"
  },
  title: {
    default: `${SITE_CONFIG.name} | Commercial Car Body Repair & Karoseri Sidoarjo`,
    template: `%s | ${SITE_CONFIG.name}`
  },
  description: SITE_CONFIG.description,
  keywords: [
    "karoseri sidoarjo",
    "bengkel truk sidoarjo",
    "commercial car body repair",
    "perbaikan bodi truk",
    "rekondisi kabin truk",
    "wingbox sidoarjo",
    "bengkel bodi truk surabaya",
    "pengecatan truk oven",
    "karoseri surabaya",
    "karoseri terdekat"
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.fullName,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.fullName
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.fullName,
    description: SITE_CONFIG.description,
    images: ["/images/hero-bg.png"]
  },
  icons: {
    icon: "/images/logo-footer.png",
    shortcut: "/images/logo-footer.png",
    apple: "/images/logo-footer.png"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generateLocalBusinessSchema();

  return (
    <html lang="id" className={`h-full ${inter.variable} ${barlowCondensed.variable}`}>
      <head>
        <link rel="icon" href="/images/logo-footer.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-slate-50 text-slate-900 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

