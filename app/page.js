import About from "@/components/home/About";
import MainBottom from "@/components/home/MainBottom";
import MainSlide from "@/components/home/MainSlide";
import Process from "@/components/home/Process";
import MainScreen from "../components/home/MainScreen";

export default function Home() {
  return (
    <main>
      <MainScreen />
      <div className=" bg-secondary-color py-8 md:py-12 xl:py-24">
        <div className="max-w-screen lg:default-container aspect-thumb">
          <MainSlide />
        </div>
      </div>
      <div className="default-container my-10 md:my-16 xl:my-28">
        <Process />
      </div>
      <div className="default-container my-10 md:my-16 xl:my-28">
        <About />
      </div>
      <MainBottom />
    </main>
  );
}
