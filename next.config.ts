import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: [
              '<https://fermanteknik.com/sitemap.xml>; rel="sitemap"; type="application/xml"',
              '<https://fermanteknik.com/.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
              '<https://fermanteknik.com/.well-known/ai-catalog.json>; rel="ai-catalog"; type="application/json"',
            ].join(", "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
