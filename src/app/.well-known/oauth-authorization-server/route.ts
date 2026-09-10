export function GET() {
  // No authentication required - public service site
  return Response.json(
    {
      issuer: "https://fermanteknik.com",
      authorization_endpoint: null,
      token_endpoint: null,
      response_types_supported: [],
      grant_types_supported: [],
      scopes_supported: [],
      note: "This site does not require authentication. All content is publicly accessible.",
    },
    { status: 200 },
  );
}
