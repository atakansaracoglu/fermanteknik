import { NextRequest, NextResponse } from "next/server";

const MARKDOWN_CONTENT = `# Ferman Teknik

Klima montaji, beyaz esya tamiri ve teknik servis - Antalya

## Hizmetler
- Klima Montaji
- Klima Bakimi
- Beyaz Esya Tamiri
- Camasir Makinesi Tamiri
- Bulasik Makinesi Tamiri
- Buzdolabi Tamiri

## Markalar
Mitsubishi, Daikin, Samsung, LG, Bosch, Siemens, Arcelik, Beko, Vestel

## Iletisim
- Telefon: +905379288269, +905070721617
- Adres: Yildiz Mah. 228 Sok. 2/A Muratpasa/Antalya
- Web: https://fermanteknik.com
`;

export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  if (
    accept.includes("text/markdown") &&
    !request.nextUrl.pathname.startsWith("/.well-known") &&
    !request.nextUrl.pathname.startsWith("/api") &&
    !request.nextUrl.pathname.endsWith(".xml") &&
    !request.nextUrl.pathname.endsWith(".txt")
  ) {
    return new NextResponse(MARKDOWN_CONTENT, {
      headers: { "Content-Type": "text/markdown; charset=utf-8" },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
