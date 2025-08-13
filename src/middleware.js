import { NextResponse, NextRequest } from "next/server";

export function middleware(req, res){
    let cookie = req.cookies.get("TheardCraftToken");
    if (cookie && (req.nextUrl.pathname.startsWith('/auth'))) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    if (!cookie && (req.nextUrl.pathname.startsWith('/photoCraft') || req.nextUrl.pathname.startsWith('/photoshop'))) {
        return NextResponse.redirect(new URL('/', req.url));
    }
}

export const config = {
  matcher: [
    '/auth/:path*',
    '/photoCraft/:path*',
    '/photoshop/:path*',
  ],
}