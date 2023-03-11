import { unsealData } from "iron-session";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "./config";

export function withSessionRoute(handler) {
  return withIronSessionApiRoute(handler, ironOptions);
}

export async function getServerSession(cookies) {
  const cookie = cookies.get(process.env.COOKIE_NAME);
  if (!cookie) return null;
  const { user } = await unsealData(cookie.value, {
    password: process.env.COOKIE_SECRET,
  });
  return user;
}

export async function onlyUser(req, res, next) {
  if (!req.session.user)
    return res.status(403).json({ message: "No Authenticated" });
  if (!req.session.user.isAdmin)
    return res.status(403) / json({ message: "No Authenticated" });
  next();
}
