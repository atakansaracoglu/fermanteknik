export function GET() {
  return Response.json({
    resource: "https://fermanteknik.com",
    authorization_servers: [],
    bearer_methods_supported: [],
    resource_documentation: "https://fermanteknik.com",
    resource_signing_alg_values_supported: [],
    resource_name: "Ferman Teknik",
    resource_description:
      "Antalya klima montajı ve beyaz eşya tamir servisi. Herkese açık, kimlik doğrulama gerektirmez.",
  });
}
