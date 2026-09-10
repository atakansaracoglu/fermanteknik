export function GET() {
  const card = {
    name: "Ferman Teknik",
    description: "Klima montaji, beyaz esya tamiri ve teknik servis - Antalya",
    url: "https://fermanteknik.com",
    contact: {
      phone: ["+905379288269", "+905070721617"],
      address: "Yildiz Mah. 228 Sok. 2/A Muratpasa/Antalya",
    },
    capabilities: {
      tools: false,
      resources: true,
      prompts: false,
    },
    authentication: null,
  };

  return Response.json(card);
}
