import MainSlide from "@/components/home/MainSlide";
import MainScreen from "../components/home/MainScreen";
import Img1 from "../public/문의.webp";
import Img2 from "../public/상담.webp";
import Img3 from "../public/기획.webp";
import Img4 from "../public/제작.webp";
import Img5 from "../public/운송.webp";
import Image from "next/legacy/image";
import ProcessBlock from "@/components/home/ProcessBlock";

export default function Home() {
  return (
    <main>
      <MainScreen />
      <MainSlide />
      <div className="default-container my-28">
        <div className=" text-center font-bold font-racingSans text-5xl mb-20 text-accent-color">
          Process
        </div>
        <div className="flex ">
          <ProcessBlock
            img={Img1}
            title="프로젝트 의뢰"
            desc="자세한 상담을 위해 문의 내용을 가급적 상세히 작성해주세요."
          />
          <ProcessBlock
            img={Img2}
            title="상담"
            desc="문의 내용을 검토하여 전문 프로젝트 매니저와의 무료 상담이 진행됩니다."
          />
          <ProcessBlock
            img={Img3}
            title="기획 | 디자인 | 설계"
            desc="제작을 위한 사전 단계로 2D디자인, 3D 디자인 혹은 기술 설계 과정이 포함됩니다."
          />
          <ProcessBlock
            img={Img4}
            title="제작"
            desc="기획, 디자인, 설계 내용을 토대로 최적의 소재와 방식을 이용해 컨텐츠를 제작합니다."
          />
          <ProcessBlock
            img={Img5}
            title="운송 | 설치"
            desc="제작된 컨텐츠의 특징, 현장 상황에 알맞게 안전한 운반과 설치가 진행됩니다."
          />
        </div>
      </div>
    </main>
  );
}
