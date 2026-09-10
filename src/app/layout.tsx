import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Ferman Teknik | Antalya Klima & Beyaz Eşya Servisi",
  description:
    "Antalya'da klima montajı, beyaz eşya tamiri, çamaşır makinesi, bulaşık makinesi, buzdolabı, fırın ve ankastre servis hizmeti. 7/24 teknik destek.",
  keywords: [
    "Antalya klima servisi",
    "klima montajı Antalya",
    "beyaz eşya tamiri Antalya",
    "çamaşır makinesi tamiri",
    "bulaşık makinesi servisi",
    "buzdolabı tamiri Antalya",
    "Ferman Teknik",
    "Antalya teknik servis",
    "split klima montajı",
    "klima bakımı Antalya",
  ],
  openGraph: {
    title: "Ferman Teknik | Antalya Klima & Beyaz Eşya Servisi",
    description:
      "Antalya'da profesyonel klima montajı ve beyaz eşya tamir servisi. Tüm markalara hizmet.",
    locale: "tr_TR",
    type: "website",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://fermanteknik.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ferman Teknik",
    description:
      "Antalya'da klima montajı, beyaz eşya tamiri ve teknik servis hizmeti.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Yıldız Mah. 228 Sok. 2/A",
      addressLocality: "Muratpaşa",
      addressRegion: "Antalya",
      addressCountry: "TR",
    },
    telephone: "+905379288269",
    areaServed: "Antalya",
    serviceType: [
      "Klima Montajı",
      "Klima Bakımı",
      "Beyaz Eşya Tamiri",
      "Çamaşır Makinesi Tamiri",
      "Bulaşık Makinesi Tamiri",
      "Buzdolabı Tamiri",
    ],
  };

  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
