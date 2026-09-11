"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ─── Data ─── */
const SERVICES = [
  {
    icon: "❄️",
    title: "Klima Servisi",
    desc: "Split klima montajı, demontajı, bakım, onarım ve gaz dolumu. Tüm markalara profesyonel hizmet.",
  },
  {
    icon: "👕",
    title: "Çamaşır Makinesi",
    desc: "Çamaşır makinesi arıza tespiti, tamiri, yedek parça değişimi ve bakım hizmeti.",
  },
  {
    icon: "🌀",
    title: "Kurutma Makinesi",
    desc: "Kurutma makinesi montajı, tamiri ve periyodik bakım hizmeti.",
  },
  {
    icon: "🍽️",
    title: "Bulaşık Makinesi",
    desc: "Bulaşık makinesi arıza giderme, parça değişimi ve genel bakım.",
  },
  {
    icon: "🧊",
    title: "Buzdolabı",
    desc: "Buzdolabı ve derin dondurucu tamiri, gaz dolumu, termostat değişimi.",
  },
  {
    icon: "🔥",
    title: "Fırın & Ankastre",
    desc: "Fırın, ocak, davlumbaz ve ankastre set tamiri ve bakımı.",
  },
];

const BRANDS = [
  { name: "Airfel", logo: "/images/brands/airfel.png" },
  { name: "Altus", logo: "/images/brands/altus.png" },
  { name: "Arçelik", logo: "/images/brands/arcelik.png" },
  { name: "Baymak", logo: "/images/brands/baymak.png" },
  { name: "Beko", logo: "/images/brands/beko.png" },
  { name: "Bosch", logo: "/images/brands/bosch.png" },
  { name: "Carrier", logo: "/images/brands/carrier.png" },
  { name: "Daikin", logo: "/images/brands/daikin.png" },
  { name: "DemirDöküm", logo: "/images/brands/demirdokum.png" },
  { name: "E.C.A.", logo: "/images/brands/eca.png" },
  { name: "Flavel", logo: "/images/brands/flavel.png" },
  { name: "Fujitsu", logo: "/images/brands/fujitsu.png" },
  { name: "Gree", logo: "/images/brands/gree.png" },
  { name: "Grundig", logo: "/images/brands/grundig.png" },
  { name: "Hoover", logo: "/images/brands/hoover.png" },
  { name: "LG", logo: "/images/brands/lg.png" },
  { name: "Midea", logo: "/images/brands/midea.png" },
  { name: "Mitsubishi Electric", logo: "/images/brands/mitsubishi-electric.png" },
  { name: "Mitsubishi Heavy", logo: "/images/brands/mitsubishi-heavy.png" },
  { name: "Profilo", logo: "/images/brands/profilo.png" },
  { name: "Regal", logo: "/images/brands/regal.png" },
  { name: "Samsung", logo: "/images/brands/samsung.png" },
  { name: "Seg", logo: "/images/brands/seg.png" },
  { name: "Siemens", logo: "/images/brands/siemens.png" },
  { name: "Toshiba", logo: "/images/brands/toshiba.png" },
  { name: "Vestel", logo: "/images/brands/vestel.png" },
  { name: "Alarko", logo: "/images/brands/alarko.png" },
  { name: "Candy", logo: "/images/brands/candy.png" },
  { name: "Electrolux", logo: "/images/brands/electrolux.png" },
  { name: "Ferroli", logo: "/images/brands/ferroli.png" },
  { name: "Gorenje", logo: "/images/brands/gorenje.png" },
  { name: "Hitachi", logo: "/images/brands/hitachi.png" },
  { name: "Indesit", logo: "/images/brands/indesit.png" },
  { name: "Panasonic", logo: "/images/brands/panasonic.png" },
  { name: "Sharp", logo: "/images/brands/sharp.png" },
  { name: "Silverline", logo: "/images/brands/silverline.png" },
  { name: "Teka", logo: "/images/brands/teka.png" },
  { name: "Vaillant", logo: "/images/brands/vaillant.png" },
  { name: "Viessmann", logo: "/images/brands/viessmann.png" },
  { name: "Whirlpool", logo: "/images/brands/whirlpool.png" },
  { name: "Zanussi", logo: "/images/brands/zanussi.png" },
];

const GALLERY_IMAGES = [
  { src: "/images/work-1.jpg", alt: "Klima montaj plakası takılması" },
  { src: "/images/work-2.jpg", alt: "Bakır boru kaynak işlemi" },
  { src: "/images/work-3.jpg", alt: "Split klima iç ünite montajı" },
  { src: "/images/work-4.jpg", alt: "Klima boru bağlantısı ve kaynak" },
];

const GALLERY_VIDEOS = [
  { src: "/videos/work-1.mp4", poster: "/images/work-1.jpg" },
  { src: "/videos/work-2.mp4", poster: "/images/work-2.jpg" },
  { src: "/videos/work-3.mp4", poster: "/images/work-3.jpg" },
  { src: "/videos/work-4.mp4", poster: "/images/work-4.jpg" },
];

const LANGUAGES = [
  { code: "tr", flag: "🇹🇷", label: "Türkçe" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "ru", flag: "🇷🇺", label: "Русский" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "ar", flag: "🇸🇦", label: "العربية" },
];

const WHYS = [
  { icon: "⚡", title: "Hızlı Servis", desc: "Aynı gün müdahale garantisi" },
  { icon: "🛡️", title: "Garantili İşçilik", desc: "Tüm işlerimize garanti" },
  { icon: "💰", title: "Uygun Fiyat", desc: "Piyasanın en uygun fiyatları" },
  { icon: "🏆", title: "Deneyimli Ekip", desc: "Yılların tecrübesi" },
];

const PHONE_RUZGAR = "05379288269";
const PHONE_ROJHAT = "05070721617";
const WHATSAPP = "905379288269";
const ADDRESS = "Yıldız Mah. 228 Sok. 2/A Muratpaşa/Antalya";

/* ─── Components ─── */

function Header() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("tr");

  useEffect(() => {
    // Read language from googtrans cookie on mount
    const match = document.cookie.match(/googtrans=\/tr\/(\w+)/);
    if (match?.[1]) setActiveLang(match[1]);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const activeFlag = LANGUAGES.find((l) => l.code === activeLang)?.flag ?? "🇹🇷";

  function switchLang(code: string) {
    setLangOpen(false);
    setActiveLang(code);

    if (code === "tr") {
      // Clear all googtrans cookies and reload
      const exp = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
      const host = window.location.hostname;
      document.cookie = `googtrans=; ${exp}; path=/`;
      document.cookie = `googtrans=; ${exp}; path=/; domain=${host}`;
      document.cookie = `googtrans=; ${exp}; path=/; domain=.${host}`;
      window.location.reload();
      return;
    }

    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (combo) {
      combo.value = code;
      combo.dispatchEvent(new Event("change"));
      return;
    }
    // Combo not ready yet, cookie + reload
    const host = window.location.hostname;
    document.cookie = `googtrans=/tr/${code}; path=/`;
    document.cookie = `googtrans=/tr/${code}; path=/; domain=.${host}`;
    window.location.reload();
  }

  const NAV = [
    { href: "#hizmetler", label: "Hizmetler" },
    { href: "#markalar", label: "Markalar" },
    { href: "#galeri", label: "Galeri" },
    { href: "#hakkimizda", label: "Hakkımızda" },
    { href: "#iletisim", label: "İletişim" },
  ];

  const PhoneIcon = () => (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 sm:h-20">
        <a href="#" className="flex items-center shrink-0">
          <Image
            src="/images/logo-header.jpg"
            alt="Ferman Teknik Logo"
            width={160}
            height={48}
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-[var(--color-accent)]"
            >
              {n.label}
            </a>
          ))}

          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-white/90 transition-colors"
            >
              {activeFlag} <span className="text-xs">▼</span>
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border py-2 min-w-[160px]">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => switchLang(l.code)}
                      className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg">{l.flag}</span>
                      {l.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <a
            href="tel:+905379288269"
            className="bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
          >
            Hemen Ara
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white"
          aria-label="Menü"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black z-50 md:hidden transform transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <span className="text-white font-bold text-lg">Menü</span>
          <button onClick={() => setOpen(false)} className="p-2 text-white/70 hover:text-white">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        <div className="p-5 flex flex-col gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-3 px-3 text-white/90 font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              {n.label}
            </a>
          ))}
        </div>

        <div className="px-5 py-4 border-t border-white/10">
          <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Dil</p>
          <div className="flex gap-2">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => { switchLang(l.code); setOpen(false); }}
                className={`text-2xl p-2 rounded-lg transition-colors ${activeLang === l.code ? "bg-white/20" : "hover:bg-white/10"}`}
                title={l.label}
              >
                {l.flag}
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 py-4 border-t border-white/10">
          <p className="text-white/40 text-xs uppercase tracking-wider mb-3">WhatsApp</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/905379288269"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-3 bg-green-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-green-500 transition-colors"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.82-6.3-2.188l-.44-.362-3.091 1.036 1.036-3.091-.362-.44A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                WhatsApp 1
              </a>
              <a href="tel:+905379288269" className="p-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors" aria-label="WhatsApp 1 Ara">
                <PhoneIcon />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/905070721617"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-3 bg-green-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-green-500 transition-colors"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.82-6.3-2.188l-.44-.362-3.091 1.036 1.036-3.091-.362-.44A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                WhatsApp 2
              </a>
              <a href="tel:+905070721617" className="p-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors" aria-label="WhatsApp 2 Ara">
                <PhoneIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ContactButton({ phone, waPhone, label, expanded, onExpand }: { phone: string; waPhone: string; label: string; expanded: boolean; onExpand: () => void }) {
  const WaIcon = () => <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.82-6.3-2.188l-.44-.362-3.091 1.036 1.036-3.091-.362-.44A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>;
  const CallIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>;

  return (
    <div data-contact-btn className="flex gap-2 w-full sm:w-auto overflow-hidden">
      {/* Collapsed label — shrinks to 0 when expanded */}
      <button
        onClick={onExpand}
        style={{ maxWidth: expanded ? 0 : 300, opacity: expanded ? 0 : 1, padding: expanded ? "1rem 0" : undefined }}
        className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-black px-6 py-4 rounded-full text-base font-semibold whitespace-nowrap transition-all duration-300 overflow-hidden"
      >
        <CallIcon />
        <WaIcon />
        {label}
      </button>
      {/* Ara */}
      <a
        href={`tel:+9${phone}`}
        style={{ maxWidth: expanded ? 200 : 0, opacity: expanded ? 1 : 0, padding: expanded ? "1rem 1.25rem" : "1rem 0" }}
        className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 overflow-hidden hover:scale-105"
      >
        <CallIcon /> Ara
      </a>
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${waPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ maxWidth: expanded ? 200 : 0, opacity: expanded ? 1 : 0, padding: expanded ? "1rem 1.25rem" : "1rem 0" }}
        className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 overflow-hidden hover:scale-105"
      >
        <WaIcon /> WhatsApp
      </a>
    </div>
  );
}

function Hero() {
  const [expandedBtn, setExpandedBtn] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expandedBtn === null) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-contact-btn]")) setExpandedBtn(null);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [expandedBtn]);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/work-3.jpg"
      >
        <source src="/videos/work-3.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32 sm:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">7/24 Hizmetinizdeyiz</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Antalya&apos;nın Güvenilir
            <span className="text-[var(--color-accent)]"> Teknik Servis</span> Uzmanı
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
            Klima montajı, beyaz eşya tamiri ve bakım hizmetlerinde profesyonel çözümler. Tüm markalara uzman kadromuzla hizmet veriyoruz.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <ContactButton phone="05379288269" waPhone="905379288269" label="İletişim 1" expanded={expandedBtn === 0} onExpand={() => setExpandedBtn(0)} />
            <ContactButton phone="05070721617" waPhone="905070721617" label="İletişim 2" expanded={expandedBtn === 1} onExpand={() => setExpandedBtn(1)} />
            <a
              href="#hizmetler"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-6 py-4 rounded-full text-base font-semibold transition-all"
            >
              Hizmetlerimiz
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-16 bg-[var(--color-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {WHYS.map((w) => (
            <div key={w.title} className="text-center p-6">
              <span className="text-4xl">{w.icon}</span>
              <h3 className="mt-3 font-bold text-lg text-[var(--color-primary)]">{w.title}</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="hizmetler" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
            Profesyonel Çözümler
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
            Hizmetlerimiz
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Klima ve beyaz eşya alanında uzman kadromuzla tüm ihtiyaçlarınız için yanınızdayız.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-[var(--color-primary)]/20 transition-all duration-300"
            >
              <span className="text-5xl">{s.icon}</span>
              <h3 className="mt-5 text-xl font-bold text-[var(--color-primary)]">{s.title}</h3>
              <p className="mt-3 text-[var(--color-text-muted)] leading-relaxed">{s.desc}</p>
              <a
                href="https://wa.me/905379288269"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors"
              >
                Randevu Al
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandsCarousel() {
  return (
    <section id="markalar" className="py-20 sm:py-28 bg-[var(--color-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
            Güvenilir Markalar
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
            Hizmet Verdiğimiz Markalar
          </h2>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="animate-scroll-left flex gap-6 items-center w-max px-4">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 flex flex-col items-center gap-2 bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-w-[120px]"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lightbox({ src, type, alt, onClose }: { src: string; type: "image" | "video"; alt?: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white z-10">
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <div className="max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        {type === "image" ? (
          <img src={src} alt={alt || ""} className="max-w-full max-h-[90vh] object-contain rounded-lg" />
        ) : (
          <video src={src} controls autoPlay playsInline className="max-w-full max-h-[90vh] rounded-lg" />
        )}
      </div>
    </div>
  );
}

function Gallery() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; type: "image" | "video"; alt?: string } | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  return (
    <section id="galeri" className="py-20 sm:py-28">
      {lightbox && <Lightbox {...lightbox} onClose={() => setLightbox(null)} />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
            İşlerimiz
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
            Galeri
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Profesyonel montaj ve tamir işlerimizden kareler.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {GALLERY_IMAGES.map((img) => (
            <div key={img.src} className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer" onClick={() => setLightbox({ src: img.src, type: "image", alt: img.alt })}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width:768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_VIDEOS.map((vid, i) => (
            <div key={vid.src} className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900 cursor-pointer">
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={vid.src}
                poster={vid.poster}
                playsInline
                muted
                loop
                className="w-full h-full object-cover"
                onClick={() => {
                  videoRefs.current.forEach((ref) => ref?.pause());
                  setActiveVideo(null);
                  setLightbox({ src: vid.src, type: "video" });
                }}
              />
              {activeVideo !== i && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/20"
                  onClick={() => {
                    videoRefs.current.forEach((ref) => ref?.pause());
                    setLightbox({ src: vid.src, type: "video" });
                  }}
                >
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <svg width="24" height="24" fill="var(--color-primary)" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="hakkimizda" className="py-20 sm:py-28 bg-[var(--color-bg-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
              Bizi Tanıyın
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Ferman Teknik</h2>
            <p className="mt-6 text-white/70 leading-relaxed text-lg">
              Antalya&apos;da klima ve beyaz eşya sektöründe yılların deneyimiyle hizmet veren Ferman Teknik, müşteri memnuniyetini ön planda tutan profesyonel ekibiyle her zaman yanınızda.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              Klima montajı, bakımı ve tamirinin yanı sıra çamaşır makinesi, kurutma makinesi, bulaşık makinesi, buzdolabı, fırın ve ankastre cihazlar için de güvenilir servis hizmeti sunuyoruz. Tüm markalarla çalışıyor, orijinal yedek parça kullanıyoruz.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-[var(--color-accent)]">500+</div>
                <div className="text-sm text-white/50 mt-1">Mutlu Müşteri</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-accent)]">40+</div>
                <div className="text-sm text-white/50 mt-1">Marka Desteği</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-accent)]">7/24</div>
                <div className="text-sm text-white/50 mt-1">Teknik Destek</div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/work-3.jpg"
              alt="Ferman Teknik klima montajı"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const DISTRICTS = [
  { name: "Muratpaşa", desc: "Merkez, Lara, Kundu bölgelerinde klima montajı ve beyaz eşya tamiri" },
  { name: "Kepez", desc: "Kepez ve çevresinde split klima montajı, kombi bakımı" },
  { name: "Konyaaltı", desc: "Konyaaltı sahil ve iç bölgelerde klima servisi" },
  { name: "Aksu", desc: "Aksu ve Kundu'da klima montajı ve teknik servis" },
  { name: "Döşemealtı", desc: "Döşemealtı ilçesinde klima ve beyaz eşya servisi" },
  { name: "Serik", desc: "Serik ve Belek bölgesinde klima montaj ve bakım" },
  { name: "Manavgat", desc: "Manavgat ve Side'de klima servisi ve beyaz eşya tamiri" },
  { name: "Alanya", desc: "Alanya merkezde klima montajı ve teknik servis" },
  { name: "Kemer", desc: "Kemer ve çevresinde klima bakımı ve montaj" },
  { name: "Kaş", desc: "Kaş ve Kalkan'da klima ve beyaz eşya servisi" },
  { name: "Kumluca", desc: "Kumluca ilçesinde klima montajı ve tamir" },
  { name: "Finike", desc: "Finike ve çevresinde teknik servis hizmeti" },
];

function ServiceAreas() {
  return (
    <section id="bolgeler" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
            Hizmet Bölgelerimiz
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
            Antalya&apos;nın Tüm İlçelerinde Teknik Servis
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Antalya genelinde klima montajı, klima bakımı, beyaz eşya tamiri ve kombi servisi hizmeti veriyoruz.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {DISTRICTS.map((d) => (
            <div key={d.name} className="p-5 bg-white border border-gray-100 rounded-xl hover:shadow-lg hover:border-[var(--color-primary)]/20 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <svg width="16" height="16" fill="var(--color-primary)" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
                <h3 className="font-bold text-[var(--color-primary)]">{d.name}</h3>
              </div>
              <p className="text-sm text-[var(--color-text-muted)]">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="iletisim" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
            Bize Ulaşın
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
            İletişim
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Hizmetlerimiz hakkında bilgi almak veya randevu oluşturmak için bize ulaşın.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="tel:+905379288269"
            className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-all group"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
              <svg width="28" height="28" fill="none" stroke="var(--color-primary)" strokeWidth="2" className="group-hover:stroke-white transition-colors" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-[var(--color-primary)]">Rüzgar Dorak</h3>
            <p className="mt-2 text-[var(--color-text-muted)]">0537 928 82 69</p>
          </a>

          <a
            href="https://wa.me/905379288269"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-all group"
          >
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
              <svg width="28" height="28" fill="rgb(34,197,94)" viewBox="0 0 24 24" className="group-hover:fill-white transition-colors">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.82-6.3-2.188l-.44-.362-3.091 1.036 1.036-3.091-.362-.44A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-[var(--color-primary)]">Rojhat Kurt</h3>
            <p className="mt-2 text-[var(--color-text-muted)]">0507 072 16 17</p>
          </a>

          <div className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-2xl">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
              <svg width="28" height="28" fill="none" stroke="var(--color-primary)" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-[var(--color-primary)]">Adres</h3>
            <p className="mt-2 text-[var(--color-text-muted)]">Yıldız Mah. 228 Sok. 2/A Muratpaşa/Antalya</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 mb-2">
          <a
            href="https://wa.me/905379288269"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-gray-800 pl-4 pr-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all text-sm font-semibold"
          >
            <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.82-6.3-2.188l-.44-.362-3.091 1.036 1.036-3.091-.362-.44A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
            </span>
            Rüzgar
          </a>
          <a
            href="https://wa.me/905070721617"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-gray-800 pl-4 pr-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all text-sm font-semibold"
          >
            <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.82-6.3-2.188l-.44-.362-3.091 1.036 1.036-3.091-.362-.44A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
            </span>
            Rojhat
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
        aria-label="WhatsApp ile iletişime geçin"
      >
        <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.82-6.3-2.188l-.44-.362-3.091 1.036 1.036-3.091-.362-.44A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Image src="/images/logo-header.jpg" alt="Ferman Teknik" width={180} height={54} className="h-12 w-auto object-contain" />
            <p className="mt-4 text-sm leading-relaxed">
              Antalya&apos;da klima montajı, klima bakımı, beyaz eşya tamiri ve kombi servisi. Muratpaşa, Kepez, Konyaaltı, Aksu, Döşemealtı ve tüm ilçelerde 7/24 teknik servis.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Hizmetler</h4>
            <ul className="space-y-2 text-sm">
              <li>Klima Montajı &amp; Bakımı</li>
              <li>Klima Gaz Dolumu</li>
              <li>Çamaşır Makinesi Tamiri</li>
              <li>Bulaşık Makinesi Servisi</li>
              <li>Buzdolabı Tamiri</li>
              <li>Kombi Bakımı &amp; Tamiri</li>
              <li>Fırın &amp; Ankastre Servisi</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 Rüzgar: 0537 928 82 69</li>
              <li>📞 Rojhat: 0507 072 16 17</li>
              <li>📍 Yıldız Mah. 228 Sok. 2/A Muratpaşa/Antalya</li>
              <li>⏰ 7/24 Hizmet</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          © {new Date().getFullYear()} Ferman Teknik. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <BrandsCarousel />
        <Gallery />
        <About />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
