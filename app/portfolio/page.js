import PortfolioList from "@/components/portfolio/PortfolioList";
import PortfolioLoader from "@/components/portfolio/PortfolioLoader";
import { Suspense } from "react";

export default async function Home() {
  const portfolios = await getPortfolios();

  return (
    <main className="default-container">
      <div className="flex flex-col justify-center items-center gap-2 md:gap-3 lg:gap-4 pt-6 pb-8 md:pt-8 md:pb-11 lg:pt-10 lg:pb-14">
        <div className="font-bold font-racingSans text-4xl md:text-6xl lg:text-8xl">
          Portfolio
        </div>
        <div className="font-bold text-xs md:text-sm">
          위브먼트는 본질에 집중하여 잘 만든 제품과 전문적인 서비스를
          제공합니다.
        </div>
      </div>
      {portfolios.map((portfolio) => (
        <div key={portfolio._id}>{portfolio.rep.title}</div>
      ))}
      <Suspense fallback={<PortfolioLoader />}>
        <PortfolioList />
      </Suspense>
    </main>
  );
}
