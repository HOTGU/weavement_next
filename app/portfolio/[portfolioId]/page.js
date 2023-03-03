import { getAllPortfolios, getPortfolioById } from "@/lib/mongoose/portfolio";
import React from "react";

const PortfolioDetail = async ({ params: { portfolioId } }) => {
  const portfolio = await getPortfolioById(portfolioId);

  return (
    <div className="default-container">
      {portfolio.columns.map((column) => {
        return <></>;
      })}
    </div>
  );
};

export default PortfolioDetail;

// export const dynamic = "auto",
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = "auto",
//   rumtime = "nodejs",
//   preferredRegin = "auto";

export async function generateStaticParams() {
  const data = await getAllPortfolios();

  return data.map((portfolio) => ({
    portfolioId: String(portfolio._id),
  }));
}
