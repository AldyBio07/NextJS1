import { NextResponse } from "next/server";

export default function middleware(req) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.rewrite(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/todos/:path*"],
};
