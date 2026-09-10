export function GET() {
  const body = `# Auth.md

> This file follows the [Auth.md](https://github.com/workos/auth.md) specification.

## Overview

**Ferman Teknik** is a fully public website. No authentication is required.

## Agent Authentication

- **Authentication Required**: No
- **Agent Registration**: Not required
- **API Keys**: Not required

## OAuth / OIDC

This site does not use OAuth or OIDC. All endpoints are publicly accessible.

- **OAuth Protected Resource Metadata**: \`/.well-known/oauth-protected-resource\`
- **OAuth Authorization Server Metadata**: \`/.well-known/oauth-authorization-server\`

## Endpoints

All endpoints are public and require no credentials:

| Endpoint | Description |
|---|---|
| \`/\` | Main website (HTML) |
| \`/auth.md\` | This file |
| \`/robots.txt\` | Robots directives |
| \`/sitemap.xml\` | XML Sitemap |
| \`/.well-known/api-catalog\` | API Catalog (RFC 9727) |
| \`/.well-known/mcp/server-card.json\` | MCP Server Card |
| \`/.well-known/agent-skills/index.json\` | Agent Skills Index |
| \`/.well-known/ai-catalog.json\` | ARD Manifest |
| \`/.well-known/oauth-authorization-server\` | OAuth Discovery |
| \`/.well-known/oauth-protected-resource\` | OAuth Protected Resource |

## Rate Limiting

No rate limiting is applied.

## Contact

- Phone: +905379288269, +905070721617
- Address: Yıldız Mah. 228 Sok. 2/A Muratpaşa/Antalya
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
