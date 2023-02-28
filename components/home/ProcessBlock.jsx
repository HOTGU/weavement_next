import Image from "next/legacy/image";
import React from "react";

const ProcessBlock = ({ img, title, desc }) => {
  return (
    <div className="flex-1 flex lg:flex-col bg-secondary-color px-2 py-4 md:px-4 md:py-4 xl:px-4 xl:py-8 rounded-md">
      <div className=" self-center w-1/4 lg:w-40 lg:pb-14">
        <Image src={img} placeholder="blur" quality={100} />
      </div>
      <div className=" flex flex-col w-3/4 lg:w-full justify-center">
        <div className="text-lg md:text-xl xl:text-2xl font-bold mb-1 md:mb-3 text-accent-color">
          {title}
        </div>
        <div className="text-xs md:text-sm lg:text-xs xl:text-sm font-bold whitespace-pre-line break-keep">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default ProcessBlock;
