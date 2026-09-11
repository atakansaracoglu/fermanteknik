import { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const origin = `https://${req.headers.get("host") || "fermanteknik.com"}`;

  return Response.json(
    {
      issuer: origin,
      authorization_endpoint: origin,
      token_endpoint: origin,
      response_types_supported: [],
      grant_types_supported: [],
      scopes_supported: ["read"],
      agent_auth: {
        skill: origin + "/auth.md",
        register_uri: origin + "/auth.md",
        supported_identity_types: ["anonymous"],
        supported_credential_types: ["none"],
        claim_uri: origin + "/auth.md",
        anonymous: {
          credential_types_supported: ["none"],
          claim_uri: origin + "/auth.md",
        },
        note: "No authentication required. All content is publicly accessible.",
      },
    },
    {
      headers: { "Access-Control-Allow-Origin": "*" },
    },
  );
}
