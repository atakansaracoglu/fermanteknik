import { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const origin = `https://${req.headers.get("host") || "fermanteknik.com"}`;

  const body = `# Ferman Teknik - Antalya Klima & Beyaz Eşya Servisi
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: CCBot
Allow: /

User-agent: Bytespider
Disallow: /

User-agent: PetalBot
Disallow: /

Sitemap: ${origin}/sitemap.xml

# Content Signals (draft-romm-aipref-contentsignals)
Content-Signal: ai-train=yes, search=yes, ai-input=yes
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
