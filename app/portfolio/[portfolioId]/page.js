import Portfolio from "@/models/Portfolio";
import dbConnect from "@/utils/dbConncet";
import React from "react";

// const getPortfolio =  async(id)=>{
//   const res = await fetch(``)
// };

const PortfolioDetail = ({ params: { portfolioId } }) => {
  console.log(portfolioId);
  return <div>PortfolioDetail</div>;
};

export default PortfolioDetail;

// export async function generateStaticParams() {
//   await dbConnect();
//   const portfolios = await Portfolio.find({});
//   return portfolios.map((portfolio) => {
//     return {
//       portfolioId: String(portfolio._id),
//     };
//   });
// }
