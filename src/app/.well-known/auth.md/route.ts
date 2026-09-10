export function GET() {
  const body = `# Auth Documentation - Ferman Teknik

## Authentication

This website is fully public. No authentication is required to access any content or endpoint.

## Public Endpoints

- \`/\` — Main website (HTML)
- \`/robots.txt\` — Robots directives
- \`/sitemap.xml\` — XML Sitemap
- \`/.well-known/api-catalog\` — API Catalog (RFC 9727)
- \`/.well-known/mcp/server-card.json\` — MCP Server Card
- \`/.well-known/agent-skills/index.json\` — Agent Skills
- \`/.well-known/ai-catalog.json\` — ARD Manifest
- \`/.well-known/oauth-authorization-server\` — OAuth Discovery
- \`/.well-known/oauth-protected-resource\` — OAuth Protected Resource

## Rate Limiting

No rate limiting is applied.

## Contact

- Phone: +905379288269, +905070721617
- Address: Yıldız Mah. 228 Sok. 2/A Muratpaşa/Antalya
`;

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
