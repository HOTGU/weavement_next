import { getAllPortfolios, getPortfolioById } from "@/lib/mongoose/portfolio";
import Portfolio from "@/models/Portfolio";
import dbConnect from "@/utils/dbConnect";
import React from "react";

const PortfolioDetail = async ({ params: { portfolioId } }) => {
  const portfolio = await getPortfolioById(portfolioId);
  return (
    <div className="default-container ">
      <div className=" columns-3 gap-4  mx-auto my-10">
        {portfolio.columns.map((column, index) => {
          return (
            <div key={index}>
              {column.image && (
                <>
                  <img
                    src={column.image.mediumLocation}
                    className="mb-4 rounded-lg"
                  />
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioDetail;

export async function generateStaticParams() {
  await dbConnect();
  const portfolios = await Portfolio.find({});

  return portfolios.map((portfolio) => ({
    portfolioId: String(portfolio._id),
  }));
}

// export const dynamic = "auto",
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = "auto",
//   rumtime = "nodejs",
//   preferredRegin = "auto";
