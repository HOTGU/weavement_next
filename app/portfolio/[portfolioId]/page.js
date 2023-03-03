import { getPortfolioById } from "@/lib/mongoose/portfolio";
import React from "react";

const PortfolioDetail = async ({ params: { portfolioId } }) => {
  const portfolio = await getPortfolioById(portfolioId);

  console.log(portfolio);

  return (
    <div className="default-container">
      {portfolio.columns.map((column) => {
        return <></>;
      })}
    </div>
  );
};

export default PortfolioDetail;

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  rumtime = "nodejs",
  preferredRegin = "auto";
