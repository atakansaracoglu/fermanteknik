import { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const origin = `https://${req.headers.get("host") || "fermanteknik.com"}`;

  return Response.json(
    {
      linkset: [
        {
          anchor: `${origin}/`,
          "service-desc": [
            {
              href: `${origin}/.well-known/ai-catalog.json`,
              type: "application/json",
            },
          ],
        },
      ],
    },
    {
      headers: {
        "Content-Type": "application/linkset+json",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
