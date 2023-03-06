import Portfolio from "@/models/Portfolio";
import dbConnect from "@/utils/dbConnect";

export const getPortfolioById = async (id) => {
  try {
    await dbConnect();
    const portfolio = await Portfolio.findById(id);
    return portfolio;
  } catch (error) {
    return { error };
  }
};

export const getAllPortfolios = async (id) => {
  try {
    await dbConnect();
    const portfolios = await Portfolio.find({});
    return portfolios;
  } catch (error) {
    return { error };
  }
};

export const getFivePortfolio = async () => {
  try {
    await dbConnect();
    const portfolios = await Portfolio.find({})
      .limit(5)
      .sort({ createdAt: -1 });
    const data = portfolios.map((portfolio) => {
      return {
        id: portfolio._id,
        thumb: portfolio.thumb.location.replace("medium", "large"),
      };
    });
    return data;
  } catch (error) {
    return { error };
  }
};

export const getPortfoliosByPage = async (page) => {
  try {
    await dbConnect();
    const PAGE_SIZE = 8;
    let SKIP_SIZE;
    if (!page || !+page || +page < 1) {
      SKIP_SIZE = 0;
    } else {
      SKIP_SIZE = (+page - 1) * PAGE_SIZE;
    }
    const totalPortfolios = await Portfolio.countDocuments();
    const totalPage = Math.ceil(totalPortfolios / PAGE_SIZE);
    const portfolios = await Portfolio.find({})
      .skip(SKIP_SIZE)
      .limit(PAGE_SIZE)
      .sort({ createdAt: -1 });
    return { portfolios, totalPage };
  } catch (error) {
    return { error };
  }
};
