export function GET() {
  return Response.json(
    {
      resource: "https://fermanteknik.com",
      authorization_servers: ["https://fermanteknik.com/.well-known/oauth-authorization-server"],
      scopes_supported: [],
      bearer_methods_supported: ["header"],
      resource_documentation: "https://fermanteknik.com/auth.md",
      resource_name: "Ferman Teknik",
    },
    {
      headers: { "Access-Control-Allow-Origin": "*" },
    },
  );
}
