export function GET() {
  const card = {
    serverInfo: {
      name: "Ferman Teknik",
      version: "1.0.0",
    },
    description: "Klima montajı, beyaz eşya tamiri ve teknik servis - Antalya",
    url: "https://fermanteknik.com",
    transport: {
      type: "https",
      endpoint: "https://fermanteknik.com",
    },
    capabilities: {
      tools: false,
      resources: true,
      prompts: false,
    },
    contact: {
      phone: ["+905379288269", "+905070721617"],
      address: "Yıldız Mah. 228 Sok. 2/A Muratpaşa/Antalya",
    },
    authentication: null,
  };

  return Response.json(card, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}
