import PortfolioList from "@/components/portfolio/PortfolioList";
import PortfolioLoader from "@/components/portfolio/PortfolioLoader";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="default-container">
      <div className="flex flex-col justify-center items-center gap-4 pt-10 pb-14">
        <div className="font-bold font-racingSans text-2xl md:text-4xl lg:text-8xl">
          Portfolio
        </div>
        <div className="font-bold text-sm">
          위브먼트는 본질에 집중하여 잘 만든 제품과 전문적인 서비스를
          제공합니다.
        </div>
      </div>
      <Suspense fallback={<PortfolioLoader />}>
        <PortfolioList />
      </Suspense>
    </main>
  );
}
