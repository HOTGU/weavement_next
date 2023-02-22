import React from "react";
import Image from "next/legacy/image";
import LogoImg from "../../public/logo.webp";

function MainScreen() {
  return (
    <div className="flex flex-col justify-center items-center text-accent-color my-14 sm:my-24 lg:my-32">
      <div className="relative w-28 sm:w-40 lg:w-48 ">
        <Image src={LogoImg} placeholder="blur" />
      </div>
      <div className="font-bold text-xs sm:text-lg lg:text-3xl ">
        본질에 충실한 제품과 서비스가 필요하세요?
      </div>
      <h1 className="font-thin text-xs sm:text-md lg:text-xl ">
        감각적인 제조 업체, 위브먼트
      </h1>
      <div className="btn-primary">문의하기</div>
    </div>
  );
}

export default MainScreen;
