import { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const origin = `https://${req.headers.get("host") || "fermanteknik.com"}`;

  return Response.json(
    {
      resource: origin,
      authorization_servers: [origin],
      scopes_supported: [],
      bearer_methods_supported: ["header"],
      resource_documentation: `${origin}/auth.md`,
      resource_name: "Ferman Teknik",
    },
    {
      headers: { "Access-Control-Allow-Origin": "*" },
    },
  );
}
