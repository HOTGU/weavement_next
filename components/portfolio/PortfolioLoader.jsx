import React from "react";

const PortfolioLoader = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-10 animate-pulse">
      <div className=" w-full bg-accent-hover aspect-thumb rounded-md"></div>
      <div className=" w-full bg-accent-hover aspect-thumb rounded-md"></div>
    </div>
  );
};

export default PortfolioLoader;
