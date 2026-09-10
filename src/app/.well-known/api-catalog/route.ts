export function GET() {
  const catalog = {
    linkset: [
      {
        anchor: "https://fermanteknik.com/",
        "service-desc": [
          {
            href: "https://fermanteknik.com/.well-known/ai-catalog.json",
            type: "application/json",
          },
        ],
      },
    ],
  };

  return Response.json(catalog, {
    headers: { "Content-Type": "application/linkset+json" },
  });
}
