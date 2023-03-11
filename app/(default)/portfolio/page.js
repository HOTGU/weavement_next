import PageTile from "@/components/config/PageTile";
import PortfolioList from "@/components/portfolio/PortfolioList";
import PortfolioLoader from "@/components/portfolio/PortfolioLoader";
import { Suspense } from "react";

// const getPortfolios = async () => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_VERCEL_APP}/api/portfolio`
//   );
//   const json = await res.json();
//   return json;
// };

export default async function Home() {
  return (
    <main className="default-container">
      <PageTile
        title="Portfolio"
        desc="위브먼트는 본질에 집중하여 잘 만든 제품과 전문적인 서비스를
          제공합니다."
      />
      <Suspense fallback={<PortfolioLoader />}>
        <PortfolioList />
      </Suspense>
    </main>
  );
}
