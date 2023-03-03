import { getPortfolioById } from "@/lib/mongoose/portfolio";
import nc from "next-connect";

const handler = nc();

handler.get(async (req, res) => {
  const {
    query: { portfolioId },
  } = req;
  try {
    const portfolio = await getPortfolioById(portfolioId);
    return res.status(200).json(portfolio);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "portfolio fetch error" });
  }
});

export default handler;
