import dbConncet from "@/utils/dbConncet";
import nc from "next-connect";

const handler = nc();

handler.use(dbConncet);

handler.post((req, res) => {
  console.log(req.body);
  return res.redirect("/");
});

export default handler;
