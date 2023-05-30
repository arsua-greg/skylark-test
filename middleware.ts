import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/",
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = window.btoa(authValue).split(":");

    if (user === "4dmin" && pwd === "testpwd123") {
      return NextResponse.next();
    }
  }
  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
}
