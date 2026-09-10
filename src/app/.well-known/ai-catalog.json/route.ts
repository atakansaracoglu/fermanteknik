export function GET() {
  const ard = {
    schema_version: "1.0",
    name: "Ferman Teknik",
    description: "Klima montaji, beyaz esya tamiri ve teknik servis - Antalya",
    url: "https://fermanteknik.com",
    logo: "https://fermanteknik.com/favicon.ico",
    contact: {
      phone: ["+905379288269", "+905070721617"],
      address: "Yildiz Mah. 228 Sok. 2/A Muratpasa/Antalya",
      area_served: "Antalya",
    },
    services: [
      { name: "Klima Montaji", description: "Split klima montaj ve kurulum" },
      { name: "Klima Bakimi", description: "Klima bakim ve temizlik" },
      { name: "Beyaz Esya Tamiri", description: "Tum marka beyaz esya tamir" },
      { name: "Camasir Makinesi Tamiri" },
      { name: "Bulasik Makinesi Tamiri" },
      { name: "Buzdolabi Tamiri" },
    ],
    brands: [
      "Mitsubishi", "Daikin", "Samsung", "LG", "Bosch",
      "Siemens", "Arcelik", "Beko", "Vestel",
    ],
    language: "tr",
    endpoints: [
      { path: "/", description: "Ana sayfa" },
      { path: "/sitemap.xml", description: "XML Sitemap" },
      { path: "/.well-known/api-catalog", description: "RFC 9727 API Catalog" },
      { path: "/.well-known/agent-skills/index.json", description: "Agent Skills" },
    ],
    supports_markdown: true,
  };

  return Response.json(ard);
}
