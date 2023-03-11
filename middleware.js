// import { getIronSession } from "iron-session";
import { getIronSession } from "iron-session/edge";
import { NextResponse } from "next/server";
import { ironOptions } from "./lib/ironSession/config";

export async function middleware(req) {
  const res = NextResponse.next();
  const session = await getIronSession(req, res, ironOptions);
  if (!session || !session?.user?.isAdmin) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(`${url}`);
  }
  return res;
}
export const config = {
  matcher: "/admin/:path*",
};
