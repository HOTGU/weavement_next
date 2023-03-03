import Portfolio from "@/models/Portfolio";
import nc from "next-connect";
import { dbConnectMiddleware } from "@/utils/middleware";

const handler = nc();

handler.use(dbConnectMiddleware);

handler.get(async (req, res) => {
  try {
    const portfolios = await Portfolio.find({})
      .sort({ createdAt: -1 })
      .limit(5);
    const data = portfolios.map((portfolio) => {
      return {
        id: portfolio._id,
        thumb: portfolio.thumb.location.replace("medium", "large"),
      };
    });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "portfolio fetch error" });
  }
});

export default handler;
