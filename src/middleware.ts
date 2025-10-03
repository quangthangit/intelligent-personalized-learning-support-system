// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

// locales cho next-intl
const locales = ["en", "vi"];

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: "en",
});

// Hàm decode JWT đơn giản (không verify signature, chỉ đọc payload)
function decodeJwt(token: string): { exp?: number } | null {
  try {
    const base64Url = token.split(".")[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(Buffer.from(base64, "base64").toString("utf-8"));
    return payload;
  } catch {
    return null;
  }
}

export function middleware(req: NextRequest) {
  const res = intlMiddleware(req);

  const token = req.cookies.get("accessToken")?.value;
  const { pathname } = req.nextUrl;

  const locale = pathname.split("/")[1];
  const currentLocale = locales.includes(locale) ? locale : "en";

  if (token) {
    const payload = decodeJwt(token);
    const now = Math.floor(Date.now() / 1000);

    if (!payload || (payload.exp && payload.exp < now)) {

      const response = NextResponse.redirect(new URL(`/${currentLocale}`, req.url));
      response.cookies.delete("accessToken");
      response.cookies.delete("refreshToken");
      return response;
    }
  }

  if (!token) {
    const isPublicPage =
      pathname === `/${currentLocale}` ||
      pathname.startsWith(`/${currentLocale}/login`) ||
      pathname.startsWith(`/${currentLocale}/register`);

    if (!isPublicPage) {
      return NextResponse.redirect(new URL(`/${currentLocale}`, req.url));
    }
  }

  if (token) {
    if (
      pathname.startsWith(`/${currentLocale}/login`) ||
      pathname.startsWith(`/${currentLocale}/register`)
    ) {
      return NextResponse.redirect(new URL(`/${currentLocale}/dashboard`, req.url));
    }
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
