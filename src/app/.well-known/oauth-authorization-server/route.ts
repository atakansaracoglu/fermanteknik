export function GET() {
  return Response.json(
    {
      issuer: "https://fermanteknik.com",
      authorization_endpoint: "https://fermanteknik.com",
      token_endpoint: "https://fermanteknik.com",
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
