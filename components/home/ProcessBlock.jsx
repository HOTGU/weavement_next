import Image from "next/legacy/image";
import React from "react";

const ProcessBlock = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col py-1 px-4 border-r border-gray-200">
      <div className=" self-center w-3/4 pb-14">
        <Image src={img} placeholder="blur" quality={100} />
      </div>
      <div className=" flex flex-col justify-center">
        <div className=" text-xl font-bold mb-3 text-accent-color">{title}</div>
        <div className=" text-xs font-thin whitespace-pre-line break-keep">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default ProcessBlock;
