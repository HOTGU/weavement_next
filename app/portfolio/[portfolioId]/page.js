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
  // const res = await fetch(
  //   process.env.NEXT_PUBLIC_VERCEL_APP + `/api/portfolio`
  // );
  // const data = res.json();
  const data = await getAllPortfolios();

  return data.map((portfolio) => ({
    portfolioId: String(portfolio._id),
  }));
}
