import { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const origin = `https://${req.headers.get("host") || "fermanteknik.com"}`;

  return Response.json(
    {
      serverInfo: {
        name: "Ferman Teknik",
        version: "1.0.0",
      },
      description: "Klima montajı, beyaz eşya tamiri ve teknik servis - Antalya",
      url: origin,
      transport: {
        type: "https",
        endpoint: origin,
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
    },
    {
      headers: { "Access-Control-Allow-Origin": "*" },
    },
  );
}
