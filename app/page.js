import Image from "next/legacy/image";
import LogoImg from "../public/logo.webp";

export default function Home() {
  return (
    <main className="container">
      <div className="flex flex-col justify-center items-center ">
        <div className="relative w-28 sm:w-40 md:w-52 ">
          <Image src={LogoImg} placeholder="blur" objectFit="cover" />
        </div>
        <div className="">감각적인 제조업체, 위브먼트</div>
      </div>
    </main>
  );
}
