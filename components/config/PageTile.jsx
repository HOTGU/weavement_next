import React from "react";

const PageTile = ({ title, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-3 lg:gap-4 pt-6 pb-8 md:pt-8 md:pb-11 lg:pt-10 lg:pb-14">
      <div className="font-bold font-racingSans text-4xl md:text-6xl lg:text-8xl">
        {title}
      </div>
      <div className="font-bold text-xs md:text-sm whitespace-pre-line text-center w-full">
        {desc}
      </div>
    </div>
  );
};

export default PageTile;
