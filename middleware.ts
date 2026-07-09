import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("lang");
  const lang = raw === "en" ? "en" : "es";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-portfolio-lang", lang);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
