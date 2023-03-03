import Portfolio from "@/models/Portfolio";
import nc from "next-connect";
import { getFivePortfolio } from "@/lib/mongoose/portfolio";

const handler = nc();

handler.get(async (req, res) => {
  try {
    const portfolios = await getFivePortfolio();
    return res.status(200).json(portfolios);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "portfolio fetch error" });
  }
});

export default handler;
