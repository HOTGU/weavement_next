import nc from "next-connect";
import { getPortfoliosByPage } from "@/lib/mongoose/portfolio";

const handler = nc();

handler.get(async (req, res) => {
  const {
    query: { page = 1 },
  } = req;
  try {
    const { portfolios, totalPage } = await getPortfoliosByPage(page);
    return res.status(200).json({ portfolios, totalPage });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "portfolio fetch error" });
  }
});

export default handler;
