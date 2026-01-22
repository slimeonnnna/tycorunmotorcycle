import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const KNOWN_SCANNERS_REGEX = new RegExp(
  [
    "masscan",
    "nmap",
    "nikto",
    "sqlmap",
    "zgrab",
    "dirbuster",
    "gobuster",
    "jndi",
    "ldap",
  ].join("|"),
  "i",
);

const BLOCKED_PATHS_REGEX = new RegExp(
  [
    "^/wp-(admin|login|content|includes)",
    "^/xmlrpc\\.php",
    "^/\\.env",
    "^/\\.git",
    "^/phpmyadmin",
    "^/actuator",
    "^/\\.well-known/appspecific/com\\.chrome\\.devtools\\.json",
    "\\.sql$",
    "\\.bak$",
  ].join("|"),
  "i",
);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ua = request.headers.get("user-agent") || "";

  if (BLOCKED_PATHS_REGEX.test(pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  if (ua && KNOWN_SCANNERS_REGEX.test(ua)) {
    return new NextResponse(null, { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
