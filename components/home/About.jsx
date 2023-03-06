import React from "react";
import Image from "next/legacy/image";

import AboutImg1 from "../../public/about1.webp";
import AboutImg2 from "../../public/about2.webp";
import AboutImg3 from "../../public/about3.webp";

const About = () => {
  return (
    <>
      <div className="font-head text-accent-color">About Us</div>
      <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center mb-4 md:mb-6 lg:mb-8">
        <div className="relative w-3/4 md:w-5/12">
          <Image
            src={AboutImg1}
            placeholder="blur"
            sizes="(max-width:450px)100vw,(max-width:768px) 40vw, 40vw"
          />
        </div>
        <div className="w-full md:w-7/12 text-xs md:text-base lg:text-xl xl:text-2xl text-center md:text-start">
          인류의 삶을 바꾼 산업혁명은 면직물 공업의 자동화로 시작되었습니다.
          <br />
          예술과 제조가 융합하는 최초의 행위, ‘Weave.’
          <br /> <strong>위브먼트도 이 단어에서 시작합니다.</strong>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-center lg:justify-start items-center mb-4 md:mb-6 lg:mb-8">
        <div className="relative w-3/4 md:w-5/12">
          <Image src={AboutImg2} placeholder="blur" />
        </div>
        <div className="w-full md:w-7/12 text-xs md:text-base lg:text-xl xl:text-2xl text-center md:text-right">
          오늘날 인간의 미적 창조 활동이라 일컬어지는 예술(art)은
          <br /> ‘기술’ 을 의미하는 라틴어(ars)와 그리스어(techne)에서
          유래하기에
          <br />
          <strong>
            위브먼트가 정의하는 예술은 표현하는 매체이자,
            <br /> 실행하는 기술과 행위이기도 합니다.
          </strong>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center mb-4 md:mb-6 lg:mb-8">
        <div className="relative w-3/4 md:w-5/12">
          <Image src={AboutImg3} placeholder="blur" />
        </div>
        <div className="w-full md:w-7/12 text-xs md:text-base lg:text-xl xl:text-2xl text-center md:text-start">
          우리(We)는 고객이 나아갈 길(Ave.)을 제시하고
          <br /> 예술적인 결과(Ment)를 만드는
          <strong> 위브먼트 WEAVEMENT</strong> 입니다.
        </div>
      </div>
    </>
  );
};

export default About;
