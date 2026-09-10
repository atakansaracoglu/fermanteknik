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
      scopes_supported: [],
      agent_auth: {
        register_uri: null,
        supported_identity_types: [],
        supported_credential_types: [],
        note: "No authentication required. All content is publicly accessible.",
      },
    },
    {
      headers: { "Access-Control-Allow-Origin": "*" },
    },
  );
}
