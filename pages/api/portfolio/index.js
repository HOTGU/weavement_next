import dbConncet from "@/utils/dbConncet";
import Portfolio from "@/models/Portfolio";
import nc from "next-connect";
import { dbConnectMiddleware } from "@/utils/middleware";

const handler = nc();

handler.use(dbConnectMiddleware);

handler.get(async (req, res) => {
  try {
    const portfolios = await Portfolio.find({});
    return res.status(200).json(portfolios);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "portfolio fetch error" });
  }
});

export default handler;
