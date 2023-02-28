import About from "@/components/home/About";
import MainSlide from "@/components/home/MainSlide";
import Process from "@/components/home/Process";
import MainScreen from "../components/home/MainScreen";

export default function Home() {
  return (
    <main>
      <MainScreen />
      <div className="max-w-screen lg:default-container aspect-thumb">
        <MainSlide />
      </div>
      <div className="default-container my-10 md:my-16 xl:my-28">
        <About />
      </div>
      <div className="default-container my-10 md:my-16 xl:my-28">
        <Process />
      </div>
      <div className="py-12 md:py-16 lg:py-24 bg-accent-color">
        <div className="default-container text-white flex flex-col items-end lg:gap-2">
          <div className=" text-sm md:text-xl lg:text-2xl">
            감각적인 제조, 위브먼트
          </div>
          <div className=" font-racingSans text-4xl md:text-6xl lg:text-7xl">
            WEAVEMENT
          </div>
          <div className="btn btn-secondary w-fit">문의하기</div>
        </div>
      </div>
    </main>
  );
}
