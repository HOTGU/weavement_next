import React from "react";
import Logo from "../../public/logo.webp";
import { Phone } from "react-feather";
import Image from "next/legacy/image";

const Footer = () => {
  return (
    <div className="default-container ">
      <div className="flex flex-col md:flex-row justify-between items-center py-6 md:py-8 lg:py-10">
        <div className="flex flex-col justify-center items-center sm:block">
          <div className="relative w-16 md:w-20 lg:w-24">
            <Image src={Logo} placeholder="blur" objectFit="contain" />
          </div>
          <div className="text-xs text-center w-fit md:text-sm sm:text-start">
            <div>이메일: contact@weavement.co.kr</div>
            <div>서울시 강서구 양천로 738 한강G트리타워, 711호</div>
            <div>사업자등록번호 313-47-00901</div>
          </div>
        </div>
        <div>
          <div className="flex items-center text-2xl font-bold gap-2">
            <Phone />
            <div>010 . 6803 . 7181</div>
          </div>
          <div className=" text-sm mt-0 sm:mt-3 text-center ">
            영업시간 9:00~18:00 | 토,일 휴무
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400">
        © 2022 WEAVEMENT CO.LTD. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;
