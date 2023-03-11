import { withSessionRoute } from "@/lib/ironSession/withSession";
import nc from "next-connect";

const handler = nc();

handler.get(async (req, res) => {
  req.session.destroy();
  return res.redirect("/");
});

export default withSessionRoute(handler);
