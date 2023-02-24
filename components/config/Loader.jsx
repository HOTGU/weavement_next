import React from "react";
import { PulseLoader } from "react-spinners";

const Loader = ({ size = 10 }) => {
  return (
    <div className="w-full h-full bg-gray-100 flex justify-center items-center">
      <PulseLoader color="#7B191E" size={size} />
    </div>
  );
};

export default Loader;
