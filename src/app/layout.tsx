import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Ferman Teknik | Antalya Klima Montajı & Beyaz Eşya Tamiri Servisi",
  description:
    "Antalya klima montajı, klima bakımı, beyaz eşya tamiri, çamaşır makinesi, bulaşık makinesi, buzdolabı, kombi servisi. Muratpaşa, Kepez, Konyaaltı, Aksu, Döşemealtı, Lara, Kundu bölgelerinde 7/24 teknik servis. Bosch, Arçelik, Beko, Vestel, Samsung, LG, Siemens, Daikin tüm markalara hizmet.",
  keywords: [
    "Antalya klima servisi",
    "klima montajı Antalya",
    "klima tamiri Antalya",
    "klima bakımı Antalya",
    "split klima montajı Antalya",
    "beyaz eşya tamiri Antalya",
    "çamaşır makinesi tamiri Antalya",
    "bulaşık makinesi tamiri Antalya",
    "buzdolabı tamiri Antalya",
    "kombi servisi Antalya",
    "Muratpaşa klima servisi",
    "Kepez klima montajı",
    "Konyaaltı klima servisi",
    "Aksu klima montajı",
    "Döşemealtı klima servisi",
    "Lara klima montajı",
    "Kundu klima servisi",
    "Antalya Bosch servisi",
    "Antalya Arçelik servisi",
    "Antalya Beko servisi",
    "Antalya Vestel servisi",
    "Antalya Samsung servisi",
    "Antalya Daikin servisi",
    "Antalya teknik servis",
    "klima gaz dolumu Antalya",
    "klima petek temizleme Antalya",
    "Ferman Teknik Antalya",
    "Antalya beyaz eşya servisi",
    "fırın tamiri Antalya",
    "ankastre servisi Antalya",
  ],
  openGraph: {
    title: "Ferman Teknik | Antalya Klima Montajı & Beyaz Eşya Tamiri",
    description:
      "Antalya'nın tüm ilçelerinde profesyonel klima montajı, klima bakımı ve beyaz eşya tamir servisi. Muratpaşa, Kepez, Konyaaltı, Aksu, Döşemealtı. 40+ marka, 7/24 hizmet.",
    locale: "tr_TR",
    type: "website",
    url: "https://fermanteknik.com",
    siteName: "Ferman Teknik",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://fermanteknik.com",
  },
  other: {
    "geo.region": "TR-07",
    "geo.placename": "Antalya",
    "geo.position": "36.8969;30.7133",
    "ICBM": "36.8969, 30.7133",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "Ferman Teknik",
    url: "https://fermanteknik.com",
    logo: "https://fermanteknik.com/images/logo-header.jpg",
    image: "https://fermanteknik.com/images/work-3.jpg",
    description:
      "Antalya'da klima montajı, klima bakımı, beyaz eşya tamiri, kombi servisi. Muratpaşa, Kepez, Konyaaltı, Aksu, Döşemealtı ve tüm Antalya ilçelerinde 7/24 teknik servis hizmeti.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Yıldız Mah. 228 Sok. 2/A",
      addressLocality: "Muratpaşa",
      addressRegion: "Antalya",
      postalCode: "07300",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.8969,
      longitude: 30.7133,
    },
    telephone: "+905379288269",
    contactPoint: [
      { "@type": "ContactPoint", telephone: "+905379288269", contactType: "customer service", availableLanguage: ["Turkish", "English"] },
      { "@type": "ContactPoint", telephone: "+905070721617", contactType: "customer service", availableLanguage: ["Turkish"] },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "City", name: "Antalya" },
      { "@type": "AdministrativeArea", name: "Muratpaşa" },
      { "@type": "AdministrativeArea", name: "Kepez" },
      { "@type": "AdministrativeArea", name: "Konyaaltı" },
      { "@type": "AdministrativeArea", name: "Aksu" },
      { "@type": "AdministrativeArea", name: "Döşemealtı" },
      { "@type": "AdministrativeArea", name: "Serik" },
      { "@type": "AdministrativeArea", name: "Manavgat" },
      { "@type": "AdministrativeArea", name: "Alanya" },
      { "@type": "AdministrativeArea", name: "Kaş" },
      { "@type": "AdministrativeArea", name: "Kemer" },
      { "@type": "AdministrativeArea", name: "Kumluca" },
      { "@type": "AdministrativeArea", name: "Finike" },
      { "@type": "AdministrativeArea", name: "Demre" },
      { "@type": "AdministrativeArea", name: "Gazipaşa" },
    ],
    serviceType: [
      "Klima Montajı",
      "Klima Bakımı",
      "Klima Tamiri",
      "Klima Gaz Dolumu",
      "Klima Petek Temizleme",
      "VRF Klima Sistemi",
      "Beyaz Eşya Tamiri",
      "Çamaşır Makinesi Tamiri",
      "Bulaşık Makinesi Tamiri",
      "Buzdolabı Tamiri",
      "Fırın Tamiri",
      "Ankastre Servisi",
      "Kombi Bakımı",
      "Kombi Tamiri",
    ],
    brand: [
      "Arçelik", "Beko", "Bosch", "Siemens", "Samsung", "LG", "Vestel", "Profilo",
      "Daikin", "Mitsubishi Electric", "Toshiba", "Gree", "Midea", "Carrier",
      "Grundig", "Regal", "Altus", "Seg", "Whirlpool", "Electrolux", "Panasonic",
      "Hitachi", "Sharp", "Indesit", "Gorenje", "Candy", "Zanussi", "Teka",
      "Silverline", "Hoover", "Flavel", "Fujitsu", "Alarko", "Baymak",
      "DemirDöküm", "E.C.A.", "Airfel", "Ferroli", "Vaillant", "Viessmann",
    ],
    priceRange: "₺₺",
    paymentAccepted: "Nakit, Kredi Kartı",
    currenciesAccepted: "TRY",
    sameAs: ["https://wa.me/905379288269"],
  };

  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <div id="google_translate_element" style={{ display: "none" }} />
        <Script id="google-translate-init" strategy="beforeInteractive">
          {`function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'tr',
              includedLanguages: 'en,ru,de,ar',
              autoDisplay: false
            }, 'google_translate_element');
          }`}
        </Script>
        <Script id="webmcp-init" strategy="afterInteractive">
          {`(function(){
            if(!navigator.modelContext)return;
            navigator.modelContext.provideContext({
              name:"Ferman Teknik",
              description:"Klima montaji, beyaz esya tamiri ve teknik servis - Antalya",
              tools:[
                {name:"getContactInfo",description:"Get business contact info",inputSchema:{type:"object",properties:{}},execute:function(){return{phone:["+905379288269","+905070721617"],address:"Yildiz Mah. 228 Sok. 2/A Muratpasa/Antalya",whatsapp:"https://wa.me/905379288269"}}},
                {name:"getServices",description:"List available repair and installation services",inputSchema:{type:"object",properties:{}},execute:function(){return{services:["Klima Montaji","Klima Bakimi","Beyaz Esya Tamiri","Camasir Makinesi Tamiri","Bulasik Makinesi Tamiri","Buzdolabi Tamiri"]}}}
              ]
            });
          })();`}
        </Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
