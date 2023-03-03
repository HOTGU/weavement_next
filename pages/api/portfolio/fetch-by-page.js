import Portfolio from "@/models/Portfolio";
import nc from "next-connect";
import { dbConnectMiddleware } from "@/utils/middleware";

const handler = nc();

handler.use(dbConnectMiddleware);

handler.get(async (req, res) => {
  const {
    query: { page = 1 },
  } = req;
  try {
    const PAGE_SIZE = 8;
    let SKIP_SIZE;
    if (!page || !+page || +page < 1) {
      SKIP_SIZE = 0;
    } else {
      SKIP_SIZE = (+page - 1) * PAGE_SIZE;
    }
    const totalPortfolios = await Portfolio.countDocuments();
    const TOTAL_PAGE = Math.ceil(totalPortfolios / PAGE_SIZE);
    const portfolios = await Portfolio.find({})
      .skip(SKIP_SIZE)
      .limit(PAGE_SIZE)
      .sort({ createdAt: -1 });
    return res.status(200).json({ portfolios, totalPage: TOTAL_PAGE });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "portfolio fetch error" });
  }
});

export default handler;
