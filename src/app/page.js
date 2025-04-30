import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "./components/RenderModel";
import Navigation from "./components/navigation";
import dynamic from "next/dynamic";
const Astronaut = dynamic(() => import("@/app/components/models/Astronaut"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        size="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-10 w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Astronaut />
        </RenderModel>
      </div>
    </main>
  );
}
