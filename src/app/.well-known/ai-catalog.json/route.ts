const DOMAIN = "fermanteknik.com";

export function GET() {
  const ard = {
    specVersion: "1.0.0",
    host: {
      name: "Ferman Teknik",
      url: `https://${DOMAIN}`,
      description: "Klima montajı, beyaz eşya tamiri ve teknik servis - Antalya",
      contact: {
        phone: ["+905379288269", "+905070721617"],
        address: "Yıldız Mah. 228 Sok. 2/A Muratpaşa/Antalya",
      },
    },
    entries: [
      {
        identifier: `urn:air:${DOMAIN}:services:info`,
        displayName: "Ferman Teknik Hizmetler",
        description: "Klima ve beyaz eşya servis hizmetleri bilgisi",
        type: "application/json",
        url: `https://${DOMAIN}/.well-known/agent-skills/index.json`,
        representativeQueries: [
          "Ferman Teknik hangi hizmetleri veriyor?",
          "Antalya'da klima montajı yapan servis",
          "Beyaz eşya tamiri Antalya",
          "Ferman Teknik iletişim bilgileri",
        ],
      },
      {
        identifier: `urn:air:${DOMAIN}:mcp:server`,
        displayName: "Ferman Teknik MCP Server Card",
        description: "MCP server discovery metadata",
        type: "application/json",
        url: `https://${DOMAIN}/.well-known/mcp/server-card.json`,
        representativeQueries: [
          "Ferman Teknik MCP server bilgileri",
          "Ferman Teknik API erişimi",
        ],
      },
      {
        identifier: `urn:air:${DOMAIN}:api:catalog`,
        displayName: "Ferman Teknik API Catalog",
        description: "RFC 9727 API catalog",
        type: "application/linkset+json",
        url: `https://${DOMAIN}/.well-known/api-catalog`,
        representativeQueries: [
          "Ferman Teknik API listesi",
          "Hangi endpointler mevcut?",
        ],
      },
    ],
  };

  return Response.json(ard, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}
