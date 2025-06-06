import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "../../components/RenderModel";
import AboutDetails from "@/app/components/about";
import dynamic from "next/dynamic";
const Neptune = dynamic(() => import("@/app/components/models/Neptune"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Image
        priority
        size="100vw"
        src={bg}
        alt="background-image"
        className="-z-10 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Neptune />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
            Tommy Hane
          </h1>
          <p className="font-light text-foreground font-ls translate-y-1/2">
            Stellar Architect of Digital Constellations
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
