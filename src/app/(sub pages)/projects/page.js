import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "../../components/projects";
import { projectsData } from "../../data";
import RenderModel from "../../components/RenderModel";
import dynamic from "next/dynamic";
const Falcon = dynamic(() => import("../../components/models/Falcon"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-10 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
        priority
        size="100vw"
      />

      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-20 h-screen">
        <RenderModel>
          <Falcon />
        </RenderModel>
      </div>
    </>
  );
}
